const express = require("express");
const app = express();
const port = 8080;

const users = [
  {
    name: "William",
    age: 22,
  },
  {
    name: "Tomas",
    age: 69,
  },
];

app.use(express.json());

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  users.push(req.body);
  res.status(201);
  res.send("Användare tillagd");
});

app.put("/users", (req, res) => {
  res.send("PUT request");
});

app.delete("/users", (req, res) => {
  res.send("Delete request");
});

app.listen(port, () =>
  console.log(`App is running at http://localhost:${port}`)
);
