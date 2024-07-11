// Написати 3 НЕ глобальні мідлвари за допомгою Express та застосувати їх до запитів.
// Перша middleware виводить у консоль заголовки запиту
// Друга middleware виводить у консоль метод запиту
// Ці дві мідлвари застосувати до запиту Get '/'
// Третя middleware виводить у консоль статус відповіді
// Цю мідлвару застосувати до запиту Post '/user'

import { Request, Response, NextFunction } from "express";

const express = require("express");
const app = express();

function logRequestHeader(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  console.log(req.headers);
  next();
}

function logRequestMethod(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  console.log(req.method);
  next();
}

function logStatusCode(req: Request, res: Response, next: NextFunction): void {
  console.log(res.statusCode);
  next();
}

app.get(
  "/",
  logRequestMethod,
  logRequestHeader,
  (req: Request, res: Response): void => {
    res.send("Hello from /");
  }
);

app.post("/user", logStatusCode, (req: Request, res: Response): void => {
  res.send("Hello from /user");
});

app.listen(8000);
