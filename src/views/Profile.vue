<template>
  <div class="profile-container">
    <div class="profile-header">
      <h1>Account Settings</h1>
      <p>Manage your account information and communication preferences</p>
    </div>
    
    <div class="profile-content">
      <div class="profile-section">
        <h2>Personal Information</h2>
        <div class="user-info">
          <div class="info-item">
            <strong>Name:</strong> {{ user.firstName }} {{ user.lastName }}
          </div>
          <div class="info-item">
            <strong>Email:</strong> {{ user.email }}
          </div>
          <div class="info-item">
            <strong>Member since:</strong> {{ formatDate(user.createdAt) }}
          </div>
        </div>
      </div>
      
      <div class="profile-section">
        <h2>Email Preferences</h2>
        <div class="consent-controls">
          <div class="consent-item">
            <div class="consent-header">
              <h3>Marketing Communications</h3>
              <div class="consent-toggle">
                <label class="toggle-switch">
                  <input 
                    type="checkbox" 
                    v-model="marketingConsent" 
                    @change="updateMarketingConsent"
                    :disabled="updating"
                  />
                  <span class="toggle-slider"></span>
                </label>
                <span class="toggle-status">
                  {{ marketingConsent ? 'Enabled' : 'Disabled' }}
                </span>
              </div>
            </div>
            <p class="consent-description">
              Receive updates about new features, beta testing opportunities, and product announcements.
            </p>
            
            <div v-if="lastUpdated" class="update-feedback">
              ✓ Updated {{ lastUpdated }}
            </div>
          </div>
        </div>
      </div>
      
      <div class="profile-section">
        <button @click="handleLogout" class="logout-btn">
          Sign Out
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { authStore } from '../stores/firebaseAuth.js'

export default {
  name: 'UserProfile',
  data() {
    return {
      authStore,
      marketingConsent: false,
      updating: false,
      lastUpdated: null
    }
  },
  computed: {
    user() {
      return authStore.user || {};
    }
  },
  async mounted() {
    if (!authStore.isAuthenticated) {
      this.$router.push('/login');
      return;
    }
    
    this.marketingConsent = authStore.user?.consents?.marketing || false;
  },
  methods: {
    async updateMarketingConsent() {
      this.updating = true;
      
      try {
        const token = await authStore.getCurrentToken();
        const response = await fetch(`${process.env.VUE_APP_API_URL}/consent/update`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            consentType: 'marketing',
            granted: this.marketingConsent
          })
        });
        
        const data = await response.json();
        if (data.success) {
          this.lastUpdated = 'just now';
          
          setTimeout(() => {
            this.lastUpdated = null;
          }, 3000);
        }
      } catch (error) {
        console.error('Error updating marketing consent:', error);
        this.marketingConsent = !this.marketingConsent;
      } finally {
        this.updating = false;
      }
    },
    
    async handleLogout() {
      await authStore.logout();
      this.$router.push('/');
    },
    
    formatDate(dateString) {
      if (!dateString) return 'Unknown';
      return new Date(dateString).toLocaleDateString();
    }
  }
}
</script>

<style scoped>
.profile-container {
  min-height: 100vh;
  background: #f8fafc;
  padding: 2rem;
}

.profile-header {
  text-align: center;
  margin-bottom: 3rem;
}

.profile-header h1 {
  color: #1a202c;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.profile-header p {
  color: #718096;
  font-size: 1.1rem;
}

.profile-content {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.profile-section {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.profile-section h2 {
  color: #2d3748;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

.user-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.info-item {
  color: #4a5568;
  font-size: 1rem;
}

.info-item strong {
  color: #2d3748;
  margin-right: 0.5rem;
}

.consent-item {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
}

.consent-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.consent-header h3 {
  color: #2d3748;
  margin: 0;
  font-size: 1.2rem;
}

.consent-toggle {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.toggle-switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
}

.toggle-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle-slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #cbd5e0;
  transition: .4s;
  border-radius: 24px;
}

.toggle-slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .toggle-slider {
  background-color: #48bb78;
}

input:checked + .toggle-slider:before {
  transform: translateX(26px);
}

.toggle-status {
  color: #4a5568;
  font-weight: 500;
}

.consent-description {
  color: #718096;
  margin: 0;
  line-height: 1.5;
}

.update-feedback {
  color: #38a169;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

.logout-btn {
  background: #e53e3e;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.logout-btn:hover {
  background: #c53030;
}

@media (max-width: 768px) {
  .consent-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .profile-container {
    padding: 1rem;
  }
  
  .profile-section {
    padding: 1.5rem;
  }
}
</style>