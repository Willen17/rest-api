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

// KOnverterar allt till JSON
app.use(express.json());

// Get a list of all cats from the database
app.get("/api/cats", (req, res) => {
  res.json(cats);
  res.end();
});

// Add a new cat to the database
app.post("/api/cats", (req, res) => {
  cats.push(req.body);
  res.status(201);
  res.send({
    type: "post",
    name: req.body.name,
    age: req.body.age,
    favoriteFood: req.body.favoriteFood,
    id: req.body.id,
  });
});

//Update a cat in the database
app.put("/api/cats/:id", (req, res) => {
  res.send("Cat updated");
});

//Delete a cat from the database
app.delete("/api/cats/:id", (req, res) => {
  res.send("Cat removed");
});

app.listen(port, () =>
  console.log(`App is running at http://localhost:${port}`)
);
