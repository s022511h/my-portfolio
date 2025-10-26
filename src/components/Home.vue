<template>
  <div class="home-container">
    <section class="hero-section" aria-label="Hero banner">
      <div class="hero-background">
        <div class="floating-particles">
          <div class="particle" v-for="n in 6" :key="n" :style="getParticleStyle(n)"></div>
        </div>
      </div>
      
      <div class="hero-content">
        <div class="hero-text">
          <div class="hero-badge">
            <span class="status-dot"></span>
            Available for Projects
          </div>
          
          <h1 class="hero-headline">
            <span class="gradient-text">Digital Marketing</span> &<br>
            Performance Websites
          </h1>
          
          <p class="hero-subhead">
            Freelance Digital Marketer, SEO Specialist & Full-Stack Developer. I help Stoke-on-Trent businesses 
            grow online with fast websites, strategic SEO, and conversion-focused marketing.
          </p>

          <div class="hero-stats">
            <div class="stat-item">
              <strong>SEO</strong>
              <span>Specialist</span>
            </div>
            <div class="stat-item">
              <strong>14-Day</strong>
              <span>Websites</span>
            </div>
            <div class="stat-item">
              <strong>Local</strong>
              <span>Focus</span>
            </div>
          </div>

          <div class="hero-ctas">
            <router-link 
              class="cta-primary" 
              to="/launch-sites"
              aria-label="Get your £600 website - Learn about our Launch Sites service"
            >
              Get Your £600 Website
              <svg class="cta-arrow" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </router-link>
            <router-link 
              class="cta-secondary" 
              to="/projects"
              aria-label="View portfolio - See examples of our work"
            >
              View Portfolio
            </router-link>
          </div>
        </div>

        <div class="hero-visual">
          <div class="profile-container">
            <div class="profile-glow"></div>
            <img 
              src="@/assets/webp/me_comp.avif" 
              alt="Andre Simpson, Full-Stack Developer and Digital Marketing Specialist based in Stoke-on-Trent" 
              class="profile-image" 
              loading="eager"
              decoding="async"
              width="400"
              height="400"
              fetchpriority="high"
            >
            <div class="profile-badge">
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" focusable="false">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              Marketing & Dev Expert
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- New Launch Sites Section -->
    <section class="launch-sites-hero">
      <div class="container">
        <div class="launch-content">
          <div class="launch-badge">
            <span class="pulse-dot"></span>
            NEW SERVICE
          </div>
          <h2 class="launch-headline">Website in 14 Days or Your Money Back</h2>
          <p class="launch-subhead">£600 Small Business Websites | No Hidden Fees | Built by N15 Labs</p>
          <router-link class="launch-cta" to="/launch-sites">
            Get Your Free Quote
            <svg class="cta-arrow" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </router-link>
          
          <div class="trust-signals">
            <div class="trust-item">
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" focusable="false">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              14-day delivery guarantee
            </div>
            <div class="trust-item">
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" focusable="false">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
              </svg>
              Stoke-on-Trent specialist
            </div>
            <div class="trust-item">
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" focusable="false">
                <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd" />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
              Freelance professional
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="about-section">
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            <span class="section-label">About Me</span>
            <h2>Hi, I'm <span class="highlight">Andre Simpson</span></h2>
            <p class="about-intro">
              Freelance Digital Marketer, SEO Specialist, and Full-Stack Developer. 
              Computer Science graduate (2:1 Honours) and founder of N15 Labs - where marketing meets modern development.
            </p>
            
            <div class="credentials-simple">
              <div class="credential">
                <strong>Digital Marketing & SEO</strong>
                <span>Freelance specialist helping local businesses rank</span>
              </div>
              <div class="credential">
                <strong>BSc Computer Science</strong>
                <span>2:1 Honours, Staffordshire University</span>
              </div>
              <div class="credential">
                <strong>N15 Labs Founder</strong>
                <span>Digital Marketing & Development Studio</span>
              </div>
              <div class="credential">
                <strong>Current Project</strong>
                <span>Nobody's Hair - First client website in development</span>
              </div>
            </div>

            <div class="social-links">
              <a href="https://github.com/s022511h/" target="_blank" class="social-link">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a href="https://linkedin.com/in/andre-simpson-502365178" target="_blank" class="social-link">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
          
          <div class="about-visual">
            <div class="bio-images">
              <div class="workspace-image">
                <img src="@/assets/webp/workspace.webp" alt="Development Workspace" loading="lazy" decoding="async" width="800" height="600" />
                <div class="image-label">My Workspace</div>
              </div>
              <div class="code-image">
                <img src="@/assets/webp/code.avif" alt="Code Editor Setup" loading="lazy" decoding="async" width="800" height="600" />
                <div class="image-label">Code Editor</div>
              </div>
            </div>
            
            <div class="video-container">
              <iframe
                src="https://www.youtube.com/embed/U9SeG8yyVjo"
                title="SneakTrack Demo - Performance-First Development"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                loading="lazy"
              ></iframe>
              <div class="video-label">SneakTrack - Final Year Project</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- New Services Cards Section -->
    <section class="services-cards-section">
      <div class="container">
        <h2>Complete Digital Solutions for Local Businesses</h2>
        <p class="services-subtitle">Everything you need to grow online - from websites to marketing</p>
        
        <div class="services-cards-grid">
          <div class="service-offer-card featured">
            <div class="service-offer-badge">MOST POPULAR</div>
            <div class="service-offer-icon">🚀</div>
            <h3>Launch Sites</h3>
            <div class="service-price">£600</div>
            <div class="service-timeline">14-day delivery</div>
            <ul class="service-features">
              <li>3 professional pages</li>
              <li>Mobile responsive design</li>
              <li>Basic SEO setup</li>
              <li>Google Analytics installed</li>
              <li>You own everything</li>
            </ul>
            <router-link class="service-cta" to="/launch-sites">Get Started</router-link>
          </div>
          
          <div class="service-offer-card">
            <div class="service-offer-icon">📈</div>
            <h3>SEO + Ads Starter</h3>
            <div class="service-price">£400/mo</div>
            <div class="service-timeline">Monthly service</div>
            <ul class="service-features">
              <li>Google Ads setup & management</li>
              <li>Local SEO optimisation</li>
              <li>Monthly performance reports</li>
              <li>Keyword research & targeting</li>
              <li>Competitor analysis</li>
            </ul>
            <router-link class="service-cta secondary" to="/contact" aria-label="Learn more about our SEO and advertising services">Learn More About SEO & Ads</router-link>
          </div>
          
          <div class="service-offer-card">
            <div class="service-offer-icon">🛡️</div>
            <h3>Hosting & Care</h3>
            <div class="service-price">£40/mo</div>
            <div class="service-timeline">Monthly service</div>
            <ul class="service-features">
              <li>Fast, secure hosting</li>
              <li>Weekly backups</li>
              <li>Security updates</li>
              <li>2 hours of edits/month</li>
              <li>99.9% uptime guarantee</li>
            </ul>
            <router-link class="service-cta secondary" to="/contact">Learn More</router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="services-section">
      <div class="container">
        <h2>My Expertise</h2>
        <p class="services-intro">Full-service digital marketing and development</p>
        
        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon">💻</div>
            <h3>Custom Development</h3>
            <p>Hand-coded websites built for speed, SEO, and conversions. No templates, just clean code optimised for your business goals.</p>
            <div class="service-tech">Vue.js • React • Node.js • Performance-First</div>
          </div>
          
          <div class="service-card">
            <div class="service-icon">🎯</div>
            <h3>Digital Marketing</h3>
            <p>Strategic campaigns that drive real results. From Google Ads to social media, I help local businesses get found online.</p>
            <div class="service-tech">Google Ads • Facebook Ads • Analytics • Conversion Optimisation</div>
          </div>
          
          <div class="service-card">
            <div class="service-icon">🔍</div>
            <h3>SEO Services</h3>
            <p>Get your business ranking on Google. Local SEO specialist focusing on Stoke-on-Trent and surrounding areas.</p>
            <div class="service-tech">Local SEO • Technical SEO • Content Strategy • Google My Business</div>
          </div>
        </div>
      </div>
    </section>

    <section class="value-proposition">
      <div class="container">
        <div class="value-content">
          <div class="value-text">
            <h2>Marketing Expertise Meets<br><span class="accent-text">Technical Excellence</span></h2>
            <p>
              As a freelance Digital Marketer and Developer, I bring a unique combination of marketing strategy 
              and technical implementation. While others outsource, I handle everything in-house - 
              from SEO audits to custom code.
            </p>
            
            <div class="value-features">
              <div class="feature">
                <div class="feature-icon">🎯</div>
                <div>
                  <strong>Complete Digital Strategy</strong>
                  <span>Marketing + Development under one roof</span>
                </div>
              </div>
              <div class="feature">
                <div class="feature-icon">📍</div>
                <div>
                  <strong>Local Focus</strong>
                  <span>Helping Stoke-on-Trent businesses grow online</span>
                </div>
              </div>
              <div class="feature">
                <div class="feature-icon">📊</div>
                <div>
                  <strong>Data-Driven Results</strong>
                  <span>SEO and marketing that actually converts</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="code-showcase">
            <div class="code-window">
              <div class="window-header">
                <div class="window-controls">
                  <span class="control red"></span>
                  <span class="control yellow"></span>
                  <span class="control green"></span>
                </div>
                <span class="window-title">seo-optimised.vue</span>
              </div>
              <div class="code-content">
                <div class="code-line">
                  <span class="line-number">1</span>
                  <span class="comment">// SEO-optimised Vue component</span>
                </div>
                <div class="code-line">
                  <span class="line-number">2</span>
                  <span class="keyword">export default</span> <span class="punctuation">{</span>
                </div>
                <div class="code-line">
                  <span class="line-number">3</span>
                  <span class="property">  marketing</span><span class="punctuation">:</span> <span class="string">'data-driven'</span><span class="punctuation">,</span>
                </div>
                <div class="code-line">
                  <span class="line-number">4</span>
                  <span class="property">  development</span><span class="punctuation">:</span> <span class="string">'custom-coded'</span><span class="punctuation">,</span>
                </div>
                <div class="code-line">
                  <span class="line-number">5</span>
                  <span class="property">  results</span><span class="punctuation">:</span> <span class="string">'guaranteed'</span>
                </div>
                <div class="code-line">
                  <span class="line-number">6</span>
                  <span class="punctuation">}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Grow Your Business Online?</h2>
          <p>Get your professional website in 14 days, or explore our complete digital marketing services.</p>
          
          <div class="cta-features">
            <div class="cta-feature">
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" focusable="false">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              Professional freelance services
            </div>
            <div class="cta-feature">
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" focusable="false">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              Marketing + Development expertise
            </div>
            <div class="cta-feature">
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" focusable="false">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              Local Stoke-on-Trent focus
            </div>
          </div>
          
          <router-link class="cta-primary large" to="/launch-sites">
            Get Your £600 Website Now
            <svg class="cta-arrow" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </router-link>
          
          <p class="cta-location">Proudly serving businesses in Stoke-on-Trent and the Staffordshire area</p>
        </div>
      </div>
    </section>

    <section class="n15-labs-showcase">
      <div class="container">
        <div class="showcase-header">
          <span class="section-label">Innovation Lab</span>
          <h2>Welcome to <span class="highlight">N15 Labs</span></h2>
          <p>N15 Labs is where digital marketing meets modern development. Building custom solutions, automation systems, and growth strategies for local businesses.</p>
        </div>
        
        <div class="showcase-visual">
          <img
            :src="slideshowImages[currentImageIndex]"
            :alt="'N15 Labs Project ' + (currentImageIndex + 1)"
            class="showcase-image"
            @click="openModal"
          />
          
          <div class="showcase-controls">
            <button @click="prevImage" :disabled="currentImageIndex === 0" class="control-btn" aria-label="Previous image">
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" focusable="false">
                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            </button>
            <button @click="nextImage" :disabled="currentImageIndex === slideshowImages.length - 1" class="control-btn" aria-label="Next image">
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" focusable="false">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <div v-if="modalOpen" class="modal-overlay" @click.self="closeModal">
      <button class="modal-close" aria-label="Close modal" @click="closeModal">
        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" focusable="false">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
      <img
        :src="slideshowImages[currentImageIndex]"
        :alt="'Full view ' + (currentImageIndex + 1)"
        class="modal-image"
      />
    </div>
  </div>
