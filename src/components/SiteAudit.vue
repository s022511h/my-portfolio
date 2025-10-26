<template>
  <div class="site-audit">
    <div v-if="!auditComplete && !loading" class="audit-container">
      <div class="audit-header">
        <h1>Free Website Audit</h1>
        <p class="subtitle">Get a comprehensive analysis of your website's performance, SEO, security, and more</p>
      </div>
      
      <AuditForm 
        :loading="loading"
        @submit="performAudit"
        @ineligible="handleIneligible"
      />
    </div>

    <div v-if="loading" class="loading-container">
      <div class="loading-spinner"></div>
      <h2>Analyzing Your Website...</h2>
      <p>This may take a few moments as we thoroughly examine your site</p>
      <div class="loading-steps">
        <div v-for="(step, index) in loadingSteps" :key="index" 
             :class="['loading-step', { active: currentLoadingStep >= index }]">
          <span class="step-icon">{{ step.icon }}</span>
          <span class="step-text">{{ step.text }}</span>
        </div>
      </div>
    </div>

    <div v-if="auditComplete && auditResults" class="results-container">
      <AuditResults :results="auditResults" @restart="resetAudit" />
    </div>

    <div v-if="error" class="error-container">
      <div class="error-message">
        <h2>Oops! Something went wrong</h2>
        <p>{{ error }}</p>
        <button @click="resetAudit" class="retry-btn" aria-label="Try again">Try Again</button>
      </div>
    </div>
  </div>
</template>

<script>
import AuditForm from '@/components/AuditForm.vue';
import AuditResults from '@/components/AuditResults.vue';

export default {
  name: 'SiteAudit',
  components: {
    AuditForm,
    AuditResults
  },
  data() {
    return {
      loading: false,
      auditComplete: false,
      auditResults: null,
      error: null,
      currentLoadingStep: 0,
      loadingSteps: [
        { icon: '🔍', text: 'Checking website accessibility' },
        { icon: '⚡', text: 'Analysing performance metrics' },
        { icon: '🔍', text: 'Evaluating SEO factors' },
        { icon: '🔒', text: 'Checking security headers' },
        { icon: '♿', text: 'Testing accessibility features' },
        { icon: '✅', text: 'Generating recommendations' }
      ]
    };
  },
  computed: {
    apiUrl() {
      return process.env.VUE_APP_API_URL || 'http://localhost:5000/api';
    }
  },
  mounted() {
    this.trackAuditPageVisit();
  },
  methods: {
    async performAudit(formData) {
      this.loading = true;
      this.error = null;
      this.currentLoadingStep = 0;
      
      const stepInterval = setInterval(() => {
        if (this.currentLoadingStep < this.loadingSteps.length - 1) {
          this.currentLoadingStep++;
        }
      }, 1000);
      
      try {
        const response = await fetch(`${this.apiUrl}/audit/perform`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        
        const data = await response.json();
        
        if (data.success) {
          this.auditResults = data.results;
          this.auditComplete = true;
          this.trackAuditComplete(formData.websiteUrl);
        } else {
          throw new Error(data.error || 'Audit failed');
        }
      } catch (error) {
        console.error('Audit error:', error);
        this.error = error.message || 'Unable to complete the audit. Please try again.';
      } finally {
        clearInterval(stepInterval);
        this.loading = false;
      }
    },
    
    handleIneligible(reason) {
      this.error = reason || 'This website is not eligible for audit at this time.';
    },
    
    resetAudit() {
      this.auditComplete = false;
      this.auditResults = null;
      this.error = null;
      this.currentLoadingStep = 0;
    },
    
    async trackAuditPageVisit() {
      try {
        const visitData = {
          page: 'site-audit',
          timestamp: new Date().toISOString(),
          referrer: document.referrer,
          userAgent: navigator.userAgent
        };
        
        await fetch(`${this.apiUrl}/analytics/track`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(visitData)
        });
      } catch (error) {
        console.log('Analytics tracking failed:', error);
      }
    },
    
    async trackAuditComplete(websiteUrl) {
      try {
        const auditData = {
          event: 'audit-complete',
          websiteUrl: websiteUrl,
          timestamp: new Date().toISOString()
        };
        
        await fetch(`${this.apiUrl}/analytics/track`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(auditData)
        });
      } catch (error) {
        console.log('Analytics tracking failed:', error);
      }
    }
  }
};
</script>

<style scoped>
.site-audit {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
}

.audit-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
}

.audit-header {
  text-align: center;
  margin-bottom: 3rem;
  color: white;
}

.audit-header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.subtitle {
  font-size: 1.2rem;
  opacity: 0.95;
}

.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  color: white;
  text-align: center;
}

.loading-spinner {
  width: 60px;
  height: 60px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 2rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-container h2 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.loading-container p {
  font-size: 1.1rem;
  opacity: 0.9;
  margin-bottom: 2rem;
}

.loading-steps {
  display: grid;
  gap: 1rem;
  max-width: 400px;
  width: 100%;
  text-align: left;
}

.loading-step {
  display: flex;
  align-items: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  transition: all 0.3s ease;
  opacity: 0.5;
}

.loading-step.active {
  background: rgba(255, 255, 255, 0.2);
  opacity: 1;
  transform: translateX(10px);
}

.step-icon {
  font-size: 1.5rem;
  margin-right: 1rem;
}

.step-text {
  font-size: 1rem;
}

.results-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;
}

.error-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
}

.error-message {
  background: white;
  padding: 3rem;
  border-radius: 12px;
  text-align: center;
  max-width: 500px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.error-message h2 {
  color: #e53e3e;
  margin-bottom: 1rem;
}

.error-message p {
  color: #4a5568;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.retry-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s;
}

.retry-btn:hover {
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .site-audit {
    padding: 1rem;
  }
  
  .audit-header h1 {
    font-size: 2rem;
  }
  
  .subtitle {
    font-size: 1rem;
  }
  
  .loading-steps {
    max-width: 100%;
  }
  
  .error-message {
    padding: 2rem;
  }
}
</style>