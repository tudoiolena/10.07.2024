const express = require("express");
const path = require("path");
const app = express();
const port = 8001;

app.use(
  "/task7",
  express.static(path.join(__dirname, "dist/task7 - moving shapes"))
);
app.use(
  "/task7",
  express.static(path.join(__dirname, "src/task7 - moving shapes"))
);
app.get("/task7", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/task7 - moving shapes/index.html"));
});

app.use(
  "/task14",
  express.static(path.join(__dirname, "dist/task14 - Photo Booth"))
);
app.use(
  "/task14",
  express.static(path.join(__dirname, "src/task14 - Photo Booth"))
);
app.get("/task14", (req, res) => {
  res.sendFile(path.join(__dirname, "task14 - Photo Booth/index.html"));
});

app.use(
  "/task15",
  express.static(path.join(__dirname, "dist/task15 - Web Api Favicon"))
);
app.use(
  "/task15",
  express.static(path.join(__dirname, "src/task15 - Web Api Faviconh"))
);
app.get("/task15", (req, res) => {
  res.sendFile(
    path.join(__dirname, "task15 - task15 - Web Api Favicon/index.html")
  );
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
