'use strict';

function getRandomHexColor() {   // функція для генерування випадкового кольору;
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const accessToBody = document.querySelector('body'); // доступ до боді;
const changeColorButton = document.querySelector('.change-color');  // доступ до кнопки через клас;
const spanColor = document.querySelector('span.color'); // доступ до спану;

changeColorButton.addEventListener('click', onChangeColorButtonClick);  // додаємо слухача події;

function onChangeColorButtonClick(event) { // колбек-функція для слухача події;
  let color = getRandomHexColor();  // записуємо в змінну виклик функції для генерації кольору;
  accessToBody.style.backgroundColor = color; // зафарбовуємо боді та спан;
  spanColor.textContent = color;
}