</template>

<script>
import { useHead } from '@vueuse/head'


export default {
  name: 'HomePage',
  setup() {
    useHead({
      title: 'Andre Simpson - Digital Marketing & Web Development | Stoke-on-Trent',
      meta: [
        {
          name: 'description',
          content: 'Freelance Digital Marketer, SEO Specialist & Web Developer in Stoke-on-Trent. £600 websites in 14 days. Google Ads, Local SEO, and custom development services.'
        },
        {
          property: 'og:title',
          content: 'Andre Simpson - Digital Marketing & Web Development | N15 Labs'
        },
        {
          property: 'og:description',
          content: 'Freelance Digital Marketing and Web Development services in Stoke-on-Trent. Get your professional website for £600 in just 14 days.'
        },
        {
          name: 'keywords',
          content: 'digital marketing stoke on trent, SEO specialist staffordshire, web developer stoke, freelance marketer, £600 websites, local SEO, Google Ads management'
        }
      ]
    })
  },
  data() {
    return {
      currentImageIndex: 0,
      modalOpen: false,
      slideshowImages: [
        require('@/assets/webp/wireframe-collage.webp'),
        require('@/assets/webp/collage.webp')
      ]
    }
  },
  methods: {
    getParticleStyle(n) {
      return {
        left: Math.random() * 100 + '%',
        animationDelay: (n * 0.5) + 's',
        animationDuration: (3 + Math.random() * 2) + 's'
      }
    },
    nextImage() {
      if (this.currentImageIndex < this.slideshowImages.length - 1) {
        this.currentImageIndex++
      }
    },
    prevImage() {
      if (this.currentImageIndex > 0) {
        this.currentImageIndex--
      }
    },
    openModal() {
      this.modalOpen = true
    },
    closeModal() {
      this.modalOpen = false
    }
  }
}
</script>

