<template>
  <header class="app-header">
    <div class="logo-container">
      <router-link to="/" class="logo-link" aria-label="Go to homepage">
        <img
          :src="require('@/assets/webp/logo-n15labs-white_comp.webp')"
          alt="N15 Labs Logo"
          class="logo"
          loading="eager"
          width="110"
          height="110"
          fetchpriority="high"
        />
      </router-link>
      <h1 class="brand">N15 Labs</h1>
    </div>

    <nav class="nav-links desktop-only" aria-label="Main navigation">
      <router-link to="/">Home</router-link>
      <router-link to="/launch-sites" class="launch-link">£600 Websites</router-link>
      <router-link to="/audit" class="audit-link">Free Audit</router-link>
      <router-link to="/services">Services</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/blog">Blog</router-link>
      <router-link to="/contact">Contact</router-link>
      
      <div v-if="!authStore.isAuthenticated" class="auth-links">
        <router-link to="/login" class="auth-link">Sign In</router-link>
        <router-link to="/register" class="auth-link register-btn">Sign Up</router-link>
      </div>
      <div v-else class="user-menu">
        <router-link to="/profile" class="user-link">
          {{ authStore.user?.firstName }} {{ authStore.user?.lastName }}
        </router-link>
        <router-link 
          v-if="authStore.user?.isAdmin" 
          to="/admin" 
          class="user-link admin-link"
          aria-label="Go to admin dashboard"
        >
          Admin Dashboard
        </router-link>
        <button @click="handleLogout" class="logout-btn" aria-label="Sign out of account">Sign Out</button>
      </div>
    </nav>

    <button class="hamburger" @click="menuOpen = !menuOpen" aria-label="Toggle Menu">
      <span :class="{ open: menuOpen }"></span>
    </button>

    <transition name="fade">
      <div v-if="menuOpen" class="mobile-menu-overlay">
        <div class="mobile-menu" role="navigation" aria-label="Mobile menu">
          <button class="close-menu" @click="menuOpen = false" aria-label="Close Menu">
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
          
          <!-- Featured Mobile Links -->
          <div class="mobile-featured">
            <router-link @click="handleNavClick" to="/launch-sites" class="mobile-launch-link">
              🚀 £600 Websites in 7 Days
            </router-link>
            <router-link @click="handleNavClick" to="/audit" class="mobile-audit-link">
              📊 Free Website Audit
            </router-link>
          </div>
          
          <router-link @click="handleNavClick" to="/">Home</router-link>
          <router-link @click="handleNavClick" to="/services">Services</router-link>
          <router-link @click="handleNavClick" to="/projects">Projects</router-link>
          <router-link @click="handleNavClick" to="/about">About</router-link>
          <router-link @click="handleNavClick" to="/portfolio">Skills</router-link>
          <router-link @click="handleNavClick" to="/blog">Blog</router-link>
          <router-link @click="handleNavClick" to="/cv">CV</router-link>
          <router-link @click="handleNavClick" to="/contact">Contact</router-link>
          
          <div v-if="!authStore.isAuthenticated" class="mobile-auth-links">
            <router-link @click="handleNavClick" to="/login" class="mobile-auth-link">Sign In</router-link>
            <router-link @click="handleNavClick" to="/register" class="mobile-auth-link register">Sign Up</router-link>
          </div>
          <div v-else class="mobile-user-menu">
            <router-link @click="handleNavClick" to="/profile" class="mobile-user-link">
              My Profile
            </router-link>
            <router-link 
              v-if="authStore.user?.isAdmin"
              @click="handleNavClick" 
              to="/admin" 
              class="mobile-user-link admin-link"
              aria-label="Go to admin dashboard"
            >
              Admin Dashboard
            </router-link>
            <button @click="handleMobileLogout" class="mobile-logout-btn" aria-label="Sign out of account">Sign Out</button>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
import { authStore } from '../stores/firebaseAuth.js'

