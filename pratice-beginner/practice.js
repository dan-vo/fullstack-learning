let button = document.querySelector('.btn1');
let button2 = document.querySelector('.btn2');
let input = document.querySelector('.input');

let showArlet = function () {
  alert('Button was clicked!');
};

let changeValue = function () {
  input.value = 'A button is clicked';
};

button.addEventListener('click', changeValue);
button.addEventListener('click', showArlet);

// practice 2
