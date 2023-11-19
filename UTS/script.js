//Toggle class active tea menu
const navbarNav = document.querySelector(".navbar-nav");
//Ketika tea menu di klik
document.querySelector("#tea-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

//Klik di luar elemen
const tea = document.querySelector("#tea-menu");
const sb = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (!tea.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});
