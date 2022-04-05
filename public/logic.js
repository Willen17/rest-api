window.addEventListener("load", (event) => {
  document.getElementById("button").addEventListener("click", (e) => getCats());
});

const getCats = async () => {
  try {
    const res = await fetch("api/cats");
    const result = await res.json();
    renderCats(result);
  } catch (err) {
    console.log(err);
  }
};

const renderCats = (cats) => {
  catContainer = document.getElementById("cat-container");

  for (let cat of cats.cats) {
    let element = document.createElement("div");

    let catName = document.createElement("h3");
    catName.innerText = "Name: " + cat.name;
    let catAge = document.createElement("p");
    let catFood = document.createElement("p");
    catFood.innerText = "Favorite food: " + cat.favoriteFood;
    catAge.innerText = "Age: " + cat.age;

    catContainer.appendChild(element);
    element.appendChild(catName);
    element.appendChild(catAge);
    element.append(catFood);
  }
};
