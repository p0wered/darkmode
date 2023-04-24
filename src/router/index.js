import { createRouter, createWebHashHistory } from 'vue-router'
import { defineAsyncComponent } from "vue"

const routes = [
    {
        path: '/',
        name: 'home',
        component: defineAsyncComponent(() => import('@/pages/HomePage.vue'))
    },
    {
        path: '/categories',
        name: 'categories',
        component: defineAsyncComponent(() => import('@/pages/CategoriesPage.vue'))
    },
    {
        path: '/software',
        name: 'software',
        component: defineAsyncComponent(() => import('@/pages/SoftwarePage.vue'))
    },
    {
        path: '/store',
        name: 'store',
        component: defineAsyncComponent(() => import('@/pages/StorePage.vue'))
    },
    {
        path: '/store/headphones',
        name: 'headphones',
        component: defineAsyncComponent(() => import('@/pages/StorePage.vue'))
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