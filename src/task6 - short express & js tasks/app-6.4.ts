//Створити простий HTTP-сервер за допомогою Node.js.
//Якщо URL кореневий, сервер відправляє HTTP - відповідь із HTML - кодом, що містить заголовок "Node JS Server".
const http = require("http");
import { Request, Response } from "express";

const server = http.createServer((req: Request, res: Response): void => {
  const url = req.url;
  if (url === "/") {
    res.end("<html><body><h2>Node JS Server</h2></body></html>");
  }
});

server.listen(8000, () => {
  console.log("Server is running on port 8000");
});
