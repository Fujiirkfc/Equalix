<template>
  <div
    class="bg-lightgray text-blackout flex h-30 w-screen items-center justify-center text-center text-3xl whitespace-normal md:h-70 md:text-6xl xl:text-8xl"
  >
    {{ gameStore.equation || '...' }}
  </div>
</template>

<script setup lang="ts">
  import { useGameStore } from '../../../store/gameStore' // Adjust path based on your structure

  const gameStore = useGameStore()
</script>