<style scoped>
/* Keep all existing styles from original Home.vue */
* {
  box-sizing: border-box;
}

.home-container {
  background: #fafafa;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.hero-section {
  position: relative;
  min-height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  color: white;
  overflow: hidden;
  margin-top: 100px;
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
  width: 4px;
  height: 4px;
  background: rgba(59, 130, 246, 0.6);
  border-radius: 50%;
  animation: float 4s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { 
    transform: translateY(0px) translateX(0px);
    opacity: 0.3;
  }
  50% { 
    transform: translateY(-100px) translateX(50px);
    opacity: 1;
  }
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 4rem;
  align-items: center;
}

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

.home-container .hero-headline,
.hero-headline {
  font-size: clamp(3.5rem, 7vw, 5rem) !important;
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

.home-container .hero-subhead,
.hero-subhead {
  font-size: 1.5rem !important;
  line-height: 1.7 !important;
  color: #d1d5db !important;
  margin-bottom: 2.5rem !important;
  max-width: 500px !important;
  font-weight: 500 !important;
}

.hero-stats {
  display: flex;
  gap: 2.5rem;
  margin-bottom: 2.5rem;
}

.stat-item {
  text-align: center;
}

.stat-item strong {
  display: block;
  font-size: 2rem !important;
  font-weight: 700 !important;
  color: white !important;
}

.stat-item span {
  font-size: 1.125rem !important;
  color: #9ca3af !important;
  font-weight: 500 !important;
}

.hero-ctas {
  display: flex;
  gap: 1.25rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
}

.cta-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  padding: 1.25rem 2rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600 !important;
  font-size: 1.25rem !important;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.3);
}

