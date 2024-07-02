'use strict';

function getRandomHexColor() { // функція для генерації випадкового кольору;
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const inputNumber = document.querySelector('#controls>input'); // доступи до елементів;
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

const createBoxes = amount => {
  const addElements = []
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.height = `${30 + 10 * i}px`;
    div.style.width = `${30 + 10 * i}px`;
    div.style.background = getRandomHexColor();

    addElements.push(div)
  }
  return addElements;
}

const destroyBoxes = () => {
  boxes.innerHTML = ''
}
 
buttonCreate.addEventListener('click', () => {
  let boxesToAdd = createBoxes(inputNumber.value);
  boxes.append(...boxesToAdd);
})

console.log(inputNumber.value);

buttonDestroy.addEventListener('click', () => {
  destroyBoxes.call()
})
