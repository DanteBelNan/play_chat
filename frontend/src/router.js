import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import InfoPage from './pages/InfoPage.vue';

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: HomePage, name: 'Home' },
  { path: '/info', component: InfoPage, name: 'Info' }
];

const router = createRouter({
  history: createWebHistory(), 
  routes,
});

export default router;