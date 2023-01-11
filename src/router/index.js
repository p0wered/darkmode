import { createRouter, createWebHashHistory } from 'vue-router'
import { defineAsyncComponent } from "vue"

const routes = [
    {
        path: '/',
        name: 'home',
        component: defineAsyncComponent(() => import('@/pages/HomePage'))
    },
    {
        path: '/hardware',
        name: 'hardware',
        component: defineAsyncComponent(() => import('@/pages/HardwarePage'))
    },
    {
        path: '/accessories',
        name: 'accessories',
        component: defineAsyncComponent(() => import('@/pages/AccessoriesPage'))
    },
    {
        path: '/services',
        name: 'services',
        component: defineAsyncComponent(() => import('@/pages/ServicesPage'))
    },
    {
        path: '/about',
        name: 'about',
        component: defineAsyncComponent(() => import('@/pages/AboutPage'))
    },
    {
        path: '/account',
        name: 'account',
        component: defineAsyncComponent(() => import('@/pages/AboutPage'))
    },
    {
        path: '/wishlist',
        name: 'wishlist',
        component: defineAsyncComponent(() => import('@/pages/WishlistPage'))
    },
    {
        path: '/cart',
        name: 'cart',
        component: defineAsyncComponent(() => import('@/pages/CartPage'))
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    // eslint-disable-next-line no-unused-vars
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    },
})
export default router