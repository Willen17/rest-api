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
  catContainer.innerHTML = null;

  for (let cat of cats.cats) {
    let catLayout = `<div class="col">
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
                  <title>Placeholder</title>
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
                      >
                        Edit
                      </button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>`;

    catContainer.innerHTML = catContainer.innerHTML + catLayout;
  }
};
