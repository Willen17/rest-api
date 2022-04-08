window.addEventListener("load", (event) => {
  document
    .getElementById("button")
    .addEventListener("click", async () => getCats());
});

const getCats = async () => {
  let result = await makeRequest("http://localhost:8080/api/cats", "GET");
  renderCats(result);
};

const getCat = async (id) => {
  let singleCat = await makeRequest(`api/cats/${id}`, "GET");
  let catElement = document.getElementById(`cat${id}`);
  let formLayout = `<form id="updateCat${id}">
  <div class="mb-3">
    <label for="cat-name" class="form-label">Cat name</label>
    <input class="form-control" id="cat-name" aria-labelledby="cat-name" name="cat-name" value="${singleCat.name}">
  </div>
  <div class="mb-3">
    <label for="cat-age" class="form-label">Age</label>
    <input type="number" class="form-control" id="cat-age" aria-labelledby="cat-age" name="cat-age" value="${singleCat.age}">
  </div>
  <div class="mb-3">
    <label for="cat-favorite-food" class="form-label">Favorite food</label>
    <input class="form-control" id="cat-favorite-food" aria-labelledby="cat-favorite-food" name="cat-favorite-food" value="${singleCat.favoriteFood}">
  </div>
 
  <button type="submit" class="btn btn-primary" id="submit${id}">Submit</button>
</form>`;
  catElement.innerHTML = formLayout;
  let form = document.getElementById(`updateCat${id}`);
  form.addEventListener("submit", async (event) => {
    updateCat(event, id, catElement);
  });
};

const updateCat = async (event, catId, catElement) => {
  event.preventDefault();

  let catName = event.target[0].value;
  let catAge = event.target[1].value;
  let catFavoriteFood = event.target[2].value;

  let object = {
    name: catName,
    age: parseInt(catAge),
    favoriteFood: catFavoriteFood,
    id: catId,
  };

  let result = await makeRequest(
    `http://localhost:8080/api/cats/${catId}`,
    "PUT",
    object
  );

  catElement.innerHTML = `<h3>${result}<h3>`;

  //To run the code after 2 seconds
  setTimeout(function () {
    getCats();
  }, 2000);
};

const deleteCat = async (id) => {
  let result = await makeRequest(
    `http://localhost:8080/api/cats/${id}`,
    "DELETE"
  );

  let catElement = document.getElementById(`cat${id}`);

  catElement.innerHTML = `<h3>${result}<h3>`;

  setTimeout(function () {
    getCats();
  }, 2000);
};

const makeRequest = async (url, method, body) => {
  let response = await fetch(url, {
    method,

    body: JSON.stringify(body),

    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};

const renderCats = (cats) => {
  const catContainer = document.getElementById("cat-container");
  catContainer.innerHTML = null;

  for (let cat of cats) {
    let catLayout = `<div class="col" id="cat${cat.id}">
              <div class="card shadow-sm">
                <svg
                  class="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>${cat.name}</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    ${cat.name}
                  </text>
                </svg>

                <div class="card-body">
                  <p class="card-text">
                    This cats' name is ${cat.name} and he/she is ${cat.age} years old. ${cat.name}'s favorite food is ${cat.favoriteFood}
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div >
                      <button
                        type="button"
                        class="btn btn-sm btn-danger"
                        onclick="deleteCat(${cat.id})"
                      >
                        Delete
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-secondary"
                        onclick="getCat(${cat.id})"
                      >
                        Edit
                      </button>
                    </div>
                    <small class="text-muted">Cat-ID: ${cat.id}</small>
                  </div>
                </div>
              </div>
            </div>`;

    catContainer.innerHTML = catContainer.innerHTML + catLayout;
  }
};
