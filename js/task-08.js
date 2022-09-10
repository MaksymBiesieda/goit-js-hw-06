const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault(event);
    if (event.currentTarget.elements.email.value === '' || event.currentTarget.elements.password.value === '') {
        alert("Все поля формы должны быть заполнены!");
    }
    const formData = {
        email: event.currentTarget.elements.email.value,
        password: event.currentTarget.elements.password.value,
    };
    console.log(formData);
    event.currentTarget.reset();
}