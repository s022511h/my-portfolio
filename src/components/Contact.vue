<template>
  <div class="contact-container">
    <section class="contact-hero">
      <div class="hero-background">
        <div class="floating-particles">
          <div class="particle" v-for="n in 4" :key="n" :style="getParticleStyle(n)"></div>
        </div>
      </div>
      
      <div class="hero-content">
        <div class="hero-badge">
          <span class="status-dot"></span>
          Ready to Start Your Project
        </div>
        
        <h1 class="hero-headline">
          Let's Build Something <span class="gradient-text">Exceptional</span> Together
        </h1>
        
        <p class="hero-subhead">
          Get your free £500 website audit or discuss your next performance-first project. 
          Based in Stoke-on-Trent, serving ambitious businesses worldwide.
        </p>
        
        <div class="contact-options">
          <div class="option-card audit-option">
            <div class="option-icon">📊</div>
            <h3>Free £500 Website Audit</h3>
            <p>Comprehensive performance analysis with actionable recommendations</p>
            <ul class="option-features">
              <li>Core Web Vitals analysis</li>
              <li>Competitor comparison</li>
              <li>Conversion optimization roadmap</li>
            </ul>
          </div>
          
          <div class="option-card project-option">
            <div class="option-icon">🚀</div>
            <h3>Custom Development Project</h3>
            <p>Performance-first websites and applications built with modern tech</p>
            <ul class="option-features">
              <li>Accessibility-focused development</li>
              <li>Custom automation tools</li>
              <li>Local Stoke-on-Trent support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-form-section">
      <div class="container">
        <div class="form-header">
          <h2>Start the Conversation</h2>
          <p>Tell me about your project and I'll respond within 24 hours with next steps.</p>
        </div>

        <form @submit.prevent="submitForm" class="contact-form">
          <div class="form-grid">
            <div class="form-group">
              <label for="name">Full Name *</label>
              <input 
                id="name" 
                v-model="form.name" 
                type="text" 
                required 
                placeholder="Your full name"
                :class="{ 'error': errors.name }"
                @blur="validateField('name')"
              />
              <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
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
                @blur="validateField('email')"
              />
              <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
            </div>

            <div class="form-group">
              <label for="company">Company/Business</label>
              <input 
                id="company" 
                v-model="form.company" 
                type="text" 
                placeholder="Your business name (optional)"
              />
            </div>

            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input 
                id="phone" 
                v-model="form.phone" 
                type="tel" 
                placeholder="07xxx xxxxxx (optional)"
              />
            </div>
          </div>

          <div class="form-group">
            <label for="projectType">What can I help you with? *</label>
            <select 
              id="projectType" 
              v-model="form.projectType" 
              required
              :class="{ 'error': errors.projectType }"
              @change="validateField('projectType')"
            >
              <option value="">Select an option</option>
              <option value="audit">Free £500 Website Audit</option>
              <option value="new-website">New Website Project</option>
              <option value="website-redesign">Website Redesign</option>
              <option value="custom-tool">Custom Tool/Application</option>
              <option value="performance-optimization">Performance Optimization</option>
              <option value="consultation">General Consultation</option>
              <option value="other">Other</option>
            </select>
            <span v-if="errors.projectType" class="error-message">{{ errors.projectType }}</span>
          </div>

          <div class="form-group" v-if="form.projectType === 'audit'">
            <label for="currentWebsite">Current Website URL</label>
            <input 
              id="currentWebsite" 
              v-model="form.currentWebsite" 
              type="url" 
              placeholder="https://yourwebsite.com"
            />
          </div>

          <div class="form-grid">
            <div class="form-group">
              <label for="timeline">Project Timeline</label>
              <select id="timeline" v-model="form.timeline">
                <option value="">Select timeline (optional)</option>
                <option value="urgent">ASAP (within 2 weeks)</option>
                <option value="soon">Soon (within 1 month)</option>
                <option value="planned">Planned (1-3 months)</option>
                <option value="future">Future project (3+ months)</option>
                <option value="exploring">Just exploring options</option>
              </select>
            </div>

            <div class="form-group">
              <label for="budget">Estimated Budget</label>
              <select id="budget" v-model="form.budget">
                <option value="">Select budget range (optional)</option>
                <option value="under-1k">Under £1,000</option>
                <option value="1k-3k">£1,000 - £3,000</option>
                <option value="3k-5k">£3,000 - £5,000</option>
                <option value="5k-10k">£5,000 - £10,000</option>
                <option value="10k-plus">£10,000+</option>
                <option value="discuss">Let's discuss</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <label for="message">Project Details *</label>
            <textarea 
              id="message" 
              v-model="form.message" 
              required
              :placeholder="getMessagePlaceholder()"
              rows="6"
              :class="{ 'error': errors.message }"
              @blur="validateField('message')"
            ></textarea>
            <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
          </div>

          <div class="form-actions">
            <button type="submit" class="submit-btn" :disabled="submitting">
              <span v-if="!submitting">
                {{ form.projectType === 'audit' ? 'Request Free Audit' : 'Send Message' }}
              </span>
              <span v-else class="loading">
                <svg class="spinner" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" stroke-dasharray="31.416" stroke-dashoffset="31.416">
                    <animate attributeName="stroke-dasharray" dur="2s" values="0 31.416;15.708 15.708;0 31.416" repeatCount="indefinite"/>
                    <animate attributeName="stroke-dashoffset" dur="2s" values="0;-15.708;-31.416" repeatCount="indefinite"/>
                  </circle>
                </svg>
                Sending...
              </span>
              <svg class="submit-arrow" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>

    <section class="contact-info-section">
      <div class="container">
        <div class="info-grid">
          <div class="info-card">
            <div class="info-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
              </svg>
            </div>
            <h3>Email</h3>
            <p><a href="mailto:dre_86@hotmail.co.uk">dre_86@hotmail.co.uk</a></p>
            <span class="response-time">Response within 24 hours</span>
          </div>
          
          <div class="info-card">
            <div class="info-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
              </svg>
            </div>
            <h3>Phone</h3>
            <p><a href="tel:07931206686">07931 206686</a></p>
            <span class="response-time">Available Mon-Fri, 9am-6pm</span>
          </div>
          
          <div class="info-card">
            <div class="info-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
              </svg>
            </div>
            <h3>Location</h3>
            <p>Stoke-on-Trent, Staffordshire</p>
            <span class="response-time">Local meetings available</span>
          </div>
          
          <div class="info-card">
            <div class="info-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path fill-rule="evenodd" d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 01-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.803 4.803a.75.75 0 01-.646 1.353 3.75 3.75 0 00-1.035 6.037l4.5 4.5a3.75 3.75 0 005.304 0 3.75 3.75 0 000-5.304l-1.757-1.757a.75.75 0 011.06-1.06l1.757 1.757a5.25 5.25 0 01-7.424 7.424l-4.5-4.5a5.25 5.25 0 011.449-8.45z" clip-rule="evenodd" />
              </svg>
            </div>
            <h3>Connect</h3>
            <div class="social-links">
              <a href="https://github.com/s022511h/" target="_blank">GitHub</a>
              <a href="https://linkedin.com/in/andre-simpson-502365178" target="_blank">LinkedIn</a>
            </div>
            <span class="response-time">Professional networks</span>
          </div>
        </div>
      </div>
    </section>

    <section class="faq-section">
      <div class="container">
        <div class="faq-header">
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about working together</p>
        </div>
        
        <div class="faq-grid">
          <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
            <h3>{{ faq.question }}</h3>
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useHead } from '@vueuse/head'
import axios from 'axios'
import { trackEvent } from '../utils/analytics.js'

