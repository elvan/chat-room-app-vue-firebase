import { createRouter, createWebHistory } from 'vue-router';
import Chatroom from '../views/Chatroom.vue';
import Welcome from '../views/Welcome.vue';

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
