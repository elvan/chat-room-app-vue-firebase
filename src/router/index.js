import { createRouter, createWebHistory } from 'vue-router';
import { projectAuth } from '../firebase/config';
import Chatroom from '../views/Chatroom.vue';
import Welcome from '../views/Welcome.vue';

// auth guards
const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  console.log('current user in auth guard: ', user);
  if (!user) {
    next({ name: 'Welcome' });
  } else {
    next();
  }
};

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
    beforeEnter: requireAuth,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
