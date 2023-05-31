const images = [
  "img/ferrari488black.jpg",
  "img/ferrariF430.jpg",
  "img/koeni.jpg",
];

let index = 0;
const max = images.length;

const containerElement = document.querySelector(".container");
const prevSlideBtn = document.querySelector(".prevSlide");
const nextSlideBtn = document.querySelector(".nextSlide");

function changeImage() {
  index++;
  setImgIndex();
  changeBgi(images[index], containerElement);
}

let interval = setInterval(changeImage, 1500);

prevSlideBtn.addEventListener("click", function () {
  clearInterval(interval);
  index--;
  setImgIndex();
  changeBgi(images[index], containerElement);
});

nextSlideBtn.addEventListener("click", function () {
  clearInterval(interval);
  index--;
  setImgIndex();
  changeBgi(images[index], containerElement);
});

function setImgIndex() {
  if (index < 0) index = max - 1;
  if (index === max) index = 0;
}

function changeBgi(backgroundImage, element) {
  element.style.backgroundImage = `url(${backgroundImage})`;
}
