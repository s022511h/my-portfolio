<template>
  <div id="app">
    <!--
      AnimatedIntro is an OVERLAY, not a gate.
      .intro-overlay is position:fixed / inset:0 / z-index:9999, so it sits on
      top while the real page renders underneath. Header, router-view and footer
      are always in the DOM, which is what the prerenderer and crawlers capture.
    -->
    <AnimatedIntro v-if="showIntro" @enter="handleEnter" />

    <AppHeader />
    <router-view style="flex: 1;" />
    <AppFooter @show-cookie-settings="showCookieSettings" />

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
      this.showIntro = false
      try {
        localStorage.setItem('n15labs-visited', 'true')
      } catch (e) {
        // Private browsing or storage disabled — the intro just shows again
        // next visit. Not worth blocking anything over.
      }
    },

    checkIntroStatus() {
      // Never show the intro to the prerenderer. It would capture the splash
      // screen instead of the page, which is exactly what went wrong before.
      if (window.__PRERENDER_INJECTED) {
        this.showIntro = false
        return
      }

      try {
        this.showIntro = !localStorage.getItem('n15labs-visited')
      } catch (e) {
        // Fail open: show the site, not the splash. The original did the
        // opposite, which trapped private-browsing visitors on the intro.
        this.showIntro = false
      }
    },

    handleConsentUpdate(consents) {
      if (!consents.marketing) {
        this.disableMarketingServices()
      } else {
        this.enableMarketingServices()
      }

      if (consents.analytics) {
        this.enableAnalytics()
      }
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
      // Consent mode is updated by CookieBanner via $updateAnalyticsConsent.
      // Nothing else needed here.
    },

    blockThirdPartyMarketing() {
    },

    enableThirdPartyMarketing() {
    }
  },
  mounted() {
    this.checkIntroStatus()
    // NOTE: initializeGA() is called once in main.js, before consent is
    // applied. Calling it again here re-pushed gtag('consent','default',
    // {analytics_storage:'denied'}) AFTER the stored consent had been granted,
    // which can silently revert analytics consent for returning visitors.
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
  padding-top: 100px; /* Header spacing */
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

/* Skip link for accessibility */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #3b82f6;
  color: white;
  padding: 8px 16px;
  text-decoration: none;
  z-index: 9999;
  font-weight: 600;
}

.skip-link:focus {
  top: 0;
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