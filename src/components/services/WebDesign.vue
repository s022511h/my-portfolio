<template>
  <div class="service-page">
    <!-- Hero Section -->
    <section class="service-hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <span class="section-label">Web Design</span>
            <h1>Websites that actually <span class="gradient-text">bring in customers</span></h1>
            <p class="hero-intro">
              Your website should be your hardest-working salesperson. I build fast, 
              conversion-focused sites that turn visitors into enquiries, calls, and 
              paying customers.
            </p>
            <div class="hero-stats">
              <div class="stat">
                <strong>Sub-3s</strong>
                <span>Load Times</span>
              </div>
              <div class="stat">
                <strong>79+</strong>
                <span>Lighthouse Score</span>
              </div>
              <div class="stat">
                <strong>From £600</strong>
                <span>Fixed Price</span>
              </div>
            </div>
            <div class="hero-ctas">
              <a 
                href="https://calendly.com/n15labs/strategy-call" 
                target="_blank"
                rel="noopener noreferrer"
                class="cta-primary"
              >
                Discuss Your Project
                <ArrowRightIcon aria-hidden="true" />
              </a>
              <router-link to="/launch-sites" class="cta-secondary">
                £600 Launch Sites
              </router-link>
            </div>
          </div>
          <div class="hero-visual">
            <div class="visual-card">
              <div class="card-header">
                <MonitorIcon aria-hidden="true" />
                <span>Performance Score</span>
              </div>
              <div class="performance-display">
                <div class="score-circle">
                  <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" class="score-bg" />
                    <circle cx="50" cy="50" r="45" class="score-fill" />
                  </svg>
                  <div class="score-value">79</div>
                </div>
                <div class="score-comparison">
                  <div class="comparison-item before">
                    <span class="label">Before</span>
                    <span class="value">43</span>
                  </div>
                  <ArrowRightIcon class="comparison-arrow" aria-hidden="true" />
                  <div class="comparison-item after">
                    <span class="label">After</span>
                    <span class="value">79</span>
                  </div>
                </div>
                <div class="load-time">
                  <GaugeIcon aria-hidden="true" />
                  <span>3.6s load time (was 12.2s)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Problems Section -->
    <section class="problems-section">
      <div class="container">
        <h2>Sound familiar?</h2>
        <div class="problems-grid">
          <div class="problem-card">
            <div class="problem-icon">
              <GaugeIcon aria-hidden="true" />
            </div>
            <h3>Your website takes forever to load</h3>
            <p>
              Visitors leave if your site takes more than 3 seconds. That slow WordPress 
              site is costing you customers every single day.
            </p>
          </div>
          <div class="problem-card">
            <div class="problem-icon">
              <SmartphoneIcon aria-hidden="true" />
            </div>
            <h3>It looks terrible on mobile</h3>
            <p>
              Over 60% of your visitors are on phones. If your site isn't mobile-first, 
              you're losing more than half your potential customers.
            </p>
          </div>
          <div class="problem-card">
            <div class="problem-icon">
              <MousePointerClickIcon aria-hidden="true" />
            </div>
            <h3>People visit but never get in touch</h3>
            <p>
              You're getting traffic, but the phone isn't ringing. Your site isn't 
              designed to convert visitors into enquiries.
            </p>
          </div>
          <div class="problem-card">
            <div class="problem-icon">
              <LockIcon aria-hidden="true" />
            </div>
            <h3>You're locked into someone else's platform</h3>
            <p>
              You don't own your website. Your "web guy" holds the keys, and you're 
              stuck paying whatever they ask.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Solution Section -->
    <section class="solution-section">
      <div class="container">
        <span class="section-label">How I Build</span>
        <h2>Fast, focused, <span class="highlight">yours to own</span></h2>
        <p class="section-intro">
          I build websites differently. No bloated templates, no monthly hostage fees, 
          no mystery code you can't touch.
        </p>

        <div class="solution-grid">
          <div class="solution-card">
            <div class="solution-icon">
              <ZapIcon aria-hidden="true" />
            </div>
            <div class="solution-content">
              <h3>Performance-First</h3>
              <p>
                Every site I build targets sub-3 second load times. I optimise images, 
                minify code, and eliminate the bloat that slows most websites down.
              </p>
              <div class="solution-stat">
                <strong>3.6s</strong>
                <span>average load time</span>
              </div>
            </div>
          </div>

          <div class="solution-card">
            <div class="solution-icon">
              <TargetIcon aria-hidden="true" />
            </div>
            <div class="solution-content">
              <h3>Conversion-Focused</h3>
              <p>
                Every page is designed with one goal: getting visitors to take action. 
                Clear calls-to-action, trust signals, and friction-free contact forms.
              </p>
              <div class="solution-stat">
                <strong>Click → Contact</strong>
                <span>every page has a purpose</span>
              </div>
            </div>
          </div>

          <div class="solution-card">
            <div class="solution-icon">
              <SmartphoneIcon aria-hidden="true" />
            </div>
            <div class="solution-content">
              <h3>Mobile-First</h3>
              <p>
                I design for phones first, then scale up. Your site will look and work 
                perfectly on every device your customers use.
              </p>
              <div class="solution-stat">
                <strong>100%</strong>
                <span>responsive design</span>
              </div>
            </div>
          </div>

          <div class="solution-card">
            <div class="solution-icon">
              <KeyIcon aria-hidden="true" />
            </div>
            <div class="solution-content">
              <h3>You Own Everything</h3>
              <p>
                When I build your site, you get the code, the domain, everything. 
                No lock-in, no proprietary systems. It's yours.
              </p>
              <div class="solution-stat">
                <strong>100%</strong>
                <span>ownership</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- What You Get Section -->
    <section class="features-section">
      <div class="container">
        <h2>What's included</h2>
        <div class="features-grid">
          <div class="feature-card">
            <CheckIcon class="feature-check" aria-hidden="true" />
            <span>Custom design (no templates)</span>
          </div>
          <div class="feature-card">
            <CheckIcon class="feature-check" aria-hidden="true" />
            <span>Mobile responsive</span>
          </div>
          <div class="feature-card">
            <CheckIcon class="feature-check" aria-hidden="true" />
            <span>Speed optimised</span>
          </div>
          <div class="feature-card">
            <CheckIcon class="feature-check" aria-hidden="true" />
            <span>SEO foundations</span>
          </div>
          <div class="feature-card">
            <CheckIcon class="feature-check" aria-hidden="true" />
            <span>Contact forms</span>
          </div>
          <div class="feature-card">
            <CheckIcon class="feature-check" aria-hidden="true" />
            <span>Google Analytics setup</span>
          </div>
          <div class="feature-card">
            <CheckIcon class="feature-check" aria-hidden="true" />
            <span>SSL certificate (HTTPS)</span>
          </div>
          <div class="feature-card">
            <CheckIcon class="feature-check" aria-hidden="true" />
            <span>Google Business integration</span>
          </div>
          <div class="feature-card">
            <CheckIcon class="feature-check" aria-hidden="true" />
            <span>Social media links</span>
          </div>
          <div class="feature-card">
            <CheckIcon class="feature-check" aria-hidden="true" />
            <span>Privacy policy & terms</span>
          </div>
          <div class="feature-card">
            <CheckIcon class="feature-check" aria-hidden="true" />
            <span>Cookie consent (GDPR)</span>
          </div>
          <div class="feature-card">
            <CheckIcon class="feature-check" aria-hidden="true" />
            <span>Training on how to update</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="process-section">
      <div class="container">
        <span class="section-label">The Process</span>
        <h2>How we'll work together</h2>
        
        <div class="process-timeline">
          <div class="process-step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3>Discovery Call</h3>
              <p>
                We'll talk about your business, your customers, and what you need 
                your website to do. I'll give you an honest assessment and a fixed quote.
              </p>
              <span class="step-duration">30 minutes</span>
            </div>
          </div>
          
          <div class="process-connector"></div>
          
          <div class="process-step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3>Content & Design</h3>
              <p>
                You send me your content (text, images, logo), and I create a design 
                mockup for your approval. We refine until you're happy.
              </p>
              <span class="step-duration">1-2 weeks</span>
            </div>
          </div>
          
          <div class="process-connector"></div>
          
          <div class="process-step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3>Build & Test</h3>
              <p>
                I build your site, optimise for speed, test on every device, and 
                make sure everything works perfectly before showing you.
              </p>
              <span class="step-duration">1-2 weeks</span>
            </div>
          </div>
          
          <div class="process-connector"></div>
          
          <div class="process-step">
            <div class="step-number">4</div>
            <div class="step-content">
              <h3>Launch & Handover</h3>
              <p>
                We go live. I'll set up analytics, submit to Google, and show you 
                how to make basic updates yourself.
              </p>
              <span class="step-duration">2-3 days</span>
            </div>
          </div>
        </div>
        
        <div class="process-note">
          <ClockIcon aria-hidden="true" />
          <p>
            <strong>Total timeline: 14 days to 1 month</strong> — depends on how quickly 
            you can provide content and feedback. I won't rush quality, but I won't drag 
            it out either.
          </p>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="pricing-section">
      <div class="container">
        <span class="section-label">Investment</span>
        <h2>Transparent pricing</h2>
        <p class="section-intro">
          Fixed prices. No hourly billing, no scope creep, no surprises.
        </p>

        <div class="pricing-grid">
          <div class="pricing-card featured">
            <div class="pricing-badge">Most Popular</div>
            <div class="pricing-header">
              <h3>Launch Site</h3>
              <div class="price">
                <span class="amount">£600</span>
                <span class="period">one-off</span>
              </div>
            </div>
            <div class="pricing-body">
              <p class="pricing-description">
                Perfect for small businesses that need a professional web presence fast.
              </p>
              <ul class="pricing-features">
                <li><CheckIcon aria-hidden="true" /> 3 pages (Home, About, Contact)</li>
                <li><CheckIcon aria-hidden="true" /> Mobile responsive design</li>
                <li><CheckIcon aria-hidden="true" /> Contact form</li>
                <li><CheckIcon aria-hidden="true" /> Basic SEO setup</li>
                <li><CheckIcon aria-hidden="true" /> Google Business setup</li>
                <li><CheckIcon aria-hidden="true" /> Analytics installed</li>
                <li><CheckIcon aria-hidden="true" /> 14 days to 1 month delivery</li>
              </ul>
              <router-link to="/launch-sites" class="pricing-cta primary">
                Learn More About Launch Sites
              </router-link>
            </div>
          </div>

          <div class="pricing-card">
            <div class="pricing-header">
              <h3>Custom Website</h3>
              <div class="price">
                <span class="amount">From £1,500</span>
                <span class="period">one-off</span>
              </div>
            </div>
            <div class="pricing-body">
              <p class="pricing-description">
                For businesses that need more pages, features, or a completely bespoke design.
              </p>
              <ul class="pricing-features">
                <li><CheckIcon aria-hidden="true" /> 5+ pages</li>
                <li><CheckIcon aria-hidden="true" /> Custom functionality</li>
                <li><CheckIcon aria-hidden="true" /> Advanced SEO setup</li>
                <li><CheckIcon aria-hidden="true" /> Blog/news section</li>
                <li><CheckIcon aria-hidden="true" /> Gallery/portfolio</li>
                <li><CheckIcon aria-hidden="true" /> Booking integration</li>
                <li><CheckIcon aria-hidden="true" /> Quoted per project</li>
              </ul>
              <a 
                href="https://calendly.com/n15labs/strategy-call" 
                target="_blank"
                rel="noopener noreferrer"
                class="pricing-cta"
              >
                Get a Custom Quote
              </a>
            </div>
          </div>

          <div class="pricing-card">
            <div class="pricing-header">
              <h3>Hosting & Care</h3>
              <div class="price">
                <span class="amount">£40</span>
                <span class="period">/month</span>
              </div>
            </div>
            <div class="pricing-body">
              <p class="pricing-description">
                Keep your site fast, secure, and up-to-date without thinking about it.
              </p>
              <ul class="pricing-features">
                <li><CheckIcon aria-hidden="true" /> Fast, secure hosting</li>
                <li><CheckIcon aria-hidden="true" /> Weekly backups</li>
                <li><CheckIcon aria-hidden="true" /> Security updates</li>
                <li><CheckIcon aria-hidden="true" /> SSL certificate</li>
                <li><CheckIcon aria-hidden="true" /> 2 hours of edits/month</li>
                <li><CheckIcon aria-hidden="true" /> 99.9% uptime guarantee</li>
                <li><CheckIcon aria-hidden="true" /> Priority support</li>
              </ul>
              <router-link to="/contact" class="pricing-cta">
                Add to Any Site
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
      <div class="container">
        <h2>Common questions</h2>
        
        <div class="faq-list">
          <div class="faq-item">
            <h3>Do you use WordPress?</h3>
            <p>
              I can work with WordPress if you need a CMS for regular content updates, 
              but for most small business sites, I build custom lightweight code that's 
              faster and more secure. We'll discuss what's right for your situation.
            </p>
          </div>
          
          <div class="faq-item">
            <h3>What do you need from me?</h3>
            <p>
              Your logo (if you have one), any photos you want to use, the text for each 
              page, and your brand colours. Don't have professional photos? I can work 
              with what you have or source stock images.
            </p>
          </div>
          
          <div class="faq-item">
            <h3>Can I update the site myself?</h3>
            <p>
              Yes. I'll show you how to make basic updates. For more complex changes, 
              the Hosting & Care package includes 2 hours of edits per month, or you 
              can pay ad-hoc.
            </p>
          </div>
          
          <div class="faq-item">
            <h3>Do I need to pay for hosting separately?</h3>
            <p>
                I offer hosting at £40/month which includes backups, security, 2 hours of edits, 
                and priority support. You're also free to host elsewhere if you prefer — you own 
                the code, so it's your choice.
            </p>
          </div>
          
          <div class="faq-item">
            <h3>What if I need changes after launch?</h3>
            <p>
              Small tweaks immediately after launch are included. For ongoing changes, 
              the Hosting & Care package covers 2 hours/month. Larger projects are quoted 
              separately.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-card">
          <h2>Ready for a website that works?</h2>
          <p>
            Book a free call. We'll talk about what you need, I'll give you a fixed 
            quote, and you can decide with no pressure.
          </p>
          <div class="cta-buttons">
            <a 
              href="https://calendly.com/n15labs/strategy-call" 
              target="_blank"
              rel="noopener noreferrer"
              class="cta-primary"
            >
              Book Your Free Call
              <ArrowRightIcon aria-hidden="true" />
            </a>
            <router-link to="/launch-sites" class="cta-secondary">
              See Launch Sites — £600
            </router-link>
          </div>
          <p class="cta-subtext">No obligation. No hard sell. Just honest advice.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useHead } from '@vueuse/head'
