<template>
  <div class="verify-container">
    <div class="verify-card">
      <div class="verify-icon">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      </div>
      
      <h1>Verify Your Email</h1>
      <p class="subtitle">We've sent a verification email to:</p>
      <p class="email">{{ userEmail }}</p>
      
      <div class="instructions">
        <p>Check your email and click the verification link to activate your account.</p>
        <p>Once verified, you can access all features of your N15 Labs account.</p>
      </div>
      
      <div class="actions">
        <button @click="resendEmail" :disabled="loading" class="resend-btn">
          <span v-if="!loading">Resend Verification Email</span>
          <span v-else>Sending...</span>
        </button>
        
        <button @click="refreshStatus" class="refresh-btn">
          Check Verification Status
        </button>
        
        <router-link to="/login" class="back-link">
          Back to Sign In
        </router-link>
      </div>
      
      <div v-if="message" :class="messageClass">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script>
import { authStore } from '../stores/firebaseAuth.js'

export default {
  name: 'VerifyEmail',
  data() {
    return {
      authStore,
      loading: false,
      message: '',
      messageClass: ''
    }
  },
  computed: {
    userEmail() {
      return authStore.user?.email || this.$route.query.email || 'your email address';
    }
  },
  methods: {
    async resendEmail() {
      this.loading = true;
      this.message = '';
      
      const result = await authStore.resendVerificationEmail();
      
      if (result.success) {
        this.message = 'Verification email sent! Check your inbox.';
        this.messageClass = 'success-message';
      } else {
        this.message = result.error || 'Failed to send verification email';
        this.messageClass = 'error-message';
      }
      
      this.loading = false;
    },
    
    async refreshStatus() {
      if (authStore.user?.firebaseUser) {
        await authStore.user.firebaseUser.reload();
        
        if (authStore.user.firebaseUser.emailVerified) {
          authStore.user.emailVerified = true;
          this.message = 'Email verified! Redirecting to your profile...';
          this.messageClass = 'success-message';
          
          setTimeout(() => {
            this.$router.push('/profile');
          }, 2000);
        } else {
          this.message = 'Email not yet verified. Please check your inbox.';
          this.messageClass = 'info-message';
        }
      }
    }
  }
}
</script>

<style scoped>
.verify-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
}

.verify-card {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  width: 100%;
  max-width: 500px;
  text-align: center;
}

.verify-icon {
  color: #667eea;
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
}

.verify-icon svg {
  width: 100%;
  height: 100%;
}

.verify-card h1 {
  color: #333;
  margin-bottom: 10px;
  font-size: 28px;
}

.subtitle {
  color: #666;
  margin-bottom: 5px;
}

.email {
  color: #667eea;
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 30px;
}

.instructions {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
}

.instructions p {
  margin: 0 0 10px 0;
  color: #555;
  line-height: 1.5;
}

.instructions p:last-child {
  margin-bottom: 0;
}

.actions {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.resend-btn, .refresh-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s;
}

.resend-btn:hover:not(:disabled), .refresh-btn:hover {
  transform: translateY(-1px);
}

.resend-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.refresh-btn {
  background: #6b7280;
}

.back-link {
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
  padding: 10px;
}

.back-link:hover {
  text-decoration: underline;
}

.success-message {
  background: #d1fae5;
  color: #065f46;
  padding: 12px;
  border-radius: 6px;
  margin-top: 15px;
}

.error-message {
  background: #fef2f2;
  color: #991b1b;
  padding: 12px;
  border-radius: 6px;
  margin-top: 15px;
}

.info-message {
  background: #eff6ff;
  color: #1d4ed8;
  padding: 12px;
  border-radius: 6px;
  margin-top: 15px;
}
</style>