const nameOfColorEl = document.querySelector('.color');
const buttonChangeColorEl = document.querySelector('.change-color');

buttonChangeColorEl.addEventListener('click', changeColor);

function changeColor(event) {
  nameOfColorEl.textContent = getRandomHexColor();
  document.body.style.backgroundColor = nameOfColorEl.textContent;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
