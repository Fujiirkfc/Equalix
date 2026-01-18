import { defineStore } from 'pinia'

export interface GameState {
  points: number
  score: number
  equation: string
  userAnswer: string
  message: string
  messageColor: string
}

export const useGameStore = defineStore('game', {
  state: (): GameState => {
    return {
      points: 30,
      score: 0,
      equation: '',
      userAnswer: '',
      message: '',
      messageColor: '',
    }
  },
  actions: {
    restartGame() {
      this.points = 30
      this.score = 0
      this.equation = ''
      this.userAnswer = ''
      this.message = ''
      this.messageColor = ''
    },
    reducePoints() {
      if (this.points > 0) {
        this.points--
      }
    },
    updateScore(amount: number) {
      this.score += amount
      this.points = 30
    },
    setEquation(equation: string) {
      this.equation = equation
    },
    setMessage(message: string, color: string) {
      this.message = message
      this.messageColor = color
    },
  },
})
