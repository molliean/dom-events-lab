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
    if((e.target.className === 'operand')){
        if(!isFirstNum){
            isFirstNum = true;
        }
        selectedOperation = e.target.innerText;
        renderCalculatorDisplay();
	} else if(e.target.classList.contains('equal')){
        renderAnswer();
	} else if(e.target.classList.contains('number')){
        if(!isFirstNum){
            num1 += parseInt(e.target.innerText);
        } else{
            num2 += parseInt(e.target.innerText);
        }
        renderCalculatorDisplay();
    } else if(e.target.className === 'clear'){
        renderDisplayEmpty();
    }
})

function checkButtonType(btn, className){
    return btn.classList.contains(className)
}


document.addEventListener('keypress', (e) => {
    if('+-*/'.includes(e.key)){
        if(!isFirstNum){
            isFirstNum = true;
        }
        selectedOperation = e.key;
        renderCalculatorDisplay();
	} else if(e.key === '='){
        renderAnswer();
	} else if('1234567890'.includes(e.key)){
        if(!isFirstNum){
            num1 += parseInt(e.key);
        } else{
            num2 += parseInt(e.key);
        }
        renderCalculatorDisplay();
    } else if(e.key === 'c'){
        renderDisplayEmpty();
    }
})


function renderCalculatorDisplay(){
    if(!isFirstNum){
        displayEl.innerText = num1;
    } else{
        displayEl.innerText = `${num1} ${selectedOperation} ${num2}`;
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