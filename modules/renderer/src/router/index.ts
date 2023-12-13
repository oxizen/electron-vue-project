import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../view/pages/PageHome.vue';
import Other from '../view/pages/PageOther.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/other',
      name: 'Other',
      component: Other
    },
  ]
});

export default router;