import {
  ArrowRightIcon,
  MonitorIcon,
  GaugeIcon,
  SmartphoneIcon,
  MousePointerClickIcon,
  LockIcon,
  ZapIcon,
  TargetIcon,
  KeyIcon,
  CheckIcon,
  ClockIcon
} from 'lucide-vue-next'

export default {
  name: 'WebDesignService',
  
  components: {
    ArrowRightIcon,
    MonitorIcon,
    GaugeIcon,
    SmartphoneIcon,
    MousePointerClickIcon,
    LockIcon,
    ZapIcon,
    TargetIcon,
    KeyIcon,
    CheckIcon,
    ClockIcon
  },
  
  setup() {
    useHead({
      title: 'Web Design Stoke-on-Trent | Fast Websites from £600 | N15 Labs',
      meta: [
        {
          name: 'description',
          content: 'Fast, conversion-focused websites for Stoke-on-Trent businesses. From £600 fixed price. Sub-3 second load times. You own everything. Free consultation.'
        },
        {
          property: 'og:title',
          content: 'Web Design Stoke-on-Trent | N15 Labs'
        },
        {
          property: 'og:description',
          content: 'Fast, conversion-focused websites for local businesses. From £600 fixed price.'
        },
        {
          name: 'keywords',
          content: 'web design Stoke-on-Trent, website designer Staffordshire, small business websites, fast websites, affordable web design'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://n15labs.co.uk/services/web-design'
        }
      ]
    })
  }
}
</script>

