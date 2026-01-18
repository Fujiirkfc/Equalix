<template>
  <div
    class="bg-darkgray font-ps2p flex h-screen w-full flex-col gap-6"
  >
    <Header></Header>
    <Equation></Equation>
    <div
      class="inset-x-0 flex flex-col items-center gap-5 sm:bottom-24 md:bottom-10"
    >
      <h1
        class="mb-1 h-8 text-center md:mb-4 md:text-lg lg:text-xl"
        :class="
          gameStore.messageColor === 'green'
            ? 'text-green-500'
            : 'text-red-500'
        "
      >
        {{ gameStore.message }}
      </h1>
      <CheckBox ref="checkBoxRef" @submit="checkAnswer" />
      <DefaultButton @click="checkAnswer">answer</DefaultButton>
      <DefaultButton @click="resetGameLocal">restart</DefaultButton>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  import { useGameStore } from '../store/gameStore'
  import { getEquation } from '../utils/randomUtils'
  import DefaultButton from '../components/common/DefaultButton/DefaultButton.vue'
  import Header from '../components/layout/Header/Header.vue'
  import CheckBox from '../components/layout/CheckBox/CheckBox.vue'
  import Equation from '../components/layout/Equation/Equation.vue'

  const gameStore = useGameStore()
  const checkBoxRef = ref<InstanceType<typeof CheckBox> | null>(null)

  const getNewEquation = () => {
    const newEquation = getEquation()
    gameStore.setEquation(newEquation)
    gameStore.userAnswer = ''
    setTimeout(() => {
      checkBoxRef.value?.focus()
    }, 0)
  }

  const checkAnswer = () => {
    const correctAnswer = Number(eval(gameStore.equation))
    const answer = Number(gameStore.userAnswer)

    if (isNaN(answer) || gameStore.userAnswer === '') {
      gameStore.setMessage('No number or invalid type!', 'red')
      return
    }

    if (answer === correctAnswer) {
      gameStore.setMessage('Correct answer!', 'green')
      gameStore.updateScore(gameStore.points)
      getNewEquation()
    } else if (gameStore.points > 1) {
      gameStore.setMessage('Wrong guess!', 'red')
      gameStore.reducePoints()
    } else {
      gameStore.setMessage('Game over!', 'red')
      gameStore.points = 0
    }
  }

  const resetGameLocal = () => {
    gameStore.restartGame()
    getNewEquation()
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault()
    }
  }

  onMounted(() => {
    getNewEquation()
    setTimeout(() => {
      checkBoxRef.value?.focus()
    }, 0)
    window.addEventListener('keydown', handleKeyDown)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('keydown', handleKeyDown)
  })
</script>
