const express = require("express");
const productRouter = express.Router();
const product = require("../data/product.json");

productRouter.route("/").get((req, res) => {
  res.render("product", { product });
});
productRouter.route("/:id").get((req, res) => {
  const id = req.params.id;
  res.render("pd", {
    product: product[id],
  });
});

module.exports = productRouter;
