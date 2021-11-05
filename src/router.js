import Vue from 'vue';
import VueRouter from 'vue-router';
import getUserId from './services/getUserId';
import ChatPage from './pages/ChatPage.vue';
import GreetingPage from './pages/GreetingPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Chat',
    component: ChatPage,
    // meta: {
    //   nickName: true,
    // },
  },
  {
    path: '/greeting',
    name: 'Greeting',
    component: GreetingPage,
    // meta: {
    //   nickName: false,
    // },
  },
  {
    path: '*',
    component: NotFoundPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const isUserExist = getUserId();
  if (to.name !== 'Greeting' && !isUserExist) next({ name: 'Greeting' });
  if (to.name === 'Greeting' && isUserExist) next({ name: 'Chat' });
  else next();
});

export default router;
