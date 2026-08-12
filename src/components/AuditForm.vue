<template>
  <div class="audit-form-card">
    <form @submit.prevent="handleSubmit" class="audit-form">
      <!-- Step 1: URL Input -->
      <div v-if="step === 1" class="form-step">
        <div class="step-header">
          <span class="step-indicator">Step 1 of 2</span>
          <h2>Enter your website URL</h2>
          <p>We'll scan your site and check performance, SEO, and security.</p>
        </div>
        
        <div class="form-group">
          <label for="websiteUrl" class="sr-only">Website URL</label>
          <div class="input-wrapper">
            <div class="input-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <input
              id="websiteUrl"
              v-model="formData.websiteUrl"
              type="url"
              placeholder="https://yourwebsite.com"
              class="form-input"
              :class="{ 'has-error': errors.websiteUrl, 'is-valid': urlValidation.valid }"
              @blur="validateUrl"
              autocomplete="url"
              required
            />
            <div v-if="urlValidation.checking" class="input-status checking">
              <div class="spinner-small"></div>
            </div>
            <div v-else-if="urlValidation.valid" class="input-status valid">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
          </div>
          <p v-if="errors.websiteUrl" class="error-text">{{ errors.websiteUrl }}</p>
          <p v-else-if="urlValidation.valid" class="success-text">Website is accessible</p>
        </div>
        
        <button 
          type="button"
          @click="goToStep2"
          :disabled="!canProceedToStep2"
          class="btn-primary"
        >
          Continue
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
      
      <!-- Step 2: Email Capture -->
      <div v-if="step === 2" class="form-step">
        <div class="step-header">
          <span class="step-indicator">Step 2 of 2</span>
          <h2>Where should we send your report?</h2>
          <p>Enter your email to receive your full audit report with actionable recommendations.</p>
        </div>
        
        <div class="url-preview">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
          <span>{{ formData.websiteUrl }}</span>
          <button type="button" @click="step = 1" class="btn-edit" aria-label="Edit URL">
            Edit
          </button>
        </div>
        
        <div class="form-group">
          <label for="email" class="sr-only">Email address</label>
          <div class="input-wrapper">
            <div class="input-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <input
              id="email"
              v-model="formData.email"
              type="email"
              placeholder="your@email.com"
              class="form-input"
              :class="{ 'has-error': errors.email }"
              @input="validateEmail"
              autocomplete="email"
              required
            />
          </div>
          <p v-if="errors.email" class="error-text">{{ errors.email }}</p>
        </div>
        
        <div class="form-group">
          <label for="name" class="sr-only">Your name (optional)</label>
          <div class="input-wrapper">
            <div class="input-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <input
              id="name"
              v-model="formData.name"
              type="text"
              placeholder="Your name (optional)"
              class="form-input"
              autocomplete="name"
            />
          </div>
        </div>
        
        <div class="form-actions">
          <button 
            type="button"
            @click="step = 1"
            class="btn-back"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back
          </button>
          
          <button 
            type="submit"
            :disabled="!canSubmit || loading"
            class="btn-primary btn-submit"
          >
            <span v-if="!loading">
              Get My Free Report
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </span>
            <span v-else class="loading-state">
              <div class="spinner-small"></div>
              Analysing...
            </span>
          </button>
        </div>
        
        <p class="privacy-note">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
          Your data is secure. We'll never spam you or share your email.
        </p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AuditForm',
  
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  },
  
  emits: ['submit', 'ineligible'],
  
  data() {
    return {
      step: 1,
      formData: {
        websiteUrl: '',
        email: '',
        name: ''
      },
      errors: {},
      urlValidation: {
        checking: false,
        valid: false
      }
    }
  },
  
  computed: {
    apiUrl() {
      return process.env.VUE_APP_API_URL || 'http://localhost:5000/api'
    },
    canProceedToStep2() {
      return this.formData.websiteUrl && 
             !this.errors.websiteUrl && 
             this.urlValidation.valid
    },
    canSubmit() {
      return this.formData.websiteUrl && 
             this.formData.email && 
             !this.errors.email &&
             this.urlValidation.valid
    }
  },
  
  methods: {
    async validateUrl() {
      const url = this.formData.websiteUrl.trim()
      this.errors.websiteUrl = ''
      this.urlValidation.valid = false
      
      if (!url) return
      
      // Basic URL format validation
      let validUrl = url
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        validUrl = 'https://' + url
        this.formData.websiteUrl = validUrl
      }
      
      try {
        new URL(validUrl)
      } catch {
        this.errors.websiteUrl = 'Please enter a valid website URL'
        return
      }
      
      // Check if URL is accessible
      this.urlValidation.checking = true
      
      try {
        const response = await fetch(`${this.apiUrl}/audit/validate-url`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ url: validUrl })
        })
        
        const data = await response.json()
        
        if (data.success) {
          if (data.eligible) {
            this.urlValidation.valid = true
          } else {
            this.errors.websiteUrl = data.reason || 'This website cannot be audited'
            this.$emit('ineligible', data.reason)
          }
        } else {
          this.errors.websiteUrl = data.error || 'Unable to access this website'
        }
      } catch (error) {
        console.error('URL validation error:', error)
        // If backend is unavailable, allow proceeding with basic validation
        this.urlValidation.valid = true
      } finally {
        this.urlValidation.checking = false
      }
    },
    
    validateEmail() {
      const email = this.formData.email.trim()
      this.errors.email = ''
      
      if (!email) {
        this.errors.email = 'Email is required'
        return
      }
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        this.errors.email = 'Please enter a valid email address'
        return
      }
    },
    
    goToStep2() {
      if (this.canProceedToStep2) {
        this.step = 2
      }
    },
    
    handleSubmit() {
      this.validateEmail()
      
      if (!this.canSubmit) return
      
      this.$emit('submit', {
        websiteUrl: this.formData.websiteUrl.trim(),
        email: this.formData.email.trim(),
        name: this.formData.name.trim(),
        userAgent: navigator.userAgent,
        submitTime: new Date().toISOString()
      })
    }
  }
}
</script>

