<template> 
  <footer class="app-footer">
    <div class="footer-content">
      <div class="footer-top">
        <a class="footer-contact" href="tel:07931206686">
          <svg viewBox="0 0 20 20" fill="currentColor" class="contact-icon">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          07931 206686
        </a>
        
        <div class="logo-block">
          <img
            :src="require('@/assets/webp/logo-n15labs-white_comp.webp')"
            alt="N15 Labs Footer Logo"
            class="footer-logo"
            width="120"
            height="120"
            loading="lazy"
          />
          <div class="logo-glow"></div>
        </div>
        
        <a class="footer-contact" href="mailto:dre_86@hotmail.co.uk">
          <svg viewBox="0 0 20 20" fill="currentColor" class="contact-icon">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          dre_86@hotmail.co.uk
        </a>
      </div>
      
      <div class="footer-divider"></div>
      
      <div class="social-section">
        <p class="social-label">Connect with N15 Labs</p>
        <div class="social-icons">
          <a href="https://github.com/s022511h" target="_blank" aria-label="GitHub" class="social-link">
            <GithubIcon />
            <span class="social-text">GitHub</span>
          </a>
          <a href="https://linkedin.com/in/andre-simpson-502365178" target="_blank" aria-label="LinkedIn" class="social-link">
            <LinkedinIcon />
            <span class="social-text">LinkedIn</span>
          </a>
          <a href="https://www.instagram.com/n15labs?utm_source=ig_web_button_share_sheet&igsh=MXBwYXN6ZWF0d3FibA==" target="_blank" aria-label="Instagram" class="social-link">
            <InstagramIcon />
            <span class="social-text">Instagram</span>
          </a>
          <a href="https://x.com" target="_blank" aria-label="Twitter/X" class="social-link">
            <TwitterIcon />
            <span class="social-text">Twitter</span>
          </a>
        </div>
      </div>
      
      <div class="footer-divider"></div>
      
      <div class="legal-section">
        <div class="legal-links">
          <router-link to="/privacy" class="legal-link">Privacy Policy</router-link>
          <router-link to="/terms" class="legal-link">Terms of Service</router-link>
          <button @click="showCookieSettings" class="cookie-settings-btn" aria-label="cookie-settings">
            Cookie Settings
          </button>
        </div>
        <p class="compliance-note">
          This site uses cookies with your consent. You can change your preferences anytime.
        </p>
      </div>
      
      <div class="footer-bottom">
        <p class="copyright">
          &copy; {{ new Date().getFullYear() }} N15 Labs. Built by <span class="highlight">Andre Simpson</span>.
        </p>
        <p class="location">Proudly serving Stoke-on-Trent and beyond</p>
      </div>
    </div>
  </footer>
</template>

<script>
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  TwitterIcon
} from 'lucide-vue-next'

export default {
  name: 'AppFooter',
  components: {
    GithubIcon,
    LinkedinIcon,
    InstagramIcon,
    TwitterIcon
  },
  methods: {
    showCookieSettings() {
      this.$emit('show-cookie-settings')
    }
  }
}
</script>

<style scoped>
.app-footer {
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  color: #ffffff;
  border-top: 1px solid #374151;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.4);
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem 2rem;
}

.footer-top {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2.5rem;
}

.footer-contact {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.125rem;
  color: #f4f4f5;
  font-weight: 500;
  text-decoration: none;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.footer-contact:hover {
  color: #ffffff;
  background: rgba(59, 130, 246, 0.1);
  border-color: rgba(59, 130, 246, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.2);
}

.footer-contact:first-child {
  justify-self: start;
}

.footer-contact:last-child {
  justify-self: end;
}

.contact-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.logo-block {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-logo {
  width: 120px;
  height: 120px;
  object-fit: contain;
  z-index: 2;
  position: relative;
  transition: transform 0.3s ease;
}

.footer-logo:hover {
  transform: scale(1.05);
}

.logo-glow {
  position: absolute;
  inset: -20px;
  background: linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2));
  border-radius: 50%;
  z-index: 1;
  filter: blur(20px);
  animation: logoGlow 3s ease-in-out infinite;
}

