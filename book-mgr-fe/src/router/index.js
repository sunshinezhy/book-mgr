import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/auth',
    name: 'Auth',
    component: () => import(/* webpackChunkName: "Auth" */ '../views/Auth/index.vue'),
  },
  {
    path: '/',
    name: 'BasicLaout',
    component: () => import(/* webpackChunkName: "BasicLaout" */ '../layout/BasicLaout/index.vue'),
    children: [
      {
        path: '/books',
        name: 'Books',
        component: () => import(/* webpackChunkName: "Books" */ '../views/Books/index.vue'),
      },
      // { 
      //   path: '/users',
      //   name: 'User',
      //   component: () => import(/* webpackChunkName: "User" */ '../views/User/index.vue'),
      // },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
