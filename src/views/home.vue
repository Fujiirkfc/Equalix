<template>
  <div
    class="bg-darkgray font-ps2p flex min-h-screen flex-col items-center justify-center gap-[4vw]"
  >
    <h1 class="logo">Equalix</h1>
    <section
      class="relative top-2/3 flex flex-col items-center gap-7"
    >
      <router-link :to="{ name: 'game' }">
        <DefaultButton>Start game</DefaultButton>
      </router-link>

      <router-link :to="{ name: 'credits' }" class="common-button">
        <DefaultButton>Credits</DefaultButton>
      </router-link>
    </section>
  </div>
</template>

<script setup lang="ts">
  import DefaultButton from '../components/common/DefaultButton/DefaultButton.vue'
</script>
