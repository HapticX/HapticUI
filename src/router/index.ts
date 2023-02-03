import { createRouter, createWebHashHistory } from 'vue-router';

import MainPage from '../pages/mainPage.vue';

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
        path: '/',
        component: MainPage
    }]
});
