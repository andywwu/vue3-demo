import { compile } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/user',
    name: 'user',
    redirect: '/user/login',
    component: () => import('../views/Layouts/UserLayout.vue'),
    children: [
      {
        path: '/user/login',
        name: 'login',
        component: () => import('../views/Login/index.vue'),
      },
      {
        path: '/user/register',
        name: 'register',
        component: () => import('../views/Register/index.vue'),
      },
    ],
  },
  {
    path: '/',
    redirect: '/home',
    component: () => import('../views/Layouts/MainLayout.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('../views/Home.vue'),
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