.cta-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(59, 130, 246, 0.4);
}

.cta-primary.large {
  padding: 1.5rem 2.5rem !important;
  font-size: 1.375rem !important;
}

.cta-secondary {
  display: inline-flex;
  align-items: center;
  color: #f4f4f5;
  padding: 1.25rem 2rem;
  border: 1px solid #374151;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 500 !important;
  font-size: 1.25rem !important;
  transition: all 0.3s ease;
}

.cta-secondary:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: #4b5563;
}

.cta-arrow {
  width: 18px;
  height: 18px;
  transition: transform 0.3s ease;
}

.cta-primary:hover .cta-arrow {
  transform: translateX(3px);
}

.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-container {
  position: relative;
  animation: profileFloat 6s ease-in-out infinite;
}

@keyframes profileFloat {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(2deg); }
}

.profile-image {
  width: 350px;
  height: auto;
  border-radius: 24px;
  object-fit: cover;
  border: 3px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease;
  max-width: 400px;
}

.profile-image:hover {
  transform: scale(1.02);
}

.profile-glow {
  position: absolute;
  inset: -30px;
  background: linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3));
  border-radius: 40px;
  z-index: -1;
  filter: blur(30px);
  animation: glowPulse 3s ease-in-out infinite;
}

@keyframes glowPulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 0.8; }
}

