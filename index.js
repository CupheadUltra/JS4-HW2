const range = document.querySelector("#slider-range");
const image = document.querySelector("#slider-image");

document.addEventListener(
  "input",
  _.debounce(() => {
    image.style.width = `${range.value * 4}px`;
  }, 50)
);

console.dir();

const box = document.querySelector("#box");

document.addEventListener(
  "mousemove",
  _.debounce((e) => {
    box.style.left = e.clientX - box.scrollWidth / 2 + "px";
    box.style.top = e.clientY - box.scrollHeight / 2 + "px";
  }, 100)
);