export default {
  name: 'ContactForm',
  setup() {
    useHead({
      title: 'Contact Andre Simpson | Get Your Free Website Audit | N15 Labs',
      meta: [
        {
          name: 'description',
          content: 'Contact Andre Simpson for web development projects. Based in Stoke-on-Trent, UK. Get your free £500 website performance audit today.'
        },
        {
          property: 'og:title',
          content: 'Contact Andre Simpson | Get Your Free Website Audit | N15 Labs'
        },
        {
          property: 'og:description',
          content: 'Contact Andre Simpson for web development projects. Get your free £500 website performance audit today.'
        },
        {
          name: 'keywords',
          content: 'contact web developer, Stoke-on-Trent developer, website audit, freelance developer contact, N15 Labs contact'
        }
      ]
    })
  },
  data() {
    return {
      submitting: false,
      errors: {},
      form: {
        name: '',
        email: '',
        company: '',
        phone: '',
        projectType: '',
        currentWebsite: '',
        timeline: '',
        budget: '',
        message: ''
      },
      faqs: [
        {
          question: "What's included in the free £500 audit?",
          answer: "Comprehensive performance analysis, Core Web Vitals assessment, competitor comparison, SEO review, and detailed optimization recommendations with priority rankings."
        },
        {
          question: "How long does a typical project take?",
          answer: "Website projects typically range from 2-6 weeks depending on complexity. Custom tools and applications can take 4-12 weeks. I'll provide detailed timelines during our consultation."
        },
        {
          question: "Do you work with clients outside Stoke-on-Trent?",
          answer: "Absolutely! While I'm based in Stoke-on-Trent, I work with clients across the UK and internationally. Remote collaboration is seamless with regular check-ins."
        },
        {
          question: "What makes your approach different?",
          answer: "I focus on performance-first development using modern frameworks like Vue.js and Node.js. Every site is hand-coded for speed, not built from templates."
        }
      ]
    }
  },
  methods: {
    getParticleStyle(n) {
      return {
        left: Math.random() * 100 + '%',
        animationDelay: (n * 0.8) + 's',
        animationDuration: (4 + Math.random() * 2) + 's'
      }
    },
    
    getMessagePlaceholder() {
      if (this.form.projectType === 'audit') {
        return 'Tell me about your current website challenges, goals, and what you\'d like to improve. Include any specific concerns about performance, conversions, or user experience...'
      } else if (this.form.projectType === 'new-website') {
        return 'Describe your business, target audience, required features, and design preferences. What are your main goals for the new website?'
      } else if (this.form.projectType === 'custom-tool') {
        return 'Explain the tool or application you need, its purpose, key features, and how it will help your business or workflow...'
      }
      return 'Tell me about your project, goals, requirements, and any specific questions you have. The more details you provide, the better I can help...'
    },

    validateField(field) {
      this.errors = { ...this.errors }
      delete this.errors[field]

      switch (field) {
        case 'name':
          if (!this.form.name.trim()) {
            this.errors.name = 'Name is required'
          }
          break
        case 'email':
          if (!this.form.email.trim()) {
            this.errors.email = 'Email is required'
          } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)) {
            this.errors.email = 'Please enter a valid email address'
          }
          break
        case 'projectType':
          if (!this.form.projectType) {
            this.errors.projectType = 'Please select a project type'
          }
          break
        case 'message':
          if (!this.form.message.trim()) {
            this.errors.message = 'Message is required'
          } else if (this.form.message.trim().length < 10) {
            this.errors.message = 'Please provide more details about your project'
          }
          break
      }
    },

    validateForm() {
      this.validateField('name')
      this.validateField('email')
      this.validateField('projectType')
      this.validateField('message')
      return Object.keys(this.errors).length === 0
    },

    submitForm() {
      if (!this.validateForm()) {
        return
      }

      this.submitting = true
      
      const payload = {
        ...this.form,
        to: 'dre_86@hotmail.co.uk',
        subject: `N15 Labs - ${this.form.projectType === 'audit' ? 'Free Audit Request' : 'Project Inquiry'} from ${this.form.name}`
      }

      axios.post(`${process.env.VUE_APP_API_URL}/contact`, payload)
        .then(() => {
          trackEvent('form_submit', {
            form_type: this.form.projectType || 'contact',
            project_timeline: this.form.timeline || 'not_specified',
            budget_range: this.form.budget || 'not_specified',
            source: 'contact_page'
          })
          
          if (this.form.projectType === 'audit') {
            alert('Thank you for requesting your free audit! I\'ll analyze your website and send you a comprehensive report within 48 hours.')
          } else {
            alert('Message sent successfully! I\'ll get back to you within 24 hours to discuss your project.')
          }
          
          this.form = {
            name: '',
            email: '',
            company: '',
            phone: '',
            projectType: '',
            currentWebsite: '',
            timeline: '',
            budget: '',
            message: ''
          }
          this.errors = {}
        })
        .catch((error) => {
          console.error('Error submitting form:', error)
          alert('Something went wrong. Please try emailing me directly at dre_86@hotmail.co.uk or try again later.')
        })
        .finally(() => {
          this.submitting = false
        })
    }
  }
}
</script>