.profile-badge {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(34, 197, 94, 0.9);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.9375rem !important;
  font-weight: 600 !important;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  backdrop-filter: blur(10px);
}

.profile-badge svg {
  width: 16px;
  height: 16px;
}

/* New Launch Sites Hero Section */
.launch-sites-hero {
  padding: 5rem 0;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-top: 1px solid #e0e7ff;
  border-bottom: 1px solid #e0e7ff;
}

.launch-content {
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
}

.launch-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #ef4444, #dc2626);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.875rem !important;
  font-weight: 700 !important;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background: white;
  border-radius: 50%;
  animation: pulse 1.5s infinite;
}

.launch-headline {
  font-size: 3.5rem !important;
  font-weight: 800 !important;
  color: #111827 !important;
  margin-bottom: 1rem !important;
  line-height: 1.2 !important;
}

.launch-subhead {
  font-size: 1.5rem !important;
  color: #6b7280 !important;
  margin-bottom: 2.5rem !important;
  font-weight: 500 !important;
}

.launch-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  padding: 1.25rem 2.5rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 700 !important;
  font-size: 1.375rem !important;
  transition: all 0.3s ease;
  box-shadow: 0 8px 30px rgba(16, 185, 129, 0.3);
  margin-bottom: 3rem;
}

.launch-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 40px rgba(16, 185, 129, 0.4);
}

.trust-signals {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.trust-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: white;
  border-radius: 50px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  font-weight: 600 !important;
  color: #374151 !important;
}

.trust-item svg {
  width: 20px;
  height: 20px;
  color: #10b981;
}

/* New Services Cards Section */
.services-cards-section {
  padding: 6rem 0;
  background: white;
}

.services-cards-section h2 {
  font-size: 3rem !important;
  font-weight: 800 !important;
  color: #111827 !important;
  margin-bottom: 1rem !important;
  text-align: center;
}

.services-subtitle {
  font-size: 1.375rem !important;
  color: #6b7280 !important;
  text-align: center;
  margin-bottom: 3rem !important;
  font-weight: 500 !important;
}

.services-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
}

.service-offer-card {
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 20px;
  padding: 2.5rem;
  position: relative;
  transition: all 0.3s ease;
  text-align: center;
}

.service-offer-card.featured {
  border-color: #3b82f6;
  box-shadow: 0 10px 40px rgba(59, 130, 246, 0.15);
  transform: scale(1.02);
}

.service-offer-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.service-offer-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  padding: 0.375rem 1rem;
  border-radius: 50px;
  font-size: 0.75rem !important;
  font-weight: 700 !important;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.service-offer-icon {
  font-size: 3rem !important;
  margin-bottom: 1rem !important;
}

