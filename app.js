const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

// loop over the movieLists collection to get each movie list and its corresponding arrow
movieLists.forEach((movieList, i) => {
  const itemNumber = movieList.querySelectorAll("img").length;
  let clickcounter = 0;
  arrows[i].addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickcounter++;
    if (itemNumber - (4 + clickcounter) + (4 - ratio) >= 0) {
      movieList.style.transform = `translateX(${
        movieList.computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieList.style.transform = "translateX(0)";
      clickcounter = 0;
    }
  });
});

console.log(Math.floor(window.innerWidth / 270));

// TOGGLE //

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container, .movie-list-title, .navbar-container, .sidebar, .left-menu-icon, .toggle"
);
ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});
