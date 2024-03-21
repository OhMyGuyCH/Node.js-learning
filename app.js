const express = require("express");
const debug = require("debug")("app");
const app = express();
const port = 3000;
const morgan = require("morgan");

app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send("Hello born");
});

app.listen(port, () => {
  debug("Listenning on port " + port);
});
