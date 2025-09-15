<template>
  <div class="register-container">
    <div class="register-card">
      <h1>Create Your Account</h1>
      <p class="subtitle">Join N15 Labs to manage your projects and preferences</p>
      
      <form @submit.prevent="handleRegister" class="register-form">
        <div class="form-row">
          <div class="form-group">
            <label for="firstName">First Name *</label>
            <input
              id="firstName"
              v-model="form.firstName"
              type="text"
              required
              placeholder="Enter your first name"
              :class="{ 'error': errors.firstName }"
            />
            <span v-if="errors.firstName" class="error-message">{{ errors.firstName }}</span>
          </div>
          
          <div class="form-group">
            <label for="lastName">Last Name *</label>
            <input
              id="lastName"
              v-model="form.lastName"
              type="text"
              required
              placeholder="Enter your last name"
              :class="{ 'error': errors.lastName }"
            />
            <span v-if="errors.lastName" class="error-message">{{ errors.lastName }}</span>
          </div>
        </div>
        
        <div class="form-group">
          <label for="email">Email Address *</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            required
            placeholder="your.email@domain.com"
            :class="{ 'error': errors.email }"
          />
          <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
        </div>
        
        <div class="form-group">
          <label for="password">Password *</label>
          <input
            id="password"
            v-model="form.password"
            type="password"
            required
            placeholder="Minimum 6 characters"
            :class="{ 'error': errors.password }"
          />
          <span v-if="errors.password" class="error-message">{{ errors.password }}</span>
        </div>
        
        <div class="consent-section">
          <h3>Email Preferences</h3>
          <div class="consent-option">
            <label class="checkbox-label">
              <input
                type="checkbox"
                v-model="form.marketingConsent"
                class="consent-checkbox"
              />
              <span class="checkmark"></span>
              <div class="consent-text">
                <strong>Email me about new releases & beta invites</strong>
                <p>Receive updates about new features, beta testing opportunities, and product announcements. You can unsubscribe at any time.</p>
              </div>
            </label>
          </div>
          
          <div class="legal-notice">
            <p>By creating an account, you agree to our 
              <router-link to="/terms" target="_blank">Terms of Service</router-link> and 
              <router-link to="/privacy" target="_blank">Privacy Policy</router-link>.
            </p>
          </div>
        </div>
        
        <button type="submit" class="register-btn" :disabled="authStore.loading">
          <span v-if="!authStore.loading">Create Account</span>
          <span v-else class="loading">
            <svg class="spinner" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"/>
            </svg>
            Creating Account...
          </span>
        </button>
      </form>
      
      <div v-if="errors.general" class="general-error">
        {{ errors.general }}
      </div>
      
      <div class="login-link">
        <p>Already have an account? <router-link to="/login">Sign in here</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
import { authStore } from '../stores/firebaseAuth.js'

export default {
  name: 'UserRegister',
  data() {
    return {
      authStore,
      form: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        marketingConsent: false 
      },
      errors: {}
    }
  },
  methods: {
    async handleRegister() {
      if (!this.validateForm()) return;
      
      this.errors = {};
      
      const result = await authStore.register(
        this.form.email,
        this.form.password,
        this.form.firstName,
        this.form.lastName,
        this.form.marketingConsent
      );
      
      if (result.success) {
        if (window.gtag) {
            window.gtag('event', 'sign_up', {
            method: 'email',
            marketing_consent: this.form.marketingConsent
            });
        }
        
        if (result.needsVerification) {
            this.$router.push({
            path: '/verify-email',
            query: { email: this.form.email }
            });
        } else {
            this.$router.push('/profile');
        }
        } else {
        this.errors.general = result.error;
        }
    },
    validateForm() {
      this.errors = {};
      
      if (!this.form.firstName.trim()) this.errors.firstName = 'First name is required';
      if (!this.form.lastName.trim()) this.errors.lastName = 'Last name is required';
      if (!this.form.email.trim()) this.errors.email = 'Email is required';
      if (this.form.password.length < 6) this.errors.password = 'Password must be at least 6 characters';
      
      return Object.keys(this.errors).length === 0;
    }
  }
}
</script>

<style scoped>
.register-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
}

.register-card {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  width: 100%;
  max-width: 500px;
}

.register-card h1 {
  color: #333;
  margin-bottom: 8px;
  font-size: 28px;
  text-align: center;
}

.subtitle {
  color: #666;
  margin-bottom: 30px;
  text-align: center;
}

.register-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  color: #333;
  margin-bottom: 5px;
  font-weight: 500;
}

.form-group input {
  padding: 12px;
  border: 2px solid #e1e5e9;
  border-radius: 6px;
  font-size: 16px;
  transition: border-color 0.3s;
}

.form-group input:focus {
  outline: none;
  border-color: #667eea;
}

.form-group input.error {
  border-color: #e74c3c;
}

.error-message {
  color: #e74c3c;
  font-size: 14px;
  margin-top: 5px;
}

.consent-section {
  border: 1px solid #e1e5e9;
  border-radius: 8px;
  padding: 20px;
  background: #f8f9fa;
}

.consent-section h3 {
  margin: 0 0 15px 0;
  color: #333;
  font-size: 18px;
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  cursor: pointer;
}

.consent-checkbox {
  margin: 0;
  cursor: pointer;
}

.consent-text strong {
  color: #333;
  display: block;
  margin-bottom: 5px;
}

.consent-text p {
  color: #666;
  margin: 0;
  font-size: 14px;
  line-height: 1.4;
}

.legal-notice {
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid #e1e5e9;
}

.legal-notice p {
  font-size: 13px;
  color: #666;
  margin: 0;
}

.legal-notice a {
  color: #667eea;
  text-decoration: none;
}

.legal-notice a:hover {
  text-decoration: underline;
}

.register-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 15px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.register-btn:hover:not(:disabled) {
  transform: translateY(-2px);
}

.register-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.spinner {
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.general-error {
  background: #ffeaea;
  color: #c92a2a;
  padding: 12px;
  border-radius: 6px;
  margin-top: 15px;
  text-align: center;
}

.login-link {
  text-align: center;
  margin-top: 20px;
}

.login-link a {
  color: #667eea;
  text-decoration: none;
}

.login-link a:hover {
  text-decoration: underline;
}

@media (max-width: 600px) {
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .register-card {
    padding: 30px 20px;
  }
}
</style>