const counterEl = document.querySelector('#value');
let counterValue = 0;
const buttonDecrementEL = document.querySelector('[data-action="decrement"]');
const buttonIncrementEL = document.querySelector('[data-action="increment"]');

buttonDecrementEL.addEventListener('click', onButtonDecrement);
buttonIncrementEL.addEventListener('click', onButtonIncrement);

function updateCounter() {
   counterEl.textContent = counterValue; 
}
function onButtonDecrement() {
    counterValue -= 1; 
    updateCounter();
}
function onButtonIncrement() {
    counterValue += 1; 
   updateCounter();
}
console.log(counterEl.textContent);
console.log(counterValue);


