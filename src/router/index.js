import { createRouter,createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/',
            name:'home',
            component: () => import('../views/ViewHome.vue')
        },
        {
            path:'/cart',
            name:'cart',
            component: () => import('../views/CartView.vue')
        },
        {
            path:'/guitar/:id',
            name:'guitar',
            component: () => import('../views/GuitarView.vue')
        },
    ]
})
export default router