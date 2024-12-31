'use-strict';

//Elements

const title = document.getElementById("title");
const equation = document.getElementById("equation");
const scores = document.getElementById("rightab");
const box = document.querySelector('.answer');
const start = document.querySelector('.start');
const credits = document.querySelector('.credits');
const check = document.querySelector('.check');
const again = document.querySelector('.again');
let score = 30;
let highscore = 0;


const numbers = [... Array(4)].map(e=> Math.floor(Math.random() * 100) + 1);


//Equalix main menu screen

function startScreen(){
    equation.style.display = 'none';
    scores.style.display = 'none';
    box.style.display = 'none';
    check.style.display = 'none';
    again.style.display = 'none';
    start.addEventListener('click', displayGame);
}
startScreen();


// display the message according to the answer
function displayMessage(message){
    document.querySelector('.message').textContent = message;
}


// logic of the operators
function getRandomOperator() {
    const randomOperator = Math.floor(Math.random() * 2) + 1;
    switch(randomOperator) {
        case 1:
            return '+';
        case 2:
            return '-';
    }
}

//logic of random numbers choice
function getRandomNumber(numbers){
    const randomIndex = Math.floor(Math.random() * numbers.length);
    return numbers[randomIndex];
}


//displays the game
function displayGame(){

    equation.style.display = 'block';
    scores.style.display = 'block';
    box.style.display = 'block';
    check.style.display = 'block';
    again.style.display = 'block';
    start.style.display = 'none';
    title.style.display = 'none';
    credits.style.display = 'none';

    equation.textContent = getRandomNumber(numbers) + getRandomOperator() + getRandomNumber(numbers);

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
 })
};
// resultado da operacao: eval(document.querySelector('.number').textContent));