export default {
  name: 'AppHeader',
  data() {
    return {
      menuOpen: false,
      authStore 
    }
  },
  methods: {
    handleNavClick() {
      this.menuOpen = false
    },
    
    async handleLogout() {
      await authStore.logout();
      this.$router.push('/');
    },
    
    async handleMobileLogout() {
      await authStore.logout();
      this.menuOpen = false;
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 1px solid #374151;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  width: 100%;
  height: 100px;
  box-sizing: border-box;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo-link {
  display: inline-block;
  transition: transform 0.3s ease;
}

.logo-link:hover {
  transform: scale(1.05);
}

.logo {
  width: 110px;
  height: auto;
  object-fit: contain;
  max-width: 100%;
  display: block;
  image-rendering: auto;
  transition: all 0.3s ease;
}

.brand {
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 1px;
  font-family: 'Orbitron', sans-serif;
  color: #ffffff;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav-links a {
  color: #f4f4f5;
  font-weight: 500;
  text-decoration: none;
  font-size: 1rem;
  position: relative;
  transition: all 0.3s ease;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  white-space: nowrap;
}

.nav-links a:hover {
  color: #ffffff;
  background: rgba(59, 130, 246, 0.1);
  transform: translateY(-1px);
}

.nav-links a.router-link-active {
  color: #3b82f6;
  background: rgba(59, 130, 246, 0.15);
}

/* Special styling for Launch Sites link */
.launch-link {
  background: linear-gradient(135deg, #10b981, #059669) !important;
  color: white !important;
  font-weight: 600 !important;
  animation: subtle-pulse 3s ease-in-out infinite;
}

.launch-link:hover {
  transform: translateY(-2px) !important;
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3) !important;
}

/* Special styling for Audit link */
.audit-link {
  border: 2px solid #3b82f6 !important;
  color: #3b82f6 !important;
  font-weight: 600 !important;
}

.audit-link:hover {
  background: rgba(59, 130, 246, 0.2) !important;
  color: white !important;
}

@keyframes subtle-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.9; }
}

.nav-links a::after {
  content: '';
  position: absolute;
  width: 0%;
  height: 2px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  transition: width 0.3s ease;
}

.nav-links a:hover::after,
.nav-links a.router-link-active::after {
  width: 80%;
}

/* Don't show underline for special buttons */
.launch-link::after,
.audit-link::after {
  display: none !important;
}

.auth-links {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 1rem;
}

.auth-link {
  color: #f4f4f5;
  font-weight: 500;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.auth-link:hover {
  color: #ffffff;
  background: rgba(59, 130, 246, 0.1);
}

.auth-link.register-btn {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  color: white;
}

.auth-link.register-btn:hover {
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  transform: translateY(-1px);
}

.user-menu {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 1rem;
}

.user-link {
  color: #3b82f6;
  font-weight: 600;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.1);
}

.logout-btn {
  background: #e53e3e;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.logout-btn:hover {
  background: #c53030;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.hamburger:hover {
  background: rgba(255, 255, 255, 0.1);
}

.hamburger span,
.hamburger span::before,
.hamburger span::after {
  content: '';
  display: block;
  width: 24px;
  height: 3px;
  background: #ffffff;
  transition: all 0.3s ease;
  position: relative;
  border-radius: 2px;
}

.hamburger span.open {
  transform: rotate(45deg);
  background: #3b82f6;
}

.hamburger span.open::before {
  transform: rotate(90deg);
  top: 0;
}

.hamburger span.open::after {
  opacity: 0;
}

.hamburger span::before,
.hamburger span::after {
  content: '';
  position: absolute;
  left: 0;
  width: 24px;
  height: 3px;
  background: #ffffff;
  border-radius: 2px;
}

.hamburger span::before {
  top: -8px;
}

.hamburger span::after {
  top: 8px;
}

.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(10, 10, 10, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
  backdrop-filter: blur(10px);
  touch-action: none;
  overflow: hidden;
}

.mobile-menu {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: center;
  width: 100%;
  padding: 3rem 2rem 2rem 2rem;
  max-width: 400px;
  max-height: 85vh;
  overflow-y: auto;
  background: linear-gradient(135deg, #1a1a1a, #2a2a2a);
  border-radius: 20px;
  border: 1px solid #374151;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
}

/* Mobile Featured Links */
.mobile-featured {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #374151;
  margin-bottom: 0.5rem;
}

.mobile-launch-link {
  background: linear-gradient(135deg, #10b981, #059669) !important;
  color: white !important;
  font-weight: 700 !important;
  padding: 1rem !important;
  text-align: center;
  border-radius: 12px;
  font-size: 1.125rem !important;
  text-decoration: none;
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
}

.mobile-launch-link:hover {
  transform: translateY(-2px) !important;
  box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4) !important;
}

.mobile-audit-link {
  border: 2px solid #3b82f6 !important;
  color: #3b82f6 !important;
  background: rgba(59, 130, 246, 0.1) !important;
  font-weight: 700 !important;
  padding: 1rem !important;
  text-align: center;
  border-radius: 12px;
  font-size: 1.125rem !important;
  text-decoration: none;
}

.mobile-audit-link:hover {
  background: rgba(59, 130, 246, 0.2) !important;
  color: white !important;
}

.mobile-menu a {
  font-size: 1.125rem;
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  padding: 0.625rem 2rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  width: 100%;
  text-align: center;
}

.mobile-menu a:hover {
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
}

.mobile-auth-links {
  border-top: 1px solid #374151;
  padding-top: 1rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
}

.mobile-auth-link {
  font-size: 1.125rem;
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  padding: 0.625rem 2rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  text-align: center;
}

.mobile-auth-link:hover {
  background: rgba(59, 130, 246, 0.2);
}

.mobile-auth-link.register {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
}

.mobile-user-menu {
  border-top: 1px solid #374151;
  padding-top: 1rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
}

.mobile-user-link {
  font-size: 1.125rem;
  color: #3b82f6;
  text-decoration: none;
  font-weight: 600;
  padding: 0.625rem 2rem;
  border-radius: 12px;
  background: rgba(59, 130, 246, 0.1);
  text-align: center;
}

.mobile-logout-btn {
  background: #e53e3e;
  color: white;
  border: none;
  padding: 0.625rem 2rem;
  border-radius: 12px;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.mobile-logout-btn:hover {
  background: #c53030;
}

.close-menu {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 12px;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.close-menu:hover {
  background: rgba(239, 68, 68, 0.2);
  color: #ef4444;
}

.close-menu svg {
  width: 24px;
  height: 24px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.hamburger:focus,
.close-menu:focus,
.nav-links a:focus,
.logo-link:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

.admin-link {
  background: linear-gradient(135deg, #7c3aed, #a855f7) !important;
  color: white !important;
}

@media (max-width: 1400px) {
  .nav-links {
    gap: 1rem;
  }
  
  .nav-links a {
    font-size: 0.875rem;
    padding: 0.5rem 0.5rem;
  }
  
  .launch-link,
  .audit-link {
    padding: 0.5rem 0.75rem !important;
    font-size: 0.875rem !important;
  }
  
  .auth-links {
    gap: 0.5rem;
  }
  
  .auth-link {
    font-size: 0.875rem;
    padding: 0.375rem 0.75rem;
  }
}

@media (max-width: 1200px) {
  .nav-links {
    gap: 0.75rem;
  }
  
  .nav-links a {
    font-size: 0.8125rem;
    padding: 0.5rem 0.375rem;
  }
  
  .launch-link,
  .audit-link {
    padding: 0.5rem 0.625rem !important;
    font-size: 0.8125rem !important;
  }
  
  .auth-link {
    font-size: 0.8125rem;
    padding: 0.375rem 0.5rem;
  }
}

@media (max-width: 1024px) {
  /* Hide CV and Blog on smaller screens to make room */
  .nav-links a[href="/cv"],
  .nav-links a[href="/blog"],
  .nav-links a[href="/portfolio"] {
    display: none;
  }
}

@media (max-width: 768px) {
  .app-header {
    padding: 1rem 1.5rem;
    height: 90px;
  }
  
  .logo-container {
    gap: 0.75rem;
  }

  .logo {
    width: 90px;
  }

  .brand {
    font-size: 1.5rem;
  }

  .nav-links.desktop-only {
    display: none;
  }

  .hamburger {
    display: flex;
  }
}

@media (max-width: 480px) {
  .app-header {
    padding: 0.75rem 1rem;
    height: 80px; 
  }
  
  .brand {
    display: none;
  }
  
  .logo {
    width: 80px;
  }

  .mobile-menu {
    margin: 1rem;
    padding: 2rem 1.5rem;
    gap: 1rem;
  }

  .mobile-menu a {
    font-size: 1rem;
    padding: 0.5rem 1.5rem;
  }
  
  .mobile-auth-link {
    font-size: 1rem;
    padding: 0.5rem 1.5rem;
  }
  
  .mobile-logout-btn {
    font-size: 1rem;
    padding: 0.5rem 1.5rem;
  }
  
  .mobile-launch-link,
  .mobile-audit-link {
    font-size: 1rem !important;
    padding: 0.75rem !important;
  }
}

.home-container {
  margin-top: 0;
  padding-top: 0;
}

@supports not (padding: env(safe-area-inset-top)) {
  .app-header {
    padding: 1rem 2rem;
    min-height: 80px;
  }
  
  @media (max-width: 768px) {
    .app-header {
      padding: 1rem 1.5rem;
      min-height: 70px;
    }
  }
  
  @media (max-width: 480px) {
    .app-header {
      padding: 0.75rem 1rem;
      min-height: 60px;
    }
  }
}

@media (prefers-reduced-motion: reduce) {
  .logo-link,
  .hamburger,
  .nav-links a,
  .mobile-menu a,
  .close-menu {
    transition: none;
  }
  
  .nav-links a::after {
    transition: none;
  }
  
  @keyframes subtle-pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 1; }
  }
}
</style>