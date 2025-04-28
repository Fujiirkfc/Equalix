<template>
    <div class="absolute w-full h-screen bg-darkgray font-ps2p ">
        <h1 class="    
            logo
            absolute
            top-1/3

            xs:text-[40px] 
            sm:text-[46px] 
            md:text-[54px]
            3xl:text-[90px] 
            5xl:text-[128px]">
            Equalix
        </h1>
      <div class="
        relative 
        flex 
        flex-col 
        items-center 
        gap-7 
        mt-120
        text-lightgray 
        whitespace-nowrap

        sm:text-[14px]
        md:text-[14px]
        3xl:text-[28px]
        5xl:text-[36px]
        ">
        <h2>Credits</h2>
        <p>Equalix Math Game</p>
        <p>Developed by: fujiiRkfc</p>
        <p>Tech Stack: Vue 3, Tailwind, Typescript</p>
        <router-link
            :to="{name:'home'}"
            class="common-button">
            Main menu
        </router-link>
      </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    
    // TODO: Apply responsive design to credit text
    export default defineComponent({
        name: 'CreditsScreen'
    })
</script>