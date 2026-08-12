<template>
  <div class="site-audit-page">
    <!-- Hero Section - Only shown when not loading and no results -->
    <section v-if="!loading && !auditComplete" class="audit-hero">
      <div class="container">
        <span class="hero-badge">
          <span class="pulse-dot"></span>
          Free Tool
        </span>
        <h1>Get a Free <span class="gradient-text">Website Audit</span></h1>
        <p class="hero-description">
          Find out why your website isn't bringing in customers. I'll analyse your site's 
          performance, SEO, and security — then tell you exactly what to fix.
        </p>
        
        <div class="trust-signals">
          <div class="trust-item">
            <svg class="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span>30-second setup</span>
          </div>
          <div class="trust-item">
            <svg class="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            <span>100% Free</span>
          </div>
          <div class="trust-item">
            <svg class="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <span>No login required</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Audit Form -->
    <section v-if="!loading && !auditComplete && !error" class="audit-form-section">
      <div class="container">
        <AuditForm 
          :loading="loading"
          @submit="performAudit"
          @ineligible="handleIneligible"
        />
      </div>
    </section>

    <!-- Loading State -->
    <section v-if="loading" class="loading-section">
      <div class="container">
        <div class="loading-content">
          <div class="loading-animation">
            <div class="scan-circle">
              <div class="scan-ring"></div>
              <div class="scan-ring delay-1"></div>
              <div class="scan-ring delay-2"></div>
              <svg class="globe-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
          </div>
          
          <h2>Analysing Your Website</h2>
          <p class="loading-subtitle">{{ scanningUrl }}</p>
          
          <div class="loading-steps">
            <div 
              v-for="(step, index) in loadingSteps" 
              :key="index" 
              :class="['loading-step', { active: currentLoadingStep === index, completed: currentLoadingStep > index }]"
            >
              <div class="step-indicator">
                <svg v-if="currentLoadingStep > index" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span v-else class="step-number">{{ index + 1 }}</span>
              </div>
              <span class="step-text">{{ step.text }}</span>
            </div>
          </div>
          
          <div class="progress-bar">
            <div class="progress-fill" :style="{ width: progressPercentage + '%' }"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Results -->
    <section v-if="auditComplete && auditResults" class="results-section">
      <div class="container">
        <AuditResults 
          :results="auditResults" 
          @restart="resetAudit"
        />
      </div>
    </section>

    <!-- Error State -->
    <section v-if="error" class="error-section">
      <div class="container">
        <div class="error-card">
          <div class="error-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
          </div>
          <h2>Something went wrong</h2>
          <p>{{ error }}</p>
          <button @click="resetAudit" class="btn-retry">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="23 4 23 10 17 10"></polyline>
              <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
            </svg>
            Try Again
          </button>
        </div>
      </div>
    </section>

    <!-- What You'll Get Section - shown only before audit -->
    <section v-if="!loading && !auditComplete && !error" class="features-section">
      <div class="container">
        <h2 class="section-title">What You'll Get</h2>
        
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </div>
            <h3>Performance Score</h3>
            <p>Find out if your website is costing you customers with slow load times.</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <h3>SEO Analysis</h3>
            <p>Discover why your competitors might be ranking higher than you on Google.</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3>Security Check</h3>
            <p>Make sure your website isn't vulnerable to common security issues.</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
              </svg>
            </div>
            <h3>Action Plan</h3>
            <p>Get specific recommendations on what to fix first for the biggest impact.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useHead } from '@vueuse/head'
import AuditForm from '@/components/AuditForm.vue'
import AuditResults from '@/components/AuditResults.vue'

