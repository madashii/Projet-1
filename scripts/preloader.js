const button = document.querySelector(".button");

console.log(button);

button.addEventListener("click", () => {
  console.log("test");
  const preloader = document.querySelector(".preloader");
  preloader.style.display = "none";
});
