const slides = document.querySelector(".slides");
const slideCount = document.querySelectorAll(".slide").length;
let currentIndex = 0;

function showNextSlide() {
  currentIndex = (currentIndex + 1) % slideCount;
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}
setInterval(showNextSlide, 3000);
