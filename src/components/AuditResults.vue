<template>
  <div class="audit-results">
    <!-- Header with Grade -->
    <div class="results-header">
      <div class="grade-badge" :class="letterGradeClass">
        {{ letterGrade }}
      </div>
      <h1>Website Audit Results</h1>
      <p class="website-url">{{ results.websiteUrl }}</p>
      <p class="audit-date">Analysed on {{ formatDate(results.timestamp) }}</p>
    </div>

    <!-- Overall Score Circle -->
    <div class="overall-score">
      <div class="score-circle" :class="getOverallScoreClass()">
        <svg class="score-ring" viewBox="0 0 100 100">
          <circle class="score-ring-bg" cx="50" cy="50" r="45" />
          <circle 
            class="score-ring-fill" 
            cx="50" cy="50" r="45"
            :style="{ strokeDashoffset: scoreRingOffset }"
          />
        </svg>
        <div class="score-content">
          <span class="score-value">{{ results.score || 0 }}</span>
          <span class="score-label">Overall</span>
        </div>
      </div>
      <p class="score-description">{{ getScoreDescription() }}</p>
    </div>

    <!-- Core Web Vitals (if available) -->
    <div v-if="hasCoreWebVitals" class="section core-web-vitals">
      <h2>Core Web Vitals</h2>
      <div class="cwv-grid">
        <div class="cwv-card">
          <div class="cwv-label">LCP</div>
          <div class="cwv-value">{{ formatCWVValue(results.coreWebVitals?.lcp, 'lcp') }}</div>
          <div class="cwv-name">Largest Contentful Paint</div>
          <div class="cwv-status" :class="getCWVStatus(results.coreWebVitals?.lcp, 'lcp')">
            {{ getCWVStatusText(results.coreWebVitals?.lcp, 'lcp') }}
          </div>
        </div>
        <div class="cwv-card">
          <div class="cwv-label">INP</div>
          <div class="cwv-value">{{ formatCWVValue(results.coreWebVitals?.inp, 'inp') }}</div>
          <div class="cwv-name">Interaction to Next Paint</div>
          <div class="cwv-status" :class="getCWVStatus(results.coreWebVitals?.inp, 'inp')">
            {{ getCWVStatusText(results.coreWebVitals?.inp, 'inp') }}
          </div>
        </div>
        <div class="cwv-card">
          <div class="cwv-label">CLS</div>
          <div class="cwv-value">{{ formatCWVValue(results.coreWebVitals?.cls, 'cls') }}</div>
          <div class="cwv-name">Cumulative Layout Shift</div>
          <div class="cwv-status" :class="getCWVStatus(results.coreWebVitals?.cls, 'cls')">
            {{ getCWVStatusText(results.coreWebVitals?.cls, 'cls') }}
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile vs Desktop Comparison -->
    <div v-if="hasMobileDesktopComparison" class="section device-comparison">
      <h2>Device Performance</h2>
      <div class="device-grid">
        <div class="device-card mobile">
          <div class="device-icon">📱</div>
          <div class="device-label">Mobile</div>
          <div class="device-score" :class="getScoreClass(results.pageSpeed?.mobile?.performance)">
            {{ results.pageSpeed?.mobile?.performance || 'N/A' }}
          </div>
          <div class="device-weight">60% weight</div>
        </div>
        <div class="device-card desktop">
          <div class="device-icon">💻</div>
          <div class="device-label">Desktop</div>
          <div class="device-score" :class="getScoreClass(results.pageSpeed?.desktop?.performance)">
            {{ results.pageSpeed?.desktop?.performance || 'N/A' }}
          </div>
          <div class="device-weight">40% weight</div>
        </div>
      </div>
    </div>

    <!-- Category Scores Grid -->
    <div class="section scores-section">
      <h2>Category Scores</h2>
      <div class="scores-grid">
        <div class="score-card">
          <div class="score-header">
            <span class="score-icon">⚡</span>
            <h3>Performance</h3>
          </div>
          <div class="score-meter">
            <div class="meter-fill" :style="{ width: (results.performance?.score || 0) + '%' }" :class="getScoreClass(results.performance?.score)"></div>
          </div>
          <span class="score-text">{{ results.performance?.score || 0 }}/100</span>
          <ul class="score-details">
            <li>Load time: {{ formatMilliseconds(results.performance?.loadTime) }}</li>
          </ul>
        </div>

        <div class="score-card">
          <div class="score-header">
            <span class="score-icon">🔍</span>
            <h3>SEO</h3>
          </div>
          <div class="score-meter">
            <div class="meter-fill" :style="{ width: (results.seo?.score || 0) + '%' }" :class="getScoreClass(results.seo?.score)"></div>
          </div>
          <span class="score-text">{{ results.seo?.score || 0 }}/100</span>
          <ul class="score-details">
            <li>Title: {{ results.seo?.hasTitle ? '✓' : '✗' }}</li>
            <li>Meta description: {{ results.seo?.hasMetaDescription ? '✓' : '✗' }}</li>
            <li>H1 tags: {{ results.seo?.h1Count || 0 }}</li>
          </ul>
        </div>

        <div class="score-card">
          <div class="score-header">
            <span class="score-icon">🔒</span>
            <h3>Security</h3>
          </div>
          <div class="score-meter">
            <div class="meter-fill" :style="{ width: (results.security?.score || 0) + '%' }" :class="getScoreClass(results.security?.score)"></div>
          </div>
          <span class="score-text">{{ results.security?.score || 0 }}/100</span>
          <ul class="score-details">
            <li>HTTPS: {{ results.security?.hasSSL ? '✓' : '✗' }}</li>
            <li>CSP: {{ results.security?.hasContentSecurityPolicy ? '✓' : '✗' }}</li>
          </ul>
        </div>

        <div class="score-card">
          <div class="score-header">
            <span class="score-icon">♿</span>
            <h3>Accessibility</h3>
          </div>
          <div class="score-meter">
            <div class="meter-fill" :style="{ width: (results.accessibility?.score || 0) + '%' }" :class="getScoreClass(results.accessibility?.score)"></div>
          </div>
          <span class="score-text">{{ results.accessibility?.score || 0 }}/100</span>
          <ul class="score-details">
            <li>Alt text: {{ Math.round((results.accessibility?.imageAltRatio || 0) * 100) }}%</li>
            <li>Language: {{ results.accessibility?.hasLangAttribute ? '✓' : '✗' }}</li>
          </ul>
        </div>

        <div class="score-card">
          <div class="score-header">
            <span class="score-icon">✅</span>
            <h3>Best Practices</h3>
          </div>
          <div class="score-meter">
            <div class="meter-fill" :style="{ width: (results.bestPractices?.score || 0) + '%' }" :class="getScoreClass(results.bestPractices?.score)"></div>
          </div>
          <span class="score-text">{{ results.bestPractices?.score || 0 }}/100</span>
          <ul class="score-details">
            <li>Favicon: {{ results.bestPractices?.hasFavicon ? '✓' : '✗' }}</li>
          </ul>
        </div>

        <div class="score-card">
          <div class="score-header">
            <span class="score-icon">📝</span>
            <h3>Content</h3>
          </div>
          <div class="score-meter">
            <div class="meter-fill" :style="{ width: (results.content?.score || 0) + '%' }" :class="getScoreClass(results.content?.score)"></div>
          </div>
          <span class="score-text">{{ results.content?.score || 0 }}/100</span>
          <ul class="score-details">
            <li>Word count: {{ results.content?.metrics?.wordCount || 0 }}</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- PageSpeed Opportunities -->
    <div v-if="hasOpportunities" class="section opportunities">
      <h2>Improvement Opportunities</h2>
      <div class="opportunities-list">
        <div v-for="(opp, index) in results.opportunities.slice(0, 6)" :key="index" class="opportunity-item">
          <div class="opp-priority">
            {{ opp.priority === 'high' ? '🔴' : opp.priority === 'medium' ? '🟡' : '🟢' }}
          </div>
          <div class="opp-content">
            <div class="opp-title">{{ opp.title }}</div>
            <div v-if="opp.savings" class="opp-savings">Potential savings: {{ opp.savings }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Recommendations -->
    <div v-if="results.recommendations && results.recommendations.length > 0" class="section recommendations">
      <h2>Recommendations</h2>
      <div class="recommendations-grid">
        <div v-for="(rec, index) in results.recommendations" :key="index" 
             class="recommendation-card" :class="getPriorityClass(rec.priority)">
          <div class="rec-header">
            <span class="rec-category">{{ rec.category }}</span>
            <span class="rec-priority">{{ rec.priority }}</span>
          </div>
          <h3>{{ rec.title }}</h3>
          <p>{{ rec.description }}</p>
          <div v-if="rec.estimatedTime" class="rec-meta">
            <span class="rec-time">⏱️ {{ rec.estimatedTime }}</span>
            <span class="rec-impact">📈 {{ rec.estimatedImpact }} impact</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="action-buttons">
      <button @click="downloadReport" class="btn btn-primary">
        Download Report
      </button>
      <button @click="$emit('restart')" class="btn btn-outline">
        Audit Another Site
      </button>
    </div>

    <!-- CTA Section -->
    <div class="cta-section">
      <h2>Ready to Improve Your Website?</h2>
      <p>Get professional help to implement these recommendations and boost your online presence.</p>
      <div class="cta-stats">
        <div class="stat">
          <span class="stat-value">75%</span>
          <span class="stat-label">Lower Cost Per Lead</span>
        </div>
        <div class="stat">
          <span class="stat-value">+110%</span>
          <span class="stat-label">Organic Traffic</span>
        </div>
        <div class="stat">
          <span class="stat-value">£60k+</span>
          <span class="stat-label">Ad Spend Managed</span>
        </div>
      </div>
      <div class="cta-buttons">
        <a href="https://calendly.com/n15labs/strategy-call" target="_blank" rel="noopener noreferrer" class="cta-btn primary">
          Book a Free Strategy Call
        </a>
        <router-link to="/services" class="cta-btn secondary">
          View Services
        </router-link>
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
  emits: ['restart'],
  computed: {
    letterGrade() {
      return this.results.letterGrade || this.calculateGrade(this.results.score);
    },
    letterGradeClass() {
      const grade = this.letterGrade;
      if (grade === 'A') return 'grade-a';
      if (grade === 'B') return 'grade-b';
      if (grade === 'C') return 'grade-c';
      if (grade === 'D') return 'grade-d';
      return 'grade-f';
    },
    scoreRingOffset() {
      const circumference = 2 * Math.PI * 45;
      const score = this.results.score || 0;
      return circumference - (score / 100) * circumference;
    },
    hasCoreWebVitals() {
      const cwv = this.results.coreWebVitals;
      return cwv && (cwv.lcp !== null || cwv.inp !== null || cwv.cls !== null);
    },
    hasMobileDesktopComparison() {
      const ps = this.results.pageSpeed;
      return ps && ps.available && (ps.mobile || ps.desktop);
    },
    hasOpportunities() {
      return this.results.opportunities && this.results.opportunities.length > 0;
    }
  },
  methods: {
    calculateGrade(score) {
      if (score >= 90) return 'A';
      if (score >= 80) return 'B';
      if (score >= 70) return 'C';
      if (score >= 60) return 'D';
      if (score >= 50) return 'E';
      return 'F';
    },
    getScoreClass(score) {
      if (score >= 90) return 'excellent';
      if (score >= 70) return 'good';
      if (score >= 50) return 'average';
      return 'poor';
    },
    getOverallScoreClass() {
      return this.getScoreClass(this.results.score);
    },
    getScoreDescription() {
      const score = this.results.score;
      if (score >= 90) return 'Excellent! Your website is well-optimised.';
      if (score >= 70) return 'Good performance, but there\'s room for improvement.';
      if (score >= 50) return 'Average. Several areas need attention.';
      return 'Needs work. Significant improvements recommended.';
    },
    getPriorityClass(priority) {
      return 'priority-' + (priority || 'medium').toLowerCase();
    },
    getCWVStatus(value, metric) {
      if (value === null || value === undefined) return 'unknown';
      const thresholds = {
        lcp: { good: 2500, poor: 4000 },
        inp: { good: 200, poor: 500 },
        cls: { good: 0.1, poor: 0.25 }
      };
      const t = thresholds[metric];
      if (!t) return 'unknown';
      if (value <= t.good) return 'good';
      if (value <= t.poor) return 'average';
      return 'poor';
    },
    getCWVStatusText(value, metric) {
      const status = this.getCWVStatus(value, metric);
      if (status === 'good') return 'Good';
      if (status === 'average') return 'Needs Work';
      if (status === 'poor') return 'Poor';
      return 'N/A';
    },
    formatCWVValue(value, metric) {
      if (value === null || value === undefined) return 'N/A';
      if (metric === 'cls') return value.toFixed(3);
      if (value >= 1000) return (value / 1000).toFixed(1) + 's';
      return Math.round(value) + 'ms';
    },
    formatMilliseconds(ms) {
      if (!ms && ms !== 0) return 'N/A';
      if (ms >= 1000) return (ms / 1000).toFixed(2) + 's';
      return Math.round(ms) + 'ms';
    },
    formatDate(timestamp) {
      if (!timestamp) return 'N/A';
      return new Date(timestamp).toLocaleDateString('en-GB', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    },
    downloadReport() {
      const r = this.results;
      let report = 'WEBSITE AUDIT REPORT\n';
      report += '='.repeat(50) + '\n\n';
      report += 'Website: ' + r.websiteUrl + '\n';
      report += 'Date: ' + this.formatDate(r.timestamp) + '\n';
      report += 'Overall Score: ' + r.score + '/100 (Grade: ' + this.letterGrade + ')\n\n';
      
      report += 'CATEGORY SCORES\n' + '-'.repeat(30) + '\n';
      report += 'Performance: ' + (r.performance?.score || 0) + '/100\n';
      report += 'SEO: ' + (r.seo?.score || 0) + '/100\n';
      report += 'Security: ' + (r.security?.score || 0) + '/100\n';
      report += 'Accessibility: ' + (r.accessibility?.score || 0) + '/100\n';
      report += 'Best Practices: ' + (r.bestPractices?.score || 0) + '/100\n';
      report += 'Content: ' + (r.content?.score || 0) + '/100\n\n';
      
      if (r.recommendations && r.recommendations.length > 0) {
        report += 'RECOMMENDATIONS\n' + '-'.repeat(30) + '\n';
        r.recommendations.forEach(function(rec, i) {
          report += (i + 1) + '. [' + rec.priority + '] ' + rec.title + '\n';
          report += '   ' + rec.description + '\n\n';
        });
      }
      
      report += '\nGenerated by N15 Labs Website Audit Tool\n';
      report += 'https://n15labs.co.uk/audit\n';
      
      var blob = new Blob([report], { type: 'text/plain' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = 'audit-report-' + new Date().toISOString().split('T')[0] + '.txt';
      a.click();
      URL.revokeObjectURL(url);
    }
  }
};
</script>

<style scoped>
.audit-results {
  background: linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%);
  border-radius: 16px;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  color: #e2e8f0;
}

.results-header {
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
}

.grade-badge {
  position: absolute;
  top: 0;
  right: 0;
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 800;
}

.grade-a { background: linear-gradient(135deg, #10b981, #059669); color: white; }
.grade-b { background: linear-gradient(135deg, #3b82f6, #2563eb); color: white; }
.grade-c { background: linear-gradient(135deg, #f59e0b, #d97706); color: white; }
.grade-d { background: linear-gradient(135deg, #f97316, #ea580c); color: white; }
.grade-f { background: linear-gradient(135deg, #ef4444, #dc2626); color: white; }

.results-header h1 {
  font-size: 2rem;
  color: white;
  margin-bottom: 0.5rem;
}

.website-url {
  font-family: monospace;
  color: #94a3b8;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 6px;
  display: inline-block;
  margin-bottom: 0.5rem;
}

.audit-date {
  color: #64748b;
  font-size: 0.875rem;
}

.overall-score {
  text-align: center;
  margin-bottom: 3rem;
}

.score-circle {
  width: 180px;
  height: 180px;
  margin: 0 auto 1rem;
  position: relative;
}

.score-ring {
  transform: rotate(-90deg);
  width: 100%;
  height: 100%;
}

.score-ring-bg {
  fill: none;
  stroke: rgba(255, 255, 255, 0.1);
  stroke-width: 8;
}

.score-ring-fill {
  fill: none;
  stroke-width: 8;
  stroke-linecap: round;
  stroke-dasharray: 283;
  transition: stroke-dashoffset 1s ease;
}

.score-circle.excellent .score-ring-fill { stroke: #10b981; }
.score-circle.good .score-ring-fill { stroke: #3b82f6; }
.score-circle.average .score-ring-fill { stroke: #f59e0b; }
.score-circle.poor .score-ring-fill { stroke: #ef4444; }

.score-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.score-value {
  font-size: 3rem;
  font-weight: 800;
  color: white;
  display: block;
}

.score-label {
  font-size: 0.875rem;
  color: #94a3b8;
}

.score-description {
  color: #94a3b8;
  font-size: 1rem;
}

.section {
  margin-bottom: 3rem;
}

.section h2 {
  font-size: 1.5rem;
  color: white;
  margin-bottom: 1.5rem;
}

.cwv-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.cwv-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
}

.cwv-label {
  font-size: 0.875rem;
  font-weight: 700;
  color: #8b5cf6;
  margin-bottom: 0.5rem;
}

.cwv-value {
  font-size: 2rem;
  font-weight: 800;
  color: white;
  margin-bottom: 0.25rem;
}

.cwv-name {
  font-size: 0.75rem;
  color: #64748b;
  margin-bottom: 0.75rem;
}

.cwv-status {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  display: inline-block;
}

.cwv-status.good { background: rgba(16, 185, 129, 0.2); color: #10b981; }
.cwv-status.average { background: rgba(245, 158, 11, 0.2); color: #f59e0b; }
.cwv-status.poor { background: rgba(239, 68, 68, 0.2); color: #ef4444; }
.cwv-status.unknown { background: rgba(100, 116, 139, 0.2); color: #64748b; }

.device-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.device-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
}

.device-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.device-label {
  font-size: 1rem;
  color: #94a3b8;
  margin-bottom: 0.5rem;
}

.device-score {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 0.25rem;
}

.device-score.excellent { color: #10b981; }
.device-score.good { color: #3b82f6; }
.device-score.average { color: #f59e0b; }
.device-score.poor { color: #ef4444; }

.device-weight {
  font-size: 0.75rem;
  color: #64748b;
}

.scores-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.score-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
}

.score-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.score-icon {
  font-size: 1.5rem;
}

.score-header h3 {
  font-size: 1.125rem;
  color: white;
  margin: 0;
  flex: 1;
}

.score-meter {
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.75rem;
}

.meter-fill {
  height: 100%;
  transition: width 1s ease;
  border-radius: 4px;
}

.meter-fill.excellent { background: #10b981; }
.meter-fill.good { background: #3b82f6; }
.meter-fill.average { background: #f59e0b; }
.meter-fill.poor { background: #ef4444; }

.score-text {
  font-size: 1.125rem;
  font-weight: 700;
  color: white;
}

.score-details {
  margin-top: 1rem;
  list-style: none;
  padding: 0;
}

.score-details li {
  color: #94a3b8;
  font-size: 0.875rem;
  padding: 0.25rem 0;
}

.opportunities-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.opportunity-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem;
  border-radius: 8px;
}

.opp-priority {
  font-size: 1.25rem;
}

.opp-content {
  flex: 1;
}

.opp-title {
  color: white;
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.opp-savings {
  font-size: 0.875rem;
  color: #10b981;
}

.recommendations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.recommendation-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  border-left: 4px solid;
}

.recommendation-card.priority-critical { border-left-color: #ef4444; }
.recommendation-card.priority-high { border-left-color: #f59e0b; }
.recommendation-card.priority-medium { border-left-color: #3b82f6; }
.recommendation-card.priority-low { border-left-color: #10b981; }

.rec-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.rec-category {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #64748b;
}

.rec-priority {
  font-size: 0.625rem;
  font-weight: 700;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  text-transform: uppercase;
}

.priority-critical .rec-priority { background: rgba(239, 68, 68, 0.2); color: #ef4444; }
.priority-high .rec-priority { background: rgba(245, 158, 11, 0.2); color: #f59e0b; }
.priority-medium .rec-priority { background: rgba(59, 130, 246, 0.2); color: #3b82f6; }
.priority-low .rec-priority { background: rgba(16, 185, 129, 0.2); color: #10b981; }

.recommendation-card h3 {
  font-size: 1rem;
  color: white;
  margin-bottom: 0.5rem;
}

.recommendation-card p {
  color: #94a3b8;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 0.75rem;
}

.rec-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.75rem;
  color: #64748b;
}

.action-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(139, 92, 246, 0.3);
}

.btn-outline {
  background: transparent;
  color: #e2e8f0;
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.btn-outline:hover {
  border-color: rgba(255, 255, 255, 0.4);
  background: rgba(255, 255, 255, 0.05);
}

.cta-section {
  text-align: center;
  padding: 3rem;
  background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%);
  border-radius: 16px;
}

.cta-section h2 {
  font-size: 1.75rem;
  color: white;
  margin-bottom: 0.75rem;
}

.cta-section p {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
}

.cta-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.stat {
  text-align: center;
}

.stat-value {
  display: block;
  font-size: 2rem;
  font-weight: 800;
  color: white;
}

.stat-label {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-btn {
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s ease;
}

.cta-btn.primary {
  background: white;
  color: #6d28d9;
}

.cta-btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.cta-btn.secondary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid white;
}

.cta-btn.secondary:hover {
  background: rgba(255, 255, 255, 0.3);
}

@media (max-width: 768px) {
  .audit-results {
    padding: 1.5rem;
  }
  
  .grade-badge {
    position: static;
    margin: 0 auto 1rem;
  }
  
  .cwv-grid {
    grid-template-columns: 1fr;
  }
  
  .device-grid {
    grid-template-columns: 1fr;
  }
  
  .scores-grid {
    grid-template-columns: 1fr;
  }
  
  .recommendations-grid {
    grid-template-columns: 1fr;
  }
  
  .action-buttons {
    flex-direction: column;
  }
  
  .btn {
    width: 100%;
    justify-content: center;
  }
  
  .cta-stats {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .cta-buttons {
    flex-direction: column;
  }
  
  .cta-btn {
    width: 100%;
    text-align: center;
  }
}
</style>