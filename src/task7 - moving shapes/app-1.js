// задание 1
// - создать сервер на экспрессе который принимает загрузку картинки и
//   возвращает ссылку для отображения ее на странице
// - картинке задать рандомное имя чтоб названия не затирали друг друга
// - tip: можно использовать formData и multer (по желанию)
const express = require("express");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const port = 8000;
const app = express();
const allowedMimeTypes = ["image/jpeg", "image/png"];
const FORM_DATA_KEY = "image-file";

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, uuidv4() + file.originalname);
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (!allowedMimeTypes.includes(file.mimetype)) {
      req.fileValidationError =
        "Invalid file type. Only JPEG and PNG images are allowed.";
      cb(null, false);
    } else {
      cb(null, true);
    }
  },
});

app.post("/", upload.single(FORM_DATA_KEY), (req, res, next) => {
  if (req.fileValidationError) {
    return next(new Error(req.fileValidationError));
  }
  if (!req.file) {
    return next(new Error("No file received"));
  }
  const imageUrl = `/uploads/${req.file.filename}`;
  res.json({ imageUrl });
});

app.use((err, req, res, next) => {
  if (err) {
    res.json({ error: err.message });
  }
});

app.listen(port, () => console.log(`Server started on port ${port}`));
