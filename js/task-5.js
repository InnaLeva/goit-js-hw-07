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

/*Напиши скрипт, який змінює колір фону елемента <body> через інлайн-стиль по кліку на button.change-color і задає це значення кольору текстовим вмістом для span.color.

<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>

Зверни увагу, що функція getRandomHexColor() повертає колір у hex-форматі, в той час як колір фону на <body> буде у форматі rgb. Це нормально й не потребує якихось правок.

На що буде звертати увагу ментор при перевірці:

Фон на <body> задається тільки після кліку на button.change-color
При кожному кліку на елемент button.change-color фон <body> зафарбовується новим рандомним кольором
На <body> і span.color значення одного й того самого кольору*/