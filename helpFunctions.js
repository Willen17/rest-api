import fs, { writeFile } from "fs";

export function getCats() {
  let data = fs.readFileSync("./data.json");
  let words = JSON.parse(data);
  return words;
}

export function saveCats(list) {
  fs.writeFile("./data.json", JSON.stringify(list, null, 2), (err) => {
    if (err) {
      console.error(err);
    }
    console.log("Katt ändrad");
  });
}

export function getId() {
  if (getCats().length > 0) {
    let highestID = Math.max.apply(
      Math,
      getCats().map((cat) => {
        return cat.id;
      })
    );
    return highestID;
  } else return 1;
}
