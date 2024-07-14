//Описати маршрут, який обробляє запит GET-запит за допомогою Express

// Запит:
// Метод: GET
// URL: http://localhost:8000/users/123

// Відповідь:
// Статус: 200 OK
// Тіло: User id: 123
import { Request, Response } from "express";

const express = require("express");
const app = express();
const port = 8000;

app.get("users/:userId", (req: Request, res: Response): void => {
  const userId = req.params.userId;
  res.status(200).send(`User id: ${userId}`);
});
