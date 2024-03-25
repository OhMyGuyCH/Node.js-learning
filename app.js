const express = require("express");
const debug = require("debug")("app");
const app = express();
const port = 3000;
const morgan = require("morgan");
const path = require("path");
const indexRouter = express.Router();
const productRouter = require("./src/router/productRouter");

app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views");
app.set("view engine", "ejs");

//

app.use("/product", productRouter);

//

app.get("/", (req, res) => {
  res.render("index", { username: "guyzaazaza" });
});

app.listen(port, () => {
  debug("Listenning on ports " + port);
});
