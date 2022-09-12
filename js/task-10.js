const controlsDivisionEl = document.querySelector('#controls');
const inputEl = controlsDivisionEl.firstElementChild;
const buttonCreateEl = inputEl.nextElementSibling;
const buttonDestroyEl = controlsDivisionEl.lastElementChild;
const boxesDivision = document.querySelector('#boxes');

buttonCreateEl.addEventListener('click', createBoxes);
buttonDestroyEl.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  amount = inputEl.value;
  let boxSize = 20;
  let element;
  let elementsArray = [];
  for (let i = 0; i < amount; i += 1){
    boxSize += 10;
    element = `<div  style="background-color: ${getRandomHexColor()}; width: ${boxSize}px; height: ${boxSize}px;"></div>`;
    elementsArray.push(element);
  }
  boxesDivision.insertAdjacentHTML('beforeend', elementsArray.join(' '));
  buttonCreateEl.removeEventListener('click', createBoxes);
}
function destroyBoxes() {
  boxesDivision.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
