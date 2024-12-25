'use-strict';

//Elements

const title = document.getElementById("title");
const equation = document.getElementById("equation");
const scores = document.getElementById("rightab");
const box = document.querySelector('.answer');
let score = 30;
let highscore = 0;


const numbers = [... Array(4)].map(e=> Math.floor(Math.random() * 100) + 1);


//Start screen of the game

function startScreen(){
    equation.style.display = 'none';
    scores.style.display = 'none';
    box.style.display = 'none';
}
startScreen();

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
    equation.textContent = getRandomNumber(numbers) + getRandomOperator() + getRandomNumber(numbers);
}

displayGame();

document.querySelector('.check').addEventListener('click', function(){
    const correctAnswer = Number(eval(equation.textContent));
    const answer = Number(box.value);
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
