import { reactive } from "vue";

export const gameState = reactive({
    score: 30,
    highscore: 0,
    equation: '',
    userAnswer: '',
    message: '',
    messageColor: '',
    enterFunction: null as 'enterGame' | 'checkA' | null,
})

export const restartGame = () => {
    gameState.score = 30;
    gameState.highscore = 0
    gameState.userAnswer = '';
    gameState.message = '';
};