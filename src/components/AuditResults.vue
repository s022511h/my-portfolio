<template>
  <div class="audit-results">
    <!-- Overall Score Section -->
    <div class="score-header">
      <div class="score-circle">
        <div class="score-value">{{ results.overallScore }}</div>
        <div class="score-max">/100</div>
      </div>
      <div class="score-info">
        <h2>Website Performance Score</h2>
        <p class="website-url">{{ results.websiteUrl }}</p>
        <div class="score-rating">
          <span :class="['rating-badge', getRatingClass(results.overallScore)]">
            {{ getRatingText(results.overallScore) }}
          </span>
        </div>
      </div>
    </div>

    <!-- Category Scores -->
    <div class="category-scores">
      <h3>Detailed Breakdown</h3>
      <div class="scores-grid">
        <div 
          v-for="category in categories" 
          :key="category.key"
          class="score-card"
        >
          <div class="category-header">
            <div class="category-icon">
              <i :class="category.icon"></i>
            </div>
            <h4>{{ category.title }}</h4>
          </div>
          
          <div class="score-display">
            <div class="score-bar">
              <div 
                class="score-fill" 
                :style="{ 
                  width: results.scores[category.key] + '%',
                  backgroundColor: getScoreColor(results.scores[category.key])
                }"
              ></div>
            </div>
            <span class="score-number">{{ results.scores[category.key] }}/100</span>
          </div>
          
          <p class="category-description">{{ category.description }}</p>
          
          <div v-if="getCategoryIssues(category.key).length > 0" class="category-issues">
            <div 
              v-for="issue in getCategoryIssues(category.key)" 
              :key="issue.id"
              class="issue-item"
            >
              <span :class="['priority-badge', issue.priority]">
                {{ issue.priority }}
              </span>
              <span class="issue-text">{{ issue.description }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Recommendations Section -->
    <div class="recommendations-section">
      <h3>Priority Recommendations</h3>
      <div class="recommendations-list">
        <div 
          v-for="(rec, index) in prioritizedRecommendations" 
          :key="index"
          class="recommendation-card"
        >
          <div class="rec-header">
            <span :class="['priority-indicator', rec.priority]">
              {{ rec.priority.toUpperCase() }}
            </span>
            <div class="impact-score">
              Impact: {{ rec.impact }}/10
            </div>
          </div>
          
          <h4 class="rec-title">{{ rec.title }}</h4>
          <p class="rec-description">{{ rec.description }}</p>
          
          <div v-if="rec.steps && rec.steps.length > 0" class="rec-steps">
            <strong>How to fix:</strong>
            <ol>
              <li v-for="step in rec.steps" :key="step">{{ step }}</li>
            </ol>
          </div>
          
          <div class="rec-footer">
            <span class="estimated-time">
              ⏱️ Estimated time: {{ rec.estimatedTime }}
            </span>
            <span class="difficulty">
              🎯 Difficulty: {{ rec.difficulty }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Competitive Analysis -->
    <div v-if="results.competitive" class="competitive-section">
      <h3>How You Compare</h3>
      <div class="competitive-stats">
        <div class="stat-item">
          <div class="stat-value">{{ results.competitive.percentile }}%</div>
          <div class="stat-label">Better than websites in your industry</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">{{ results.competitive.avgIndustryScore }}</div>
          <div class="stat-label">Industry average score</div>
        </div>
      </div>
    </div>

    <div class="action-buttons">
      <button @click="downloadReport" class="action-btn primary">
        📄 Download Full Report
      </button>
      <button @click="$emit('show-capture')" class="action-btn secondary">
        📧 Get Improvement Tips
      </button>
      <button @click="shareResults" class="action-btn tertiary">
        🔗 Share Results
      </button>
    </div>

    <div class="next-steps">
      <h3>Next Steps</h3>
      <div class="steps-grid">
        <div class="step-card">
          <h4>Quick Wins (This Week)</h4>
          <ul>
            <li v-for="win in results.quickWins" :key="win">{{ win }}</li>
          </ul>
        </div>
        <div class="step-card">
          <h4>Medium Term (This Month)</h4>
          <ul>
            <li v-for="goal in results.mediumTermGoals" :key="goal">{{ goal }}</li>
          </ul>
        </div>
        <div class="step-card">
          <h4>Long Term (3 Months)</h4>
          <ul>
            <li v-for="goal in results.longTermGoals" :key="goal">{{ goal }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuditResults',
  props: {
    results: {
      type: Object,
      required: true
    }
  },
  emits: ['show-capture'],
  data() {
    return {
      categories: [
        {
          key: 'performance',
          title: 'Performance',
          icon: '⚡',
          description: 'Page loading speed and resource optimization'
        },
        {
          key: 'seo',
          title: 'SEO',
          icon: '🔍',
          description: 'Search engine optimization and discoverability'
        },
        {
          key: 'security',
          title: 'Security',
          icon: '🔒',
          description: 'HTTPS, security headers, and vulnerabilities'
        },
        {
          key: 'mobile',
          title: 'Mobile Friendly',
          icon: '📱',
          description: 'Mobile responsiveness and user experience'
        },
        {
          key: 'accessibility',
          title: 'Accessibility',
          icon: '♿',
          description: 'Website accessibility for all users'
        },
        {
          key: 'bestPractices',
          title: 'Best Practices',
          icon: '✅',
          description: 'Web development standards and practices'
        }
      ]
    }
  },
  computed: {
    prioritizedRecommendations() {
      if (!this.results.recommendations) return [];
      
      return [...this.results.recommendations]
        .sort((a, b) => {
          const priorityOrder = { high: 3, medium: 2, low: 1 };
          if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
            return priorityOrder[b.priority] - priorityOrder[a.priority];
          }
          return (b.impact || 0) - (a.impact || 0);
        })
        .slice(0, 6); 
    }
  },
  methods: {
    getRatingClass(score) {
      if (score >= 90) return 'excellent';
      if (score >= 70) return 'good';
      if (score >= 50) return 'average';
      return 'poor';
    },
    
    getRatingText(score) {
      if (score >= 90) return 'Excellent';
      if (score >= 70) return 'Good';
      if (score >= 50) return 'Needs Improvement';
      return 'Critical Issues';
    },
    
    getScoreColor(score) {
      if (score >= 90) return '#48bb78';
      if (score >= 70) return '#ed8936';
      if (score >= 50) return '#ecc94b';
      return '#f56565';
    },
    
    getCategoryIssues(categoryKey) {
      if (!this.results.issues) return [];
      return this.results.issues.filter(issue => issue.category === categoryKey);
    },
    
    async downloadReport() {
      try {
        const response = await fetch(`${process.env.VUE_APP_API_URL}/audit/download-report`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            auditId: this.results.auditId,
            format: 'pdf'
          })
        });
        
        if (response.ok) {
          const blob = await response.blob();
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `website-audit-${this.results.websiteUrl.replace(/[^a-zA-Z0-9]/g, '-')}.pdf`;
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
          document.body.removeChild(a);
        }
      } catch (error) {
        console.error('Error downloading report:', error);
        alert('Error downloading report. Please try again.');
      }
    },
    
    shareResults() {
      if (navigator.share) {
        navigator.share({
          title: `Website Audit Results - Score: ${this.results.overallScore}/100`,
          text: `I just analyzed my website with N15 Labs and got a score of ${this.results.overallScore}/100!`,
          url: window.location.href
        });
      } else {
        const shareText = `I just analyzed my website with N15 Labs and got a score of ${this.results.overallScore}/100! Check it out: ${window.location.href}`;
        navigator.clipboard.writeText(shareText).then(() => {
          alert('Results copied to clipboard!');
        });
      }
    }
  }
}
</script>

