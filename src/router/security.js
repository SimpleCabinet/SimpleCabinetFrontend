export default [
      {
        path: '/cabinet/security/enable2fa',
        name: 'enable2fa',
        component: () => import('../views/cabinet/security/Enable2FaView.vue'),
      },
      {
        path: '/cabinet/security/disable2fa',
        name: 'disable2fa',
        component: () => import('../views/cabinet/security/Disable2FaView.vue'),
      },
];