<style scoped>
/* ==================== BASE STYLES ==================== */
.service-page {
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
  padding: 0.625rem 1.25rem;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 50px;
  color: #60a5fa;
  font-size: 0.9375rem;
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

.highlight {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-intro {
  font-size: 1.25rem;
  color: #d4d4d8;
  max-width: 680px;
  line-height: 1.7;
  margin-bottom: 3rem;
}

/* ==================== HERO SECTION ==================== */
.service-hero {
  padding: 8rem 0 5rem;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-text h1 {
  font-size: 3.25rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: #ffffff;
  line-height: 1.15;
}

.hero-intro {
  font-size: 1.25rem;
  color: #d4d4d8;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.hero-stats {
  display: flex;
  gap: 2.5rem;
  margin-bottom: 2.5rem;
  padding: 1.5rem 0;
  border-top: 1px solid #374151;
  border-bottom: 1px solid #374151;
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.stat strong {
  font-size: 1.75rem;
  font-weight: 700;
  color: #3b82f6;
}

.stat span {
  font-size: 0.9375rem;
  color: #a1a1aa;
}

.hero-ctas {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.cta-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  padding: 1rem 1.75rem;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.0625rem;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.cta-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.35);
}

.cta-primary svg {
  width: 20px;
  height: 20px;
}

.cta-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  padding: 1rem 1.75rem;
  background: transparent;
  color: #f4f4f5;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.0625rem;
  border: 2px solid #52525b;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.cta-secondary:hover {
  border-color: #3b82f6;
  color: #3b82f6;
}

/* Hero Visual */
.hero-visual {
  display: flex;
  justify-content: center;
}

.visual-card {
  background: linear-gradient(135deg, #1a1a1a 0%, #222222 100%);
  border: 1px solid #374151;
  border-radius: 16px;
  padding: 1.75rem;
  width: 100%;
  max-width: 360px;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #374151;
  color: #a1a1aa;
  font-weight: 500;
}

.card-header svg {
  width: 20px;
  height: 20px;
  color: #3b82f6;
}

.performance-display {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.score-circle {
  position: relative;
  width: 140px;
  height: 140px;
}

.score-circle svg {
  transform: rotate(-90deg);
  width: 100%;
  height: 100%;
}

.score-bg {
  fill: none;
  stroke: #374151;
  stroke-width: 8;
}

.score-fill {
  fill: none;
  stroke: #10b981;
  stroke-width: 8;
  stroke-dasharray: 283;
  stroke-dashoffset: 60;
  stroke-linecap: round;
}

.score-value {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2.5rem;
  font-weight: 800;
  color: #10b981;
}

.score-comparison {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(0, 0, 0, 0.3);
  padding: 1rem 1.5rem;
  border-radius: 8px;
  width: 100%;
}

.comparison-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}

.comparison-item .label {
  font-size: 0.75rem;
  color: #a1a1aa;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.comparison-item .value {
  font-size: 1.5rem;
  font-weight: 700;
}

.comparison-item.before .value {
  color: #ef4444;
}

.comparison-item.after .value {
  color: #10b981;
}

.comparison-arrow {
  width: 20px;
  height: 20px;
  color: #a1a1aa;
}

.load-time {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #a1a1aa;
  font-size: 0.9375rem;
}

.load-time svg {
  width: 18px;
  height: 18px;
  color: #3b82f6;
}

/* ==================== PROBLEMS SECTION ==================== */
.problems-section {
  padding: 5rem 0;
  background: linear-gradient(180deg, #111111 0%, #0a0a0a 100%);
}

.problems-section h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #ffffff;
  text-align: center;
}

.problems-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.problem-card {
  background: linear-gradient(135deg, #1a1a1a 0%, #222222 100%);
  border: 1px solid #374151;
  border-radius: 16px;
  padding: 2rem;
}

.problem-icon {
  width: 56px;
  height: 56px;
  background: rgba(239, 68, 68, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
  color: #f87171;
}

.problem-icon svg {
  width: 28px;
  height: 28px;
}

.problem-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #ffffff;
}

.problem-card p {
  color: #d4d4d8;
  line-height: 1.7;
  font-size: 1rem;
}

/* ==================== SOLUTION SECTION ==================== */
.solution-section {
  padding: 5rem 0;
}

.solution-section h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #ffffff;
}

.solution-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.solution-card {
  background: linear-gradient(135deg, #1a1a1a 0%, #222222 100%);
  border: 1px solid #374151;
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  gap: 1.5rem;
}

.solution-icon {
  width: 56px;
  height: 56px;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: #3b82f6;
}

.solution-icon svg {
  width: 28px;
  height: 28px;
}

.solution-content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #ffffff;
}

.solution-content p {
  color: #d4d4d8;
  line-height: 1.7;
  font-size: 1rem;
  margin-bottom: 1rem;
}

.solution-stat {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
}

.solution-stat strong {
  font-size: 1.25rem;
  font-weight: 700;
  color: #10b981;
}

.solution-stat span {
  font-size: 0.875rem;
  color: #a1a1aa;
}

/* ==================== FEATURES SECTION ==================== */
.features-section {
  padding: 5rem 0;
  background: linear-gradient(180deg, #111111 0%, #0a0a0a 100%);
}

.features-section h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #ffffff;
  text-align: center;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.feature-card {
  background: linear-gradient(135deg, #1a1a1a 0%, #222222 100%);
  border: 1px solid #374151;
  border-radius: 10px;
  padding: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.feature-check {
  width: 20px;
  height: 20px;
  color: #10b981;
  flex-shrink: 0;
}

.feature-card span {
  color: #e4e4e7;
  font-size: 0.9375rem;
}

/* ==================== PROCESS SECTION ==================== */
.process-section {
  padding: 5rem 0;
}

.process-section h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #ffffff;
  text-align: center;
}

.process-timeline {
  max-width: 700px;
  margin: 0 auto;
}

.process-step {
  display: flex;
  gap: 1.5rem;
}

.step-number {
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.375rem;
  font-weight: 700;
  color: white;
  flex-shrink: 0;
}

.step-content {
  padding-bottom: 1rem;
}

.step-content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #ffffff;
}

.step-content p {
  color: #d4d4d8;
  line-height: 1.7;
  font-size: 1rem;
  margin-bottom: 0.75rem;
}

.step-duration {
  display: inline-block;
  padding: 0.375rem 0.875rem;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 50px;
  color: #60a5fa;
  font-size: 0.8125rem;
  font-weight: 500;
}

.process-connector {
  width: 3px;
  height: 32px;
  background: linear-gradient(180deg, #3b82f6 0%, #8b5cf6 100%);
  margin-left: 26px;
}

.process-note {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: linear-gradient(135deg, #1a1a1a 0%, #222222 100%);
  border: 1px solid #374151;
  border-radius: 12px;
  padding: 1.5rem;
  margin-top: 2.5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.process-note svg {
  width: 24px;
  height: 24px;
  color: #3b82f6;
  flex-shrink: 0;
  margin-top: 2px;
}

.process-note p {
  color: #d4d4d8;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
}

.process-note strong {
  color: #ffffff;
}

/* ==================== PRICING SECTION ==================== */
.pricing-section {
  padding: 5rem 0;
  text-align: center;
  background: linear-gradient(180deg, #111111 0%, #0a0a0a 100%);
}

.pricing-section h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #ffffff;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;
  align-items: start;
}

.pricing-card {
  background: linear-gradient(135deg, #1a1a1a 0%, #222222 100%);
  border: 1px solid #374151;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
}

.pricing-card.featured {
  border-color: #3b82f6;
  transform: scale(1.03);
}

.pricing-badge {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  color: white;
  padding: 0.5rem;
  font-size: 0.8125rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.pricing-header {
  padding: 2rem 1.5rem 1.5rem;
  text-align: center;
}

.pricing-card.featured .pricing-header {
  padding-top: 3rem;
}

.pricing-header h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #ffffff;
}

.price {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.price .amount {
  font-size: 2.5rem;
  font-weight: 800;
  color: #3b82f6;
}

.price .period {
  font-size: 1rem;
  color: #a1a1aa;
}

.pricing-body {
  padding: 0 1.5rem 2rem;
}

.pricing-description {
  color: #d4d4d8;
  font-size: 0.9375rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  text-align: left;
}

.pricing-features {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
  text-align: left;
}

.pricing-features li {
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
  margin-bottom: 0.75rem;
  color: #e4e4e7;
  font-size: 0.9375rem;
  line-height: 1.5;
}

.pricing-features li svg {
  width: 18px;
  height: 18px;
  color: #10b981;
  flex-shrink: 0;
  margin-top: 2px;
}

.pricing-cta {
  display: block;
  width: 100%;
  padding: 1rem;
  background: transparent;
  border: 2px solid #52525b;
  color: #f4f4f5;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9375rem;
  border-radius: 10px;
  text-align: center;
  transition: all 0.3s ease;
}

.pricing-cta:hover {
  border-color: #3b82f6;
  color: #3b82f6;
}

.pricing-cta.primary {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  border-color: transparent;
  color: white;
}

.pricing-cta.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.35);
}

/* ==================== FAQ SECTION ==================== */
.faq-section {
  padding: 5rem 0;
}

.faq-section h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #ffffff;
  text-align: center;
}

.faq-list {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  background: linear-gradient(135deg, #1a1a1a 0%, #222222 100%);
  border: 1px solid #374151;
  border-radius: 12px;
  padding: 1.75rem;
  margin-bottom: 1rem;
}

.faq-item h3 {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #ffffff;
}

.faq-item p {
  color: #d4d4d8;
  line-height: 1.7;
  font-size: 1rem;
}

/* ==================== CTA SECTION ==================== */
.cta-section {
  padding: 5rem 0;
  background: linear-gradient(180deg, #111111 0%, #0a0a0a 100%);
}

.cta-card {
  background: linear-gradient(135deg, #1a1a1a 0%, #222222 100%);
  border: 1px solid #374151;
  border-radius: 20px;
  padding: 4rem;
  text-align: center;
}

.cta-card h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #ffffff;
}

.cta-card > p {
  font-size: 1.25rem;
  color: #d4d4d8;
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.7;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.cta-card .cta-primary {
  padding: 1.125rem 2rem;
  font-size: 1.125rem;
}

.cta-subtext {
  margin-top: 1.5rem;
  color: #a1a1aa;
  font-size: 0.9375rem;
}

/* ==================== RESPONSIVE ==================== */
@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .hero-stats {
    justify-content: center;
  }
  
  .hero-ctas {
    justify-content: center;
  }
  
  .hero-visual {
    order: -1;
  }
  
  .problems-grid,
  .solution-grid {
    grid-template-columns: 1fr;
  }
  
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .pricing-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .pricing-card.featured {
    transform: none;
    order: -1;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1.25rem;
  }
  
  .service-hero {
    padding: 6rem 0 3rem;
  }
  
  .hero-text h1 {
    font-size: 2.5rem;
  }
  
  .hero-intro {
    font-size: 1.125rem;
  }
  
  .hero-stats {
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }
  
  .problems-section h2,
  .solution-section h2,
  .features-section h2,
  .process-section h2,
  .pricing-section h2,
  .faq-section h2,
  .cta-card h2 {
    font-size: 2rem;
  }
  
  .solution-card {
    flex-direction: column;
    gap: 1rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .process-step {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .process-connector {
    margin: 0;
    width: 3px;
    height: 24px;
  }
  
  .cta-card {
    padding: 2.5rem 1.5rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .cta-primary,
  .cta-secondary {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .hero-text h1 {
    font-size: 2rem;
  }
  
  .stat strong {
    font-size: 1.5rem;
  }
  
  .hero-ctas {
    flex-direction: column;
  }
  
  .cta-primary,
  .cta-secondary {
    width: 100%;
    justify-content: center;
  }
  
  .visual-card {
    padding: 1.25rem;
  }
  
  .score-circle {
    width: 120px;
    height: 120px;
  }
  
  .score-value {
    font-size: 2rem;
  }
  
  .price .amount {
    font-size: 2rem;
  }
}

/* ==================== ACCESSIBILITY ==================== */
@media (prefers-reduced-motion: reduce) {
  .cta-primary,
  .cta-secondary,
  .pricing-cta {
    transition: none;
  }
}

.cta-primary:focus,
.cta-secondary:focus,
.pricing-cta:focus {
  outline: 3px solid #3b82f6;
  outline-offset: 2px;
}
</style>