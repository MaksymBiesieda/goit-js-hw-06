const inputEl = document.querySelector("#validation-input");
const inputValidLength = inputEl.getAttribute('data-length');
inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
if (event.currentTarget.value.length == inputValidLength) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
    } else {inputEl.classList.add("invalid");}
}
