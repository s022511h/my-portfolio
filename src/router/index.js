import { createRouter, createWebHistory } from 'vue-router'
import { authStore } from '../stores/firebaseAuth'

// Main pages
const Home = () => import('@/components/Home.vue')
const About = () => import('@/components/About.vue')  
const Contact = () => import('@/components/Contact.vue')
const Blog = () => import('@/components/Blog.vue')
const Pricing = () => import('@/components/Pricing.vue')

// Work & Portfolio
const Work = () => import('@/components/Work.vue')
const Results = () => import('@/components/Results.vue')
const Portfolio = () => import('@/components/Portfolio.vue')

// Services
const Services = () => import('@/components/Services.vue')  

// Launch Sites
const LaunchSites = () => import('@/components/LaunchSites.vue')

// Site Audit
const SiteAudit = () => import('@/views/SiteAudit.vue')

// Legacy/Utility
const Resume = () => import('@/components/Resume.vue')  

// Legal
const Privacy = () => import('@/views/Privacy.vue')
const Terms = () => import('@/views/Terms.vue')

// Auth pages
const Register = () => import('@/views/Register.vue')
const Login = () => import('@/views/Login.vue')
const Profile = () => import('@/views/Profile.vue')
const VerifyEmail = () => import('@/views/VerifyEmail.vue')
const ForgotPassword = () => import('@/views/ForgotPassword.vue')
const AdminDashboard = () => import('@/views/AdminDashboard.vue')

// Service pages
const GoogleAdsService = () => import('@/components/services/GoogleAds.vue')
const SEOService       = () => import('@/components/services/SEO.vue')
const WebDesignService = () => import('@/components/services/WebDesign.vue')

// 404
const NotFound = () => import('@/components/NotFound.vue')
// const AreaStokeOnTrent = () => import('@/components/areas/StokeOnTrent.vue')
// const AreaNewcastleUnderLyme = () => import('@/components/areas/NewcastleUnderLyme.vue')
// const AreaStafford = () => import('@/components/areas/Stafford.vue')
// const AreaStaffordshire = () => import('@/components/areas/Staffordshire.vue')
// const AreaCrewe = () => import('@/components/areas/Crewe.vue')

const routes = [
  // Main pages
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/blog', name: 'Blog', component: Blog },
  { path: '/pricing', name: 'Pricing', component: Pricing },
  
  // Work & Case Studies
  { path: '/work', name: 'Work', component: Work },
  { path: '/case-studies', name: 'Results', component: Results },
  { path: '/results', redirect: '/case-studies' },
  
  // Portfolio (legacy/dev projects)
  { path: '/portfolio', name: 'Portfolio', component: Portfolio },
  // { path: '/projects', name: 'Projects', component: Projects },
  
  // Services
  { path: '/services',            name: 'Services',         component: Services },
  { path: '/services/google-ads', name: 'GoogleAdsService', component: GoogleAdsService },
  { path: '/services/seo',        name: 'SEOService',       component: SEOService },
  { path: '/services/web-design', name: 'WebDesignService', component: WebDesignService },
  
  // Launch Sites
  { path: '/launch-sites', name: 'LaunchSites', component: LaunchSites },
  { path: '/launch', redirect: '/launch-sites' },
  { path: '/600-websites', redirect: '/launch-sites' },
  { path: '/7-day-websites', redirect: '/launch-sites' },
  
  // Area/Location pages - UNCOMMENT WHEN CREATED:
  // { path: '/areas/stoke-on-trent', name: 'AreaStokeOnTrent', component: AreaStokeOnTrent },
  // { path: '/areas/newcastle-under-lyme', name: 'AreaNewcastleUnderLyme', component: AreaNewcastleUnderLyme },
  // { path: '/areas/stafford', name: 'AreaStafford', component: AreaStafford },
  // { path: '/areas/staffordshire', name: 'AreaStaffordshire', component: AreaStaffordshire },
  // { path: '/areas/crewe', name: 'AreaCrewe', component: AreaCrewe },
  
  // Site Audit (lead gen tool)
  { path: '/audit', name: 'SiteAudit', component: SiteAudit },
  { path: '/website-audit', redirect: '/audit' },
  { path: '/free-audit', redirect: '/audit' },
  
  // Legacy/Utility pages
  { path: '/resume', name: 'Resume', component: Resume }, 
  { path: '/cv', redirect: '/resume' },
  
  // Legal
  { path: '/privacy', name: 'Privacy', component: Privacy },
  { path: '/terms', name: 'Terms', component: Terms },
  
  // Auth pages
  { path: '/register', name: 'Register', component: Register },
  { path: '/login', name: 'Login', component: Login },
  { path: '/verify-email', name: 'VerifyEmail', component: VerifyEmail },
  { path: '/forgot-password', name: 'ForgotPassword', component: ForgotPassword },
  
  // Protected pages
  { path: '/profile', name: 'Profile', component: Profile, meta: { requiresAuth: true } },
  { path: '/admin', name: 'AdminDashboard', component: AdminDashboard, meta: { requiresAuth: true, requiresAdmin: true } },
  
  // Catch-all 404 — must stay last
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Handle hash links (e.g., #results)
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    
    // Restore scroll position on back/forward
    if (savedPosition) {
      return savedPosition
    }
    
    // Scroll to top for new navigation
    return new Promise((resolve) => {
      window.scrollTo(0, 0)
      setTimeout(() => {
        window.scrollTo(0, 0)
        resolve({ top: 0, left: 0 })
      }, 0)
    })
  }
})

router.beforeEach((to, from, next) => {
  // Public by default. Only routes declaring meta.requiresAuth are guarded.
  if (!to.meta.requiresAuth) {
    next()
    return
  }

  if (!authStore.isAuthenticated) {
    next('/login')
    return
  }

  if (to.meta.requiresAdmin && authStore.user?.id !== 1) {
    next('/profile')
    return
  }

  next()
})

export default router