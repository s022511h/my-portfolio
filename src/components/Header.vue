<template>
  <header class="app-header">
    <div class="logo-container">
      <router-link to="/" class="logo-link" aria-label="Go to homepage">
        <img
          :src="require('@/assets/webp/logo-n15labs-white.webp')"
          alt="N15 Labs Logo"
          class="logo"
          loading="lazy"
        />
      </router-link>
      <h1 class="brand">N15 Labs</h1>
    </div>

    <nav class="nav-links desktop-only">
      <router-link to="/">Home</router-link>
      <router-link to="/portfolio">Skills</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>

    <button class="hamburger" @click="menuOpen = !menuOpen" aria-label="Toggle Menu">
      <span :class="{ open: menuOpen }"></span>
    </button>

    <transition name="fade">
      <div v-if="menuOpen" class="mobile-menu-overlay">
        <div class="mobile-menu">
          <button class="close-menu" @click="menuOpen = false" aria-label="Close Menu">✕</button>
          <router-link @click="handleNavClick" to="/">Home</router-link>
          <router-link @click="handleNavClick" to="/portfolio">Skills</router-link>
          <router-link @click="handleNavClick" to="/projects">Projects</router-link>
          <router-link @click="handleNavClick" to="/contact">Contact</router-link>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      menuOpen: false
    }
  },
  methods: {
    handleNavClick() {
      this.menuOpen = false
      // Wait until next tick to ensure nav change triggers
      this.$nextTick(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      })
    }
  }
}
</script>
<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: #111;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 1.2rem;
  border-bottom: 2px solid #222;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  flex-wrap: wrap;
  height: auto;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo-link {
  display: inline-block;
}

.logo {
  width: 110px;
  height: auto;
  object-fit: contain;
  max-width: 100%;
  display: block;
  image-rendering: auto;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

.brand {
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 1px;
  font-family: 'Orbitron', sans-serif;
  color: #fff;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  color: #eee;
  font-weight: 500;
  text-decoration: none;
  font-size: 2rem;
  position: relative;
  transition: color 0.2s ease;
}

.nav-links a:hover {
  color: #407ba7;
}

.nav-links a::after {
  content: '';
  position: absolute;
  width: 0%;
  height: 2px;
  background: #407ba7;
  left: 0;
  bottom: -5px;
  transition: width 0.3s ease;
}

.nav-links a:hover::after {
  width: 100%;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  margin-left: auto;
}

.hamburger span,
.hamburger span::before,
.hamburger span::after {
  content: '';
  display: block;
  width: 24px;
  height: 3px;
  background: #eee;
  transition: 0.3s ease;
  position: relative;
}

.hamburger span.open {
  transform: rotate(45deg);
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
  background: #eee;
}

.hamburger span::before {
  top: -7px;
}

.hamburger span::after {
  top: 7px;
}

.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(17, 17, 17, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
}

.mobile-menu {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  width: 100%;
  padding: 2rem 1rem;
}

.mobile-menu a {
  font-size: 2.5rem;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
}

.close-menu {
  position: static;
  font-size: 3rem;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  margin-top: 1rem;
  margin-bottom: 1rem;
  align-self: center;
}


.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .app-header {
    padding: 0.6rem 1rem;
    flex-direction: row;
    align-items: center;
  }

  .logo-container {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
  }

  .logo {
    width: 110px;
    height: auto;
    object-fit: contain;
  }

  .brand {
    display: none;
  }

  .nav-links.desktop-only {
    display: none;
  }

  .hamburger {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