<style scoped>
.audit-results {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
}

.score-header {
  display: flex;
  align-items: center;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
}

.score-circle {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  margin-right: 2rem;
  position: relative;
}

.score-value {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1;
}

.score-max {
  font-size: 0.875rem;
  opacity: 0.8;
}

.score-info h2 {
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.website-url {
  color: #718096;
  margin-bottom: 1rem;
  font-family: monospace;
  background: #f7fafc;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  display: inline-block;
}

.rating-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
}

.rating-badge.excellent {
  background: #c6f6d5;
  color: #22543d;
}

.rating-badge.good {
  background: #feebc8;
  color: #c05621;
}

.rating-badge.average {
  background: #fefcbf;
  color: #744210;
}

.rating-badge.poor {
  background: #fed7d7;
  color: #742a2a;
}

.category-scores,
.recommendations-section,
.competitive-section,
.next-steps {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
}

.category-scores h3,
.recommendations-section h3,
.competitive-section h3,
.next-steps h3 {
  color: #2d3748;
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
}

.scores-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.score-card {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
}

.category-header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.category-icon {
  font-size: 1.5rem;
  margin-right: 0.75rem;
}

.category-header h4 {
  color: #2d3748;
  margin: 0;
}

.score-display {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
}

.score-bar {
  flex: 1;
  height: 8px;
  background: #e2e8f0;
  border-radius: 4px;
  overflow: hidden;
  margin-right: 0.75rem;
}

