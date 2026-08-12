<template>
  <footer class="app-footer">
    <div class="footer-content">
      <!-- Main Footer Grid -->
      <div class="footer-grid">
        <!-- Brand Column -->
        <div class="footer-brand">
          <router-link to="/" class="footer-logo-link">
            <img
              :src="require('@/assets/webp/logo-n15labs-white_comp.webp')"
              alt="N15 Labs Logo"
              class="footer-logo"
              width="80"
              height="80"
              loading="lazy"
            />
          </router-link>
          <p class="brand-tagline">
            Helping local businesses get more customers from Google through ads, SEO, and conversion-focused websites.
          </p>
          <div class="social-links">
            <a 
              href="https://linkedin.com/in/andre-simpson-502365178" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Follow N15 Labs on LinkedIn"
              class="social-link"
            >
              <LinkedinIcon aria-hidden="true" />
            </a>
            <a 
              href="https://www.instagram.com/n15labs" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Follow N15 Labs on Instagram"
              class="social-link"
            >
              <InstagramIcon aria-hidden="true" />
            </a>
            <a 
              href="https://www.facebook.com/n15labs" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Follow N15 Labs on Facebook"
              class="social-link"
            >
              <FacebookIcon aria-hidden="true" />
            </a>
          </div>
        </div>

        <!-- Services Column -->
        <div class="footer-column">
          <h3>Services</h3>
          <ul>
            <li><router-link to="/services/google-ads">Google Ads Management</router-link></li>
            <li><router-link to="/services/seo">SEO Services</router-link></li>
            <li><router-link to="/services/web-design">Web Design</router-link></li>
            <li><router-link to="/launch-sites">Launch Sites — £600</router-link></li>
            <li><router-link to="/pricing">Pricing</router-link></li>
          </ul>
        </div>

        <!-- Company Column -->
        <div class="footer-column">
          <h3>Company</h3>
          <ul>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/case-studies">Case Studies</router-link></li>
            <li><router-link to="/blog">Blog</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
            <li><router-link to="/audit">Free Website Audit</router-link></li>
          </ul>
        </div>

        <!-- Areas Served Column -->
        <div class="footer-column">
          <h3>Areas Served</h3>
          <ul>
            <li><router-link to="/areas/stoke-on-trent">Stoke-on-Trent</router-link></li>
            <li><router-link to="/areas/newcastle-under-lyme">Newcastle-under-Lyme</router-link></li>
            <li><router-link to="/areas/stafford">Stafford</router-link></li>
            <li><router-link to="/areas/staffordshire">Staffordshire</router-link></li>
            <li><router-link to="/areas/crewe">Crewe</router-link></li>
          </ul>
        </div>

        <!-- Contact Column -->
        <div class="footer-column footer-contact-col">
          <h3>Get in Touch</h3>
          <div class="contact-info">
            <a href="tel:+447931206686" class="contact-item">
              <PhoneIcon aria-hidden="true" />
              <span>07931 206686</span>
            </a>
            <a href="mailto:hello@n15labs.co.uk" class="contact-item">
              <MailIcon aria-hidden="true" />
              <span>hello@n15labs.co.uk</span>
            </a>
            <div class="contact-item location">
              <MapPinIcon aria-hidden="true" />
              <span>Stoke-on-Trent, Staffordshire</span>
            </div>
          </div>
          <a 
            href="https://calendly.com/n15labs/strategy-call" 
            target="_blank"
            rel="noopener noreferrer"
            class="footer-cta"
          >
            Book Free Strategy Call
          </a>
        </div>
      </div>

      <!-- Trust Signals -->
      <div class="trust-bar">
        <div class="trust-item">
          <CheckCircleIcon aria-hidden="true" />
          <span>BSc Computer Science (2:1)</span>
        </div>
        <div class="trust-item">
          <CheckCircleIcon aria-hidden="true" />
          <span>£60k+ Ad Spend Managed</span>
        </div>
        <div class="trust-item">
          <CheckCircleIcon aria-hidden="true" />
          <span>618+ Conversions Generated</span>
        </div>
        <div class="trust-item">
          <CheckCircleIcon aria-hidden="true" />
          <span>Local Stoke-on-Trent Business</span>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <div class="footer-bottom-left">
          <p class="copyright">
            © {{ currentYear }} N15 Labs. All rights reserved.
          </p>
        </div>
        
        <div class="footer-bottom-center">
          <div class="legal-links">
            <router-link to="/privacy">Privacy Policy</router-link>
            <router-link to="/terms">Terms of Service</router-link>
            <button @click="showCookieSettings" class="cookie-btn">
              Cookie Settings
            </button>
          </div>
        </div>

        <div class="footer-bottom-right">
          <p class="built-by">
            Designed & built by <span class="highlight">Andre Simpson</span>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import {
  LinkedinIcon,
  InstagramIcon,
  FacebookIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  CheckCircleIcon
} from 'lucide-vue-next'

export default {
  name: 'AppFooter',
  components: {
    LinkedinIcon,
    InstagramIcon,
    FacebookIcon,
    PhoneIcon,
    MailIcon,
    MapPinIcon,
    CheckCircleIcon
  },
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  },
  methods: {
    showCookieSettings() {
      this.$emit('show-cookie-settings')
    }
  }
}
</script>

<style scoped>
/* ==================== BASE FOOTER ==================== */
.app-footer {
  background: linear-gradient(180deg, #0a0a0a 0%, #050505 100%);
  color: #ffffff;
  border-top: 1px solid #374151;
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4.5rem 2rem 2.5rem;
}

/* ==================== FOOTER GRID ==================== */
.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr repeat(4, 1fr);
  gap: 3rem;
  margin-bottom: 3.5rem;
}

