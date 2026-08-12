<template>
  <div class="contact-page">
    <!-- Hero Section -->
    <section class="contact-hero">
      <div class="container">
        <span class="section-label">Get In Touch</span>
        <h1>Ready to stop guessing and <span class="gradient-text">start growing?</span></h1>
        <p class="hero-intro">
          Book a free strategy call or send me a message. I'll get back to you 
          within 24 hours with a clear plan for your business.
        </p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="contact-main">
      <div class="container">
        <div class="contact-grid">
          <!-- Contact Form -->
          <div class="form-section">
            <h2>Send a Message</h2>
            <p class="form-intro">
              Tell me about your business and what you're looking to achieve. 
              No commitment — just a conversation.
            </p>
            
            <form 
              @submit.prevent="submitForm" 
              class="contact-form"
              novalidate
            >
              <div class="form-group">
                <label for="name">Your Name <span class="required">*</span></label>
                <input 
                  id="name" 
                  v-model="form.name" 
                  type="text" 
                  required 
                  placeholder="John Smith"
                  :class="{ 'error': errors.name }"
                  @blur="validateField('name')"
                />
                <span v-if="errors.name" class="error-message" role="alert">
                  {{ errors.name }}
                </span>
              </div>

              <div class="form-group">
                <label for="business">Business Name</label>
                <input 
                  id="business" 
                  v-model="form.business" 
                  type="text" 
                  placeholder="Your business name"
                />
              </div>

              <div class="form-group">
                <label for="email">Email Address <span class="required">*</span></label>
                <input 
                  id="email" 
                  v-model="form.email" 
                  type="email" 
                  required 
                  placeholder="john@yourbusiness.co.uk"
                  :class="{ 'error': errors.email }"
                  @blur="validateField('email')"
                />
                <span v-if="errors.email" class="error-message" role="alert">
                  {{ errors.email }}
                </span>
              </div>

              <div class="form-group">
                <label for="phone">Phone Number</label>
                <input 
                  id="phone" 
                  v-model="form.phone" 
                  type="tel" 
                  placeholder="07xxx xxxxxx"
                />
              </div>

              <div class="form-group">
                <label for="service">What are you interested in?</label>
                <select id="service" v-model="form.service">
                  <option value="">Select an option</option>
                  <option value="launch-site">Launch Site (£600 website)</option>
                  <option value="google-ads">Google Ads Management</option>
                  <option value="seo">SEO Services</option>
                  <option value="bundle">Google Ads + SEO Bundle</option>
                  <option value="not-sure">Not sure yet</option>
                </select>
              </div>

              <div class="form-group">
                <label for="message">Tell me about your project <span class="required">*</span></label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  required
                  placeholder="What's your business? What are you hoping to achieve? Any questions you have?"
                  rows="5"
                  :class="{ 'error': errors.message }"
                  @blur="validateField('message')"
                ></textarea>
                <span v-if="errors.message" class="error-message" role="alert">
                  {{ errors.message }}
                </span>
              </div>

              <button type="submit" class="submit-btn" :disabled="submitting">
                <span v-if="!submitting">
                  Send Message
                  <SendIcon aria-hidden="true" />
                </span>
                <span v-else class="loading">
                  Sending...
                </span>
              </button>
            </form>

            <!-- Success Message -->
            <div v-if="submitted" class="success-message" role="alert">
              <CheckCircleIcon aria-hidden="true" />
              <div>
                <h3>Message sent!</h3>
                <p>I'll get back to you within 24 hours. Looking forward to speaking with you.</p>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="sidebar">
            <!-- Book a Call Card -->
            <div class="sidebar-card primary">
              <div class="card-icon">
                <CalendarIcon aria-hidden="true" />
              </div>
              <h3>Book a Free Strategy Call</h3>
              <p>
                30 minutes, no obligation. I'll look at your current situation 
                and give you a clear plan.
              </p>
              <a 
                href="https://calendly.com/n15labs/strategy-call" 
                target="_blank"
                rel="noopener noreferrer"
                class="card-cta"
              >
                Book Now
                <ArrowRightIcon aria-hidden="true" />
              </a>
            </div>

            <!-- Contact Details -->
            <div class="sidebar-card">
              <h3>Or reach out directly</h3>
              
              <div class="contact-details">
                <div class="detail-item">
                  <MailIcon aria-hidden="true" />
                  <div>
                    <span class="detail-label">Email</span>
                    <a href="mailto:andre@n15labs.co.uk">andre@n15labs.co.uk</a>
                  </div>
                </div>
                
                <div class="detail-item">
                  <PhoneIcon aria-hidden="true" />
                  <div>
                    <span class="detail-label">Phone</span>
                    <a href="tel:07931206686">07931 206686</a>
                  </div>
                </div>
                
                <div class="detail-item">
                  <MapPinIcon aria-hidden="true" />
                  <div>
                    <span class="detail-label">Location</span>
                    <span>Stoke-on-Trent, Staffordshire</span>
                  </div>
                </div>
                
                <div class="detail-item">
                  <ClockIcon aria-hidden="true" />
                  <div>
                    <span class="detail-label">Response time</span>
                    <span>Within 24 hours</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div class="sidebar-card">
              <h3>Connect</h3>
              <div class="social-links">
                <a 
                  href="https://www.linkedin.com/in/andre-simpson-502365178" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-link"
                >
                  <LinkedinIcon aria-hidden="true" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useHead } from '@vueuse/head'
