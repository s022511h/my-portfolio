<template>
  <div v-if="showBanner" class="cookie-banner">
    <div class="cookie-content">
      <h3>Cookie Settings</h3>
      <p>We use cookies to improve your experience and analyze website usage. Choose which cookies you allow:</p>
      
      <div class="cookie-categories">
        <label class="cookie-option">
          <input type="checkbox" v-model="consents.necessary" disabled checked>
          <span><strong>Necessary</strong> - Required for site functionality</span>
        </label>
        
        <label class="cookie-option">
          <input type="checkbox" v-model="consents.analytics">
          <span><strong>Analytics</strong> - Google Analytics to understand site usage</span>
        </label>
        
        <label class="cookie-option">
          <input type="checkbox" v-model="consents.marketing">
          <span><strong>Marketing</strong> - Social media and content feeds</span>
        </label>
      </div>
      
      <div class="cookie-actions">
        <button @click="acceptAll" class="btn-accept">Accept All</button>
        <button @click="savePreferences" class="btn-save">Save Preferences</button>
        <button @click="declineAll" class="btn-decline">Decline All</button>
      </div>
      
      <div class="cookie-links">
        <router-link to="/privacy" class="privacy-link">Privacy Policy</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CookieBanner',
  data() {
    return {
      showBanner: false,
      consents: {
        necessary: true,
        analytics: false,
        marketing: false
      }
    }
  },
  mounted() {
    this.checkConsent()
  },
  methods: {
    checkConsent() {
      const saved = localStorage.getItem('cookie-consents')
      const timestamp = localStorage.getItem('cookie-consent-timestamp')
      
      if (!saved || this.isConsentExpired(timestamp)) {
        this.showBanner = true
      } else {
        this.consents = JSON.parse(saved)
        this.updateGoogleConsent()
        this.updateThirdPartyServices()
      }
    },
    
    isConsentExpired(timestamp) {
      if (!timestamp) return true
      const consentDate = new Date(timestamp)
      const now = new Date()
      const daysDiff = (now - consentDate) / (1000 * 60 * 60 * 24)
      return daysDiff > 365
    },
    
    acceptAll() {
      this.consents = {
        necessary: true,
        analytics: true,
        marketing: true
      }
      this.saveConsents()
    },
    
    declineAll() {
      this.consents = {
        necessary: true,
        analytics: false,
        marketing: false
      }
      this.saveConsents()
    },
    
    savePreferences() {
      this.saveConsents()
    },
    
    saveConsents() {
      localStorage.setItem('cookie-consents', JSON.stringify(this.consents))
      localStorage.setItem('cookie-consent-timestamp', new Date().toISOString())
      this.showBanner = false
      this.updateGoogleConsent()
      this.updateThirdPartyServices()
      this.$emit('consent-updated', this.consents)
    },
    
    updateGoogleConsent() {
      if (typeof window.gtag !== 'undefined') {
        window.gtag('consent', 'update', {
          'analytics_storage': this.consents.analytics ? 'granted' : 'denied',
          'ad_storage': this.consents.marketing ? 'granted' : 'denied',
          'ad_user_data': this.consents.marketing ? 'granted' : 'denied',
          'ad_personalization': this.consents.marketing ? 'granted' : 'denied',
          'functionality_storage': 'granted',
          'security_storage': 'granted'
        })
      }
    },
    
    updateThirdPartyServices() {
      if (!this.consents.marketing) {
        this.blockCurator()
      } else {
        this.enableCurator()
      }
    },
    
    blockCurator() {
      const curatorElements = document.querySelectorAll('#curator-feed-default-feed-layout')
      curatorElements.forEach(el => {
        el.style.display = 'none'
      })
    },
    
    enableCurator() {
      const curatorElements = document.querySelectorAll('#curator-feed-default-feed-layout')
      curatorElements.forEach(el => {
        el.style.display = 'block'
      })
    },
    
    show() {
      this.showBanner = true
    }
  }
}
</script>

<style scoped>
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  color: white;
  padding: 2rem;
  z-index: 10000;
  box-shadow: 0 -4px 20px rgba(0,0,0,0.4);
  border-top: 1px solid #374151;
}

.cookie-content {
  max-width: 1200px;
  margin: 0 auto;
}

.cookie-content h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #ffffff;
}

.cookie-content p {
  margin-bottom: 1.5rem;
  color: #d1d5db;
  line-height: 1.6;
}

.cookie-categories {
  margin: 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cookie-option {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  padding: 0.75rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  transition: background 0.3s ease;
}

.cookie-option:hover {
  background: rgba(255, 255, 255, 0.1);
}

.cookie-option input {
  width: 18px;
  height: 18px;
}

.cookie-option span {
  color: #e5e7eb;
  font-size: 1rem;
}

.cookie-actions {
  display: flex;
  gap: 1rem;
  margin: 2rem 0 1rem 0;
  flex-wrap: wrap;
}

.btn-accept, .btn-save, .btn-decline {
  padding: 0.875rem 1.75rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.btn-accept {
  background: linear-gradient(135deg, #22c55e, #16a34a);
  color: white;
}

.btn-accept:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 15px rgba(34, 197, 94, 0.3);
}

.btn-save {
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
}

.btn-save:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
}

.btn-decline {
  background: #6b7280;
  color: white;
}

.btn-decline:hover {
  background: #374151;
}

.cookie-links {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #374151;
}

.privacy-link {
  color: #60a5fa;
  text-decoration: none;
  font-size: 0.875rem;
}

.privacy-link:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .cookie-banner {
    padding: 1.5rem;
  }
  
  .cookie-actions {
    flex-direction: column;
  }
  
  .btn-accept, .btn-save, .btn-decline {
    width: 100%;
    padding: 1rem;
  }
}
</style>