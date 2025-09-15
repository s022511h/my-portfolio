<template>
  <div class="capture-overlay" @click="handleOverlayClick">
    <div class="capture-panel" @click.stop>
      <button @click="$emit('close')" class="close-btn">✕</button>
      
      <!-- Success Scenario -->
      <div v-if="isEligible" class="capture-content">
        <div class="capture-header">
          <h3>Get Your Complete Audit Report</h3>
          <p>Plus performance tips and early access to future tools</p>
        </div>
        
        <!-- Logged In User -->
        <div v-if="authStore.isAuthenticated" class="logged-in-capture">
          <div class="user-info">
            <p>Hi {{ authStore.user.firstName }}! 👋</p>
            <p>Want us to send you the detailed report and performance improvement tips?</p>
          </div>
          
          <div class="benefits-list">
            <div class="benefit-item">
              ✅ Detailed PDF audit report
            </div>
            <div class="benefit-item">
              ✅ Priority improvement checklist
            </div>
            <div class="benefit-item">
              ✅ Monthly performance tips
            </div>
            <div class="benefit-item">
              ✅ Early access to new tools
            </div>
          </div>
          
          <button 
            @click="handleLoggedInCapture" 
            :disabled="capturing"
            class="capture-btn primary"
          >
            <span v-if="!capturing">Yes, Send Me Updates!</span>
            <span v-else>Updating Preferences...</span>
          </button>
          
          <p class="privacy-note">
            We'll update your marketing preferences. You can unsubscribe anytime.
          </p>
        </div>
        
        <!-- Anonymous User -->
        <div v-else class="anonymous-capture">
          <div class="value-prop">
            <p>Get your complete audit report plus ongoing performance tips:</p>
          </div>
          
          <div class="benefits-grid">
            <div class="benefit-item">
              <span class="benefit-icon">📊</span>
              <span>Detailed PDF Report</span>
            </div>
            <div class="benefit-item">
              <span class="benefit-icon">🎯</span>
              <span>Priority Action Items</span>
            </div>
            <div class="benefit-item">
              <span class="benefit-icon">💡</span>
              <span>Monthly Optimization Tips</span>
            </div>
            <div class="benefit-item">
              <span class="benefit-icon">🔧</span>
              <span>Early Tool Access</span>
            </div>
          </div>
          
          <form @submit.prevent="handleAnonymousCapture" class="capture-form">
            <div class="form-row">
              <div class="form-group">
                <input
                  v-model="formData.firstName"
                  type="text"
                  placeholder="First Name"
                  class="form-input"
                  :class="{ error: errors.firstName }"
                  required
                />
                <div v-if="errors.firstName" class="error-message">
                  {{ errors.firstName }}
                </div>
              </div>
              
              <div class="form-group">
                <input
                  v-model="formData.lastName"
                  type="text"
                  placeholder="Last Name"
                  class="form-input"
                  :class="{ error: errors.lastName }"
                  required
                />
                <div v-if="errors.lastName" class="error-message">
                  {{ errors.lastName }}
                </div>
              </div>
            </div>
            
            <div class="form-group">
              <input
                v-model="formData.email"
                type="email"
                placeholder="Your Email Address"
                class="form-input"
                :class="{ error: errors.email }"
                @blur="validateEmail"
                required
              />
              <div v-if="errors.email" class="error-message">
                {{ errors.email }}
              </div>
              <div v-if="emailChecking" class="checking-message">
                Checking email...
              </div>
            </div>
            
            <button 
              type="submit" 
              :disabled="capturing || !canSubmit"
              class="capture-btn primary"
            >
              <span v-if="!capturing">Get My Audit Report</span>
              <span v-else>Sending Report...</span>
            </button>
          </form>
          
          <div class="consent-note">
            <p>By submitting, you agree to receive the audit report and marketing communications from N15 Labs. 
               <a href="/privacy" target="_blank">Privacy Policy</a></p>
          </div>
        </div>
      </div>
      
      <!-- Ineligible User Scenario -->
      <div v-else class="capture-content">
        <div class="capture-header">
          <h3>Get Personalized Website Advice</h3>
          <p>Plus tool updates and optimization strategies</p>
        </div>
        
        <div class="ineligible-message">
          <p>While we couldn't audit your specific site, we'd still love to help you improve your website performance!</p>
        </div>
        
        <!-- Always show form for ineligible users -->
        <form @submit.prevent="handleIneligibleCapture" class="capture-form">
          <div class="benefits-list">
            <div class="benefit-item">
              ✅ Website performance guides
            </div>
            <div class="benefit-item">
              ✅ Monthly optimization tips
            </div>
            <div class="benefit-item">
              ✅ Early access to new tools
            </div>
            <div class="benefit-item">
              ✅ Free website consultation
            </div>
          </div>
          
          <div class="form-row">
            <div class="form-group">
              <input
                v-model="formData.firstName"
                type="text"
                placeholder="First Name"
                class="form-input"
                required
              />
            </div>
            
            <div class="form-group">
              <input
                v-model="formData.lastName"
                type="text"
                placeholder="Last Name"
                class="form-input"
                required
              />
            </div>
          </div>
          
          <div class="form-group">
            <input
              v-model="formData.email"
              type="email"
              placeholder="Your Email Address"
              class="form-input"
              required
            />
          </div>
          
          <button 
            type="submit" 
            :disabled="capturing"
            class="capture-btn primary"
          >
            <span v-if="!capturing">Get Website Improvement Tips</span>
            <span v-else>Subscribing...</span>
          </button>
        </form>
        
        <div class="consent-note">
          <p>You'll receive helpful website optimization content. Unsubscribe anytime.</p>
        </div>
      </div>
      
      <!-- Social Proof -->
      <div class="social-proof">
        <div class="proof-stats">
          <span class="stat">{{ subscriberCount }}+ subscribers</span>
          <span class="separator">•</span>
          <span class="stat">{{ auditCount }}+ audits completed</span>
        </div>
        <div class="testimonial">
          <p>"The audit helped me identify key performance issues I never knew existed!"</p>
          <cite>- Sarah K., E-commerce Owner</cite>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { authStore } from '../stores/firebaseAuth.js'