<style scoped>
/* ==================== CARD CONTAINER ==================== */
.audit-form-card {
  max-width: 520px;
  margin: 0 auto;
  background: linear-gradient(135deg, #18181b 0%, #1f1f23 100%);
  border: 1px solid #27272a;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

/* ==================== FORM STEPS ==================== */
.form-step {
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.step-header {
  text-align: center;
  margin-bottom: 2rem;
}

.step-indicator {
  display: inline-block;
  padding: 0.375rem 0.875rem;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 50px;
  color: #60a5fa;
  font-size: 0.8125rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.step-header h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #ffffff;
}

.step-header p {
  color: #a1a1aa;
  font-size: 0.9375rem;
  line-height: 1.6;
}

/* ==================== URL PREVIEW ==================== */
.url-preview {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: rgba(59, 130, 246, 0.05);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 10px;
  margin-bottom: 1.5rem;
}

.url-preview svg {
  width: 20px;
  height: 20px;
  color: #3b82f6;
  flex-shrink: 0;
}

.url-preview span {
  flex: 1;
  font-family: monospace;
  font-size: 0.875rem;
  color: #d4d4d8;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.btn-edit {
  padding: 0.375rem 0.75rem;
  background: transparent;
  border: 1px solid #3f3f46;
  border-radius: 6px;
  color: #a1a1aa;
  font-size: 0.8125rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-edit:hover {
  border-color: #52525b;
  color: #f4f4f5;
}

/* ==================== FORM GROUPS ==================== */
.form-group {
  margin-bottom: 1.25rem;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  left: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.input-icon svg {
  width: 20px;
  height: 20px;
  color: #52525b;
  transition: color 0.2s ease;
}

.form-input {
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  background: #09090b;
  border: 2px solid #27272a;
  border-radius: 10px;
  color: #f4f4f5;
  font-size: 1rem;
  transition: all 0.2s ease;
}

.form-input::placeholder {
  color: #52525b;
}

.form-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
}

.form-input:focus + .input-icon svg,
.form-input:focus ~ .input-icon svg {
  color: #3b82f6;
}

.form-input.has-error {
  border-color: #ef4444;
}

.form-input.has-error:focus {
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15);
}

.form-input.is-valid {
  border-color: #10b981;
}

/* ==================== INPUT STATUS ==================== */
.input-status {
  position: absolute;
  right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.input-status.checking {
  color: #3b82f6;
}

.input-status.valid {
  color: #10b981;
}

.input-status svg {
  width: 20px;
  height: 20px;
}

.spinner-small {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(59, 130, 246, 0.3);
  border-top-color: #3b82f6;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* ==================== MESSAGES ==================== */
.error-text {
  color: #ef4444;
  font-size: 0.8125rem;
  margin-top: 0.5rem;
}

.success-text {
  color: #10b981;
  font-size: 0.8125rem;
  margin-top: 0.5rem;
}

/* ==================== BUTTONS ==================== */
.btn-primary {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.35);
}

.btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

.btn-primary svg {
  width: 20px;
  height: 20px;
}

.form-actions {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
}

.btn-back {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  padding: 1rem 1.25rem;
  background: transparent;
  border: 2px solid #3f3f46;
  border-radius: 10px;
  color: #a1a1aa;
  font-size: 0.9375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-back:hover {
  border-color: #52525b;
  color: #f4f4f5;
}

.btn-back svg {
  width: 18px;
  height: 18px;
}

.btn-submit {
  flex: 1;
}

.loading-state {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
}

.loading-state .spinner-small {
  border-color: rgba(255, 255, 255, 0.3);
  border-top-color: white;
}

/* ==================== PRIVACY NOTE ==================== */
.privacy-note {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #27272a;
  color: #71717a;
  font-size: 0.8125rem;
}

.privacy-note svg {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

/* ==================== RESPONSIVE ==================== */
@media (max-width: 480px) {
  .audit-form-card {
    padding: 1.75rem;
    border-radius: 16px;
  }
  
  .step-header h2 {
    font-size: 1.375rem;
  }
  
  .form-actions {
    flex-direction: column-reverse;
  }
  
  .btn-back {
    width: 100%;
  }
  
  .privacy-note {
    flex-direction: column;
    text-align: center;
    gap: 0.375rem;
  }
}

/* ==================== ACCESSIBILITY ==================== */
@media (prefers-reduced-motion: reduce) {
  .form-step,
  .spinner-small,
  .btn-primary,
  .btn-back,
  .btn-edit,
  .form-input {
    animation: none;
    transition: none;
  }
}

.btn-primary:focus,
.btn-back:focus,
.btn-edit:focus,
.form-input:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}
</style>