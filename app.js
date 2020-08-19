const express = require("express");

const port = 5000;

const app = express();

app.get("/", (req, res) => {
  res.send("hello express js");
});

app.listen(port, () => {
  console.log("server is running");
});
