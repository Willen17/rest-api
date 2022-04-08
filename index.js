import express from "express";
import { doesCatExist, getCats, getId, saveCats } from "./helpFunctions.js";
const app = express();
const port = 8080;

app.use("/", express.static("public"));

// KOnverterar allt till JSON
app.use(express.json());

// Get a list of all cats from the database
app.get("/api/cats", (req, res) => {
  if (getCats().length === 0) {
    res.status(404).send("No cats exist. \nMaybe they ran away 🏃‍♂️");
  } else {
    res.send(getCats());
  }
  res.end();
});

app.get("/api/cats/:id", (req, res) => {
  const id = req.params.id;

  // let foundCat = getCats().find((cat) => cat.id == id);

  if (!doesCatExist(id)) {
    res
      .status(404)
      .send(
        "This cat does not exist. \nEither it escaped or it never existed in the first place 😼"
      );
  }

  res.send(doesCatExist(id));
});

// Add a new cat to the database
app.post("/api/cats", (req, res) => {
  let catsToBeUpdated = getCats();
  console.log(getId());
  const newCat = req.body;
  const newCatWithId = { ...newCat, id: getId() + 1 };
  catsToBeUpdated.push(newCatWithId);
  saveCats(catsToBeUpdated);
  res.json(`${newCat.name} has been added!`);
});

//Update a cat in the database
app.put("/api/cats/:id", (req, res) => {
  const { id } = req.params;
  if (!doesCatExist(id)) {
    res
      .status(404)
      .json(
        "This cat does not exist. \nEither it escaped or it never existed in the first place 😼"
      );
    return;
  }

  let newList = getCats().map((cat) => {
    if (cat.id == id) {
      return req.body;
    }
    return cat;
  });
  saveCats(newList);
  res.json("The cat updated correctly! 🔃");
});

//Delete a cat from the database
app.delete("/api/cats/:id", (req, res) => {
  const { id } = req.params;
  if (!doesCatExist(id)) {
    res
      .status(404)
      .json(
        "This cat does not exist. \nEither it escaped or it never existed in the first place 😼"
      );
  }
  let currentCats = getCats();
  let catToBeDeleted = currentCats.find((cat) => cat.id == id);
  let newList = currentCats.filter((cat) => cat.id != id);
  saveCats(newList);
  res.json(`Cat ${catToBeDeleted.name} has been deleted. \nRest in peace 😿`);
});

app.listen(port, () =>
  console.log(`App is running at http://localhost:${port}`)
);