.service-offer-card h3 {
  font-size: 1.75rem !important;
  font-weight: 700 !important;
  color: #111827 !important;
  margin-bottom: 0.5rem !important;
}

.service-price {
  font-size: 2.5rem !important;
  font-weight: 800 !important;
  color: #3b82f6 !important;
  margin-bottom: 0.25rem !important;
}

.service-timeline {
  font-size: 1rem !important;
  color: #6b7280 !important;
  margin-bottom: 1.5rem !important;
  font-weight: 500 !important;
}

.service-features {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  text-align: left;
}

.service-features li {
  padding: 0.75rem 0;
  border-bottom: 1px solid #f3f4f6;
  color: #4b5563;
  font-weight: 500 !important;
  display: flex;
  align-items: center;
}

.service-features li:before {
  content: "✓";
  color: #10b981;
  font-weight: 700;
  margin-right: 0.75rem;
}

.service-cta {
  display: inline-block;
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600 !important;
  font-size: 1.125rem !important;
  transition: all 0.3s ease;
}

.service-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
}

.service-cta.secondary {
  background: white;
  color: #3b82f6;
  border: 2px solid #3b82f6;
}

.service-cta.secondary:hover {
  background: #3b82f6;
  color: white;
}

.about-section {
  padding: 6rem 0;
  background: #f9fafb;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.section-label {
  display: inline-block;
  background: #dbeafe;
  color: #1d4ed8;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.9375rem !important;
  font-weight: 600 !important;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
}

.home-container .about-text h2,
.about-text h2 {
  font-size: 3rem !important;
  font-weight: 800 !important;
  color: #111827 !important;
  margin-bottom: 1.5rem !important;
  line-height: 1.2 !important;
}

