import express from "express";
import { getCats, saveCats } from "./helpFunctions.js";
const app = express();
const port = 8080;

app.use("/", express.static("public"));

// KOnverterar allt till JSON
app.use(express.json());

// Get a list of all cats from the database
app.get("/api/cats", (req, res) => {
  res.send(getCats());
  res.end();
});

app.get("/api/cats/:id", (req, res) => {
  const id = req.params.id;

  let foundCat = getCats().find((cat) => cat.id == id);

  if (!foundCat) {
    res.status(404).send("This cat doesnt exist");
  }

  res.send(foundCat);
});

// Add a new cat to the database
app.post("/api/cats", (req, res) => {});

//Update a cat in the database
app.put("/api/cats/:id", (req, res) => {
  let newList = getCats().map((cat) => {
    if (cat.id == req.body.id) {
      return req.body;
    }
    return cat;
  });
  saveCats(newList);
});

//Delete a cat from the database
app.delete("/api/cats/:id", (req, res) => {
  res.send("Cat removed");
});

app.listen(port, () =>
  console.log(`App is running at http://localhost:${port}`)
);
