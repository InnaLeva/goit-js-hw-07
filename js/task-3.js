'use strict';

const accessInput = document.querySelector('#name-input');
const accessSpan = document.querySelector('#name-output');

accessInput.addEventListener('input', makeTextOutput);

function makeTextOutput(event) {
    accessSpan.textContent = event.currentTarget.value;
    if (event.currentTarget.value === '') {
        accessSpan.textContent = 'Anonymous';
    }
}

//   const access = {
//      textInput: document.querySelector('#name-input'),
//      textOutput: document.querySelector('#name-output'),
//   };

//   access.textInput.addEventListener('input', maketextOutput);

//   function maketextOutput (event) {
//      access.textOutput.textContent = event.currentTarget.value;
//      if (event.currentTarget.value === '') {
//         access.textOutput.textContent = 'Anonymous';
//    }
//  } 