@keyframes logoGlow {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.7; }
}

.footer-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, #374151, transparent);
  margin: 2rem 0;
}

.social-section {
  text-align: center;
  margin-bottom: 2rem;
}

.social-label {
  font-size: 1.125rem;
  color: #9ca3af;
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.social-icons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: #f4f4f5;
  text-decoration: none;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  border: 1px solid #374151;
  background: rgba(255, 255, 255, 0.02);
  font-size: 1rem;
  font-weight: 500;
}

.social-link:hover {
  color: #ffffff;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  border-color: #3b82f6;
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
}

.social-link svg {
  width: 20px;
  height: 20px;
}

.social-text {
  font-size: 1rem;
}

.footer-bottom {
  text-align: center;
  padding-top: 1.5rem;
  border-top: 1px solid #374151;
}

.copyright {
  font-size: 1rem;
  color: #9ca3af;
  margin-bottom: 0.5rem;
}

.highlight {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 600;
}

.location {
  font-size: 1rem;
  color: #6b7280;
  font-style: italic;
  margin: 0;
}

.footer-contact:focus,
.social-link:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

.legal-section {
  text-align: center;
  margin-bottom: 2rem;
  padding: 2rem 0;
  border-top: 1px solid #374151;
}

.legal-links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.legal-link {
  color: #9ca3af;
  text-decoration: none;
  font-size: 0.9375rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  border: 1px solid rgba(156, 163, 175, 0.2);
}

.legal-link:hover {
  color: #ffffff;
  background: rgba(156, 163, 175, 0.1);
  border-color: rgba(156, 163, 175, 0.4);
  transform: translateY(-1px);
}

.legal-link.router-link-active {
  color: #f4f4f5;
  background: rgba(156, 163, 175, 0.05);
  border-color: rgba(156, 163, 175, 0.3);
}

.cookie-settings-btn {
  background: rgba(59, 130, 246, 0.1);
  color: #60a5fa;
  border: 1px solid rgba(59, 130, 246, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.9375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cookie-settings-btn:hover {
  background: rgba(59, 130, 246, 0.2);
  color: #ffffff;
  border-color: rgba(59, 130, 246, 0.5);
  transform: translateY(-1px);
}

.compliance-note {
  font-size: 0.875rem;
  color: #6b7280;
  font-style: italic;
  margin: 0;
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .footer-content {
    padding: 2rem 1.5rem 1.5rem;
  }

  .footer-top {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 1.5rem;
  }

  .footer-contact:first-child,
  .footer-contact:last-child {
    justify-self: center;
  }

  .footer-contact {
    font-size: 1rem;
    padding: 0.75rem 1.25rem;
  }

  .footer-logo {
    width: 100px;
    height: 100px;
  }

  .social-icons {
    gap: 1rem;
  }

  .social-link {
    padding: 0.75rem 1rem;
    font-size: 0.875rem;
  }

  .social-text {
    display: none;
  }

  .social-link svg {
    width: 18px;
    height: 18px;
  }
}

@media (max-width: 480px) {
  .footer-content {
    padding: 1.5rem 1rem;
  }

  .footer-contact {
    flex-direction: column;
    gap: 0.5rem;
    font-size: 0.875rem;
    padding: 1rem;
  }

  .footer-logo {
    width: 80px;
    height: 80px;
  }

  .social-icons {
    grid-template-columns: repeat(2, 1fr);
    display: grid;
    gap: 0.75rem;
    max-width: 200px;
    margin: 0 auto;
  }

  .social-link {
    padding: 0.75rem;
    justify-content: center;
  }

  .copyright,
  .location {
    font-size: 0.875rem;
  }
}

.legal-links {
    flex-direction: column;
    gap: 1rem;
  }

  .legal-link,
  .cookie-settings-btn {
    font-size: 0.875rem;
    padding: 0.625rem 1rem;
  }

  .compliance-note {
    font-size: 0.8125rem;
  }

@media (prefers-reduced-motion: reduce) {
  .footer-contact,
  .social-link,
  .footer-logo {
    transition: none;
  }
  
  .logo-glow {
    animation: none;
  }
}
</style>