export default [
    {
        path: '/shop/group',
        name: 'shopGroup',
        component: () => import('../views/shop/GroupShopView.vue'),
    },
    {
        path: '/shop/item',
        name: 'shopItem',
        component: () => import('../views/shop/ItemShopView.vue'),
    }
]