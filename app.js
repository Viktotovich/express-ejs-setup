require("dotenv").config();
const express = require("express");
const path = require("node:path");

const app = express();
const PORT = process.env.PORT;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { message: "Ejs is awesome!" });
});

app.get("/throw", (req, res) => {
  throw new Error("Intentional Failure");
});

app.listen(PORT, () => {
  console.dir(`We are now live on PORT: ${PORT}`);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(400).send(`<h2>Unexpected Error: ${err.message}</h2>`);
});
