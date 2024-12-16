import { createRouter, createWebHistory } from 'vue-router';
import AboutPage from '../page/AboutPage.vue';
import HomePage from '../page/HomePage.vue';
import LowonganPage from '../page/LowonganPage.vue';
import NotFoundPage from '../page/NotFoundPage.vue';

const routes = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/about', name: 'About', component: AboutPage },
    { path: '/lowongan', name: 'Lowongan', component: LowonganPage },
    // Menangkap semua rute yang tidak cocok
    { path: '/:pathMatch(.*)*', name: 'NotFoundPage', component: NotFoundPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
