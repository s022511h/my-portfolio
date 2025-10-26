<template>
  <div class="audit-form">
    <div class="form-progress">
      <div class="progress-steps">
        <div 
          v-for="(step, index) in steps" 
          :key="index"
          :class="['progress-step', { active: currentStep >= index, completed: currentStep > index }]"
        >
          <div class="step-circle">{{ index + 1 }}</div>
          <span class="step-label">{{ step.label }}</span>
        </div>
      </div>
      <div class="progress-line">
        <div 
          class="progress-fill" 
          :style="{ width: (currentStep / (steps.length - 1)) * 100 + '%' }"
        ></div>
      </div>
    </div>

    <form @submit.prevent="handleSubmit" class="form-content">
      <div v-if="currentStep === 0" class="form-step">
        <h2>Enter Your Website URL</h2>
        <p>We'll analyse your website's performance, SEO, and security</p>
        
        <div class="form-group">
          <label for="websiteUrl">Website URL</label>
          <input
            id="websiteUrl"
            v-model="formData.websiteUrl"
            type="url"
            placeholder="https://example.com"
            class="form-input"
            :class="{ error: errors.websiteUrl }"
            @input="validateUrl"
            required
          />
          <div v-if="errors.websiteUrl" class="error-message">
            {{ errors.websiteUrl }}
          </div>
          <div v-if="urlValidation.checking" class="checking-message">
            Checking website accessibility...
          </div>
          <div v-if="urlValidation.valid" class="success-message">
            ✓ Website is accessible
          </div>
        </div>
      </div>

      <div v-if="currentStep === 1" class="form-step">
        <h2>Tell Us About Your Business</h2>
        <p>This helps us provide more relevant recommendations</p>
        
        <div class="form-group">
          <label for="businessType">Industry/Business Type</label>
          <select
            id="businessType"
            v-model="formData.businessType"
            class="form-select"
            required
          >
            <option value="">Select your industry</option>
            <option value="ecommerce">E-commerce</option>
            <option value="service">Service Business</option>
            <option value="restaurant">Restaurant/Food</option>
            <option value="healthcare">Healthcare</option>
            <option value="technology">Technology</option>
            <option value="education">Education</option>
            <option value="nonprofit">Non-profit</option>
            <option value="real-estate">Real Estate</option>
            <option value="automotive">Automotive</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div class="form-group">
          <label>Primary Website Goals (select all that apply)</label>
          <div class="checkbox-group">
            <label 
              v-for="goal in goalOptions" 
              :key="goal.value"
              class="checkbox-label"
            >
              <input
                type="checkbox"
                :value="goal.value"
                v-model="formData.websiteGoals"
                class="checkbox-input"
              />
              <span class="checkbox-text">{{ goal.label }}</span>
            </label>
          </div>
        </div>
      </div>

      <div v-if="currentStep === 2" class="form-step">
        <h2>Technical Details</h2>
        <p>Help us understand your current situation and technical expertise</p>
        
        <div class="form-group">
          <label for="trafficVolume">Current Monthly Traffic</label>
          <select
            id="trafficVolume"
            v-model="formData.trafficVolume"
            class="form-select"
            required
          >
            <option value="">Select traffic range</option>
            <option value="under-1k">Under 1,000 visitors</option>
            <option value="1k-5k">1,000 - 5,000 visitors</option>
            <option value="5k-10k">5,000 - 10,000 visitors</option>
            <option value="10k-50k">10,000 - 50,000 visitors</option>
            <option value="50k-100k">50,000 - 100,000 visitors</option>
            <option value="over-100k">Over 100,000 visitors</option>
          </select>
        </div>

        <div class="form-group">
          <label for="technicalLevel">Your Technical Experience</label>
          <select
            id="technicalLevel"
            v-model="formData.technicalLevel"
            class="form-select"
            required
          >
            <option value="">Select your level</option>
            <option value="beginner">Beginner - I'm new to websites</option>
            <option value="intermediate">Intermediate - I can make basic changes</option>
            <option value="advanced">Advanced - I'm comfortable with code</option>
            <option value="developer">Developer - I build websites professionally</option>
          </select>
        </div>
      </div>

      <div v-if="currentStep === 3" class="form-step">
        <h2>Contact Information</h2>
        <p>We'll send your audit report to this email address</p>
        
        <div class="form-group">
          <label for="email">Email Address</label>
          <input
            id="email"
            v-model="formData.email"
            type="email"
            placeholder="your@email.com"
            class="form-input"
            :class="{ error: errors.email }"
            @input="validateEmail"
            required
          />
          <div v-if="errors.email" class="error-message">
            {{ errors.email }}
          </div>
        </div>
      </div>

      <div class="form-navigation">
        <button
          v-if="currentStep > 0"
          type="button"
          @click="previousStep"
          class="nav-btn prev-btn"
          aria-label="Go to previous step"
        >
          Previous
        </button>
        
        <button
          v-if="currentStep < steps.length - 1"
          type="button"
          @click="nextStep"
          :disabled="!canProceed"
          class="nav-btn next-btn"
          aria-label="Go to next step"
        >
          Next
        </button>
        
        <button
          v-if="currentStep === steps.length - 1"
          type="submit"
          :disabled="!canSubmit || loading"
          class="nav-btn submit-btn"
          aria-label="Start analysis"
        >
          <span v-if="!loading">Start Analysis</span>
          <span v-else>Analyzing...</span>
        </button>
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
      currentStep: 0,
      steps: [
        { label: 'Website' },
        { label: 'Business' },
        { label: 'Technical' },
        { label: 'Contact' }
      ],
      formData: {
        websiteUrl: '',
        businessType: '',
        websiteGoals: [],
        trafficVolume: '',
        technicalLevel: '',
        email: ''
      },
      errors: {},
      urlValidation: {
        checking: false,
        valid: false
      },
      goalOptions: [
        { value: 'leads', label: 'Generate leads' },
        { value: 'sales', label: 'Drive online sales' },
        { value: 'awareness', label: 'Build brand awareness' },
        { value: 'traffic', label: 'Increase website traffic' },
        { value: 'engagement', label: 'Improve user engagement' },
        { value: 'conversions', label: 'Boost conversions' }
      ]
    }
  },
  computed: {
    apiUrl() {
      return process.env.VUE_APP_API_URL || 'http://localhost:5000/api';
    },
    canProceed() {
      switch (this.currentStep) {
        case 0:
          return this.formData.websiteUrl && !this.errors.websiteUrl && this.urlValidation.valid;
        case 1:
          return this.formData.businessType && this.formData.websiteGoals.length > 0;
        case 2:
          return this.formData.trafficVolume && this.formData.technicalLevel;
        case 3:
          return this.formData.email && !this.errors.email;
        default:
          return false;
      }
    },
    canSubmit() {
      return this.formData.websiteUrl && 
             this.formData.businessType && 
             this.formData.websiteGoals.length > 0 &&
             this.formData.trafficVolume &&
             this.formData.technicalLevel &&
             this.formData.email && 
             !this.errors.email &&
             this.urlValidation.valid;
    }
  },
  methods: {
    async validateUrl() {
      const url = this.formData.websiteUrl;
      this.errors.websiteUrl = '';
      this.urlValidation.valid = false;
      
      if (!url) return;
      
      try {
        new URL(url);
      } catch {
        this.errors.websiteUrl = 'Please enter a valid URL';
        return;
      }

      this.urlValidation.checking = true;
      
      try {
        console.log('API URL:', this.apiUrl);
        console.log('Validating URL:', url);
        const response = await fetch(`${this.apiUrl}/audit/validate-url`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ url })
        });
        
        const data = await response.json();
        
        if (data.success) {
          if (data.eligible) {
            this.urlValidation.valid = true;
          } else {
            this.errors.websiteUrl = data.reason || 'Website is not eligible for audit';
            setTimeout(() => {
              this.$emit('ineligible', data.reason || 'Website is not eligible for audit');
            }, 1000);
          }
        } else {
          this.errors.websiteUrl = data.error || 'Unable to access website';
        }
      } catch (error) {
        console.error('URL validation error:', error);
        this.errors.websiteUrl = 'Unable to validate website URL';
      } finally {
        this.urlValidation.checking = false;
      }
    },
    
    validateEmail() {
      const email = this.formData.email;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      if (!email) {
        this.errors.email = '';
      } else if (!emailRegex.test(email)) {
        this.errors.email = 'Please enter a valid email address';
      } else {
        this.errors.email = '';
      }
    },
    
    nextStep() {
      if (this.canProceed && this.currentStep < this.steps.length - 1) {
        this.currentStep++;
      }
    },
    
    previousStep() {
      if (this.currentStep > 0) {
        this.currentStep--;
      }
    },
    
    async handleSubmit() {
      if (!this.canSubmit) return;
      
      const eligibilityCheck = await this.performFinalEligibilityCheck();
      
      if (eligibilityCheck.eligible) {
        this.$emit('submit', {
          ...this.formData,
          ipAddress: await this.getClientIP(),
          userAgent: navigator.userAgent,
          submitTime: new Date().toISOString()
        });
      } else {
        this.$emit('ineligible', eligibilityCheck.reason);
      }
    },
    
    async performFinalEligibilityCheck() {
      try {
        const response = await fetch(`${this.apiUrl}/audit/final-eligibility`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            websiteUrl: this.formData.websiteUrl,
            businessType: this.formData.businessType
          })
        });
        
        return await response.json();
      } catch (error) {
        console.error('Final eligibility check error:', error);
        return { eligible: true };
      }
    },
    
    async getClientIP() {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        return data.ip;
      } catch (error) {
        console.error('Error getting client IP:', error);
        return '';
      }
    }
  }
}
</script>