<style scoped>

.contact-container {
  background: #fafafa;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.contact-hero {
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  color: white;
  overflow: hidden;
  padding-top: 100px; 
}

.hero-background {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.floating-particles {
  position: absolute;
  inset: 0;
}

.particle {
  position: absolute;
  width: 6px;
  height: 6px;
  background: rgba(59, 130, 246, 0.4);
  border-radius: 50%;
  animation: float 5s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { 
    transform: translateY(0px) translateX(0px);
    opacity: 0.2;
  }
  50% { 
    transform: translateY(-80px) translateX(40px);
    opacity: 0.8;
  }
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  text-align: center;
}

.contact-container .hero-badge,
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(34, 197, 94, 0.15);
  border: 1px solid rgba(34, 197, 94, 0.3);
  padding: 0.75rem 1.25rem;
  border-radius: 50px;
  font-size: 1.125rem !important;
  font-weight: 600 !important;
  color: #22c55e;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #22c55e;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.contact-container .hero-headline,
.hero-headline {
  font-size: clamp(3rem, 6vw, 4.5rem) !important;
  font-weight: 800 !important;
  line-height: 1.1 !important;
  margin: 0 0 2rem 0 !important;
  letter-spacing: -0.02em !important;
}

.gradient-text {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.contact-container .hero-subhead,
.hero-subhead {
  font-size: 1.5rem !important;
  line-height: 1.7 !important;
  color: #a1a1aa !important;
  margin-bottom: 3rem !important;
  max-width: 700px !important;
  margin-left: auto !important;
  margin-right: auto !important;
  font-weight: 500 !important;
}

.contact-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.option-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 16px;
  text-align: left;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.option-card:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(59, 130, 246, 0.3);
  transform: translateY(-4px);
}

.option-icon {
  font-size: 2.5rem !important;
  margin-bottom: 1rem !important;
  display: block !important;
}

.contact-container .option-card h3,
.option-card h3 {
  font-size: 1.75rem !important;
  font-weight: 700 !important;
  color: white !important;
  margin-bottom: 1rem !important;
}

.contact-container .option-card p,
.option-card p {
  color: #d1d5db !important;
  margin-bottom: 1.5rem !important;
  line-height: 1.6 !important;
  font-size: 1.125rem !important;
  font-weight: 500 !important;
}

.option-features {
  list-style: none;
  padding: 0;
  margin: 0;
}

.contact-container .option-features li,
.option-features li {
  padding: 0.5rem 0 !important;
  color: #a1a1aa !important;
  font-size: 1rem !important;
  font-weight: 500 !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.option-features li:before {
  content: '✓';
  color: #22c55e;
  font-weight: bold;
  margin-right: 0.75rem;
}

.contact-form-section {
  padding: 6rem 0;
  background: white;
}

.form-header {
  text-align: center;
  margin-bottom: 3rem;
}

.contact-container .form-header h2,
.form-header h2 {
  font-size: 3rem !important;
  font-weight: 800 !important;
  color: #111827 !important;
  margin-bottom: 1rem !important;
}

.contact-container .form-header p,
.form-header p {
  font-size: 1.375rem !important;
  color: #6b7280 !important;
  line-height: 1.6 !important;
  font-weight: 500 !important;
}

.contact-form {
  max-width: 800px;
  margin: 0 auto;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 2rem;
}

.contact-container .form-group label,
.form-group label {
  display: block !important;
  font-weight: 600 !important;
  color: #111827 !important;
  margin-bottom: 0.5rem !important;
  font-size: 1.0625rem !important;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 1.0625rem !important;
  background: #f9fafb;
  color: #111827;
  transition: all 0.3s ease;
  font-family: inherit;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #3b82f6;
  background: white;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-group input.error,
.form-group select.error,
.form-group textarea.error {
  border-color: #ef4444;
  background: #fef2f2;
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
  line-height: 1.5;
}

.contact-container .error-message,
.error-message {
  display: block !important;
  color: #ef4444 !important;
  font-size: 1rem !important;
  margin-top: 0.5rem !important;
  font-weight: 500 !important;
}

.form-actions {
  text-align: center;
  margin-top: 2rem;
}

.contact-container .submit-btn,
.submit-btn {
  display: inline-flex !important;
  align-items: center !important;
  gap: 0.75rem !important;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8) !important;
  color: white !important;
  padding: 1.25rem 2.5rem !important;
  border: none !important;
  border-radius: 12px !important;
  font-size: 1.25rem !important;
  font-weight: 600 !important;
  cursor: pointer !important;
  transition: all 0.3s ease !important;
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.3) !important;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(59, 130, 246, 0.4);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.submit-arrow {
  width: 18px;
  height: 18px;
  transition: transform 0.3s ease;
}

.submit-btn:hover:not(:disabled) .submit-arrow {
  transform: translateX(3px);
}

.loading {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.spinner {
  width: 16px;
  height: 16px;
}

.contact-info-section {
  padding: 6rem 0;
  background: #f9fafb;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.info-card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;
}

.info-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border-color: #3b82f6;
}

.info-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: #3b82f6;
  border-radius: 12px;
  margin: 0 auto 1rem auto;
  color: white;
}

.info-icon svg {
  width: 24px;
  height: 24px;
}

.contact-container .info-card h3,
.info-card h3 {
  font-size: 1.5rem !important;
  font-weight: 700 !important;
  color: #111827 !important;
  margin-bottom: 0.5rem !important;
}

.contact-container .info-card p,
.info-card p {
  margin-bottom: 0.5rem !important;
  font-size: 1.125rem !important;
  font-weight: 500 !important;
}

.info-card a {
  color: #3b82f6;
  text-decoration: none;
  font-weight: 500;
}

.info-card a:hover {
  text-decoration: underline;
}

.contact-container .response-time,
.response-time {
  font-size: 1rem !important;
  color: #6b7280 !important;
  font-style: italic !important;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.contact-container .social-links a,
.social-links a {
  background: #f3f4f6 !important;
  padding: 0.5rem 1rem !important;
  border-radius: 8px !important;
  font-size: 1rem !important;
  font-weight: 500 !important;
  transition: all 0.3s ease !important;
}

.social-links a:hover {
  background: #3b82f6;
  color: white;
  text-decoration: none;
}

.faq-section {
  padding: 6rem 0;
  background: white;
}

.faq-header {
  text-align: center;
  margin-bottom: 3rem;
}

.contact-container .faq-header h2,
.faq-header h2 {
  font-size: 3rem !important;
  font-weight: 800 !important;
  color: #111827 !important;
  margin-bottom: 1rem !important;
}

.contact-container .faq-header p,
.faq-header p {
  font-size: 1.375rem !important;
  color: #6b7280 !important;
  font-weight: 500 !important;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.faq-item {
  background: #f9fafb;
  padding: 2rem;
  border-radius: 16px;
  border-left: 4px solid #3b82f6;
  transition: transform 0.3s ease;
}

.faq-item:hover {
  transform: translateY(-2px);
}

.contact-container .faq-item h3,
.faq-item h3 {
  font-size: 1.5rem !important;
  font-weight: 700 !important;
  color: #111827 !important;
  margin-bottom: 1rem !important;
}

.contact-container .faq-item p,
.faq-item p {
  color: #4b5563 !important;
  line-height: 1.6 !important;
  font-size: 1.125rem !important;
  font-weight: 500 !important;
}

@media (max-width: 768px) {
  .form-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .contact-hero {
    padding-top: 90px; 
  }
  
  .contact-options {
    grid-template-columns: 1fr;
  }
  
  .info-grid {
    grid-template-columns: 1fr;
  }
  
  .faq-grid {
    grid-template-columns: 1fr;
  }
  
  .social-links {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .hero-content {
    padding: 2rem 1rem;
  }

  .contact-container .hero-headline,
  .hero-headline {
    font-size: 2.75rem !important;
  }

  .contact-container .hero-subhead,
  .hero-subhead {
    font-size: 1.375rem !important;
  }

  .contact-container .form-header h2,
  .form-header h2,
  .contact-container .faq-header h2,
  .faq-header h2 {
    font-size: 2.5rem !important;
  }

  .contact-container .option-card h3,
  .option-card h3 {
    font-size: 1.5rem !important;
  }

  .contact-container .option-card p,
  .option-card p {
    font-size: 1.0625rem !important;
  }

  .contact-container .form-header p,
  .form-header p,
  .contact-container .faq-header p,
  .faq-header p {
    font-size: 1.25rem !important;
  }

  .contact-container .info-card h3,
  .info-card h3 {
    font-size: 1.375rem !important;
  }

  .contact-container .info-card p,
  .info-card p {
    font-size: 1.0625rem !important;
  }

  .contact-container .faq-item h3,
  .faq-item h3 {
    font-size: 1.375rem !important;
  }

  .contact-container .faq-item p,
  .faq-item p {
    font-size: 1.0625rem !important;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }

  .contact-hero {
    padding-top: 80px;
  }
  
  .contact-container .submit-btn,
  .submit-btn {
    padding: 1rem 2rem !important;
    font-size: 1.125rem !important;
  }
  
  .contact-container .hero-headline,
  .hero-headline {
    font-size: 2.25rem !important;
  }

  .contact-container .form-header h2,
  .form-header h2,
  .contact-container .faq-header h2,
  .faq-header h2 {
    font-size: 2rem !important;
  }
}

.submit-btn:focus,
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}
</style>