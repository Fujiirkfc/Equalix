<template>
  <div
    class="bg-darkgray font-ps2p flex min-h-screen flex-col items-center justify-center gap-[4vw]"
  >
    <h1 class="logo text-center">Equalix</h1>
    <div
      class="text-lightgray relative flex flex-col items-center gap-7 px-2 text-xs md:text-base lg:text-3xl"
    >
      <h2 class="subtitle">CREDITS</h2>
      <p class="text-center leading-relaxed text-wrap">
        Equalix Math Game <br />
        Developed by: FujiiRkfc <br />
        Tech Stack: Vue 3(TS), Tailwind
      </p>
      <router-link :to="{ name: 'home' }">
        <DefaultButton>Main menu</DefaultButton>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
  import DefaultButton from '../components/common/DefaultButton/DefaultButton.vue'
</script>
