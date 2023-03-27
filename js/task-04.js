const buttonUP = document.querySelector('button[data-action="increment"]');
const buttonDown = document.querySelector('button[data-action="decrement"]');

let counterValue = document.querySelector('#value');

// let number = Number(counterValue.textContent);

// buttonUP.addEventListener('click', () => {
//     number += 1;
//     counterValue.textContent = number;
// });
// buttonDown.addEventListener('click', () => {
//     number -= 1;
//     counterValue.textContent = number;
// });

buttonUP.addEventListener('click', () => {
    
    counterValue.textContent = Number(counterValue.textContent) + 1;
});
buttonDown.addEventListener('click', () => {
    
    counterValue.textContent = Number(counterValue.textContent) - 1;
});


