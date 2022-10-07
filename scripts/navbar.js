const animationNavLogo = document.querySelector("#image-nav");
const displayList = document.querySelector("#nav-list");

// animation navbar list
animationNavLogo.addEventListener("click", () => {
  animationNavLogo.classList.toggle("nav-image-rotation");
  displayList.classList.toggle("nav-list-display");
  console.log("ok");
});
// animation navigation article scroll smooth
const ancreNav = document.querySelectorAll("ancre-action-nav");

ancreNav.addEventListener("click", () => {
  ancreNav.forEach((element) => console.log("ok"));
});
