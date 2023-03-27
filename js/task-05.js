const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', inputChange);

function inputChange(event) {
   
  
    if (event.currentTarget.value.length !== 0){
        output.textContent = event.currentTarget.value;
    } else {
        output.textContent =  "Anonymous"; 
    }

}

