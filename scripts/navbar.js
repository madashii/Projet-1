const animationNavLogo = document.querySelector("#image-nav");
const displayList = document.querySelector("#nav-list");

// animation navbar list
animationNavLogo.addEventListener("click", () => {
  animationNavLogo.classList.toggle("nav-image-rotation");
  displayList.classList.toggle("nav-list-display");
});
// animation navigation article scroll smooth
displayList.addEventListener("click", () => {
  animationNavLogo.classList.toggle("nav-image-rotation");
});
