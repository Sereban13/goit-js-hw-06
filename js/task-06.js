const input = document.querySelector('#validation-input');

const textLength = input.getAttribute('data-length');

input.addEventListener('blur', textLengthCheck);

function textLengthCheck (event) {
    if (event.currentTarget.value.length === Number(textLength)) {
        if (input.classList.contains('invalid')) {
            input.classList.remove('invalid');
        }
        input.classList.add('valid');

        
    } else if (event.currentTarget.value.length === 0) {
        if (input.classList.contains('valid')) {
            input.classList.remove('valid');
        }
        input.classList.remove('invalid');
    }
    
    else {
        input.classList.add('invalid');
    }
}


