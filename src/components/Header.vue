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
      <router-link to="/services">Services</router-link>
      <router-link to="/launch-sites" class="launch-link">£600 Websites</router-link>
      <router-link to="/pricing">Pricing</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact" class="contact-link">Contact</router-link>
      
      <div v-if="!authStore.isAuthenticated" class="auth-links">
        <router-link to="/login" class="auth-link">Sign In</router-link>
      </div>
      <div v-else class="user-menu">
        <router-link to="/profile" class="user-link">
          {{ authStore.user?.firstName || 'Profile' }}
        </router-link>
        <router-link 
          v-if="authStore.user?.isAdmin" 
          to="/admin" 
          class="user-link admin-link"
          aria-label="Go to admin dashboard"
        >
          Admin
        </router-link>
        <button @click="handleLogout" class="logout-btn" aria-label="Sign out of account">Sign Out</button>
      </div>
    </nav>

    <button 
      class="hamburger" 
      @click="menuOpen = !menuOpen" 
      :aria-expanded="menuOpen"
      aria-label="Toggle Menu"
    >
      <span :class="{ open: menuOpen }"></span>
    </button>

    <!-- Teleport mobile menu to body to escape header's containing block -->
    <Teleport to="body">
      <transition name="fade">
        <div v-if="menuOpen" class="mobile-menu-overlay" @click.self="menuOpen = false">
          <div class="mobile-menu" role="navigation" aria-label="Mobile menu">
            <button class="close-menu" @click="menuOpen = false" aria-label="Close Menu">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            
            <!-- Logo in mobile menu -->
            <div class="mobile-logo">
              <img
                :src="require('@/assets/webp/logo-n15labs-white_comp.webp')"
                alt="N15 Labs"
                width="60"
                height="60"
              />
              <span>N15 Labs</span>
            </div>
            
            <!-- Featured Mobile Links -->
            <div class="mobile-featured">
              <router-link @click="handleNavClick" to="/launch-sites" class="mobile-launch-link">
                £600 Websites
              </router-link>
              <a 
                href="https://calendly.com/n15labs/strategy-call" 
                target="_blank"
                rel="noopener noreferrer"
                class="mobile-cta-link"
                @click="handleNavClick"
              >
                Book a Free Call
              </a>
            </div>
            
            <nav class="mobile-nav-links">
              <router-link @click="handleNavClick" to="/">Home</router-link>
              <router-link @click="handleNavClick" to="/services">Services</router-link>
              <router-link @click="handleNavClick" to="/pricing">Pricing</router-link>
              <router-link @click="handleNavClick" to="/about">About</router-link>
              <router-link @click="handleNavClick" to="/contact">Contact</router-link>
            </nav>
            
            <div class="mobile-secondary-links">
              <router-link @click="handleNavClick" to="/projects">Projects</router-link>
              <router-link @click="handleNavClick" to="/blog">Blog</router-link>
            </div>
            
            <div v-if="!authStore.isAuthenticated" class="mobile-auth-links">
              <router-link @click="handleNavClick" to="/login" class="mobile-auth-link">Sign In</router-link>
              <router-link @click="handleNavClick" to="/register" class="mobile-auth-link register">Create Account</router-link>
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
              >
                Admin Dashboard
              </router-link>
              <button @click="handleMobileLogout" class="mobile-logout-btn">Sign Out</button>
            </div>
          </div>
        </div>
      </transition>
    </Teleport>
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
  watch: {
    // Close menu on route change
    '$route'() {
      this.menuOpen = false
    },
    // Prevent body scroll when menu is open
    menuOpen(isOpen) {
      if (isOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
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
  },
  beforeUnmount() {
    // Clean up body overflow on unmount
    document.body.style.overflow = ''
  }
}
</script>

<style scoped>
/* ==================== HEADER BASE ==================== */
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(10, 10, 10, 0.95);
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 1px solid #27272a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  height: 80px;
  box-sizing: border-box;
}

/* Note: Removed backdrop-filter as it creates containing block issues with fixed children */

/* ==================== LOGO ==================== */
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
  width: 60px;
  height: auto;
  object-fit: contain;
  display: block;
}

.brand {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: #ffffff;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
}

