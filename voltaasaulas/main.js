const btToggleMenu = document.querySelector(".menu-hamburger")

btToggleMenu.addEventListener("click", () => {
  document.body.classList.toggle("open-nav")
})