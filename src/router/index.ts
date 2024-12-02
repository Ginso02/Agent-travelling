import { createWebHashHistory, createRouter } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/page/home/home.vue'),
    },
    {
        path: '/goods',
        name: 'goods',
        component: () => import('@/page/goodsDetails/index.vue'),
    },
    {
        path: '/complain',
        name: 'complain',
        component: () => import('@/page/complainPage/index.vue'),
    },
]

//创建路由实例
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;