<template>
  <div class="profile-container">
    <div class="profile-header">
      <h1>Account Settings</h1>
      <p>Manage your account information, privacy preferences, and data rights under UK GDPR</p>
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
          <div class="info-item">
            <strong>Last login:</strong> {{ formatDate(user.lastLogin) }}
          </div>
        </div>
      </div>
      
      <div class="profile-section">
        <h2>Privacy Preferences</h2>
        
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
              <strong>Lawful Basis:</strong> Consent (Article 6(1)(a) UK GDPR)<br>
              Receive updates about new features, beta testing opportunities, and product announcements.
              You can withdraw this consent at any time.
            </p>
            
            <div v-if="lastUpdated" class="update-feedback">
              ✓ Updated {{ lastUpdated }}
            </div>
          </div>
        </div>
        
        <div class="consent-item">
          <div class="consent-header">
            <h3>Cookie Preferences</h3>
            <button @click="openCookieSettings" class="btn-secondary">
              Manage Cookies
            </button>
          </div>
          <p class="consent-description">
            Current cookie consent status:
          </p>
          <div class="cookie-status">
            <div class="status-item">
              <span class="status-label">Analytics:</span>
              <span :class="['status-value', cookieConsents.analytics ? 'enabled' : 'disabled']">
                {{ cookieConsents.analytics ? 'Enabled' : 'Disabled' }}
              </span>
            </div>
            <div class="status-item">
              <span class="status-label">Marketing:</span>
              <span :class="['status-value', cookieConsents.marketing ? 'enabled' : 'disabled']">
                {{ cookieConsents.marketing ? 'Enabled' : 'Disabled' }}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="profile-section">
        <h2>Your Data Rights (UK GDPR)</h2>
        <div class="data-rights">
          <div class="rights-intro">
            <p>Under UK GDPR, you have several rights regarding your personal data:</p>
          </div>
          
          <div class="rights-grid">
            <div class="right-item">
              <h4>Right of Access</h4>
              <p>Request a copy of all personal data we hold about you</p>
              <button @click="requestDataExport" :disabled="exportRequesting" class="btn-primary">
                {{ exportRequesting ? 'Processing...' : 'Download My Data' }}
              </button>
            </div>
            
            <div class="right-item">
              <h4>Right to Rectification</h4>
              <p>Request correction of inaccurate personal data</p>
              <button @click="requestDataCorrection" class="btn-primary">
                Request Correction
              </button>
            </div>
            
            <div class="right-item">
              <h4>Right to Erasure</h4>
              <p>Request deletion of your personal data (subject to legal obligations)</p>
              <button @click="showDeleteConfirmation = true" class="btn-danger">
                Delete My Data
              </button>
            </div>
            
            <div class="right-item">
              <h4>Right to Portability</h4>
              <p>Receive your data in a structured, machine-readable format</p>
              <button @click="requestDataPortability" :disabled="portabilityRequesting" class="btn-primary">
                {{ portabilityRequesting ? 'Processing...' : 'Export Portable Data' }}
              </button>
            </div>
            
            <div class="right-item">
              <h4>Right to Object</h4>
              <p>Object to processing based on legitimate interests</p>
              <button @click="objectToProcessing" class="btn-primary">
                Object to Processing
              </button>
            </div>
            
            <div class="right-item">
              <h4>Right to Restrict</h4>
              <p>Request restriction of processing in certain circumstances</p>
              <button @click="requestRestriction" class="btn-primary">
                Restrict Processing
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div class="profile-section">
        <h2>How We Process Your Data</h2>
        <div class="processing-info">
          <div class="processing-item">
            <h4>Account Data</h4>
            <p><strong>Purpose:</strong> Account management and service provision</p>
            <p><strong>Lawful Basis:</strong> Contract performance (Article 6(1)(b))</p>
            <p><strong>Retention:</strong> Until account deletion or 3 years of inactivity</p>
          </div>
          
          <div class="processing-item">
            <h4>Analytics Data</h4>
            <p><strong>Purpose:</strong> Website improvement and usage analysis</p>
            <p><strong>Lawful Basis:</strong> Legitimate interests (Article 6(1)(f))</p>
            <p><strong>Retention:</strong> 26 months (Google Analytics default)</p>
            <p><strong>Third Party:</strong> Google Analytics (USA) - adequacy decision</p>
          </div>
          
          <div class="processing-item">
            <h4>Marketing Data</h4>
            <p><strong>Purpose:</strong> Communication about services and updates</p>
            <p><strong>Lawful Basis:</strong> Consent (Article 6(1)(a))</p>
            <p><strong>Retention:</strong> Until consent withdrawn or 3 years of inactivity</p>
          </div>
        </div>
      </div>
      
      <div class="profile-section">
        <h2>Account Actions</h2>
        <div class="account-actions">
          <button @click="handleLogout" class="logout-btn">
            Sign Out
          </button>
          <button @click="contactDataController" class="btn-secondary">
            Contact Data Controller
          </button>
        </div>
      </div>
    </div>
    
    <div v-if="showDeleteConfirmation" class="modal-overlay" @click="showDeleteConfirmation = false">
      <div class="modal-content" @click.stop>
        <h3>Confirm Data Deletion</h3>
        <p>
          This will permanently delete all your personal data, including:
        </p>
        <ul>
          <li>Account information</li>
          <li>Project history (where legally permissible)</li>
          <li>Consent records</li>
          <li>Communication preferences</li>
        </ul>
        <p class="warning-text">
          <strong>Warning:</strong> This action cannot be undone. Some data may be retained for legal compliance (e.g., accounting records for 7 years).
        </p>
        <div class="modal-actions">
          <button @click="confirmDataDeletion" :disabled="deleteRequesting" class="btn-danger">
            {{ deleteRequesting ? 'Deleting...' : 'Yes, Delete My Data' }}
          </button>
          <button @click="showDeleteConfirmation = false" class="btn-secondary">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { authStore } from '../stores/firebaseAuth.js'
