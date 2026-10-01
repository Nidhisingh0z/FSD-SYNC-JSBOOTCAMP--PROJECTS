let number1 = document.querySelector(".num1");
let number2 = document.querySelector(".num2");
let addBtn = document.querySelector(".add");
let subBtn = document.querySelector(".subtract");
let multiplyBtn = document.querySelector(".multiply");
let divideBtn = document.querySelector(".divide");
let resultText = document.querySelector(".result");



function addNumbers() {
  let val1 = Number(number1.value);
  let val2 = Number(number2.value);
  resultText.textContent = val1 + val2;
}

function subtractNumbers() {
  let val1 = Number(number1.value);
  let val2 = Number(number2.value);
  resultText.textContent = val1 - val2;
}

function multiplyNumbers(){
     let val1 = Number(number1.value);
  let val2 = Number(number2.value);
  resultText.textContent = val1 * val2;
}


function divideNumbers(){
     let val1 = Number(number1.value);
  let val2 = Number(number2.value);
  resultText.textContent = val1 / val2;
}

addBtn.addEventListener("click", addNumbers);
subBtn.addEventListener("click", subtractNumbers);
multiplyBtn.addEventListener('click',multiplyNumbers)
divideBtn.addEventListener('click',divideNumbers)