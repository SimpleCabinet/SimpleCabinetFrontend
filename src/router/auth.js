export default [
      {
        path: '/auth',
        name: 'auth',
        component: () => import('../views/AuthView.vue'),
      },
      {
        path: '/register',
        name: 'register',
        component: () => import('../views/RegisterView.vue'),
      },
]