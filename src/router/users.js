export default [
  {
    path: '/users',
    name: 'users',
    component: () => import('../views/users/UsersView.vue'),
  },
  {
    path: '/users/by/name/:name',
    name: 'userByName',
    props: true,
    component: () => import('../views/users/UserByUsername.vue'),
  },
  {
    path: '/users/by/id/:id',
    name: 'userById',
    props: true,
    component: () => import('../views/users/UserById.vue'),
  },
  {
    path: '/users/by/uuid/:uuid',
    name: 'userByUuid',
    props: true,
    component: () => import('../views/users/UserByUUID.vue'),
  },
];