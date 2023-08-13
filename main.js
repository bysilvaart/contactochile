const mainHeader = document.getElementById("mainHeader");
const mainHeaderIndex = document.getElementById("mainHeader-index"); 
const headerHeight = 115;
const shrinkHeight = 90;

window.addEventListener("scroll", () => {
  if (window.pageYOffset > headerHeight) {
    mainHeader.classList.add("header-scrolled");
  } else {
    mainHeader.classList.remove("header-scrolled");
  }
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset > headerHeight) {
    mainHeaderIndex.classList.add("header-scrolled"); 
  } else {
    mainHeaderIndex.classList.remove("header-scrolled");
  }
});

