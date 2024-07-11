// задание 1
// - создать сервер на экспрессе который принимает загрузку картинки и
//   возвращает ссылку для отображения ее на странице
// - картинке задать рандомное имя чтоб названия не затирали друг друга
// - tip: можно использовать formData и multer (по желанию)
import { NextFunction, Request, Response } from "express";
import multer = require("multer");
const express = require("express");
const { v4: uuidv4 } = require("uuid");

const port = 8000;
const app = express();
const allowedMimeTypes = ["image/jpeg", "image/png"];
const FORM_DATA_KEY = "image-file";

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req: Request, file: Express.Multer.File, cb) => {
    cb(null, uuidv4() + file.originalname);
  },
});

const upload = multer({
  storage,
  fileFilter: (
    req: Request,
    file: Express.Multer.File,
    cb: multer.FileFilterCallback
  ) => {
    if (!allowedMimeTypes.includes(file.mimetype)) {
      cb(new Error("Invalid file type. Only JPEG and PNG images are allowed."));
    } else {
      cb(null, true);
    }
  },
});

app.post("/", (req: Request, res: Response, next: NextFunction): void => {
  upload.single(FORM_DATA_KEY)(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return next(new Error("A Multer error occurred when uploading."));
    } else if (err) {
      return next(err);
    }

    if (!req.file) {
      return next(new Error("No file received"));
    }

    const imageUrl = `/uploads/${req.file.filename}`;
    res.json({ imageUrl });
  });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err) {
    res.json({ error: err.message });
  }
});

app.listen(port, () => console.log(`Server started on port ${port}`));
