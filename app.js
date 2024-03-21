const express = require("express");
const debug = require("debug")("app");
const app = express();
const port = 3000;
const morgan = require("morgan");
const path = require("path");
const product = require("./data/product.json");
const productRouter = express.Router();
const indexRouter = express.Router();

app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views");
app.set("view engine", "ejs");

//
productRouter.route("/").get((req, res) => {
  res.render("product", { product });
});
productRouter.route("/:id").get((req, res) => {
  const id = req.params.id;
  res.render("pd", {
    product: product[id],
  });
});
app.use("/product", productRouter);

//

app.get("/", (req, res) => {
  res.render("index", { username: "guyzaazaza" });
});

app.listen(port, () => {
  debug("Listenning on ports " + port);
});
