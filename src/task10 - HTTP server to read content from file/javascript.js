// Зробити HTTP-сервер, який буде читати контент файла із папки data по вказаному шляху. Враховувати вкладеність папок.
// Приклад:
// localhost:3000/sysInfo.json повинен видавати вміст файлу sysInfo.json
// localhost:3000/test/test.txt повинен видавати вміст файлу test.txt

const http = require("node:http");
const url = require("node:url");
const path = require("node:path");
const fs = require("node:fs");
const fsPromises = require("node:fs/promises");

const host = "0.0.0.0";
const port = 3000;
const CURR_DIR = __dirname;
const DATA_DIR = path.resolve(CURR_DIR, "data");

async function checkIfPathExist(filePath) {
  try {
    await fsPromises.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function checkIfDirectory(filePath) {
  const stat = await fsPromises.stat(filePath);
  return stat.isDirectory();
}

const requestListener = async function (req, res) {
  const { pathname } = url.parse(req.url, false);
  const filePath = path.join(DATA_DIR, pathname);

  if (await checkIfDirectory(filePath)) {
    res.writeHead(400);
    return res.end("Invalid path or not a file");
  }

  if (!(await checkIfPathExist(filePath))) {
    res.writeHead(400);
    return res.end("File does not exist");
  }

  const readableStream = fs.createReadStream(filePath);
  res.writeHead(200);
  readableStream.pipe(res);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
