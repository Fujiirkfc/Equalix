<template>
  <input
    type="number"
    :class="baseClasses"
    ref="answerInput"
    v-model="gameStore.userAnswer"
    @keydown.enter="handleEnter"
  />
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useGameStore } from '../../../store/gameStore' // adjust path as needed

  const gameStore = useGameStore()
  const answerInput = ref<HTMLInputElement | null>(null)

  const baseClasses = [
    'text-lightgray',
    'block',
    'max-w-xs',
    'border-4',
    'px-2',
    'py-3',
    'text-center',
    'h-20',
    'w-40',
    'text-xl',
    'md:text-2xl',
    'lg:text-3xl',
  ]

  const emit = defineEmits<{
    submit: []
  }>()

  const handleEnter = () => {
    emit('submit')
  }

  defineExpose({
    focus: () => answerInput.value?.focus(),
  })
</script>
<!-- v-model="userAnswer"
        @keydown.enter="checkAnswer" -->
