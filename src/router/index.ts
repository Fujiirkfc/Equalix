import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/home.vue';
import Game from "../views/game.vue";
import Credits from '../views/credits.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            component:Home,
            name:'home'
        },
        {
            path:'/game',
            component: Game,
            name:'game'
        },
        {
            path:'/credits',
            component:Credits,
            name:'credits'
        }
    ],
});

export default router;