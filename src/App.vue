<template>
  <div id="app">
    <AnimatedIntro v-if="showIntro" @enter="handleEnter" />
    <div v-else>
      <AppHeader />
      <router-view style="flex: 1;" />
      <AppFooter @show-cookie-settings="showCookieSettings" />
    </div>
    
    <CookieBanner 
      ref="cookieBanner" 
      @consent-updated="handleConsentUpdate" 
    />
  </div>
</template>

<script>
import AppHeader from './components/Header.vue'
import AppFooter from './components/Footer.vue'
import AnimatedIntro from './components/AnimatedIntro.vue'
import CookieBanner from './components/CookieBanner.vue'
import { initializeGA } from './utils/analytics.js'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    AnimatedIntro,
    CookieBanner
  },
  data() {
    return {
      showIntro: false
    }
  },
  methods: {
    handleEnter() {
      try {
        localStorage.setItem('n15labs-visited', 'true')
        this.showIntro = false
      } catch (e) {
        console.log('localStorage not available, skipping intro')
        this.showIntro = false
      }
    },
    checkIntroStatus() {
      try {
        const visited = localStorage.getItem('n15labs-visited')
        this.showIntro = !visited
      } catch (e) {
        console.log('localStorage not available, showing intro')
        this.showIntro = true
      }
    },
    
    handleConsentUpdate(consents) {
      console.log('Consent updated:', consents)
      
      if (!consents.marketing) {
        this.disableMarketingServices()
      } else {
        this.enableMarketingServices()
      }
      
      if (consents.analytics) {
        this.enableAnalytics()
      }
      
      this.$root.$emit('consent-updated', consents)
    },
    
    showCookieSettings() {
      if (this.$refs.cookieBanner) {
        this.$refs.cookieBanner.show()
      }
    },
    
    disableMarketingServices() {
      const curatorElements = document.querySelectorAll('#curator-feed-default-feed-layout')
      curatorElements.forEach(el => {
        el.style.display = 'none'
      })
      
      this.blockThirdPartyMarketing()
    },
    
    enableMarketingServices() {
      const curatorElements = document.querySelectorAll('#curator-feed-default-feed-layout')
      curatorElements.forEach(el => {
        el.style.display = 'block'
      })
      
      this.enableThirdPartyMarketing()
    },
    
    enableAnalytics() {
      console.log('Analytics enabled')
    },
    
    blockThirdPartyMarketing() {
    },
    
    enableThirdPartyMarketing() {
    }
  },
  mounted() {
    this.checkIntroStatus()
    
    initializeGA()
    
  }
}
</script>
<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  overflow-x: hidden;
  scroll-behavior: auto !important;
}

body {
  margin: 0;
  padding-top: 100px; /* Add header spacing here */
  min-height: 100vh;
  overscroll-behavior: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  position: relative;
}

.router-view {
  flex: 1;
}

/* Mobile header spacing */
@media (max-width: 768px) {
  body {
    padding-top: 90px;
  }
  
  html {
    -webkit-text-size-adjust: 100%;
  }
}

@media (max-width: 480px) {
  body {
    padding-top: 80px;
  }
}

/* Remove problematic mobile constraints */
@supports (-webkit-touch-callout: none) {
  #app {
    min-height: -webkit-fill-available;
  }
}
</style>