import {
  SendIcon,
  CheckCircleIcon,
  CalendarIcon,
  ArrowRightIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  LinkedinIcon
} from 'lucide-vue-next'

export default {
  name: 'ContactPage',
  
  components: {
    SendIcon,
    CheckCircleIcon,
    CalendarIcon,
    ArrowRightIcon,
    MailIcon,
    PhoneIcon,
    MapPinIcon,
    ClockIcon,
    LinkedinIcon
  },
  
  data() {
    return {
      form: {
        name: '',
        business: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      },
      errors: {
        name: '',
        email: '',
        message: ''
      },
      submitting: false,
      submitted: false
    }
  },
  
  methods: {
    validateField(field) {
      this.errors[field] = ''
      
      if (field === 'name' && !this.form.name.trim()) {
        this.errors.name = 'Please enter your name'
      }
      
      if (field === 'email') {
        if (!this.form.email.trim()) {
          this.errors.email = 'Please enter your email'
        } else if (!this.isValidEmail(this.form.email)) {
          this.errors.email = 'Please enter a valid email address'
        }
      }
      
      if (field === 'message' && !this.form.message.trim()) {
        this.errors.message = 'Please tell me about your project'
      }
    },
    
    isValidEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return re.test(email)
    },
    
    async submitForm() {
      // Validate all required fields
      this.validateField('name')
      this.validateField('email')
      this.validateField('message')
      
      // Check for errors
      if (this.errors.name || this.errors.email || this.errors.message) {
        return
      }
      
      this.submitting = true
      
      try {
        // Submit to backend API
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.form)
        })
        
        if (response.ok) {
          this.submitted = true
          this.form = {
            name: '',
            business: '',
            email: '',
            phone: '',
            service: '',
            message: ''
          }
        } else {
          // Fallback to mailto if API fails
          this.openMailto()
        }
      } catch (error) {
        // Fallback to mailto
        this.openMailto()
      } finally {
        this.submitting = false
      }
    },
    
    openMailto() {
      const subject = encodeURIComponent(`Website Enquiry from ${this.form.name}`)
      const body = encodeURIComponent(
        `Name: ${this.form.name}\n` +
        `Business: ${this.form.business || 'Not provided'}\n` +
        `Email: ${this.form.email}\n` +
        `Phone: ${this.form.phone || 'Not provided'}\n` +
        `Service: ${this.form.service || 'Not specified'}\n\n` +
        `Message:\n${this.form.message}`
      )
      window.location.href = `mailto:andre@n15labs.co.uk?subject=${subject}&body=${body}`
      this.submitted = true
    }
  },
  
  setup() {
    useHead({
      title: 'Contact | Get a Free Strategy Call | N15 Labs Stoke-on-Trent',
      meta: [
        {
          name: 'description',
          content: 'Get in touch with N15 Labs. Book a free strategy call or send a message. Google Ads, SEO, and web design for Stoke-on-Trent businesses.'
        },
        {
          property: 'og:title',
          content: 'Contact | N15 Labs'
        },
        {
          property: 'og:description',
          content: 'Book a free strategy call or send a message. Digital marketing for local businesses in Stoke-on-Trent.'
        },
        {
          name: 'keywords',
          content: 'contact N15 Labs, digital marketing Stoke-on-Trent, free strategy call, Google Ads consultation'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://n15labs.co.uk/contact'
        }
      ]
    })
  }
}
</script>

