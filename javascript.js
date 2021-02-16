
//FUNCTIONS

///localStorage.setItem("input"); 


//Selectors
//player 1
const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const inputField = document.getElementById('input');

//player 2
const minusButton2 = document.getElementById('minus2');
const plusButton2 = document.getElementById('plus2');
const inputField2 = document.getElementById('input2');

//Event Listeners
//player 1
minusButton.addEventListener('click', event => {
  event.preventDefault();
  const currentValue = Number(inputField.value) || 0;
  inputField.value = currentValue - 1;
});



plusButton.addEventListener('click', event => {
  event.preventDefault();
  const currentValue = Number(inputField.value) || 0;
  inputField.value = currentValue + 1;
});

//Event Listeners
//player 2
minusButton2.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(inputField2.value) || 0;
    inputField2.value = currentValue - 1;
  });
  
  plusButton2.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(inputField2.value) || 0;
    inputField2.value = currentValue + 1;
  });