let firstNum = document.getElementById('firstNum');
let secondNum = document.getElementById('secondNum');
let operator = document.getElementById('operator');
let answerField = document.getElementById('answerField');
let doTheMath = document.getElementById('doTheMath');

doTheMath.addEventListener('click', function (e) {
    if (operator.value === '+' || operator.value === 'plus' || operator.value === 'add') {
        makePTag(firstNum.value+secondNum.value);
    } else if (
        operator.value === '-' || operator.value === 'minus' || operator.value === 'subtract') {
        makePTag(firstNum.value-secondNum.value);
    } else if (
        operator.value === '*' || operator.value === 'times' || operator.value === 'multiply') {
        makePTag(firstNum.value*secondNum.value);
    } else if (
        operator.value === '/' || operator.value === 'divide') {
        makePTag(firstNum.value/secondNum.value);
    } else {
        alert('Not a valid operator');
    }
});

function makePTag(text) {
    answerField.innerHTML = '';
    let p = document.createElement('p');
    p.innerText = text;
    answerField.appendChild(p);
}