window.addEventListener("load", (event) => {
  document
    .getElementById("button")
    .addEventListener("click", async () => getCats());
});

const getCats = async () => {
  let result = await makeRequest("http://localhost:8080/api/cats", "GET");
  renderCats(result);
};

const editCat = async (id) => {
  let singleCat = await makeRequest(`api/cats/${id}`, "GET");
  let catElement = document.getElementById(`cat${id}`);
  catElement.innerHTML = `Cat name: ${singleCat.name}`;
};

const deleteCat = (id) => {};

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
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        onclick="editCat(${cat.id})"
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
