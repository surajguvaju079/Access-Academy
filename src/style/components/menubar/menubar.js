function myFunction(x) {
  x.classList.toggle("change");
  if (x.classList.contains("change")) {
    document.querySelector(".mobile-nav").style.display = "flex";
    document.querySelector("header").style.minHeight = "100vh";
  } else {
    document.querySelector(".mobile-nav").style.display = "none";
    document.querySelector("header").style.minHeight = "0";
  }
}

const links = document.querySelectorAll(".mobile-nav a");
links.forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".mobile-nav").style.display = "none";
    document.querySelector(".hamburger").classList.remove("change");
    document.querySelector("header").style.minHeight = "0";
  });
});
