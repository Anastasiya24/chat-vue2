import Vue from 'vue';
import VueRouter from 'vue-router';
import ChatPage from './pages/ChatPage.vue';
import GreetingPage from './pages/GreetingPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Chat',
    component: ChatPage,
  },
  {
    path: '/greeting',
    name: 'Greeting',
    component: GreetingPage,
  },
  {
    path: "*",
    component: NotFoundPage,
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