/* ==================== DESKTOP NAV ==================== */
.nav-links {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-links a {
  color: #d4d4d8;
  font-weight: 500;
  text-decoration: none;
  font-size: 0.9375rem;
  padding: 0.625rem 1rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.nav-links a:hover {
  color: #ffffff;
  background: rgba(59, 130, 246, 0.1);
}

.nav-links a.router-link-active {
  color: #3b82f6;
}

/* Special link styles */
.launch-link {
  background: linear-gradient(135deg, #10b981, #059669) !important;
  color: white !important;
  font-weight: 600 !important;
}

.launch-link:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}

.contact-link {
  background: linear-gradient(135deg, #3b82f6, #2563eb) !important;
  color: white !important;
  font-weight: 600 !important;
}

.contact-link:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

/* ==================== AUTH LINKS ==================== */
.auth-links {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-left: 0.5rem;
  padding-left: 0.75rem;
  border-left: 1px solid #3f3f46;
}

.auth-link {
  color: #d4d4d8;
  font-weight: 500;
  text-decoration: none;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.auth-link:hover {
  color: #ffffff;
  background: rgba(59, 130, 246, 0.1);
}

.user-menu {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-left: 0.5rem;
  padding-left: 0.75rem;
  border-left: 1px solid #3f3f46;
}

.user-link {
  color: #3b82f6;
  font-weight: 600;
  text-decoration: none;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.1);
  font-size: 0.875rem;
}

.user-link.admin-link {
  background: rgba(139, 92, 246, 0.1);
  color: #a78bfa;
}

.logout-btn {
  background: transparent;
  color: #ef4444;
  border: 1px solid #ef4444;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.logout-btn:hover {
  background: rgba(239, 68, 68, 0.1);
}

/* ==================== HAMBURGER ==================== */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.75rem;
  border-radius: 8px;
  transition: background 0.2s ease;
  z-index: 101;
}

.hamburger:hover {
  background: rgba(255, 255, 255, 0.1);
}

.hamburger span,
.hamburger span::before,
.hamburger span::after {
  display: block;
  width: 24px;
  height: 2px;
  background: #ffffff;
  transition: all 0.3s ease;
  position: relative;
  border-radius: 2px;
}

.hamburger span::before,
.hamburger span::after {
  content: '';
  position: absolute;
  left: 0;
  width: 24px;
  height: 2px;
  background: #ffffff;
}

.hamburger span::before {
  top: -7px;
}

.hamburger span::after {
  top: 7px;
}

.hamburger span.open {
  background: transparent;
}

.hamburger span.open::before {
  transform: rotate(45deg);
  top: 0;
  background: #3b82f6;
}

.hamburger span.open::after {
  transform: rotate(-45deg);
  top: 0;
  background: #3b82f6;
}
</style>

<style>
/* ==================== MOBILE MENU OVERLAY - GLOBAL STYLES ==================== */
/* These styles are NOT scoped so they work when Teleported to body */
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  height: 100dvh; /* Dynamic viewport height for mobile browsers */
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 1rem;
  box-sizing: border-box;
  overflow: hidden;
}

.mobile-menu {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 380px;
  max-height: calc(100vh - 2rem);
  max-height: calc(100dvh - 2rem);
  padding: 2rem 1.5rem;
  background: linear-gradient(135deg, #18181b 0%, #1f1f23 100%);
  border: 1px solid #27272a;
  border-radius: 20px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

/* ==================== MOBILE MENU CONTENT ==================== */
.close-menu {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #3f3f46;
  border-radius: 10px;
  color: #a1a1aa;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.close-menu:hover {
  background: rgba(239, 68, 68, 0.1);
  border-color: #ef4444;
  color: #ef4444;
}

.close-menu svg {
  width: 20px;
  height: 20px;
}

.mobile-logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  padding-top: 1rem;
}

.mobile-logo img {
  width: 50px;
  height: auto;
}

.mobile-logo span {
  font-size: 1.25rem;
  font-weight: 700;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Featured links */
.mobile-featured {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.mobile-launch-link {
  display: block;
  background: linear-gradient(135deg, #10b981, #059669);
  color: white !important;
  font-weight: 600;
  padding: 1rem;
  text-align: center;
  border-radius: 12px;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.2s ease;
}

.mobile-launch-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(16, 185, 129, 0.3);
}

.mobile-cta-link {
  display: block;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white !important;
  font-weight: 600;
  padding: 1rem;
  text-align: center;
  border-radius: 12px;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.2s ease;
}

.mobile-cta-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
}

/* Nav links */
.mobile-nav-links {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #27272a;
  margin-bottom: 1rem;
}

.mobile-nav-links a {
  display: block;
  color: #f4f4f5;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.0625rem;
  padding: 0.875rem 1rem;
  border-radius: 10px;
  text-align: center;
  transition: all 0.2s ease;
}

.mobile-nav-links a:hover,
.mobile-nav-links a.router-link-active {
  background: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
}

/* Secondary links */
.mobile-secondary-links {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #27272a;
  margin-bottom: 1rem;
}

.mobile-secondary-links a {
  color: #71717a;
  text-decoration: none;
  font-size: 0.9375rem;
  font-weight: 500;
  transition: color 0.2s ease;
}

.mobile-secondary-links a:hover {
  color: #f4f4f5;
}

/* Auth links */
.mobile-auth-links {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.mobile-auth-link {
  display: block;
  color: #f4f4f5;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.875rem 1rem;
  border-radius: 10px;
  text-align: center;
  border: 1px solid #3f3f46;
  transition: all 0.2s ease;
}

.mobile-auth-link:hover {
  border-color: #3b82f6;
  background: rgba(59, 130, 246, 0.1);
}

.mobile-auth-link.register {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  border: none;
  color: white;
}

/* User menu */
.mobile-user-menu {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.mobile-user-link {
  display: block;
  color: #3b82f6;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.875rem 1rem;
  border-radius: 10px;
  text-align: center;
  background: rgba(59, 130, 246, 0.1);
  transition: all 0.2s ease;
}

.mobile-user-link.admin-link {
  background: rgba(139, 92, 246, 0.1);
  color: #a78bfa;
}

.mobile-logout-btn {
  width: 100%;
  background: transparent;
  color: #ef4444;
  border: 1px solid #ef4444;
  padding: 0.875rem 1rem;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.mobile-logout-btn:hover {
  background: rgba(239, 68, 68, 0.1);
}

/* ==================== TRANSITIONS ==================== */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* ==================== RESPONSIVE ==================== */
@media (max-width: 480px) {
  .mobile-menu {
    max-width: 100%;
    border-radius: 16px;
    padding: 1.5rem 1.25rem;
  }
  
  .mobile-nav-links a {
    font-size: 1rem;
    padding: 0.75rem 1rem;
  }
}

/* ==================== ACCESSIBILITY ==================== */
@media (prefers-reduced-motion: reduce) {
  .mobile-menu-overlay,
  .mobile-menu,
  .close-menu,
  .mobile-nav-links a,
  .mobile-auth-link,
  .mobile-launch-link,
  .mobile-cta-link,
  .fade-enter-active,
  .fade-leave-active {
    transition: none;
  }
}

.close-menu:focus,
.mobile-nav-links a:focus,
.mobile-auth-link:focus,
.mobile-launch-link:focus,
.mobile-cta-link:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}
</style>

<style scoped>
/* ==================== RESPONSIVE - SCOPED ==================== */
@media (max-width: 1200px) {
  .nav-links {
    gap: 0.25rem;
  }
  
  .nav-links a {
    font-size: 0.875rem;
    padding: 0.5rem 0.75rem;
  }
}

@media (max-width: 1024px) {
  .nav-links.desktop-only {
    display: none;
  }

  .hamburger {
    display: flex;
  }
}

@media (max-width: 768px) {
  .app-header {
    padding: 0.875rem 1.25rem;
    height: 70px;
  }
  
  .logo {
    width: 50px;
  }

  .brand {
    font-size: 1.25rem;
  }
}

@media (max-width: 480px) {
  .app-header {
    padding: 0.75rem 1rem;
    height: 64px;
  }
  
  .logo {
    width: 45px;
  }
  
  .brand {
    font-size: 1.125rem;
  }
}

/* ==================== ACCESSIBILITY - SCOPED ==================== */
@media (prefers-reduced-motion: reduce) {
  .logo-link,
  .hamburger,
  .hamburger span,
  .hamburger span::before,
  .hamburger span::after,
  .nav-links a {
    transition: none;
  }
}

.hamburger:focus,
.nav-links a:focus,
.logo-link:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}
</style>