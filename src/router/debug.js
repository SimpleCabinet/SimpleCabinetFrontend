export default [
      {
        path: '/debug/refresh',
        name: 'refresh',
        component: () => import('../views/debug/RefreshView.vue'),
      },
      {
        path: '/debug/logout',
        name: 'logout',
        component: () => import('../views/debug/LogoutView.vue'),
      },
]