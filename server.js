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
  const product = shoppingList.find(pr, (req, res) => {
    const body = req.body;
  });
});
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