/* Brand Column */
.footer-brand {
  padding-right: 2rem;
}

.footer-logo-link {
  display: inline-block;
  margin-bottom: 1.25rem;
  transition: transform 0.2s ease;
}

.footer-logo-link:hover {
  transform: scale(1.05);
}

.footer-logo {
  width: 80px;
  height: 80px;
  object-fit: contain;
}

.brand-tagline {
  color: #d4d4d8;
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 1.75rem;
}

.social-links {
  display: flex;
  gap: 0.875rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #374151;
  border-radius: 10px;
  color: #a1a1aa;
  transition: all 0.2s ease;
}

.social-link:hover {
  background: rgba(59, 130, 246, 0.1);
  border-color: #3b82f6;
  color: #3b82f6;
  transform: translateY(-2px);
}

.social-link svg {
  width: 20px;
  height: 20px;
}

/* Footer Columns */
.footer-column h3 {
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-column li {
  margin-bottom: 0.875rem;
}

.footer-column a {
  color: #d4d4d8;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.2s ease;
  display: inline-block;
}

.footer-column a:hover {
  color: #3b82f6;
  transform: translateX(4px);
}

/* Contact Column */
.footer-contact-col {
  min-width: 200px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.75rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.875rem;
  color: #d4d4d8;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.2s ease;
}

a.contact-item:hover {
  color: #3b82f6;
}

.contact-item svg {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  color: #3b82f6;
}

.contact-item.location {
  color: #a1a1aa;
}

.footer-cta {
  display: inline-block;
  padding: 0.875rem 1.5rem;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.footer-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
}

/* ==================== TRUST BAR ==================== */
.trust-bar {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2.5rem;
  padding: 1.75rem 0;
  border-top: 1px solid #1f1f1f;
  border-bottom: 1px solid #1f1f1f;
  margin-bottom: 2.5rem;
}

.trust-item {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  color: #a1a1aa;
  font-size: 0.9375rem;
}

.trust-item svg {
  width: 18px;
  height: 18px;
  color: #10b981;
}

/* ==================== BOTTOM BAR ==================== */
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.25rem;
}

.footer-bottom-left,
.footer-bottom-right {
  flex: 1;
}

.footer-bottom-right {
  text-align: right;
}

.footer-bottom-center {
  flex: 2;
  display: flex;
  justify-content: center;
}

.copyright {
  color: #a1a1aa;
  font-size: 0.9375rem;
  margin: 0;
}

.built-by {
  color: #a1a1aa;
  font-size: 0.9375rem;
  margin: 0;
}

.highlight {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 600;
}

.legal-links {
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}

.legal-links a {
  color: #a1a1aa;
  text-decoration: none;
  font-size: 0.9375rem;
  transition: color 0.2s ease;
}

.legal-links a:hover {
  color: #d4d4d8;
}

.cookie-btn {
  background: none;
  border: none;
  color: #a1a1aa;
  font-size: 0.9375rem;
  cursor: pointer;
  padding: 0;
  transition: color 0.2s ease;
}

.cookie-btn:hover {
  color: #d4d4d8;
}

/* ==================== RESPONSIVE ==================== */
@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
  }
  
  .footer-brand {
    grid-column: 1 / -1;
    padding-right: 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .brand-tagline {
    max-width: 440px;
  }
  
  .social-links {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .footer-content {
    padding: 3.5rem 1.5rem 2rem;
  }
  
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  
  .footer-contact-col {
    grid-column: 1 / -1;
    text-align: center;
  }
  
  .contact-info {
    align-items: center;
  }
  
  .footer-cta {
    width: 100%;
    max-width: 280px;
    text-align: center;
  }
  
  .trust-bar {
    gap: 1.25rem;
  }
  
  .trust-item {
    font-size: 0.875rem;
  }
  
  .footer-bottom {
    flex-direction: column;
    text-align: center;
    gap: 1.25rem;
  }
  
  .footer-bottom-left,
  .footer-bottom-center,
  .footer-bottom-right {
    flex: none;
    width: 100%;
    text-align: center;
  }
  
  .legal-links {
    gap: 1.25rem;
  }
}

@media (max-width: 480px) {
  .footer-content {
    padding: 2.5rem 1rem 1.5rem;
  }
  
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .footer-column {
    text-align: center;
  }
  
  .footer-column a:hover {
    transform: none;
  }
  
  .footer-logo {
    width: 64px;
    height: 64px;
  }
  
  .trust-bar {
    flex-direction: column;
    gap: 1rem;
  }
  
  .legal-links {
    flex-direction: column;
    gap: 1rem;
  }
}

/* ==================== ACCESSIBILITY ==================== */
@media (prefers-reduced-motion: reduce) {
  .footer-logo-link,
  .social-link,
  .footer-column a,
  .footer-cta {
    transition: none;
  }
}

.footer-logo-link:focus,
.social-link:focus,
.footer-column a:focus,
.footer-cta:focus,
.contact-item:focus,
.legal-links a:focus,
.cookie-btn:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* ==================== PRINT ==================== */
@media print {
  .app-footer {
    background: white;
    color: black;
    border-top: 1px solid #ccc;
  }
  
  .social-links,
  .footer-cta,
  .trust-bar {
    display: none;
  }
  
  .footer-column a,
  .contact-item,
  .copyright,
  .built-by {
    color: black;
  }
}
</style>