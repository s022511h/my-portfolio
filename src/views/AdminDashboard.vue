<template>
  <div class="admin-container">
    <div class="admin-header">
      <h1>Admin Dashboard</h1>
      <p>Manage users, campaigns, and email communications</p>
    </div>
    
    <div class="admin-content">
      <div class="stats-section">
        <h2>Overview</h2>
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-number">{{ stats.totalUsers }}</div>
            <div class="stat-label">Total Users</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">{{ stats.marketingConsent }}</div>
            <div class="stat-label">Marketing Subscribers</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">{{ stats.emailsSent }}</div>
            <div class="stat-label">Emails Sent</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">{{ stats.suppressedEmails }}</div>
            <div class="stat-label">Suppressed Emails</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">{{ stats.totalAudits }}</div>
            <div class="stat-label">Site Audits</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">{{ stats.auditCaptures }}</div>
            <div class="stat-label">Audit Captures</div>
          </div>
        </div>
      </div>
      
      <div class="campaign-section">
        <h2>Send Marketing Campaign</h2>
        <div class="campaign-form">
          <div class="form-group">
            <label for="subject">Email Subject</label>
            <input
              id="subject"
              v-model="campaign.subject"
              type="text"
              placeholder="Enter email subject"
              class="form-input"
            />
          </div>
          
          <div class="form-group">
            <label for="template">Template</label>
            <select v-model="campaign.template" class="form-select">
              <option value="newsletter">Newsletter</option>
              <option value="product_update">Product Update</option>
            </select>
          </div>
          
          <div class="form-group">
            <label for="content">Email Content</label>
            <textarea
              id="content"
              v-model="campaign.content"
              placeholder="Enter email content..."
              class="form-textarea"
              rows="6"
            ></textarea>
          </div>
          
          <div class="form-group">
            <label for="recipients">Recipients</label>
            <select v-model="campaign.recipientType" class="form-select">
              <option value="all">All Marketing Subscribers</option>
            </select>
          </div>
          
          <button 
            @click="sendCampaign" 
            :disabled="sending || !campaign.subject || !campaign.content"
            class="send-btn"
          >
            <span v-if="!sending">Send Campaign</span>
            <span v-else>Sending...</span>
          </button>
          
          <div v-if="campaignResult" :class="campaignResultClass">
            {{ campaignResult }}
          </div>
        </div>
      </div>
      
      <div class="logs-section">
        <h2>Recent Email Activity</h2>
        <div class="logs-container">
          <div class="logs-header">
            <button @click="loadEmailLogs" class="refresh-btn">Refresh Logs</button>
          </div>
          
          <div v-if="loadingLogs" class="loading">Loading email logs...</div>
          
          <div v-else-if="emailLogs.length === 0" class="no-logs">
            No email logs found
          </div>
          
          <div v-else class="logs-table">
            <div class="log-item log-header">
              <span>Email</span>
              <span>Type</span>
              <span>Template</span>
              <span>Subject</span>
              <span>Sent At</span>
            </div>
            
            <div v-for="log in emailLogs" :key="log.id" class="log-item">
              <span class="log-email">{{ log.email }}</span>
              <span :class="getTypeClass(log.type)">{{ log.type }}</span>
              <span>{{ log.template || '-' }}</span>
              <span class="log-subject">{{ log.subject }}</span>
              <span>{{ formatDate(log.sent_at) }}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="users-section">
        <h2>User Management</h2>
        <div class="users-container">
          <button @click="loadUsers" class="refresh-btn">Load Users</button>
          
          <div v-if="loadingUsers" class="loading">Loading users...</div>
          
          <div v-else-if="users.length === 0" class="no-users">
            No users found
          </div>
          
          <div v-else class="users-table">
            <div class="user-item user-header">
              <span>Name</span>
              <span>Email</span>
              <span>Marketing Consent</span>
              <span>Email Verified</span>
              <span>Joined</span>
            </div>
            
            <div v-for="user in users" :key="user.id" class="user-item">
              <span>{{ user.first_name }} {{ user.last_name }}</span>
              <span>{{ user.email }}</span>
              <span :class="getConsentClass(user.marketing_consent)">
                {{ user.marketing_consent ? 'Yes' : 'No' }}
              </span>
              <span :class="getVerifiedClass(user.email_verified)">
                {{ user.email_verified ? 'Verified' : 'Pending' }}
              </span>
              <span>{{ formatDate(user.created_at) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { authStore } from '../stores/firebaseAuth.js'

export default {
  name: 'AdminDashboard',
  data() {
    return {
      authStore,
      stats: {
        totalUsers: 0,
        marketingConsent: 0,
        emailsSent: 0,
        suppressedEmails: 0,
        totalAudits: 0,  
        auditCaptures: 0  
      },
      campaign: {
        subject: '',
        template: 'newsletter',
        content: '',
        recipientType: 'all'
      },
      sending: false,
      campaignResult: '',
      campaignResultClass: '',
      emailLogs: [],
      loadingLogs: false,
      users: [],
      loadingUsers: false
    }
  },
  async mounted() {
    if (!authStore.isAuthenticated || authStore.user?.id !== 1) {
      this.$router.push('/profile');
      return;
    }
    
    await this.loadStats();
    await this.loadEmailLogs();
  },
  methods: {
    async loadStats() {
      try {
        const token = await authStore.getCurrentToken();
        const response = await fetch(`${process.env.VUE_APP_API_URL}/admin/stats`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (response.ok) {
          const data = await response.json();
          this.stats = data.stats;
        }
      } catch (error) {
        console.error('Error loading stats:', error);
      }
    },
    
    async sendCampaign() {
      this.sending = true;
      this.campaignResult = '';
      
      try {
        const token = await authStore.getCurrentToken();
        const response = await fetch(`${process.env.VUE_APP_API_URL}/emails/marketing/send`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(this.campaign)
        });
        
        const data = await response.json();
        
        if (data.success) {
          this.campaignResult = `Campaign sent successfully! ${data.sent} emails sent, ${data.failed} failed.`;
          this.campaignResultClass = 'success-message';
          
          this.campaign = {
            subject: '',
            template: 'newsletter',
            content: '',
            recipientType: 'all'
          };
          
          await this.loadEmailLogs();
          await this.loadStats();
        } else {
          this.campaignResult = data.error || 'Failed to send campaign';
          this.campaignResultClass = 'error-message';
        }
      } catch (error) {
        console.error('Error sending campaign:', error);
        this.campaignResult = 'Error sending campaign';
        this.campaignResultClass = 'error-message';
      } finally {
        this.sending = false;
      }
    },
    
    async loadEmailLogs() {
      this.loadingLogs = true;
      
      try {
        const token = await authStore.getCurrentToken();
        const response = await fetch(`${process.env.VUE_APP_API_URL}/emails/log`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (response.ok) {
          const data = await response.json();
          this.emailLogs = data.logs || [];
        }
      } catch (error) {
        console.error('Error loading email logs:', error);
      } finally {
        this.loadingLogs = false;
      }
    },
    
    async loadUsers() {
      this.loadingUsers = true;
      
      try {
        const token = await authStore.getCurrentToken();
        const response = await fetch(`${process.env.VUE_APP_API_URL}/admin/users`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (response.ok) {
          const data = await response.json();
          this.users = data.users || [];
        }
      } catch (error) {
        console.error('Error loading users:', error);
      } finally {
        this.loadingUsers = false;
      }
    },
    
    formatDate(dateString) {
      if (!dateString) return '-';
      return new Date(dateString).toLocaleDateString() + ' ' + 
             new Date(dateString).toLocaleTimeString();
    },
    
    getTypeClass(type) {
      return {
        'type-transactional': type === 'transactional',
        'type-marketing': type === 'marketing'
      };
    },
    
    getConsentClass(hasConsent) {
      return {
        'consent-yes': hasConsent,
        'consent-no': !hasConsent
      };
    },
    
    getVerifiedClass(isVerified) {
      return {
        'verified-yes': isVerified,
        'verified-no': !isVerified
      };
    }
  }
}
</script>

<style scoped>
.admin-container {
  min-height: 100vh;
  background: #f8fafc;
  padding: 2rem;
}

.admin-header {
  text-align: center;
  margin-bottom: 3rem;
}

.admin-header h1 {
  color: #1a202c;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.admin-header p {
  color: #718096;
  font-size: 1.1rem;
}

.admin-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.stats-section,
.campaign-section,
.logs-section,
.users-section {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.stats-section h2,
.campaign-section h2,
.logs-section h2,
.users-section h2 {
  color: #2d3748;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.stat-card {
  background: #f7fafc;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  border: 1px solid #e2e8f0;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: #3182ce;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: #4a5568;
  font-weight: 500;
}

.campaign-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 600px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  color: #2d3748;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-input,
.form-select,
.form-textarea {
  padding: 0.75rem;
  border: 1px solid #d2d6dc;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.2s;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: #3182ce;
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.send-btn {
  background: linear-gradient(135deg, #3182ce, #2c5282);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s;
  align-self: flex-start;
}

.send-btn:hover:not(:disabled) {
  transform: translateY(-1px);
}

.send-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.refresh-btn {
  background: #4a5568;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.refresh-btn:hover {
  background: #2d3748;
}

.success-message {
  background: #c6f6d5;
  color: #22543d;
  padding: 0.75rem;
  border-radius: 6px;
  font-weight: 500;
}

.error-message {
  background: #fed7d7;
  color: #742a2a;
  padding: 0.75rem;
  border-radius: 6px;
  font-weight: 500;
}

.logs-container,
.users-container {
  margin-top: 1rem;
}

.logs-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.loading {
  text-align: center;
  color: #718096;
  padding: 2rem;
}

.no-logs,
.no-users {
  text-align: center;
  color: #a0aec0;
  padding: 2rem;
}

.logs-table,
.users-table {
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
}

.log-item,
.user-item {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 2fr 1.5fr;
  gap: 1rem;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #e2e8f0;
  align-items: center;
}

.log-header,
.user-header {
  background: #f7fafc;
  font-weight: 600;
  color: #2d3748;
}

.log-item:last-child,
.user-item:last-child {
  border-bottom: none;
}

.log-email {
  font-size: 0.875rem;
  color: #4a5568;
}

.log-subject {
  font-size: 0.875rem;
  color: #2d3748;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.type-transactional {
  background: #bee3f8;
  color: #2c5282;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  text-align: center;
}

.type-marketing {
  background: #c6f6d5;
  color: #22543d;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  text-align: center;
}

.consent-yes {
  color: #22543d;
  font-weight: 600;
}

.consent-no {
  color: #742a2a;
  font-weight: 600;
}

.verified-yes {
  color: #22543d;
  font-weight: 600;
}

.verified-no {
  color: #744210;
  font-weight: 600;
}

@media (max-width: 768px) {
  .admin-container {
    padding: 1rem;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .log-item,
  .user-item {
    grid-template-columns: 1fr;
    gap: 0.5rem;
    text-align: left;
  }
  
  .log-header,
  .user-header {
    display: none;
  }
}
</style>