
'use strict';

const accessToForm = document.querySelector('.login-form'); //отримуємо доступ до форми;

accessToForm.addEventListener('submit', onFormSubmit); // додаємо слухача події;

function onFormSubmit(event) { // колбек-функція для слухача;
    event.preventDefault();  //метод для скасування дії браузера за замовчуванням в обєкта події;

    const formElements = event.currentTarget.elements; // елемент, на якому виконується обробник події;
    const email = formElements.email;                 // отримуємо доступ;
    const password = formElements.password;

    if (email.value === '' || password.value === '') {  // якщо значення полів пусті, виводимо алерт;
        return alert (`Всі поля повинні бути заповнені`)
    }
    const formData = {   // записуємо значення полів;
        email: email.value,
        password: password.value,
    }
    console.log(formData);
    event.currentTarget.reset(); // очищаємо значення полів;
}