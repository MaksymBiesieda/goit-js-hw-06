const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

textEl.style.fontSize = `${inputEl.value}px`;

inputEl.addEventListener('input', changeValue);

function changeValue(event) {
    textEl.style.fontSize = `${inputEl.value}px`;
}
