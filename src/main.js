import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import '@/assets/tailwind.css'


import App from './App.vue'
import AutoresComp from './components/AutoresComp.vue'
import LivrosComp from './components/LivrosComp.vue'

const routes = [
  { path: '/autores', component: AutoresComp },
  { path: '/livros', component: LivrosComp },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).use().mount('#app')
