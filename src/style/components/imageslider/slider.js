const slide = document.querySelectorAll(".slide");
const slideCount = document.querySelectorAll(".slide").length;
let currentIndex = 0;

function showNextSlide() {
  currentIndex = (currentIndex + 1) % slideCount;

  slide.forEach((s, index) => {
    s.style.transform = `translateX(-${(currentIndex - index) * 100}%)`;
    s.style.transform = `translateX(-${currentIndex * 100}%)`;
  });
}
setInterval(showNextSlide, 3000);
