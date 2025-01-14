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
const mainScore = document.querySelector('.score');
const creditsText = document.querySelector('.credits-message');
let escapeFunction;
let score = 30;
let highscore = 0;

document.addEventListener('keydown', function(e){
    if (e.key === 'Escape'){
        startScreen();
    }
})

//display credits
function displayCredits(){
    start.style.display = 'none';
    credits.style.display = 'none';
    creditsText.style.display = 'flex';
    //need to put the link text in blue

}
// remove the event listener after display credits end


//Equalix main menu screen

function startScreen(){
    title.style.fontSize = '10vw';
    title.style.top = '110%';
    start.style.display = 'block';
    credits.style.display = 'block';
    equation.style.display = 'none';
    scores.style.display = 'none';
    box.style.display = 'none';
    check.style.display = 'none';
    again.style.display = 'none';
    creditsText.style.display = 'none';
    start.addEventListener('click', displayGame);
    credits.addEventListener('click', displayCredits);
}
startScreen();


// display the message according to the answer
function displayMessage(message, color){
    document.querySelector('.message').textContent = message;
    document.querySelector('.message').style.color = color;
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
function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}


//displays the game
function displayGame(){

    equation.style.display = 'block';
    scores.style.display = 'flex';
    box.style.display = 'block';
    check.style.display = 'flex';
    check.style.top = '30px';
    again.style.display = 'flex';
    again.style.top = '30px';
    start.style.display = 'none';
    title.style.display = 'block';
    title.style.fontSize = '5rem';
    title.style.top = '10%';
    credits.style.display = 'none';
    mainScore.textContent = score;
    equation.textContent = getRandomNumber() + getRandomOperator() + getRandomNumber();
    check.addEventListener('click', checkAnswer);
    document.addEventListener('keydown', function(e){
        if(e.key === 'Enter'){
            e.preventDefault();
            checkAnswer();
            console.log('enter pressed!')
        }
    })

    // implement this function above to the other buttons as well.

    again.addEventListener('click', restartGame);
}

function checkAnswer(){
     const correctAnswer = Number(eval(equation.textContent));
     console.log(correctAnswer);
     const answer = Number(box.value);
     console.log(answer);

     if(answer === correctAnswer){
        displayMessage(`Correct answer! congratulations`, 'green');
        highscore += score;
        document.querySelector('.highscore').textContent = highscore;
        box.value = '';
        score = 30;
        mainScore.textContent = score;
        displayGame();
     }
     else if(!answer){
        displayMessage(`No number!`, '#ec2e15')
     }
     else if(answer !== correctAnswer){
        if(score > 1){
             displayMessage(`Wrong guess! try again`, '#ec2e15');
             score--;
             mainScore.textContent = score;
        }
        else{
        displayMessage(`Game over!`, '#ec2e15');
        mainScore.textContent = 0;
        check.style.display = 'none';
        }
    }
}
function restartGame(){
        score = 30;
        highscore = 0;
        mainScore.textContent = score;
        document.querySelector('.highscore').textContent = highscore;
        box.value = '';
        displayMessage();
        displayGame();
    }


