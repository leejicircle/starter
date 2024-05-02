const serarchEl = document.querySelector(".search");
const searchInputEl = serarchEl.querySelector("input");

serarchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  serarchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", function () {
  serarchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();