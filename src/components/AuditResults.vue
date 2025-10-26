<template>
  <div class="audit-results">
    <div class="results-header">
      <h1>Website Audit Results</h1>
      <p class="website-url">{{ results.websiteUrl }}</p>
      <p class="audit-date">Analysed on {{ formatDate(results.timestamp) }}</p>
    </div>

    <div class="overall-score">
      <div class="score-circle" :class="getOverallScoreClass()">
        <span class="score-value">{{ results.score }}</span>
        <span class="score-label">Overall Score</span>
      </div>
      <p class="score-description">{{ getScoreDescription() }}</p>
    </div>

    <div class="scores-grid">
      <div class="score-card">
        <div class="score-header">
          <span class="score-icon">⚡</span>
          <h3>Performance</h3>
        </div>
        <div class="score-meter">
          <div class="meter-fill" :style="{ width: results.performance.score + '%' }" :class="getScoreClass(results.performance.score)"></div>
        </div>
        <span class="score-text">{{ results.performance.score }}/100</span>
        <ul class="score-details">
          <li>Load time: {{ (results.performance.loadTime / 1000).toFixed(2) }}s</li>
          <li>Page size: {{ formatBytes(results.performance.htmlSize) }}</li>
        </ul>
      </div>

      <div class="score-card">
        <div class="score-header">
          <span class="score-icon">🔍</span>
          <h3>SEO</h3>
        </div>
        <div class="score-meter">
          <div class="meter-fill" :style="{ width: results.seo.score + '%' }" :class="getScoreClass(results.seo.score)"></div>
        </div>
        <span class="score-text">{{ results.seo.score }}/100</span>
        <ul class="score-details">
          <li>Title tag: {{ results.seo.hasTitle ? '✓' : '✗' }}</li>
          <li>Meta description: {{ results.seo.hasMetaDescription ? '✓' : '✗' }}</li>
          <li>H1 tags: {{ results.seo.h1Count }}</li>
          <li>Open Graph tags: {{ results.seo.hasOpenGraphTags ? '✓' : '✗' }}</li>
        </ul>
      </div>

      <div class="score-card">
        <div class="score-header">
          <span class="score-icon">🔒</span>
          <h3>Security</h3>
        </div>
        <div class="score-meter">
          <div class="meter-fill" :style="{ width: results.security.score + '%' }" :class="getScoreClass(results.security.score)"></div>
        </div>
        <span class="score-text">{{ results.security.score }}/100</span>
        <ul class="score-details">
          <li>HTTPS: {{ results.security.hasSSL ? '✓' : '✗' }}</li>
          <li>CSP Header: {{ results.security.hasContentSecurityPolicy ? '✓' : '✗' }}</li>
          <li>X-Frame-Options: {{ results.security.hasXFrameOptions ? '✓' : '✗' }}</li>
        </ul>
      </div>

      <div class="score-card">
        <div class="score-header">
          <span class="score-icon">♿</span>
          <h3>Accessibility</h3>
        </div>
        <div class="score-meter">
          <div class="meter-fill" :style="{ width: results.accessibility.score + '%' }" :class="getScoreClass(results.accessibility.score)"></div>
        </div>
        <span class="score-text">{{ results.accessibility.score }}/100</span>
        <ul class="score-details">
          <li>Images with alt text: {{ Math.round(results.accessibility.imageAltRatio * 100) }}%</li>
          <li>Language attribute: {{ results.accessibility.hasLangAttribute ? '✓' : '✗' }}</li>
          <li>Viewport meta: {{ results.accessibility.hasViewportMeta ? '✓' : '✗' }}</li>
        </ul>
      </div>

      <div class="score-card">
        <div class="score-header">
          <span class="score-icon">✅</span>
          <h3>Best Practices</h3>
        </div>
        <div class="score-meter">
          <div class="meter-fill" :style="{ width: results.bestPractices.score + '%' }" :class="getScoreClass(results.bestPractices.score)"></div>
        </div>
        <span class="score-text">{{ results.bestPractices.score }}/100</span>
        <ul class="score-details">
          <li>Robots.txt: {{ results.bestPractices.hasRobotsTxt ? '✓' : '✗' }}</li>
          <li>Sitemap: {{ results.bestPractices.hasSitemap ? '✓' : '✗' }}</li>
          <li>Favicon: {{ results.bestPractices.hasFavicon ? '✓' : '✗' }}</li>
        </ul>
      </div>
    </div>

    <div v-if="results.recommendations && results.recommendations.length > 0" class="recommendations">
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
        </div>
      </div>
    </div>

    <div class="action-buttons">
      <button @click="downloadReport" class="btn btn-primary" aria-label="Download report">
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
        Download Report
      </button>

      <button @click="shareReport" class="btn btn-secondary" aria-label="Share report">
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
        </svg>
        Share Results
      </button>

      <button @click="$emit('restart')" class="btn btn-outline" aria-label="Analyse another site">
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
        </svg>
        Analyze Another Site
      </button>
    </div>

    <div class="cta-section">
      <h2>Ready to Improve Your Website?</h2>
      <p>Get professional help to implement these recommendations and boost your online presence.</p>
      <div class="cta-buttons">
        <a href="https://calendly.com/n15labs/consultation" target="_blank" class="cta-btn primary">
          Schedule Free Consultation
        </a>
        <router-link to="/services" class="cta-btn secondary">
          View Our Services
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
  methods: {
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
      if (score >= 90) return 'Excellent! Your website is well-optimized.';
      if (score >= 70) return 'Good performance, but there\'s room for improvement.';
      if (score >= 50) return 'Average. Several areas need attention.';
      return 'Poor performance. Significant improvements needed.';
    },
    
    getPriorityClass(priority) {
      return `priority-${priority.toLowerCase()}`;
    },
    
    formatDate(timestamp) {
      return new Date(timestamp).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    },
    
    formatBytes(bytes) {
      if (bytes === 0) return '0 Bytes';
      const k = 1024;
      const sizes = ['Bytes', 'KB', 'MB', 'GB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    },
    
    downloadReport() {
      const reportData = {
        ...this.results,
        generatedAt: new Date().toISOString()
      };
      
      const dataStr = JSON.stringify(reportData, null, 2);
      const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
      
      const exportFileDefaultName = `website-audit-${this.results.websiteUrl.replace(/[^a-z0-9]/gi, '_')}.json`;
      
      const linkElement = document.createElement('a');
      linkElement.setAttribute('href', dataUri);
      linkElement.setAttribute('download', exportFileDefaultName);
      linkElement.click();
    },
    
    async shareReport() {
      const shareData = {
        title: 'Website Audit Results',
        text: `Check out my website audit results! Overall score: ${this.results.score}/100`,
        url: window.location.href
      };
      
      if (navigator.share) {
        try {
          await navigator.share(shareData);
        } catch (err) {
          console.log('Error sharing:', err);
        }
      } else {
        navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    }
  }
};
</script>

<style scoped>
.audit-results {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.results-header {
  text-align: center;
  margin-bottom: 3rem;
}

.results-header h1 {
  font-size: 2.5rem;
  color: #2d3748;
  margin-bottom: 1rem;
}

.website-url {
  font-family: monospace;
  color: #4a5568;
  background: #f7fafc;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  display: inline-block;
  margin-bottom: 0.5rem;
}

.audit-date {
  color: #718096;
  font-size: 0.875rem;
}

.overall-score {
  text-align: center;
  margin-bottom: 4rem;
}

.score-circle {
  width: 200px;
  height: 200px;
  margin: 0 auto 1rem;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: #f7fafc;
  border: 12px solid #e2e8f0;
}

.score-circle.excellent {
  border-color: #48bb78;
  background: linear-gradient(135deg, #48bb78, #38a169);
  color: white;
}

.score-circle.good {
  border-color: #4299e1;
  background: linear-gradient(135deg, #4299e1, #3182ce);
  color: white;
}

.score-circle.average {
  border-color: #ed8936;
  background: linear-gradient(135deg, #ed8936, #dd6b20);
  color: white;
}

.score-circle.poor {
  border-color: #f56565;
  background: linear-gradient(135deg, #f56565, #e53e3e);
  color: white;
}

.score-value {
  font-size: 4rem;
  font-weight: 800;
  line-height: 1;
}

.score-label {
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 0.5rem;
}

.score-description {
  font-size: 1.25rem;
  color: #4a5568;
}

.scores-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.score-card {
  background: #f7fafc;
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
  font-size: 1.25rem;
  color: #2d3748;
  margin: 0;
}

.score-meter {
  height: 8px;
  background: #e2e8f0;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.75rem;
}

.meter-fill {
  height: 100%;
  transition: width 1s ease;
}

.meter-fill.excellent {
  background: #48bb78;
}

.meter-fill.good {
  background: #4299e1;
}

.meter-fill.average {
  background: #ed8936;
}

.meter-fill.poor {
  background: #f56565;
}

.score-text {
  font-size: 1.125rem;
  font-weight: 700;
  color: #2d3748;
}

.score-details {
  margin-top: 1rem;
  list-style: none;
  padding: 0;
}

.score-details li {
  color: #4a5568;
  font-size: 0.875rem;
  padding: 0.25rem 0;
}

.recommendations {
  margin-bottom: 3rem;
}

.recommendations h2 {
  font-size: 2rem;
  color: #2d3748;
  margin-bottom: 2rem;
  text-align: center;
}

.recommendations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.recommendation-card {
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.recommendation-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.recommendation-card.priority-critical {
  border-color: #fc8181;
  background: #fff5f5;
}

.recommendation-card.priority-high {
  border-color: #f6ad55;
  background: #fffdf7;
}

.recommendation-card.priority-medium {
  border-color: #4299e1;
  background: #ebf8ff;
}

.recommendation-card.priority-low {
  border-color: #68d391;
  background: #f0fff4;
}

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
  letter-spacing: 0.05em;
  color: #718096;
}

.rec-priority {
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  text-transform: uppercase;
}

.priority-critical .rec-priority {
  background: #fc8181;
  color: white;
}

.priority-high .rec-priority {
  background: #f6ad55;
  color: white;
}

.priority-medium .rec-priority {
  background: #4299e1;
  color: white;
}

.priority-low .rec-priority {
  background: #68d391;
  color: white;
}

.recommendation-card h3 {
  font-size: 1.125rem;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.recommendation-card p {
  color: #4a5568;
  font-size: 0.9375rem;
  line-height: 1.6;
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
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn svg {
  width: 20px;
  height: 20px;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.btn-secondary {
  background: #4299e1;
  color: white;
}

.btn-secondary:hover {
  background: #3182ce;
}

.btn-outline {
  background: white;
  color: #4a5568;
  border: 2px solid #e2e8f0;
}

.btn-outline:hover {
  border-color: #cbd5e0;
  background: #f7fafc;
}

.cta-section {
  text-align: center;
  padding: 3rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  color: white;
}

.cta-section h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.cta-section p {
  font-size: 1.125rem;
  margin-bottom: 2rem;
  opacity: 0.95;
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
  color: #667eea;
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
  
  .cta-buttons {
    flex-direction: column;
  }
  
  .cta-btn {
    width: 100%;
    text-align: center;
  }
}
</style>