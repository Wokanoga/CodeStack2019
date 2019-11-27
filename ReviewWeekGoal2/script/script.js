let firstNum = document.getElementById('firstNum');
let secondNum = document.getElementById('secondNum');
let operator = document.getElementById('operator');
let answerField = document.getElementById('answerField');
let doTheMath = document.getElementById('doTheMath');

doTheMath.addEventListener('click', function (e) {
    if (operator.value === '+' || operator.value === 'plus' || operator.value === 'add') {
        addition(firstNum.value, secondNum.value);
    } else if (
        operator.value === '-' || operator.value === 'minus' || operator.value === 'subtract') {
        subtraction(firstNum.value, secondNum.value);
    } else if (
        operator.value === '*' || operator.value === 'times' || operator.value === 'multiply') {
        multiplication(firstNum.value, secondNum.value);
    } else if (
        operator.value === '/' || operator.value === 'divide') {
        division(firstNum.value, secondNum.value)
    } else {
        alert('Not a valid operator');
    }
});

function addition(x, y) {
    makePTag(x+y);
}

function subtraction(x, y) {
    makePTag(x-y);
}

function multiplication(x, y) {
    makePTag(x*y);
}

function division(x, y) {
    makePTag(x/y);
}

function makePTag(text) {
    answerField.innerHTML = '';
    let p = document.createElement('p');
    p.innerText = text;
    answerField.appendChild(p);
}