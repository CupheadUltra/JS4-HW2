let sliderInput = document.querySelector(".slider__input");
let sliderImage = document.querySelector(".slider__image");
let box = document.querySelector("#box");

let updateImageSize = _.debounce(() => {
  let scale = sliderInput.value / 50;
  sliderImage.style.transform = `scale(${scale})`;
}, 100);

sliderInput.addEventListener("input", updateImageSize);

let moveBox = _.debounce((event) => {
  box.style.left = `${event.clientX - 25}px`;
  box.style.top = `${event.clientY - 25}px`;
}, 100);

document.addEventListener("mousemove", moveBox);
