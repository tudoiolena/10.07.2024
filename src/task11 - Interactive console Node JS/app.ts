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

async function createHTML(
  content: string = "",
  error?: string
): Promise<string> {
  let template = await fsPromises.readFile(
    path.resolve(CURR_DIR, "index.html"),
    "utf-8"
  );

  if (error) {
    template = template.replace("<!-- error -->", `<p>${error}</p>`);
  }

  if (content) {
    template = template.replace("<!-- content -->", `<pre>${content}</pre>`);
  }

  return template;
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

async function performLsCommand(command: string): Promise<string> {
  return new Promise(async (resolve, reject) => {
    const commandOptions = command.split(" ").slice(1);
    const dirPath =
      commandOptions.find((option) => !option.startsWith("-")) || DATA_DIR;

    if (!(await checkIfPathExist(dirPath))) {
      return reject(new Error("Dir or file does not exist"));
    }

    if (!(await checkIfDirectory(dirPath))) {
      return reject(new Error("Invalid path or not a directory"));
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

async function handleLsCommand(command: string): Promise<string> {
  try {
    const result = await performLsCommand(command);
    return await createHTML(result);
  } catch (error) {
    return await createHTML("", error.message);
  }
}

function response(
  res: http.ServerResponse,
  html: string = "",
  code: number = 200
): void {
  res.writeHead(code);
  res.end(html);
}

function successResponse(res: http.ServerResponse, html: string = ""): void {
  return response(res, html);
}

function errResponse(
  res: http.ServerResponse,
  html: string = "",
  code: number = 500
) {
  return response(res, html, code);
}

const requestListener = async (
  req: http.IncomingMessage,
  res: http.ServerResponse
): Promise<string> => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname, query } = parsedUrl;

  if (req.method === "GET" && pathname === "/") {
    return await createHTML();
  } else if (req.method === "GET" && pathname === "/result") {
    const command = query.command || "";

    if (!validateCommand(command)) {
      const html = await createHTML(
        "",
        'Invalid command. Only "ls" commands are allowed and no special characters.'
      );
      throw new HTTPError(html, 400);
    }

    return await handleLsCommand(command);
  } else {
    throw new HTTPError("404 Not Found", 404);
  }
};

type Response = (
  req: http.IncomingMessage,
  res: http.ServerResponse
) => Promise<void>;

type Request = (
  req: http.IncomingMessage,
  res: http.ServerResponse
) => Promise<string>;

function wrapper(requestHandler: Request): Response {
  return async function (req, res) {
    try {
      const html = await requestHandler(req, res);
      successResponse(res, html);
    } catch (err) {
      if (err instanceof HTTPError) {
        errResponse(res, err.message, err.status);
      } else {
        errResponse(res, err.message || "unknown", 500);
      }
    }
  };
}

const server = http.createServer(wrapper(requestListener));

server.listen(3001, () => {
  console.log("Server is listening on port 3001");
});

class HTTPError extends Error {
  status = 500;

  constructor(message = "", status) {
    super(message);
    this.status = status || this.status;
  }
}
