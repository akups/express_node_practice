const express = require("express");
const { v4 } = require("uuid");
const app = express();
const port = 3000;

const shoppingList = [
  { id: "1", name: "cereal", price: 2 },
  { id: "2", name: "sugar", price: 1 },
  { id: "3", name: "beef", price: 5 },
];

app.get("/shoppingList", (req, res) => {
  res.json(shoppingList);
});

app.get("/product:productId", (req, res) => {
  const productId = req.params.productId;
  const product = shoppingList.find(pr, (req, res) => {
    return pr.id === productId;
  });
  res.json(product);
});

app.post("/product", (req, res) => {
  const body = req.body;
  const product = {
    id: v4(),
    name: body.name,
    price: body.price,
  };
  shoppingList.push(product);
  res.json(product);
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
