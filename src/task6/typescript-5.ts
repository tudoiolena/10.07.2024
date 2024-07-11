// Написата 2 глобальні мідлвари за допомгою Express для логування інформації про запити.
// Перша middleware виводить у консоль метод запиту та URL-адресу
// Друга middleware виводить у консоль поточну дату та час у форматі UTC
import { Request, Response, NextFunction } from "express";
const express = require("express");
const app = express();

app.use((req: Request, res: Response, next: NextFunction): void => {
  console.log(req.method, req.url);
  next();
});

app.use((req, res, next) => {
  console.log(new Date().toUTCString());
  next();
});

app.listen(8000);
