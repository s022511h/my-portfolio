<template>
  <div class="login-container">
    <div class="login-card">
      <h1>Sign In</h1>
      <p class="subtitle">Welcome back to N15 Labs</p>
      
      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <label for="email">Email Address</label>
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
          <label for="password">Password</label>
          <input
            id="password"
            v-model="form.password"
            type="password"
            required
            placeholder="Enter your password"
            :class="{ 'error': errors.password }"
          />
          <span v-if="errors.password" class="error-message">{{ errors.password }}</span>
        </div>
        
        <button type="submit" class="login-btn" :disabled="authStore.loading">
          <span v-if="!authStore.loading">Sign In</span>
          <span v-else class="loading">
            <svg class="spinner" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"/>
            </svg>
            Signing In...
          </span>
        </button>
      </form>
      
      <div v-if="errors.general" class="general-error">
        {{ errors.general }}
      </div>
      
      <div class="forgot-link">
        <router-link to="/forgot-password">Forgot your password?</router-link>
      </div>

      <div class="register-link">
        <p>Don't have an account? <router-link to="/register">Create one here</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
import { authStore } from '../stores/firebaseAuth.js'

export default {
  name: 'LoginView',
  data() {
    return {
      authStore,
      form: {
        email: '',
        password: ''
      },
      errors: {}
    }
  },
  methods: {
    async handleLogin() {
      if (!this.validateForm()) return;
      
      this.errors = {};
      
      const result = await authStore.login(
        this.form.email,
        this.form.password
      );
      
      if (result.success) {
        if (!result.emailVerified) {
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
      
      if (!this.form.email.trim()) this.errors.email = 'Email is required';
      if (!this.form.password.trim()) this.errors.password = 'Password is required';
      
      return Object.keys(this.errors).length === 0;
    }
  }
}
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
}

.login-card {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  width: 100%;
  max-width: 400px;
}

.login-card h1 {
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

.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
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

.login-btn {
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

.login-btn:hover:not(:disabled) {
  transform: translateY(-2px);
}

.login-btn:disabled {
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

.register-link {
  text-align: center;
  margin-top: 20px;
}

.register-link a {
  color: #667eea;
  text-decoration: none;
}

.register-link a:hover {
  text-decoration: underline;
}
.forgot-link {
  text-align: center;
  margin: 15px 0;
}

.forgot-link a {
  color: #667eea;
  text-decoration: none;
  font-size: 14px;
}

.forgot-link a:hover {
  text-decoration: underline;
}
</style>