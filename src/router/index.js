import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('@/components/Home.vue')
const Portfolio = () => import('@/components/Portfolio.vue')
const Projects = () => import('@/components/Projects.vue')
const Contact = () => import('@/components/Contact.vue')

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/portfolio', name: 'Portfolio', component: Portfolio },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/contact', name: 'Contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBeahviour() {
    return { top: 0 }
  }
})

export default router