export default {
  name: 'CapturePanel',
  props: {
    auditResults: {
      type: Object,
      default: null
    },
    isEligible: {
      type: Boolean,
      default: true
    }
  },
  emits: ['close', 'captured'],
  data() {
    return {
      authStore,
      capturing: false,
      emailChecking: false,
      formData: {
        firstName: '',
        lastName: '',
        email: ''
      },
      errors: {},
      subscriberCount: 847,
      auditCount: 1203
    }
  },
  computed: {
    canSubmit() {
      return this.formData.firstName && 
             this.formData.lastName && 
             this.formData.email && 
             !this.errors.email &&
             !this.emailChecking;
    }
  },
  mounted() {
    // Track capture panel view
    this.trackCaptureView();
  },
  methods: {
    handleOverlayClick() {
      this.$emit('close');
    },
    
    async handleLoggedInCapture() {
      this.capturing = true;
      
      try {
        // Call the auth store method to capture audit email for existing user
        const result = await authStore.captureAuditEmail(this.auditResults?.auditId);
        
        if (result.success) {
          this.$emit('captured', {
            type: 'existing_user',
            userId: authStore.user.id,
            email: authStore.user.email,
            firstName: authStore.user.firstName
          });
        } else {
          throw new Error(result.error || 'Failed to update preferences');
        }
      } catch (error) {
        console.error('Error capturing logged in user:', error);
        alert('Error updating preferences. Please try again.');
      } finally {
        this.capturing = false;
      }
    },
    
    async handleAnonymousCapture() {
      if (!this.canSubmit) return;
      
      this.capturing = true;
      this.errors = {};
      
      try {
        // Validate form
        if (!this.validateForm()) {
          this.capturing = false;
          return;
        }
        
        const response = await fetch(`${process.env.VUE_APP_API_URL}/audit/capture-anonymous`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            ...this.formData,
            auditResults: this.auditResults,
            source: 'audit_success',
            userAgent: navigator.userAgent,
            timestamp: new Date().toISOString()
          })
        });
        
        const data = await response.json();
        
        if (data.success) {
          this.$emit('captured', {
            type: 'anonymous_user',
            email: this.formData.email,
            firstName: this.formData.firstName,
            lastName: this.formData.lastName,
            verificationRequired: data.verificationRequired
          });
        } else {
          throw new Error(data.error || 'Failed to capture email');
        }
      } catch (error) {
        console.error('Error capturing anonymous user:', error);
        this.errors.general = error.message || 'An error occurred. Please try again.';
      } finally {
        this.capturing = false;
      }
    },
    
    async handleIneligibleCapture() {
      this.capturing = true;
      
      try {
        const response = await fetch(`${process.env.VUE_APP_API_URL}/audit/capture-ineligible`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            ...this.formData,
            source: 'audit_ineligible',
            userAgent: navigator.userAgent,
            timestamp: new Date().toISOString()
          })
        });
        
        const data = await response.json();
        
        if (data.success) {
          this.$emit('captured', {
            type: 'ineligible_user',
            email: this.formData.email,
            firstName: this.formData.firstName,
            lastName: this.formData.lastName
          });
        } else {
          throw new Error(data.error || 'Failed to subscribe');
        }
      } catch (error) {
        console.error('Error capturing ineligible user:', error);
        alert('Error subscribing. Please try again.');
      } finally {
        this.capturing = false;
      }
    },
    
    validateForm() {
      this.errors = {};
      let isValid = true;
      
      if (!this.formData.firstName.trim()) {
        this.errors.firstName = 'First name is required';
        isValid = false;
      }
      
      if (!this.formData.lastName.trim()) {
        this.errors.lastName = 'Last name is required';
        isValid = false;
      }
      
      if (!this.formData.email.trim()) {
        this.errors.email = 'Email is required';
        isValid = false;
      } else if (!this.isValidEmail(this.formData.email)) {
        this.errors.email = 'Please enter a valid email address';
        isValid = false;
      }
      
      return isValid;
    },
    
    async validateEmail() {
      const email = this.formData.email.trim();
      if (!email || !this.isValidEmail(email)) return;
      
      this.emailChecking = true;
      this.errors.email = '';
      
      try {
        const response = await fetch(`${process.env.VUE_APP_API_URL}/audit/check-email`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email })
        });
        
        const data = await response.json();
        
        if (!data.success) {
          this.errors.email = data.error || 'Email validation failed';
        }
      } catch (error) {
        console.error('Email validation error:', error);
        // Don't show error for validation failure
      } finally {
        this.emailChecking = false;
      }
    },
    
    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
    
    async trackCaptureView() {
      try {
        await fetch(`${process.env.VUE_APP_API_URL}/audit/track-capture-view`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            auditId: this.auditResults?.auditId,
            isEligible: this.isEligible,
            isAuthenticated: authStore.isAuthenticated,
            timestamp: new Date().toISOString()
          })
        });
      } catch (error) {
        console.error('Error tracking capture view:', error);
      }
    }
  }
}
</script>

