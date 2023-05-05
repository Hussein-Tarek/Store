import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'

import allProducts from "./components/pages/allProducts.vue"
import productDetails from "./components/pages/productDetails.vue"
import home from "./components/pages/home.vue"
import notFound from "./components/pages/notFound.vue"
import addProduct from "./components/pages/addProduct.vue"
import editProduct from './components/pages/edit.vue'

import './assets/main.css'


const routes = [
    {
        path: "/",
        component: home,
        alias: "/home"
    },
    {
        path: "/products",
        component: allProducts,
    },
    {
        path: "/products/:id",
        component: productDetails
    },
    {
        path: "/add",
        component: addProduct
    },
    {
        path: "/edit/:id",
        component: editProduct
    },
    { path: "/:NotFound(.*)*", component: notFound, meta: { hideNavbar: true } },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')
