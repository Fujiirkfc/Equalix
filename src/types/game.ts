export interface GameState {
    score: number;
    highscore: number;
    equation: string;
    userAnswer: string;
    message:string;
    messageColor: string;
    currentScreen: 'home' | 'game' | 'credits';
    enterFunction: 'enterGame' | 'checkAnswer' | 'mainMenu';
}