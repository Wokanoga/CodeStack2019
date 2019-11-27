let doTheMath = document.getElementById('doTheMath');

doTheMath.addEventListener('click', function (e) {
    //get values when the button is clicked.
    let firstNum = document.getElementById('firstNum').value;
    let secondNum = document.getElementById('secondNum').value;
    let operator = document.getElementById('operator').value;

    //check the operator and do the relevant math and pass it in as a parameter. No need to convert the strings to numbers and back to text.  Javascript is not a strict language.
    if (operator === '+' || operator === 'plus' || operator === 'add') {
        makePTag(firstNum + secondNum);
    } else if (operator === '-' || operator === 'minus' || operator === 'subtract') {
        makePTag(firstNum - secondNum);
    } else if (operator === '*' || operator === 'times' || operator === 'multiply') {
        makePTag(firstNum * secondNum);
    } else if (operator === '/' || operator === 'divide') {
        makePTag(firstNum / secondNum);
    } else {
        alert('Not a valid operator');
    }
});

function makePTag(text) {
    //get out field, make sure there is nothing in it, and create a tag with the innerText of our parameter.
    let answerField = document.getElementById('answerField');
    answerField.innerHTML = '';
    let p = document.createElement('p');
    p.innerText = text;
    answerField.appendChild(p);
}