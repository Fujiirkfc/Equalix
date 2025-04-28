<template>
    <div class="fixed w-full h-screen bg-darkgray font-ps2p overflow-hidden">
        <div class="grid grid-cols-3 w-full items-center">
            <div class="flex justify-start xs:ml-1 sm:ml-4 md:ml-10 mt-12">
                <router-link
                :to="{name:'home'}" 
                class="common-button flex items-center justify-center p-2 
                xs:w-10 xs:h-10 
                sm:w-12 sm:h-12 
                md:w-16 md:h-16">
                <svg class="
                font-ps2p
                w-10 h-10 
                text-gray-800 
                dark:text-lightgray" 
                aria-hidden="true" 
                xmlns="http://www.w3.org/2000/svg" 
                width="30" 
                height="30" 
                fill="none" 
                viewBox="0 0 24 24">
                <path stroke="currentColor" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"/>
                </svg>
                </router-link>
            </div>

            <div class="flex justify-center items-center mt-15">
                <h1 class="
                logo
                
                xs:text-[20px] 
                sm:text-[22px] 
                md:text-[24px]
                3xl:text-[38px] 
                5xl:text-[50px]
                ">
                Equalix
                </h1>
            </div>

            <div class="
            absolute 
            flex
            flex-col
            items-start
            xs:mr-0 sm:mr-0 3xl:mr-4
            mt-15
            text-lightgray

            3xl:static 3xl:transform-none 3xl:left-auto 3xl:items-end
            max-3xl:left-1/2 max-3xl:transform max-3xl:-translate-x-1/2 max-3xl:top-20

            md:text-[18px]
            3xl:text-[20px] 
            5xl:text-[25px]
            ">
                <div class="flex flex-wrap justify-start 3xl:justify-end max-w-full">
                    <p class="whitespace-nowrap mr-1">💯Score:</p>
                    <span class="block">{{ score }}</span>
                </div>
                <div class="flex flex-wrap justify-start 3xl:justify-end max-w-full">
                    <p class="whitespace-nowrap mr-1">🥇Highscore:</p>
                    <span class="block"> {{ highScore }}</span>
                </div>
            </div>
        </div>
        
        <div class="equation">
            {{ equation }}
        </div>

        <div class="
        absolute 
        inset-x-0 
        flex 
        flex-col 
        items-center 
        gap-5 
        sm:bottom-30
        md:bottom-10
        3xl:bottom-6
        5xl:bottom-5
        
        ">
            <div class="
            text-center 
            h-8 
            mb-6
            sm:text-[12px]
            md:text-[14px]
            3xl:text-[24px]
            5xl:text-[32px]" 
            :class="messageColor === 'green' ? 'text-green-500' : 'text-red-500'">
                {{ message }}
            </div>
            <input 
                type="number" 
                class="checkbox text-lightgray" 
                v-model="userAnswer"
                @keydown.enter="checkAnswer"
                ref="answerInput"/>
            <button @click="checkAnswer" class="common-button">answer</button>
            <button @click="resetGameLocal" class="common-button">restart</button>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref, onMounted, computed, onBeforeUnmount } from 'vue';
    import { gameState, restartGame } from '../store/gameStore';
    import { getEquation } from '../utils/randomUtils'

    // TODO: Apply responsive design to checkbox and message

    export default defineComponent({
        name: 'GameView',
        setup() {
            const answerInput = ref<HTMLInputElement | null>(null);
            const equation = ref('');

            // gameState values in game
            const score = computed(()=> gameState.score);
            const highScore = computed(()=> gameState.highscore);
            const userAnswer = computed({
                get: () => gameState.userAnswer,
                set: (value) => {gameState.userAnswer = value}
            });
            const message = computed(()=> gameState.message);
            const messageColor = computed(()=> gameState.messageColor);

            // game functions (start, get equation, check answer and reset)
            const getNewEquation = () => {
                equation.value = getEquation();
                userAnswer.value = '';
                if(answerInput.value) {
                    answerInput.value.focus();
                }
            };

            const displayMessage = (msg: string, color: string) => {
                gameState.message = msg;
                gameState.messageColor = color;
            };

            const checkAnswer = () => {
                const correctAnswer = Number(eval(equation.value));
                const answer = Number(userAnswer.value);
                
                if(isNaN(answer) || userAnswer.value === '') {
                    displayMessage('No number or invalid type!', 'red');
                    return;
                }

                if(answer === correctAnswer) {
                    displayMessage('Correct answer!', 'green');
                    gameState.highscore += gameState.score;
                    gameState.score = 30;
                    getNewEquation();
                } else if (gameState.score > 1) {
                    displayMessage('Wrong guess!', 'red');
                    gameState.score--;
                } else {
                    displayMessage('Game over!', 'red');
                    gameState.score = 0;
                }
            };

            // TODO: implement highscore maintaince logic (only changes highscore when higher than previous highscore)
            const resetGameLocal = () => {
                restartGame();
                getNewEquation();
            };

            // handle events
            const handleKeyDown = (e:KeyboardEvent) => {
                if (e.key === 'Escape') {
                    e.preventDefault();
                }
            };

            onMounted(() => {
                getNewEquation();
                if (answerInput.value) {
                    answerInput.value.focus();
                }
                window.addEventListener('keydown', handleKeyDown);
            });

            onBeforeUnmount(()=> {
                window.removeEventListener('keydown', handleKeyDown);
            });

            return {
                score,
                highScore,
                equation,
                userAnswer,
                message,
                messageColor,
                answerInput,
                checkAnswer,
                resetGameLocal
            };
        }
    });
</script>