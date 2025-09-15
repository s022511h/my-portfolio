import { createRouter, createWebHistory } from 'vue-router'
import { authStore } from '../stores/firebaseAuth'

const Home = () => import('@/components/Home.vue')
const Portfolio = () => import('@/components/Portfolio.vue')
const Projects = () => import('@/components/Projects.vue')
const Contact = () => import('@/components/Contact.vue')
const About = () => import('@/components/About.vue')  
const Resume = () => import('@/components/Resume.vue')  
const Blog = () => import('@/components/Blog.vue')
const Services = () => import('@/components/Services.vue')  
const Privacy = () => import('@/views/Privacy.vue')
const Terms = () => import('@/views/Terms.vue')
const Register = () => import('@/views/Register.vue')
const Login = () => import('@/views/Login.vue')
const Profile = () => import('@/views/Profile.vue')
const VerifyEmail = () => import('@/views/VerifyEmail.vue')
const ForgotPassword = () => import('@/views/ForgotPassword.vue')
const AdminDashboard = () => import('@/views/AdminDashboard.vue')
const SiteAudit = () => import('@/views/SiteAudit.vue') 

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/portfolio', name: 'Portfolio', component: Portfolio },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/about', name: 'About', component: About },
  { path: '/resume', name: 'Resume', component: Resume }, 
  { path: '/cv', redirect: '/resume' }, 
  { path: '/blog', name: 'Blog', component: Blog },
  { path: '/services', name: 'Services', component: Services },
  { path: '/privacy', name: 'Privacy', component: Privacy },
  { path: '/terms', name: 'Terms', component: Terms },
  { path: '/register', name: 'Register', component: Register },
  { path: '/login', name: 'Login', component: Login },
  { path: '/verify-email', name: 'VerifyEmail', component: VerifyEmail },
  { path: '/forgot-password', name: 'ForgotPassword', component: ForgotPassword },
  { path: '/profile', name: 'Profile', component: Profile, meta: { requiresAuth: true } },
  { path: '/admin', name: 'AdminDashboard', component: AdminDashboard, meta: { requiresAuth: true, requiresAdmin: true } },
  { path: '/audit', name: 'SiteAudit', component: SiteAudit }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
  return new Promise((resolve) => {
    window.scrollTo(0, 0);
    
    setTimeout(() => {
      window.scrollTo(0, 0);
      resolve({ top: 0, left: 0 });
    }, 0);
  });
}
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/login');
    return;
  }
  
  if (to.meta.requiresAdmin && authStore.user?.id !== 1) {
    next('/profile');
    return;
  }
  
  next();
});

export default router