
const form = document.querySelector('.login-form');

form.addEventListener('submit', formSubmit);

function formSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    const mail = formElements.email.value;
    const password = formElements.password.value;

    const formData = {
        mail, password,
    }

    if (mail === '' || password === '') {
        alert('All fields must be filled!!!')
    } else {
        console.log(formData);
        event.currentTarget.reset();
    }

   
}