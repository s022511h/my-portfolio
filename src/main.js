import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import router from './router'
import { authStore } from './stores/firebaseAuth'
import { initializeGA, updateConsentMode, getStoredConsents } from './utils/analytics'

const app = createApp(App)
const head = createHead()

authStore.initAuthListener()

initializeGA()

const existingConsents = getStoredConsents()
if (existingConsents) {
  updateConsentMode(existingConsents)
}

app.config.globalProperties.$updateAnalyticsConsent = (consents) => {
  updateConsentMode(consents)
}

router.afterEach((to) => {
  const consents = getStoredConsents()
  if (consents && consents.analytics) {

    import('./utils/analytics').then(({ trackPageView }) => {
      trackPageView(to.path)
    })
  }
})

app.config.errorHandler = (error, instance, info) => {
  console.error('Application error:', {
    message: error.message,
    info: info,
    timestamp: new Date().toISOString()
  })
  
  const consents = getStoredConsents()
  if (consents && consents.analytics) {
    import('./utils/analytics').then(({ trackEvent }) => {
      trackEvent('app_error', {
        event_category: 'error',
        event_label: error.message.substring(0, 100), 
        value: 1
      })
    })
  }
}

app.config.globalProperties.$gdprCompliance = {
  hasAnalyticsConsent: () => {
    const consents = getStoredConsents()
    return consents && consents.analytics
  },
  hasMarketingConsent: () => {
    const consents = getStoredConsents()
    return consents && consents.marketing
  },
  getConsentStatus: () => getStoredConsents(),
  requestDataDeletion: () => {
    import('./utils/analytics').then(({ deleteAllStoredData }) => {
      deleteAllStoredData()
    })
  }
}

app.use(router)
app.use(head)
app.mount('#app')