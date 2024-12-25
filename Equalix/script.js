'use-strict';
const title = document.getElementById("title");
let score = 30;
let highscore = 0;
const numbers = [... Array(4)].map(e=> Math.floor(Math.random() * 100) + 1);
title.style.display = 'none';


function displayMessage(message){
    document.querySelector('.message').textContent = message;
}

function getRandomOperator() {
    const randomOperator = Math.floor(Math.random() * 2) + 1;
    switch(randomOperator) {
        case 1:
            return '+';
        case 2:
            return '-';
    }
}

function getRandomNumber(numbers){
    const randomIndex = Math.floor(Math.random() * numbers.length);
    return numbers[randomIndex];
}

function displayGame(){
document.querySelector('.number').textContent = getRandomNumber(numbers) + getRandomOperator() + getRandomNumber(numbers);
}

displayGame();

document.querySelector('.check').addEventListener('click', function(){
    const correctAnswer = Number(eval(document.querySelector('.number').textContent));
    const answer = Number(document.querySelector('.answer').value);
    console.log(answer);
    console.log(correctAnswer);
    if(answer === correctAnswer){
        displayMessage('Correct answer! congratulations');
        highscore += score;
        document.querySelector('.highscore').textContent = highscore;
        displayGame();
    }
    else{
            displayMessage('Wrong, not a number');
    }
});
// resultado da operacao: eval(document.querySelector('.number').textContent));