<style scoped>
.capture-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}

.capture-panel {
  background: white;
  border-radius: 12px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #f7fafc;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #4a5568;
  font-size: 1.2rem;
  z-index: 10;
}

.close-btn:hover {
  background: #edf2f7;
}

.capture-content {
  padding: 2rem;
}

.capture-header {
  text-align: center;
  margin-bottom: 2rem;
}

.capture-header h3 {
  color: #2d3748;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
}

.capture-header p {
  color: #718096;
}

.logged-in-capture,
.anonymous-capture {
  margin-bottom: 2rem;
}

.user-info {
  text-align: center;
  margin-bottom: 1.5rem;
}

.user-info p:first-child {
  font-size: 1.1rem;
  color: #2d3748;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.user-info p:last-child {
  color: #718096;
}

.benefits-list {
  margin-bottom: 1.5rem;
}

.benefit-item {
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  color: #4a5568;
}

.benefits-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.benefits-grid .benefit-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background: #f7fafc;
  border-radius: 6px;
  font-size: 0.875rem;
}

.benefit-icon {
  font-size: 1.2rem;
}

.value-prop {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #4a5568;
}

.ineligible-message {
  text-align: center;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #fef5e7;
  border-radius: 6px;
  color: #744210;
}

.capture-form {
  margin-bottom: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-input {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.2s;
}

.form-input:focus {
  outline: none;
  border-color: #667eea;
}

.form-input.error {
  border-color: #e53e3e;
}

.error-message {
  color: #e53e3e;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.checking-message {
  color: #3182ce;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.capture-btn {
  width: 100%;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.capture-btn.primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.capture-btn:hover:not(:disabled) {
  transform: translateY(-1px);
}

.capture-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.privacy-note,
.consent-note {
  text-align: center;
  margin-top: 1rem;
}

.privacy-note p,
.consent-note p {
  color: #718096;
  font-size: 0.875rem;
  line-height: 1.4;
}

.consent-note a {
  color: #667eea;
  text-decoration: none;
}

.consent-note a:hover {
  text-decoration: underline;
}

.social-proof {
  border-top: 1px solid #e2e8f0;
  padding: 1.5rem 2rem;
  background: #f7fafc;
}

.proof-stats {
  text-align: center;
  margin-bottom: 1rem;
  color: #4a5568;
  font-size: 0.875rem;
  font-weight: 500;
}

.separator {
  margin: 0 0.5rem;
  color: #cbd5e0;
}

.testimonial {
  text-align: center;
}

.testimonial p {
  color: #4a5568;
  font-style: italic;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
}

.testimonial cite {
  color: #718096;
  font-size: 0.75rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .capture-overlay {
    padding: 0.5rem;
  }
  
  .capture-panel {
    max-height: 95vh;
  }
  
  .capture-content {
    padding: 1.5rem;
  }
  
  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }
  
  .benefits-grid {
    grid-template-columns: 1fr;
  }
  
  .social-proof {
    padding: 1rem 1.5rem;
  }
}
</style>