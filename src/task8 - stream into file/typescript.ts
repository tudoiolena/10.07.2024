// Записати вміст змінної sysInfo за допомогою стріма в файл
// const proess = require("node:process");
// const sysInfo = JSON.stringify(proess);

const proess = require("node:process");

const fs = require("node:fs");
const path = require("node:path");
const stream = require("node:stream");

const CURR_DIR = __dirname;
const DATA_DIR = path.resolve(CURR_DIR, "data");

const sysInfo = JSON.stringify(proess);

const sysInfoCopyFileName = "copied-sysinfo.json";
const sysInfoCopyFile = path.resolve(DATA_DIR, sysInfoCopyFileName);

const readableStream = new stream.Readable({
  read(size) {
    return sysInfo;
  },
});

const writableStream = fs.createWriteStream(sysInfoCopyFile);

writableStream.on("error", (err: Error): void => {
  console.error("Error writing to file:", err);
});

readableStream.pipe(writableStream);
