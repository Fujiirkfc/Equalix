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
        <section class="relative flex flex-col items-center gap-7 top-2/3">
            <router-link 
                :to="{name:'game'}" 
                class="common-button">
                Start game
            </router-link>
            <router-link 
                :to="{name:'credits'}"
                class="common-button">
                Credits
            </router-link>
        </section>   
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    
    export default defineComponent({
        name:'home',
    });
</script>

