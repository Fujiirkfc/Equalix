<template>
  <div
    class="text-lightgray flex flex-col items-start gap-1 text-xs md:text-base lg:text-2xl"
  >
    <div class="flex items-center gap-2">
      <p>💯Points:</p>
      <span class="font-bold">{{ gameStore.points }}</span>
    </div>
    <div class="flex items-center gap-2">
      <p>🥇Score:</p>
      <span class="font-bold">{{ gameStore.score }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useGameStore } from '../../../store/gameStore'

  const gameStore = useGameStore()
  interface ScoresProps {
    points: number
    score: number
  }

  const props = withDefaults(defineProps<ScoresProps>(), {
    points: 30,
    score: 0,
  })
</script>
