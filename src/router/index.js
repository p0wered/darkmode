import { createRouter, createWebHashHistory } from 'vue-router'
import { defineAsyncComponent } from "vue"

const routes = [
    {
        path: '/',
        name: 'home',
        component: defineAsyncComponent(() => import('@/pages/HomePage.vue'))
    },
    {
        path: '/hardware',
        name: 'hardware',
        component: defineAsyncComponent(() => import('@/pages/HardwarePage.vue'))
    },
    {
        path: '/accessories',
        name: 'accessories',
        component: defineAsyncComponent(() => import('@/pages/AccessoriesPage.vue'))
    },
    {
        path: '/services',
        name: 'services',
        component: defineAsyncComponent(() => import('@/pages/ServicesPage.vue'))
    },
    {
        path: '/about',
        name: 'about',
        component: defineAsyncComponent(() => import('@/pages/AboutPage.vue'))
    },
    {
        path: '/account',
        name: 'account',
        component: defineAsyncComponent(() => import('@/pages/AboutPage.vue'))
    },
    {
        path: '/wishlist',
        name: 'wishlist',
        component: defineAsyncComponent(() => import('@/pages/WishlistPage.vue'))
    },
    {
        path: '/cart',
        name: 'cart',
        component: defineAsyncComponent(() => import('@/pages/CartPage.vue'))
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