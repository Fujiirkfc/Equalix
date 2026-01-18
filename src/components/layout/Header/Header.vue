<template>
  <div
    class="flex flex-wrap px-4 py-4 md:flex-nowrap md:items-center"
  >
    <div class="order-1 md:flex-1">
      <router-link :to="{ name: 'home' }">
        <DefaultButton class="group" size="small">
          <FontAwesomeIcon
            class="text-lightgray group-hover:text-blackout text-xs md:text-2xl lg:text-3xl"
            :icon="faRightFromBracket"
          />
        </DefaultButton>
      </router-link>
    </div>
    <div
      class="order-3 mt-10 w-full md:order-2 md:mt-0 md:w-auto md:flex-1 md:justify-center"
    >
      <h1 class="logo text-2xl md:text-4xl lg:text-5xl">Equalix</h1>
    </div>
    <div
      class="order-2 ml-auto md:order-3 md:flex md:flex-1 md:justify-end"
    >
      <Scores :points="currentPoints" :score="currentScore" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
  import { ref } from 'vue'
  import DefaultButton from '../../common/DefaultButton/DefaultButton.vue'
  import Scores from '../Scores/Scores.vue'

  // md:flex-initial
  // md:text-left
  // md:items-center
  const currentPoints = ref(30)
  const currentScore = ref(0)
</script>
