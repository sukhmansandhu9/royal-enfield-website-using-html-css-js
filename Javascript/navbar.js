// Javascript for the humberburger navbar

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const navbar = document.getElementsByClassName("navbar")[0];
if (navbar.style.height == "") {
  navbar.style.height = "70px";
}

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
  if (navbar.style.height == "70px") {
    navbar.style.height = "160px";
  } else {
    navbar.style.height = "70px";
  }
});
