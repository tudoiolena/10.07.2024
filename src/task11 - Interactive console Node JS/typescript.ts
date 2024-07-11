import * as http from "http";
const url = require("node:url");
const path = require("node:path");
const { spawn } = require("node:child_process");
const fsPromises = require("node:fs/promises");

const LS = "ls";
const CURR_DIR: string = __dirname;
const DATA_DIR: string = path.resolve(CURR_DIR, "data");
const FORBIDDEN_OPTIONS: string[] = ["&&", ";", "|", "`", ",", "'", '"'];
const ALLOWED_SHORT_OPTIONS: string =
  "aAbBcCdDfFgGhHiIlLmMnNoOpPqQrRsStTuUvVwWxX1Z";
const ALLOWED_LONG_OPTIONS: string[] = [
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

function createHTML(content: string = "", error: string = ""): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Interactive Console</title>
        <style>
          *,
          html {
              font-family: "Courier New", Helvetica, sans-serif;
              font-size: large;
          }

          form {
              margin-left: 25px;
              margin-top: 25px;
          }

          input {
              border: 1px solid black;
          }

          button {
              padding: 0 5px;
          }

          p {
              color: red;
          }
      </style>
    </head>
    <body>
        <form action="/result" method="GET">
            <input type="text" name="command" placeholder="Enter ls command" required>
            <button type="submit">Enter</button>
        </form>
        ${error ? `<p>${error}</p>` : ""}
        <pre>${content}</pre>
    </body>
    </html>
  `;
}

function validateCommand(command: string): boolean {
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

async function checkIfPathExist(dirPath: string): Promise<boolean> {
  try {
    await fsPromises.access(dirPath);
    return true;
  } catch {
    return false;
  }
}

async function checkIfDirectory(dirPath: string): Promise<boolean> {
  const stat = await fsPromises.stat(dirPath);
  return stat.isDirectory();
}

async function performLsCommand(command: string, res: http.ServerResponse) {
  const commandOptions = command.split(" ").slice(1);
  const dirPath =
    commandOptions.find((option) => !option.startsWith("-")) || DATA_DIR;

  if (!(await checkIfPathExist(dirPath))) {
    res.writeHead(400);
    return res.end(createHTML("", "Dir or file does not exist"));
  }

  if (!(await checkIfDirectory(dirPath))) {
    res.writeHead(400);
    return res.end(createHTML("", "Invalid path or not a directory"));
  }

  const ls = spawn(LS, commandOptions);

  ls.stdout.on("data", (data) => {
    res.end(createHTML(data));
  });

  ls.stderr.on("data", (err) => {
    res.end(createHTML("", err));
  });
}

const requestListener = (
  req: http.IncomingMessage,
  res: http.ServerResponse
) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname, query } = parsedUrl;

  if (req.method === "GET" && pathname === "/") {
    res.writeHead(200);
    res.end(createHTML());
  } else if (req.method === "GET" && pathname === "/result") {
    const command = query.command || "";

    if (!validateCommand(command)) {
      res.writeHead(400);
      res.end(
        createHTML(
          "",
          'Invalid command. Only "ls" commands are allowed and no special characters.'
        )
      );
      return;
    }

    performLsCommand(command, res);
  } else {
    res.writeHead(404);
    res.end("404 Not Found");
  }
};

const server = http.createServer(requestListener);

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