<style scoped>
/* ==================== BASE STYLES ==================== */
.contact-page {
  width: 100%;
  background: linear-gradient(180deg, #0a0a0a 0%, #111111 100%);
  color: #f4f4f5;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-label {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 50px;
  color: #60a5fa;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1.25rem;
}

.gradient-text {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ==================== HERO SECTION ==================== */
.contact-hero {
  padding: 8rem 0 4rem;
  text-align: center;
}

.contact-hero h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: #ffffff;
  line-height: 1.15;
}

.hero-intro {
  font-size: 1.375rem;
  color: #a1a1aa;
  line-height: 1.7;
  max-width: 600px;
  margin: 0 auto;
}

/* ==================== MAIN CONTENT ==================== */
.contact-main {
  padding: 3rem 0 5rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 4rem;
  align-items: start;
}

/* ==================== FORM SECTION ==================== */
.form-section h2 {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: #ffffff;
}

.form-intro {
  color: #a1a1aa;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.contact-form {
  background: linear-gradient(135deg, #18181b 0%, #1f1f23 100%);
  border: 1px solid #27272a;
  border-radius: 20px;
  padding: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  font-size: 0.9375rem;
  font-weight: 600;
  color: #f4f4f5;
  margin-bottom: 0.5rem;
}

.required {
  color: #ef4444;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.875rem 1rem;
  background: #0a0a0a;
  border: 1px solid #27272a;
  border-radius: 10px;
  color: #f4f4f5;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #52525b;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #3b82f6;
}

.form-group input.error,
.form-group textarea.error {
  border-color: #ef4444;
}

.form-group select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%23a1a1aa' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 2.5rem;
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.error-message {
  display: block;
  color: #ef4444;
  font-size: 0.8125rem;
  margin-top: 0.5rem;
}

.submit-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
  border: none;
  font-weight: 600;
  font-size: 1.0625rem;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  justify-content: center;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.35);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.submit-btn svg {
  width: 20px;
  height: 20px;
}

.loading {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.success-message {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 12px;
  margin-top: 2rem;
}

.success-message svg {
  width: 24px;
  height: 24px;
  color: #10b981;
  flex-shrink: 0;
}

.success-message h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #10b981;
  margin-bottom: 0.25rem;
}

.success-message p {
  color: #a1a1aa;
  font-size: 0.9375rem;
}

/* ==================== SIDEBAR ==================== */
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.sidebar-card {
  background: linear-gradient(135deg, #18181b 0%, #1f1f23 100%);
  border: 1px solid #27272a;
  border-radius: 16px;
  padding: 1.5rem;
}

.sidebar-card.primary {
  border-color: #3b82f6;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, #1f1f23 100%);
}

.sidebar-card .card-icon {
  width: 48px;
  height: 48px;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  color: #3b82f6;
}

.sidebar-card .card-icon svg {
  width: 24px;
  height: 24px;
}

.sidebar-card h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.75rem;
}

.sidebar-card > p {
  color: #a1a1aa;
  font-size: 0.9375rem;
  line-height: 1.6;
  margin-bottom: 1.25rem;
}

.card-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9375rem;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.card-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.35);
}

.card-cta svg {
  width: 18px;
  height: 18px;
}

/* ==================== CONTACT DETAILS ==================== */
.contact-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.detail-item {
  display: flex;
  align-items: flex-start;
  gap: 0.875rem;
}

.detail-item svg {
  width: 20px;
  height: 20px;
  color: #3b82f6;
  flex-shrink: 0;
  margin-top: 2px;
}

.detail-item div {
  display: flex;
  flex-direction: column;
}

.detail-label {
  font-size: 0.8125rem;
  color: #71717a;
  margin-bottom: 0.125rem;
}

.detail-item a {
  color: #f4f4f5;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.detail-item a:hover {
  color: #3b82f6;
}

.detail-item span:not(.detail-label) {
  color: #f4f4f5;
  font-weight: 500;
}

/* ==================== SOCIAL LINKS ==================== */
.social-links {
  display: flex;
  gap: 0.75rem;
}

.social-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 8px;
  color: #60a5fa;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: rgba(59, 130, 246, 0.2);
  border-color: #3b82f6;
}

.social-link svg {
  width: 18px;
  height: 18px;
}

/* ==================== RESPONSIVE ==================== */
@media (max-width: 1024px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .sidebar {
    flex-direction: row;
    flex-wrap: wrap;
  }
  
  .sidebar-card {
    flex: 1;
    min-width: 280px;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1.25rem;
  }
  
  .contact-hero {
    padding: 6rem 0 3rem;
  }
  
  .contact-hero h1 {
    font-size: 2.75rem;
  }
  
  .hero-intro {
    font-size: 1.125rem;
  }
  
  .sidebar {
    flex-direction: column;
  }
  
  .sidebar-card {
    min-width: auto;
  }
  
  .contact-form {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .contact-hero h1 {
    font-size: 2.25rem;
  }
  
  .form-section h2 {
    font-size: 1.5rem;
  }
}

/* ==================== ACCESSIBILITY ==================== */
@media (prefers-reduced-motion: reduce) {
  .submit-btn,
  .card-cta,
  .social-link {
    transition: none;
  }
}

.submit-btn:focus,
.card-cta:focus,
.social-link:focus {
  outline: 3px solid #3b82f6;
  outline-offset: 2px;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
</style>