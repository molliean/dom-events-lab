// /*-------------------------------- Constants --------------------------------*/
// const numbersEls = document.querySelectorAll(".number")
// console.log(numbersEls);
// const operandEls = document.querySelectorAll('.operand');
// console.log(operandEls);

// /*-------------------------------- Variables --------------------------------*/
// let firstNumber;
// let operation;
// let secondNumber;
// /*------------------------ Cached Element References ------------------------*/



// /*----------------------------- Event Listeners -----------------------------*/
// operandEls.forEach(operandBtn => {
//     operandBtn.addEventListener('click', function(e){
//         if(e.target.innerText === '='){
//             console.log(calculate(firstNumber, secondNumber, operation));
//         } else {
//             operation = e.target.innerText;
//         };
//     })
// })

// numbersEls.forEach(numberBtn => {
//     numberBtn.addEventListener("click", (event) => {
//       // This log is for testing purposes to verify we're getting the correct value
//       //console.log(event.target);
//       //console.dir(event.target)
// ;      console.log(event.target.innerText);
//       // Future logic to capture the button's value goes here...
//       const number = event.target.innerText;
//       if (firstNumber === undefined){
//         firstNumber = parseInt(number);
//       } else {
//         secondNumber = parseInt(number); 
//       }
//     });
//   });
  
// /*-------------------------------- Functions --------------------------------*/
// function calculate(num1, num2, op){
//     if(op === '*'){
//         console.log(num1 * num2)
//     } else if(op === '+'){
//         console.log(num1 + num2)
//     } else if(op === '-'){
//         console.log(num1 - num2)
//     } else{
//         console.log(num1 / num2);
//     }
// }

function add(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

const calculate = {
    '+': add,
    '-': subtract,
    '*': multiply,
    '/': divide
}

const displayEl = document.querySelector('.display')
const calculatorEl = document.querySelector('.calculator');

let selectedOperation = ''; 
let num1 = '';
let num2 = '';
let isFirstNum = false;

calculatorEl.addEventListener('click', function(e){
    if(e.target.className === 'operand'){
        if(!isFirstNum){
            isFirstNum = true;
        }
        selectedOperation = e.target.innerText;
        renderCalculatorDisplay();
	} else if(e.target.classList.contains('equal')){
        renderAnswer();
	} else if(e.target.classList.contains('number')){
        if(!isFirstNum){
            num1 += e.target.innerText;
        } else{
            num2 += e.target.innerText;
        }
        renderCalculatorDisplay();
    } else if(e.target.className === 'clear'){
        renderDisplayEmpty();
    }
})


function renderCalculatorDisplay(){
    if(!isFirstNum){
        displayEl.innerText = num1;
    } else{
        displayEl.innerText = `${num1}${selectedOperation}${num2}`;
    }
}

function renderAnswer(){
    displayEl.innerText = calculate[selectedOperation](num1, num2);

}

function renderDisplayEmpty(){
    displayEl.innerText = '0';
    num1 = '';
    num2= '';
    selectedOperation = '';
    isFirstNum = false;
}


// ================= IDEAS TO ADD ON ========================


// 1. Try to implement the logic to update the second number,  
//  You'll have to update secondNumber variable, 
// and you'll have to update the renderCalculatorDisplay to use that variable
// and you'll have to update the renderAnswer to use that variable

// 2. Implement the clear button
// set the display to zero
// reset your variables to the initial values

// Extra challenge would, be trying having firstNumber or SecondNumber be multiple digits