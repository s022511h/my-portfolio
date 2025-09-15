<template>
  <div class="audit-container">
    <div class="audit-header">
      <h1>Free Website Audit</h1>
      <p>Get a comprehensive analysis of your website's performance, SEO, and security in under 60 seconds</p>
    </div>
    
    <div class="audit-content">
      <div v-if="currentStep === 'form'" class="form-section">
        <AuditForm 
          @submit="handleAuditSubmit"
          @ineligible="handleIneligible"
          :loading="processing"
        />
      </div>
      
      <div v-if="currentStep === 'processing'" class="processing-section">
        <div class="processing-spinner">
          <div class="spinner"></div>
        </div>
        <h2>Analyzing Your Website</h2>
        <p>{{ processingMessage }}</p>
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: progress + '%' }"></div>
        </div>
      </div>
      
      <div v-if="currentStep === 'results'" class="results-section">
        <AuditResults 
          :results="auditResults"
          @show-capture="showCapturePanel = true"
        />
      </div>
      
      <div v-if="currentStep === 'ineligible'" class="ineligible-section">
        <div class="ineligible-content">
          <h2>Website Not Eligible</h2>
          <p>{{ ineligibleReason }}</p>
          <p>However, we'd still love to help you improve your website performance!</p>
          <button @click="showCapturePanel = true" class="help-btn">
            Get Website Improvement Tips
          </button>
        </div>
      </div>
      
      <div v-if="currentStep === 'error'" class="error-section">
        <div class="error-content">
          <h2>Analysis Error</h2>
          <p>{{ errorMessage }}</p>
          <button @click="resetAudit" class="retry-btn">
            Try Again
          </button>
        </div>
      </div>
    </div>
    
    <CapturePanel 
      v-if="showCapturePanel"
      :audit-results="auditResults"
      :is-eligible="currentStep === 'results'"
      @close="showCapturePanel = false"
      @captured="handleEmailCaptured"
    />
  </div>
</template>

<script>
import { authStore } from '../stores/firebaseAuth.js'
import AuditForm from '../components/AuditForm.vue'
import AuditResults from '../components/AuditResults.vue'
import CapturePanel from '../components/CapturePanel.vue'

export default {
  name: 'SiteAudit',
  components: {
    AuditForm,
    AuditResults,
    CapturePanel
  },
  data() {
    return {
      authStore,
      currentStep: 'form', 
      processing: false,
      progress: 0,
      processingMessage: 'Starting analysis...',
      auditResults: null,
      ineligibleReason: '',
      errorMessage: '',
      showCapturePanel: false,
      auditId: null
    }
  },
  mounted() {
    this.trackAuditPageVisit();
  },
  methods: {
    async handleAuditSubmit(formData) {
      this.processing = true;
      this.currentStep = 'processing';
      this.progress = 0;
      
      try {
        await this.runAudit(formData);
      } catch (error) {
        console.error('Audit error:', error);
        this.errorMessage = error.message || 'An error occurred during the audit';
        this.currentStep = 'error';
      } finally {
        this.processing = false;
      }
    },
    
    async runAudit(formData) {
      const progressSteps = [
        { progress: 10, message: 'Checking website accessibility...' },
        { progress: 25, message: 'Analyzing page performance...' },
        { progress: 40, message: 'Evaluating SEO elements...' },
        { progress: 60, message: 'Testing mobile responsiveness...' },
        { progress: 80, message: 'Checking security features...' },
        { progress: 95, message: 'Generating recommendations...' },
        { progress: 100, message: 'Finalizing report...' }
      ];
      
      for (let step of progressSteps) {
        this.progress = step.progress;
        this.processingMessage = step.message;
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      
      const response = await fetch(`${process.env.VUE_APP_API_URL}/audit/analyze`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          userAgent: navigator.userAgent,
          timestamp: new Date().toISOString()
        })
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Audit failed');
      }
      
      if (data.success) {
        this.auditResults = data.results;
        this.auditId = data.auditId;
        this.currentStep = 'results';
        
        setTimeout(() => {
          if (this.currentStep === 'results' && !this.showCapturePanel) {
            this.showCapturePanel = true;
          }
        }, 5000);
      } else {
        throw new Error(data.error || 'Audit analysis failed');
      }
    },
    
    handleIneligible(reason) {
      this.ineligibleReason = reason;
      this.currentStep = 'ineligible';
    },
    
    async handleEmailCaptured(captureData) {
      try {
        await this.trackEmailCapture(captureData);
        this.showCapturePanel = false;
        
        this.$nextTick(() => {
          alert('Thank you! Check your email for the detailed audit report.');
        });
      } catch (error) {
        console.error('Error handling email capture:', error);
      }
    },
    
    async trackEmailCapture(captureData) {
      const response = await fetch(`${process.env.VUE_APP_API_URL}/audit/capture`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          auditId: this.auditId,
          ...captureData
        })
      });
      
      return await response.json();
    },
    
    async trackAuditPageVisit() {
      try {
        await fetch(`${process.env.VUE_APP_API_URL}/audit/track-visit`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            userAgent: navigator.userAgent,
            referrer: document.referrer,
            timestamp: new Date().toISOString()
          })
        });
      } catch (error) {
        console.error('Error tracking page visit:', error);
      }
    },
    
    resetAudit() {
      this.currentStep = 'form';
      this.auditResults = null;
      this.auditId = null;
      this.errorMessage = '';
      this.ineligibleReason = '';
      this.showCapturePanel = false;
    }
  }
}
</script>

<style scoped>
.audit-container {
  min-height: 100vh;
  background: #f8fafc;
  padding: 2rem;
}

.audit-header {
  text-align: center;
  margin-bottom: 3rem;
}

.audit-header h1 {
  color: #1a202c;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.audit-header p {
  color: #718096;
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
}

.audit-content {
  max-width: 800px;
  margin: 0 auto;
}

.form-section,
.processing-section,
.results-section,
.ineligible-section,
.error-section {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.processing-section {
  text-align: center;
}

.processing-spinner {
  margin-bottom: 2rem;
}

.spinner {
  width: 60px;
  height: 60px;
  border: 4px solid #e2e8f0;
  border-top: 4px solid #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.processing-section h2 {
  color: #2d3748;
  margin-bottom: 1rem;
}

.processing-section p {
  color: #718096;
  margin-bottom: 2rem;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: #e2e8f0;
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 4px;
  transition: width 0.5s ease;
}

.ineligible-content,
.error-content {
  text-align: center;
}

.ineligible-content h2,
.error-content h2 {
  color: #2d3748;
  margin-bottom: 1rem;
}

.ineligible-content p,
.error-content p {
  color: #718096;
  margin-bottom: 1.5rem;
}

.help-btn,
.retry-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s;
}

.help-btn:hover,
.retry-btn:hover {
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  .audit-container {
    padding: 1rem;
  }
  
  .audit-header h1 {
    font-size: 2rem;
  }
  
  .form-section,
  .processing-section,
  .results-section,
  .ineligible-section,
  .error-section {
    padding: 1.5rem;
  }
}
</style>