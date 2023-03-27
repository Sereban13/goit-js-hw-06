const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

input.addEventListener('input', changeFontSize);

function changeFontSize () {
   text.style.fontSize = input.value + 'px';
}

