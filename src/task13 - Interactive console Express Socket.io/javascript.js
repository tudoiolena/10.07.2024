const http = require("node:http");
const url = require("node:url");
const path = require("node:path");
const { spawn } = require("node:child_process");
const fsPromises = require("node:fs/promises");
const { Server } = require("socket.io");
const express = require("express");

const LS = "ls";
const CURR_DIR = __dirname;
const DATA_DIR = path.resolve(CURR_DIR, "data");
const FORBIDDEN_OPTIONS = ["&&", ";", "|", "`", ",", "'", '"'];
const ALLOWED_SHORT_OPTIONS = "aAbBcCdDfFgGhHiIlLmMnNoOpPqQrRsStTuUvVwWxX1Z";
const ALLOWED_LONG_OPTIONS = [
  "--all",
  "--almost-all",
  "--author",
  "--escape",
  "--block-size",
  "--ignore-backups",
  "--directory",
  "--dired",
  "--classify",
  "--file-type",
  "--format",
  "--full-time",
  "--group-directories-first",
  "--no-group",
  "--human-readable",
  "--si",
  "--dereference-command-line",
  "--dereference-command-line-symlink-to-dir",
  "--hide",
  "--hyperlink",
  "--indicator-style",
  "--inode",
  "--ignore",
  "--kibibytes",
  "--literal",
  "--hide-control-chars",
  "--show-control-chars",
  "--quote-name",
  "--quoting-style",
  "--reverse",
  "--recursive",
  "--size",
  "--sort",
  "--time",
  "--time-style",
  "--tabsize",
  "--width",
  "--context",
  "--zero",
  "--help",
  "--version",
];

function validateCommand(command) {
  const parts = command.trim().split(" ");

  if (parts[0] !== LS) {
    return false;
  }

  for (let i = 1; i < parts.length; i++) {
    for (const forbidden of FORBIDDEN_OPTIONS) {
      if (parts[i].includes(forbidden)) {
        return false;
      }
    }

    if (parts[i].startsWith("--")) {
      if (!ALLOWED_LONG_OPTIONS.includes(parts[i])) {
        return false;
      }
    } else if (parts[i].startsWith("-")) {
      for (let j = 1; j < parts[i].length; j++) {
        if (!ALLOWED_SHORT_OPTIONS.includes(parts[i][j])) {
          return false;
        }
      }
    } else {
      continue;
    }
  }

  return true;
}

async function checkIfPathExist(dirPath) {
  try {
    await fsPromises.access(dirPath);
    return true;
  } catch {
    return false;
  }
}

async function checkIfDirectory(dirPath) {
  const stat = await fsPromises.stat(dirPath);
  return stat.isDirectory();
}

async function performLsCommand(command) {
  return new Promise(async (resolve, reject) => {
    const commandOptions = command.split(" ").slice(1);
    const dirPath =
      commandOptions.find((option) => !option.startsWith("-")) || DATA_DIR;

    if (!(await checkIfPathExist(dirPath))) {
      return reject(new Error("Dir or file does not exist", 404));
    }

    if (!(await checkIfDirectory(dirPath))) {
      return reject(new Error("Invalid path or not a directory", 404));
    }

    const ls = spawn(LS, commandOptions);

    let dataRes = "";
    let errRes = "";

    ls.stdout.on("data", (data) => {
      dataRes += data;
    });

    ls.stderr.on("data", (err) => {
      errRes += err;
    });

    ls.on("exit", () => {
      if (errRes) {
        reject(errRes);
      } else {
        resolve(dataRes);
      }
    });
  });
}

function response(socket, event, data) {
  socket.emit(event, data);
}

function successResponse(socket, data) {
  return response(socket, "content", data);
}

function errorResponse(socket, data) {
  return response(socket, "error", data);
}

function socketWrapper(handlerFunction) {
  return function (socket) {
    socket.on("message", async (data) => {
      try {
        const response = await handlerFunction(socket, data);
        successResponse(socket, response);
      } catch (err) {
        if (err instanceof SocketError) {
          errorResponse(socket, err.message);
        } else {
          errorResponse(socket, "unknown");
        }
      }
    });
  };
}

const app = express();
const server = http.createServer(app);

app.get("/", (req, res) => {
  const filePath = path.resolve(
    __dirname,
    "client",
    "express-interactive-console.html"
  );
  fsPromises
    .readFile(filePath, "utf-8")
    .then((content) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content);
    })
    .catch((err) => {
      res.status(500).end("Internal Server Error: " + err.message);
    });
});

app.use(express.static(path.join(__dirname, "client")));

const io = new Server(server);

io.on("connection", (socket) => {
  handleLsCommand(socket);
});

const handleLsCommand = socketWrapper(async (socket, command) => {
  if (!validateCommand(command)) {
    throw new SocketError(
      'Invalid command. Only "ls" commands are allowed and no special characters.',
      400
    );
  }
  return await performLsCommand(command);
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

class SocketError extends Error {
  status = 500;

  constructor(message = "", status) {
    super(message);
    this.status = status || this.status;
  }
}
