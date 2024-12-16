/* tutorial referenced to adjust carousel logic: 

https://www.youtube.com/watch?v=9HcxHDS2w1s

* */
const slides = document.querySelectorAll('.slider img');
let slideIndex = 0;

let intervalID = null;
let filled = null;

document.addEventListener('DOMContentLoaded', initializeSlider);

function initializeSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add('displaySlide');
    intervalID = setInterval(nextSlide, 5000);
  }
}
function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }
  slides.forEach((slide) => {
    slide.classList.remove('displaySlide');
  });
  slides[slideIndex].classList.add('displaySlide');
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}
document.addEventListener(SubmitEvent, filled);

function formSubmitted() {
  alert('Successfully added to the listserv, congrats!');
}
