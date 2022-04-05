const express = require("express");
const app = express();
const port = 8080;

const cats = [
  {
    name: "Kasper",
    age: 6,
    favoriteFood: "Ham",
    id: 1,
  },
  {
    name: "Klas",
    age: 4,
    favoriteFood: "Anything he can find",
    id: 2,
  },
];

app.use(express.json());

app.get("/cats", (req, res) => {
  res.json(cats);
});

app.post("/cats", (req, res) => {
  cats.push(req.body);
  res.status(201);
  res.send("Cat added");
});

app.put("/cats", (req, res) => {
  res.send("Cat updated");
});

app.delete("/cats", (req, res) => {
  res.send("Cat removed");
});

app.listen(port, () =>
  console.log(`App is running at http://localhost:${port}`)
);
