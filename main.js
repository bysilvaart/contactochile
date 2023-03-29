const mainHeader = document.getElementById("mainHeader");
const headerHeight = 115;
const shrinkHeight = 90;

window.addEventListener("scroll", () => {
  if (window.pageYOffset > headerHeight) {
    mainHeader.classList.add("header-scrolled");
  } else {
    mainHeader.classList.remove("header-scrolled");
  }
});
