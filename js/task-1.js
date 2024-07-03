
'use strict';

const categoriesItem = document.querySelectorAll('.item'); // отримуємо доступ до улменту через клас;
console.log(`Number of categories: ${categoriesItem.length}`); // виводимо в консоль кількість елементів li.item;

categoriesItem.forEach(category => { // функція, що виводить в консоль текст заголовка та кількість елемнтів у категорії(усіх li, вкладених у нього)
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elemets: ${category.lastElementChild.children.length}`);
})




/*З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).


На що буде звертати увагу ментор при перевірці:

Кількість категорій, їх назва та кількість елементів отримані за допомогою властивостей і методів DOM-елементів
Дані за кожною категорією були отримані й виведені в консоль у тілі циклу або методу forEach() */