import { getStoredConsents, getComplianceLogs, deleteAllStoredData } from '../utils/analytics.js'

export default {
  name: 'UserProfile',
  data() {
    return {
      authStore,
      marketingConsent: false,
      updating: false,
      lastUpdated: null,
      cookieConsents: {
        necessary: true,
        analytics: false,
        marketing: false
      },
      showDeleteConfirmation: false,
      deleteRequesting: false,
      exportRequesting: false,
      portabilityRequesting: false
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
    this.loadCookieConsents();
  },
  methods: {
    loadCookieConsents() {
      const consents = getStoredConsents();
      if (consents) {
        this.cookieConsents = { ...consents };
      }
    },
    
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
            granted: this.marketingConsent,
            timestamp: new Date().toISOString(),
            lawfulBasis: 'consent'
          })
        });
        
        const data = await response.json();
        if (data.success) {
          this.lastUpdated = 'just now';
          
          this.logConsentChange('marketing', this.marketingConsent);
          
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
    
    openCookieSettings() {
      this.$root.$emit('show-cookie-banner');
    },
    
    async requestDataExport() {
      this.exportRequesting = true;
      
      try {
        const token = await authStore.getCurrentToken();
        const response = await fetch(`${process.env.VUE_APP_API_URL}/data/export`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (response.ok) {
          const blob = await response.blob();
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `n15labs-data-export-${new Date().toISOString().split('T')[0]}.json`;
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
          document.body.removeChild(a);
          
          this.logDataRightExercise('access');
        } else {
          throw new Error('Export failed');
        }
      } catch (error) {
        console.error('Error exporting data:', error);
        alert('Error exporting data. Please contact support.');
      } finally {
        this.exportRequesting = false;
      }
    },
    
    async requestDataPortability() {
      this.portabilityRequesting = true;
      
      try {
        const token = await authStore.getCurrentToken();
        const response = await fetch(`${process.env.VUE_APP_API_URL}/data/portability`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (response.ok) {
          const blob = await response.blob();
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `n15labs-portable-data-${new Date().toISOString().split('T')[0]}.csv`;
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
          document.body.removeChild(a);
          
          this.logDataRightExercise('portability');
        }
      } catch (error) {
        console.error('Error requesting data portability:', error);
        alert('Error generating portable data. Please contact support.');
      } finally {
        this.portabilityRequesting = false;
      }
    },
    
    async confirmDataDeletion() {
      this.deleteRequesting = true;
      
      try {
        const token = await authStore.getCurrentToken();
        const response = await fetch(`${process.env.VUE_APP_API_URL}/data/delete`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (response.ok) {
          deleteAllStoredData();
          
          this.logDataRightExercise('erasure');
          
          alert('Your data has been scheduled for deletion. You will receive a confirmation email.');
          await authStore.logout();
          this.$router.push('/');
        } else {
          throw new Error('Deletion failed');
        }
      } catch (error) {
        console.error('Error deleting data:', error);
        alert('Error processing deletion request. Please contact support.');
      } finally {
        this.deleteRequesting = false;
        this.showDeleteConfirmation = false;
      }
    },
    
    async requestDataCorrection() {
      const correction = prompt('Please describe what information needs to be corrected:');
      if (correction) {
        try {
          const token = await authStore.getCurrentToken();
          await fetch(`${process.env.VUE_APP_API_URL}/data/correction`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
              request: correction,
              timestamp: new Date().toISOString()
            })
          });
          
          this.logDataRightExercise('rectification');
          alert('Correction request submitted. We will review and respond within 30 days.');
        } catch (error) {
          console.error('Error submitting correction request:', error);
          alert('Error submitting request. Please contact support directly.');
        }
      }
    },
    
    async objectToProcessing() {
      const objection = prompt('Please specify which processing you object to and your reasons:');
      if (objection) {
        try {
          const token = await authStore.getCurrentToken();
          await fetch(`${process.env.VUE_APP_API_URL}/data/objection`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
              objection: objection,
              timestamp: new Date().toISOString()
            })
          });
          
          this.logDataRightExercise('objection');
          alert('Objection recorded. We will review and respond within 30 days.');
        } catch (error) {
          console.error('Error submitting objection:', error);
          alert('Error submitting objection. Please contact support directly.');
        }
      }
    },
    
    async requestRestriction() {
      const restriction = prompt('Please specify which processing should be restricted and why:');
      if (restriction) {
        try {
          const token = await authStore.getCurrentToken();
          await fetch(`${process.env.VUE_APP_API_URL}/data/restriction`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
              request: restriction,
              timestamp: new Date().toISOString()
            })
          });
          
          this.logDataRightExercise('restriction');
          alert('Restriction request submitted. We will review and respond within 30 days.');
        } catch (error) {
          console.error('Error submitting restriction request:', error);
          alert('Error submitting request. Please contact support directly.');
        }
      }
    },
    
    contactDataController() {
      window.location.href = 'mailto:privacy@n15labs.co.uk?subject=Data Protection Inquiry';
    },
    
    logConsentChange(type, granted) {
      try {
        const logEntry = {
          type: 'consent_change',
          consentType: type,
          granted: granted,
          timestamp: new Date().toISOString(),
          userId: this.user.id
        };
        
        const existingLogs = JSON.parse(localStorage.getItem('consent-logs') || '[]');
        existingLogs.push(logEntry);
        localStorage.setItem('consent-logs', JSON.stringify(existingLogs));
      } catch (error) {
        console.warn('Failed to log consent change:', error);
      }
    },
    
    logDataRightExercise(rightType) {
      try {
        const logEntry = {
          type: 'data_right_exercise',
          rightType: rightType,
          timestamp: new Date().toISOString(),
          userId: this.user.id
        };
        
        const existingLogs = JSON.parse(localStorage.getItem('data-rights-logs') || '[]');
        existingLogs.push(logEntry);
        localStorage.setItem('data-rights-logs', JSON.stringify(existingLogs));
      } catch (error) {
        console.warn('Failed to log data right exercise:', error);
      }
    },
    
    async handleLogout() {
      await authStore.logout();
      this.$router.push('/');
    },
    
    formatDate(dateString) {
      if (!dateString) return 'Unknown';
      return new Date(dateString).toLocaleDateString('en-GB');
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
  max-width: 1000px;
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
  margin-bottom: 1rem;
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

.cookie-status {
  margin-top: 0.5rem;
}

.status-item {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #f1f5f9;
}

.status-label {
  font-weight: 500;
  color: #4a5568;
}

.status-value.enabled {
  color: #38a169;
}

.status-value.disabled {
  color: #e53e3e;
}

.rights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.right-item {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
  background: #f9fafb;
}

.right-item h4 {
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.right-item p {
  color: #718096;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.processing-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.processing-item {
  border-left: 4px solid #3182ce;
  padding-left: 1rem;
}

.processing-item h4 {
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.processing-item p {
  color: #718096;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.account-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-primary {
  background: #3182ce;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-primary:hover:not(:disabled) {
  background: #2c5aa0;
}

.btn-primary:disabled {
  background: #a0aec0;
  cursor: not-allowed;
}

.btn-secondary {
  background: #edf2f7;
  color: #4a5568;
  border: 1px solid #e2e8f0;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-secondary:hover {
  background: #e2e8f0;
}

.btn-danger {
  background: #e53e3e;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-danger:hover:not(:disabled) {
  background: #c53030;
}

.btn-danger:disabled {
  background: #a0aec0;
  cursor: not-allowed;
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

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 500px;
  margin: 2rem;
}

.modal-content h3 {
  color: #2d3748;
  margin-bottom: 1rem;
}

.modal-content ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.warning-text {
  color: #e53e3e;
  font-size: 0.9rem;
  margin: 1rem 0;
}

.modal-actions {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
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
  
  .rights-grid {
    grid-template-columns: 1fr;
  }
  
  .account-actions {
    flex-direction: column;
  }
  
  .modal-actions {
    flex-direction: column;
  }
}
</style>