let minus_button = document.getElementById('neg');
let plus_button = document.getElementById('pos');
let num = document.getElementById('num');

minus_button.addEventListener('click', () => num.textContent--);
plus_button.addEventListener('click', () => num.textContent++);