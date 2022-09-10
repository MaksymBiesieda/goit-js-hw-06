const refs = {
    inputEl: document.querySelector('#name-input'),
    textEl: document.querySelector('#name-output'),
}
 
refs.inputEl.addEventListener('input', onChangeInput);

function onChangeInput(event) {
    refs.textEl.textContent = event.currentTarget.value;
    if (event.currentTarget.value !== "") {
        refs.textEl.textContent = event.currentTarget.value;  
    } else { refs.textEl.textContent = "Anonymous";}
   
}
