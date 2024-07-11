//Як відобразити HTML заголовок h1 з вмістом "Hello World!" за допомогою Express?
import { Request, Response } from "express";

const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req: Request, res: Response): void => {
  const htmlContent = `<html><body><h1>Hello World!</h1></body></html>`;
  res.send(htmlContent);
});

app.listen(port, () => {
  console.log("Server is running on port ${port}");
});