export default {
  name: 'SiteAuditPage',
  
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
      scanningUrl: '',
      loadingSteps: [
        { text: 'Connecting to website' },
        { text: 'Analysing page speed' },
        { text: 'Checking SEO elements' },
        { text: 'Scanning security headers' },
        { text: 'Testing accessibility' },
        { text: 'Generating report' }
      ]
    }
  },
  
  computed: {
    apiUrl() {
      return process.env.VUE_APP_API_URL || 'http://localhost:5000/api'
    },
    progressPercentage() {
      return ((this.currentLoadingStep + 1) / this.loadingSteps.length) * 100
    }
  },
  
  setup() {
    useHead({
      title: 'Free Website Audit | N15 Labs',
      meta: [
        {
          name: 'description',
          content: 'Get a free website audit for your business. Find out why your website isn\'t bringing in customers with our performance, SEO and security analysis.'
        },
        {
          property: 'og:title',
          content: 'Free Website Audit | N15 Labs'
        },
        {
          property: 'og:description',
          content: 'Free website performance, SEO and security audit. Find out what\'s holding your site back.'
        },
        {
          name: 'keywords',
          content: 'free website audit, SEO audit, website performance check, security audit, Stoke-on-Trent'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://n15labs.co.uk/audit'
        }
      ]
    })
  },
  
  methods: {
    async performAudit(formData) {
      this.loading = true
      this.error = null
      this.currentLoadingStep = 0
      this.scanningUrl = formData.websiteUrl
      
      // Animate through loading steps
      const stepInterval = setInterval(() => {
        if (this.currentLoadingStep < this.loadingSteps.length - 1) {
          this.currentLoadingStep++
        }
      }, 1500)
      
      try {
        const response = await fetch(`${this.apiUrl}/audit/perform`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
        
        const data = await response.json()
        
        if (data.success) {
          // Complete all steps before showing results
          this.currentLoadingStep = this.loadingSteps.length - 1
          
          // Small delay to show completion
          await new Promise(resolve => setTimeout(resolve, 500))
          
          this.auditResults = data.results
          this.auditComplete = true
          this.trackAuditComplete(formData)
        } else {
          throw new Error(data.error || 'Audit failed')
        }
      } catch (error) {
        console.error('Audit error:', error)
        this.error = error.message || 'Unable to complete the audit. Please check the URL and try again.'
      } finally {
        clearInterval(stepInterval)
        this.loading = false
      }
    },
    
    handleIneligible(reason) {
      this.error = reason || 'This website is not eligible for audit at this time.'
    },
    
    resetAudit() {
      this.auditComplete = false
      this.auditResults = null
      this.error = null
      this.currentLoadingStep = 0
      this.scanningUrl = ''
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    
    async trackAuditComplete(formData) {
      try {
        await fetch(`${this.apiUrl}/analytics/track`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            event: 'audit-complete',
            websiteUrl: formData.websiteUrl,
            email: formData.email,
            timestamp: new Date().toISOString()
          })
        })
      } catch (error) {
        console.log('Analytics tracking failed:', error)
      }
    }
  }
}
</script>

<style scoped>
/* ==================== BASE STYLES ==================== */
.site-audit-page {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(180deg, #0a0a0a 0%, #111111 100%);
  color: #f4f4f5;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
}

.gradient-text {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ==================== HERO SECTION ==================== */
.audit-hero {
  padding: 8rem 0 3rem;
  text-align: center;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 50px;
  color: #34d399;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background: #34d399;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.2); }
}

.audit-hero h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.25rem;
  line-height: 1.15;
}

.hero-description {
  font-size: 1.25rem;
  color: #a1a1aa;
  line-height: 1.7;
  max-width: 650px;
  margin: 0 auto 2rem;
}

.trust-signals {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.trust-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #71717a;
  font-size: 0.9375rem;
}

.trust-icon {
  width: 20px;
  height: 20px;
  color: #3b82f6;
}

/* ==================== FORM SECTION ==================== */
.audit-form-section {
  padding: 0 0 4rem;
}

/* ==================== LOADING SECTION ==================== */
.loading-section {
  padding: 8rem 0;
  min-height: 80vh;
  display: flex;
  align-items: center;
}

.loading-content {
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
}

.loading-animation {
  margin-bottom: 2.5rem;
}

.scan-circle {
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto;
}

.scan-ring {
  position: absolute;
  inset: 0;
  border: 2px solid rgba(59, 130, 246, 0.3);
  border-radius: 50%;
  animation: scan-pulse 2s ease-out infinite;
}

.scan-ring.delay-1 { animation-delay: 0.4s; }
.scan-ring.delay-2 { animation-delay: 0.8s; }

@keyframes scan-pulse {
  0% { transform: scale(0.8); opacity: 1; }
  100% { transform: scale(1.5); opacity: 0; }
}

.globe-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 48px;
  height: 48px;
  color: #3b82f6;
}

