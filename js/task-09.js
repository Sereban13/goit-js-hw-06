const button = document.querySelector('.change-color');
const randomColor = document.querySelector('.color');
const body = document.body;

button.addEventListener('click', colorizer);

function colorizer () {
  randomColor.textContent = getRandomHexColor();
  body.style.backgroundColor = randomColor.textContent;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
