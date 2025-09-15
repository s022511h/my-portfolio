<template>
  <div class="forgot-container">
    <div class="forgot-card">
      <h1>Reset Your Password</h1>
      <p class="subtitle">Enter your email address and we'll send you a reset link</p>
      
      <form @submit.prevent="handleReset" class="forgot-form">
        <div class="form-group">
          <label for="email">Email Address</label>
          <input
            id="email"
            v-model="email"
            type="email"
            required
            placeholder="your.email@domain.com"
            :class="{ 'error': error }"
          />
        </div>
        
        <button type="submit" class="reset-btn" :disabled="loading">
          <span v-if="!loading">Send Reset Link</span>
          <span v-else>Sending...</span>
        </button>
      </form>
      
      <div v-if="message" :class="messageClass">
        {{ message }}
      </div>
      
      <div class="login-link">
        <p>Remember your password? <router-link to="/login">Sign in here</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
import { authStore } from '../stores/firebaseAuth.js'

export default {
  name: 'ForgotPassword',
  data() {
    return {
      email: '',
      loading: false,
      message: '',
      messageClass: '',
      error: false
    }
  },
  methods: {
    async handleReset() {
      if (!this.email.trim()) {
        this.error = true;
        return;
      }
      
      this.loading = true;
      this.error = false;
      this.message = '';
      
      const result = await authStore.resetPassword(this.email);
      
      if (result.success) {
        this.message = 'Password reset email sent! Check your inbox for instructions.';
        this.messageClass = 'success-message';
        this.email = '';
      } else {
        this.message = result.error || 'Failed to send reset email';
        this.messageClass = 'error-message';
      }
      
      this.loading = false;
    }
  }
}
</script>

<style scoped>
.forgot-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
}

.forgot-card {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  width: 100%;
  max-width: 400px;
}

.forgot-card h1 {
  color: #333;
  margin-bottom: 8px;
  font-size: 28px;
  text-align: center;
}

.subtitle {
  color: #666;
  margin-bottom: 30px;
  text-align: center;
  line-height: 1.5;
}

.forgot-form {
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

.reset-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 15px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s;
}

.reset-btn:hover:not(:disabled) {
  transform: translateY(-2px);
}

.reset-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.success-message {
  background: #d1fae5;
  color: #065f46;
  padding: 12px;
  border-radius: 6px;
  margin-top: 15px;
  text-align: center;
}

.error-message {
  background: #fef2f2;
  color: #991b1b;
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
</style>