.loading-content h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.loading-subtitle {
  color: #71717a;
  font-family: monospace;
  font-size: 0.9375rem;
  margin-bottom: 2.5rem;
  word-break: break-all;
}

.loading-steps {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2rem;
  text-align: left;
}

.loading-step {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 10px;
  border: 1px solid transparent;
  transition: all 0.3s ease;
}

.loading-step.active {
  background: rgba(59, 130, 246, 0.1);
  border-color: rgba(59, 130, 246, 0.3);
}

.loading-step.completed {
  opacity: 0.6;
}

.step-indicator {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #27272a;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.loading-step.active .step-indicator {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
}

.loading-step.completed .step-indicator {
  background: #10b981;
}

.step-indicator svg {
  width: 14px;
  height: 14px;
  color: white;
}

.step-number {
  font-size: 0.75rem;
  font-weight: 600;
  color: #71717a;
}

.loading-step.active .step-number {
  color: white;
}

.step-text {
  font-size: 0.9375rem;
  color: #a1a1aa;
}

.loading-step.active .step-text {
  color: #f4f4f5;
}

.progress-bar {
  height: 4px;
  background: #27272a;
  border-radius: 2px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  border-radius: 2px;
  transition: width 0.5s ease;
}

/* ==================== RESULTS SECTION ==================== */
.results-section {
  padding: 6rem 0;
}

/* ==================== ERROR SECTION ==================== */
.error-section {
  padding: 8rem 0;
  min-height: 60vh;
  display: flex;
  align-items: center;
}

.error-card {
  max-width: 450px;
  margin: 0 auto;
  text-align: center;
  background: linear-gradient(135deg, #18181b 0%, #1f1f23 100%);
  border: 1px solid #27272a;
  border-radius: 20px;
  padding: 3rem;
}

.error-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 1.5rem;
  background: rgba(239, 68, 68, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.error-icon svg {
  width: 32px;
  height: 32px;
  color: #ef4444;
}

.error-card h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.error-card p {
  color: #a1a1aa;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.btn-retry {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-retry:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
}

.btn-retry svg {
  width: 20px;
  height: 20px;
}

/* ==================== FEATURES SECTION ==================== */
.features-section {
  padding: 4rem 0 6rem;
  border-top: 1px solid #1f1f23;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.feature-card {
  background: linear-gradient(135deg, #18181b 0%, #1f1f23 100%);
  border: 1px solid #27272a;
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.feature-card:hover {
  border-color: #3b82f6;
  transform: translateY(-4px);
}

.feature-icon {
  width: 48px;
  height: 48px;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
}

.feature-icon svg {
  width: 24px;
  height: 24px;
  color: #3b82f6;
}

.feature-card h3 {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.feature-card p {
  color: #a1a1aa;
  font-size: 0.9375rem;
  line-height: 1.6;
}

/* ==================== RESPONSIVE ==================== */
@media (max-width: 768px) {
  .container {
    padding: 0 1.25rem;
  }
  
  .audit-hero {
    padding: 6rem 0 2rem;
  }
  
  .audit-hero h1 {
    font-size: 2.5rem;
  }
  
  .hero-description {
    font-size: 1.125rem;
  }
  
  .trust-signals {
    flex-direction: column;
    gap: 0.75rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .loading-section {
    padding: 6rem 0;
  }
}

@media (max-width: 480px) {
  .audit-hero h1 {
    font-size: 2rem;
  }
  
  .section-title {
    font-size: 1.75rem;
  }
  
  .feature-card {
    padding: 1.5rem;
  }
}

/* ==================== ACCESSIBILITY ==================== */
@media (prefers-reduced-motion: reduce) {
  .pulse-dot,
  .scan-ring,
  .progress-fill,
  .feature-card,
  .btn-retry {
    animation: none;
    transition: none;
  }
}
</style>