<style scoped>
.audit-form {
  max-width: 600px;
  margin: 0 auto;
}

.form-progress {
  margin-bottom: 3rem;
  position: relative;
}

.progress-steps {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 2;
}

.progress-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}

.step-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #e2e8f0;
  color: #718096;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
}

.progress-step.active .step-circle {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.progress-step.completed .step-circle {
  background: #48bb78;
  color: white;
}

.step-label {
  font-size: 0.875rem;
  color: #718096;
  font-weight: 500;
}

.progress-step.active .step-label {
  color: #2d3748;
  font-weight: 600;
}

.progress-line {
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  height: 2px;
  background: #e2e8f0;
  z-index: 1;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transition: width 0.5s ease;
  border-radius: 1px;
}

.form-content {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.form-step {
  min-height: 300px;
}

.form-step h2 {
  color: #2d3748;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
}

.form-step p {
  color: #718096;
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  color: #2d3748;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-input,
.form-select {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.2s;
}

.form-input:focus,
.form-select:focus {
  outline: none;
  border-color: #667eea;
}

.form-input.error {
  border-color: #e53e3e;
}

.checkbox-group {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.checkbox-label {
  display: flex;
  align-items: center;
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}

.checkbox-label:hover {
  border-color: #667eea;
  background: #f7fafc;
}

.checkbox-input {
  margin-right: 0.5rem;
}

.checkbox-input:checked + .checkbox-text {
  font-weight: 600;
  color: #667eea;
}

.checkbox-text {
  color: #2d3748;
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

.success-message {
  color: #38a169;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  font-weight: 500;
}

.form-navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e2e8f0;
}

.nav-btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.prev-btn {
  background: #f7fafc;
  color: #4a5568;
  border: 1px solid #e2e8f0;
}

.prev-btn:hover {
  background: #edf2f7;
}

.next-btn,
.submit-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.next-btn:hover:not(:disabled),
.submit-btn:hover:not(:disabled) {
  transform: translateY(-1px);
}

.next-btn:disabled,
.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

@media (max-width: 768px) {
  .form-content {
    padding: 1.5rem;
  }
  
  .progress-steps {
    flex-direction: column;
    gap: 1rem;
  }
  
  .progress-line {
    display: none;
  }
  
  .checkbox-group {
    grid-template-columns: 1fr;
  }
  
  .form-navigation {
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav-btn {
    width: 100%;
  }
}
</style>