.highlight {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.home-container .about-intro,
.about-intro {
  font-size: 1.375rem !important;
  line-height: 1.7 !important;
  color: #6b7280 !important;
  margin-bottom: 2rem !important;
  font-weight: 500 !important;
}

.credentials-simple {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.credential {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  border-left: 4px solid #3b82f6;
}

.credential strong {
  color: #111827 !important;
  font-weight: 600 !important;
  margin-bottom: 0.25rem !important;
  font-size: 1.0625rem !important;
}

.credential span {
  color: #6b7280 !important;
  font-size: 1rem !important;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: #f3f4f6;
  border-radius: 8px;
  text-decoration: none;
  color: #374151;
  font-weight: 500 !important;
  font-size: 1.0625rem !important;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: #111827;
  color: white;
}

.social-link svg {
  width: 18px;
  height: 18px;
}

.about-visual {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.bio-images {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.workspace-image,
.code-image {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.workspace-image img,
.code-image img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.workspace-image:hover img,
.code-image:hover img {
  transform: scale(1.1);
}

.image-label {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: white;
  padding: 1rem 0.75rem 0.75rem;
  font-size: 0.9375rem !important;
  font-weight: 500 !important;
}

.video-container {
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.video-container iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.video-label {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: white;
  padding: 1rem 0.75rem 0.75rem;
  font-size: 0.9375rem !important;
  font-weight: 500 !important;
}

.services-section {
  padding: 6rem 0;
  background: white;
  text-align: center;
}

.home-container .services-section h2,
.services-section h2 {
  font-size: 3rem !important;
  font-weight: 800 !important;
  color: #111827 !important;
  margin-bottom: 1rem !important;
}

.home-container .services-intro,
.services-intro {
  font-size: 1.5rem !important;
  color: #6b7280 !important;
  margin-bottom: 3rem !important;
  font-weight: 500 !important;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.service-card {
  background: #f9fafb;
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  text-align: left;
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border-color: #3b82f6;
  background: white;
}

.service-icon {
  font-size: 2.5rem !important;
  margin-bottom: 1rem !important;
  display: block !important;
}

.home-container .service-card h3,
.service-card h3 {
  font-size: 1.5rem !important;
  font-weight: 700 !important;
  color: #111827 !important;
  margin-bottom: 1rem !important;
}

.home-container .service-card p,
.service-card p {
  color: #6b7280 !important;
  line-height: 1.6 !important;
  margin-bottom: 1.5rem !important;
  font-size: 1.125rem !important;
  font-weight: 500 !important;
}

.service-tech {
  font-size: 1rem !important;
  color: #3b82f6 !important;
  font-weight: 500 !important;
  border-top: 1px solid #e5e7eb;
  padding-top: 1rem;
}

.value-proposition {
  padding: 6rem 0;
  background: #f9fafb;
}

.value-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.home-container .value-text h2,
.value-text h2 {
  font-size: 3rem !important;
  font-weight: 800 !important;
  line-height: 1.2 !important;
  color: #111827 !important;
  margin-bottom: 1.5rem !important;
}

.accent-text {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.home-container .value-text p,
.value-text p {
  font-size: 1.375rem !important;
  line-height: 1.7 !important;
  color: #6b7280 !important;
  margin-bottom: 2rem !important;
  font-weight: 500 !important;
}

.value-features {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.feature {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.feature-icon {
  font-size: 1.75rem !important;
  margin-top: 0.25rem !important;
}

.feature strong {
  display: block !important;
  color: #111827 !important;
  font-weight: 600 !important;
  font-size: 1.25rem !important;
  margin-bottom: 0.25rem !important;
}

.feature span {
  color: #6b7280 !important;
  font-size: 1.0625rem !important;
}

.code-showcase {
  display: flex;
  justify-content: center;
}

.code-window {
  background: #1f2937;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 450px;
}

.window-header {
  background: #374151;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.window-controls {
  display: flex;
  gap: 0.5rem;
}

.control {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.control.red { background: #ef4444; }
.control.yellow { background: #f59e0b; }
.control.green { background: #10b981; }

.window-title {
  color: #d1d5db;
  font-size: 0.875rem;
  font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
}

.code-content {
  padding: 1.5rem;
  font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
  font-size: 0.875rem;
  line-height: 1.6;
}

.code-line {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.line-number {
  color: #6b7280;
  width: 2rem;
  text-align: right;
  margin-right: 1rem;
  user-select: none;
}

.comment { color: #6b7280; }
.keyword { color: #f59e0b; }
.property { color: #10b981; }
.string { color: #3b82f6; }
.punctuation { color: #d1d5db; }

.cta-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, #111827 0%, #1f2937 100%);
  color: white;
  text-align: center;
}

.cta-content {
  max-width: 700px;
  margin: 0 auto;
}

.home-container .cta-content h2,
.cta-content h2 {
  font-size: 3rem !important;
  font-weight: 800 !important;
  margin-bottom: 1rem !important;
}

.home-container .cta-content p,
.cta-content p {
  font-size: 1.5rem !important;
  color: #d1d5db !important;
  margin-bottom: 2.5rem !important;
  line-height: 1.6 !important;
  font-weight: 500 !important;
}

.cta-features {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
}

.cta-feature {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #d1d5db;
  font-size: 1.125rem !important;
  font-weight: 500 !important;
}

.cta-feature svg {
  width: 20px;
  height: 20px;
  color: #22c55e;
  flex-shrink: 0;
}

.cta-location {
  margin-top: 1.5rem !important;
  color: #9ca3af !important;
  font-size: 1.0625rem !important;
  font-style: italic !important;
}

.n15-labs-showcase {
  padding: 6rem 0;
  background: white;
}

.showcase-header {
  text-align: center;
  margin-bottom: 4rem;
}

.home-container .showcase-header h2,
.showcase-header h2 {
  font-size: 3rem !important;
  font-weight: 800 !important;
  color: #111827 !important;
  margin-bottom: 1rem !important;
}

.home-container .showcase-header p,
.showcase-header p {
  color: #6b7280 !important;
  font-size: 1.375rem !important;
  line-height: 1.6 !important;
  max-width: 700px !important;
  margin: 0 auto !important;
  font-weight: 500 !important;
}

.showcase-visual {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
}

.showcase-image {
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: transform 0.3s ease;
}

.showcase-image:hover {
  transform: scale(1.02);
}

.showcase-controls {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.control-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.control-btn:hover:not(:disabled) {
  background: #111827;
  color: white;
  border-color: #111827;
}

.control-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.control-btn svg {
  width: 20px;
  height: 20px;
}

.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
}

.modal-close {
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 12px;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.modal-close:hover {
  background: rgba(255, 255, 255, 0.2);
}

.modal-close svg {
  width: 24px;
  height: 24px;
}

.modal-image {
  max-width: 90%;
  max-height: 90%;
  border-radius: 16px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
}

@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
  }
  
  .profile-image {
    width: 300px;
    height: 300px;
    max-width: 300px;
  }
  
  .value-content,
  .about-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .cta-features {
    flex-direction: column;
    align-items: center;
  }
  
  .services-cards-grid {
    grid-template-columns: 1fr;
  }
  
  .launch-content {
    padding: 0 1rem;
  }
  
  .trust-signals {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  
  .hero-section {
    min-height: auto;
    padding: 4rem 0;
  }

  .home-container .hero-headline,
  .hero-headline {
    font-size: 3rem !important;
  }

  .home-container .hero-subhead,
  .hero-subhead {
    font-size: 1.375rem !important;
  }

  .launch-headline {
    font-size: 2.5rem !important;
  }

  .launch-subhead {
    font-size: 1.25rem !important;
  }

  .home-container .about-text h2,
  .about-text h2,
  .home-container .services-section h2,
  .services-section h2,
  .home-container .value-text h2,
  .value-text h2,
  .home-container .cta-content h2,
  .cta-content h2,
  .home-container .showcase-header h2,
  .showcase-header h2,
  .services-cards-section h2 {
    font-size: 2.5rem !important;
  }

  .home-container .about-intro,
  .about-intro {
    font-size: 1.25rem !important;
  }

  .home-container .services-intro,
  .services-intro,
  .home-container .cta-content p,
  .cta-content p,
  .home-container .showcase-header p,
  .showcase-header p {
    font-size: 1.375rem !important;
  }

  .home-container .service-card p,
  .service-card p {
    font-size: 1.0625rem !important;
  }
  
  .hero-stats {
    justify-content: center;
    gap: 2rem;
  }
  
  .hero-ctas {
    flex-direction: column;
    align-items: center;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .social-links {
    justify-content: center;
  }
  
  .bio-images {
    grid-template-columns: 1fr;
  }
  
  .service-offer-card.featured {
    transform: none;
  }
}

@media (max-width: 480px) {
  .home-container .hero-headline,
  .hero-headline {
    font-size: 2.5rem !important;
  }

  .launch-headline {
    font-size: 2rem !important;
  }

  .home-container .about-text h2,
  .about-text h2,
  .home-container .services-section h2,
  .services-section h2,
  .home-container .value-text h2,
  .value-text h2,
  .home-container .cta-content h2,
  .cta-content h2,
  .home-container .showcase-header h2,
  .showcase-header h2,
  .services-cards-section h2 {
    font-size: 2rem !important;
  }
  
  .hero-stats {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }
  
  .profile-image {
    width: 250px;
    height: 250px;
  }
  
  .launch-cta {
    padding: 1rem 1.5rem;
    font-size: 1.125rem !important;
  }
  
  .trust-item {
    font-size: 0.875rem !important;
  }
  
  .service-offer-card {
    padding: 1.5rem;
  }
  
  .service-price {
    font-size: 2rem !important;
  }
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
  .particle,
  .profile-container,
  .profile-glow {
    animation: none;
  }
  
  .status-dot,
  .pulse-dot {
    animation: none;
  }
}

.cta-primary:focus,
.cta-secondary:focus,
.control-btn:focus,
.launch-cta:focus,
.service-cta:focus,
.social-link:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* Print styles */
@media print {
  .hero-section,
  .launch-sites-hero,
  .n15-labs-showcase,
  .modal-overlay {
    display: none;
  }
  
  .services-cards-section,
  .about-section,
  .services-section {
    break-inside: avoid;
  }
}
</style>