.score-fill {
  height: 100%;
  border-radius: 4px;
  transition: width 0.5s ease;
}

.score-number {
  font-weight: 600;
  color: #2d3748;
  min-width: 60px;
  text-align: right;
}

.category-description {
  color: #718096;
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.category-issues {
  border-top: 1px solid #e2e8f0;
  padding-top: 1rem;
}

.issue-item {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.priority-badge {
  padding: 0.125rem 0.5rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-right: 0.75rem;
  min-width: 60px;
  text-align: center;
}

.priority-badge.high {
  background: #fed7d7;
  color: #742a2a;
}

.priority-badge.medium {
  background: #feebc8;
  color: #c05621;
}

.priority-badge.low {
  background: #c6f6d5;
  color: #22543d;
}

.issue-text {
  color: #4a5568;
  font-size: 0.875rem;
}

.recommendations-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.recommendation-card {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
}

.rec-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.priority-indicator {
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 700;
}

.priority-indicator.high {
  background: #fed7d7;
  color: #742a2a;
}

.priority-indicator.medium {
  background: #feebc8;
  color: #c05621;
}

.priority-indicator.low {
  background: #c6f6d5;
  color: #22543d;
}

.impact-score {
  color: #718096;
  font-size: 0.875rem;
  font-weight: 600;
}

.rec-title {
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.rec-description {
  color: #4a5568;
  margin-bottom: 1rem;
}

.rec-steps {
  background: #f7fafc;
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 1rem;
}

.rec-steps ol {
  margin: 0.5rem 0 0 1rem;
  color: #4a5568;
}

.rec-footer {
  display: flex;
  justify-content: space-between;
  color: #718096;
  font-size: 0.875rem;
}

.competitive-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
}

.stat-item .stat-value {
  font-size: 2.5rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 0.5rem;
}

.stat-item .stat-label {
  color: #718096;
}

.action-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
}

.action-btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.action-btn.primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.action-btn.secondary {
  background: #4a5568;
  color: white;
}

.action-btn.tertiary {
  background: #f7fafc;
  color: #4a5568;
  border: 1px solid #e2e8f0;
}

.action-btn:hover {
  transform: translateY(-1px);
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.step-card {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
}

.step-card h4 {
  color: #2d3748;
  margin-bottom: 1rem;
}

.step-card ul {
  color: #4a5568;
  padding-left: 1.25rem;
}

.step-card li {
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .audit-results {
    padding: 1rem;
  }
  
  .score-header {
    flex-direction: column;
    text-align: center;
  }
  
  .score-circle {
    margin-right: 0;
    margin-bottom: 1.5rem;
  }
  
  .scores-grid {
    grid-template-columns: 1fr;
  }
  
  .action-buttons {
    flex-direction: column;
  }
  
  .rec-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .rec-footer {
    flex-direction: column;
    gap: 0.25rem;
  }
}
</style>