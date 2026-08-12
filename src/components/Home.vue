<template>
  <div class="home-container">
    <!-- Hero Section -->
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
            Accepting New Clients
          </div>
          
          <h1 class="hero-headline">
            I help local businesses get<br>
            <span class="gradient-text">more customers from Google.</span>
          </h1>
          
          <p class="hero-subhead">
            Google Ads management, SEO, and websites that actually bring in leads. 
            Based in Stoke-on-Trent, working with businesses across Staffordshire.
          </p>

          <div class="hero-stats">
            <div class="stat-item">
              <strong>75%</strong>
              <span>Lower Cost Per Lead</span>
            </div>
            <div class="stat-item">
              <strong>618+</strong>
              <span>Conversions Generated</span>
            </div>
            <div class="stat-item">
              <strong>£60k+</strong>
              <span>Ad Spend Managed</span>
            </div>
          </div>

          <div class="hero-ctas">
            <a 
              href="https://calendly.com/n15labs/strategy-call" 
              target="_blank"
              rel="noopener noreferrer"
              class="cta-primary"
              aria-label="Book a free strategy call"
            >
              Book a Free Strategy Call
              <ArrowRightIcon class="cta-arrow" aria-hidden="true" />
            </a>
            <a 
              href="#results" 
              class="cta-secondary"
              aria-label="See proof of results"
            >
              See My Results
            </a>
          </div>
        </div>

        <div class="hero-visual">
          <div class="profile-container">
            <div class="profile-glow"></div>
            <img 
              src="@/assets/webp/me_comp.avif" 
              alt="Andre Simpson, Digital Marketing Specialist helping local businesses grow online" 
              class="profile-image" 
              loading="eager"
              decoding="async"
              width="400"
              height="400"
              fetchpriority="high"
            >
            <div class="profile-badge">
              <CheckIcon aria-hidden="true" />
              Google Ads & SEO Expert
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Results Section -->
    <section id="results" class="results-section">
      <div class="container">
        <span class="section-label">Proven Results</span>
        <h2>Real outcomes for <span class="highlight">real businesses</span></h2>
        <p class="section-intro">Not promises. Not projections. Actual results I've delivered for clients.</p>
        
        <div class="case-study-card">
          <div class="case-study-header">
            <div class="client-info">
              <div class="client-avatar">
                <BuildingIcon aria-hidden="true" />
              </div>
              <div>
                <h3>Regional Home Services Company</h3>
                <span class="client-type">Driveway & Paving • Multiple Locations • Staffordshire & Shropshire</span>
              </div>
            </div>
            <span class="case-study-badge">Ongoing Client</span>
          </div>
          
          <div class="case-study-content">
            <div class="challenge-section">
              <h4>The Situation</h4>
              <p>
                A regional driveway company with multiple locations was struggling with their previous digital agency. 
                Google Ads were burning through budget with a cost per lead of £111, their website wasn't converting visitors, 
                and they had no visibility on organic search. They needed someone who could actually fix the problems, 
                not just send monthly reports.
              </p>
            </div>
            
            <div class="solution-section">
              <h4>What I Did</h4>
              <ul class="solution-list">
                <li>
                  <strong>Google Ads Overhaul:</strong> Restructured campaigns, fixed conversion tracking that was missing 30+ leads per month, 
                  implemented proper negative keywords and audience targeting
                </li>
                <li>
                  <strong>Complete Website Redesign:</strong> Built conversion-focused pages for each service area (Shropshire complete, Staffordshire in progress)
                </li>
                <li>
                  <strong>Technical Fixes:</strong> Resolved a form submission issue when their shared IP got blacklisted — leads were being lost for weeks
                </li>
                <li>
                  <strong>Ongoing Support:</strong> Managing social media, designing price guides, and providing ongoing optimisation
                </li>
              </ul>
            </div>
          </div>
          
          <div class="results-metrics">
            <div class="metric">
              <div class="metric-value">
                <TrendingDownIcon class="metric-icon down" aria-hidden="true" />
                75%
              </div>
              <div class="metric-label">Reduction in Cost Per Lead</div>
              <div class="metric-detail">£111 → £28 per lead</div>
            </div>
            <div class="metric">
              <div class="metric-value">618+</div>
              <div class="metric-label">Conversions Generated</div>
              <div class="metric-detail">Tracked enquiries & calls</div>
            </div>
            <div class="metric">
              <div class="metric-value">
                <TrendingUpIcon class="metric-icon up" aria-hidden="true" />
                110%
              </div>
              <div class="metric-label">Organic Traffic Growth</div>
              <div class="metric-detail">Within 3 weeks of site launch</div>
            </div>
            <div class="metric">
              <div class="metric-value">4×</div>
              <div class="metric-label">Better Than Previous Agency</div>
              <div class="metric-detail">Same budget, 4x the leads</div>
            </div>
          </div>
          
          <div class="case-study-footer">
            <router-link to="/case-studies/scs-driveways" class="case-study-link">
              Read the full case study
              <ArrowRightIcon aria-hidden="true" />
            </router-link>
          </div>
        </div>

        <!-- Additional Social Proof -->
        <div class="additional-proof">
          <div class="proof-card">
            <div class="proof-icon">
              <BarChart3Icon aria-hidden="true" />
            </div>
            <h4>Own Site Performance</h4>
            <p>Improved my website's Lighthouse score from 43 to 79 and cut load times from 12.2 seconds to 3.6 seconds through technical optimisation.</p>
            <div class="proof-metric">84% Performance Improvement</div>
          </div>
          <div class="proof-card">
            <div class="proof-icon">
              <ScissorsIcon aria-hidden="true" />
            </div>
            <h4>Nobody's Hair</h4>
            <p>Local barber in Stoke-on-Trent. Built a fast, mobile-first website focused on driving bookings and foot traffic.</p>
            <div class="proof-metric">Local Stoke-on-Trent Client</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services-section">
      <div class="container">
        <span class="section-label">How I Help</span>
        <h2>Solutions for local businesses</h2>
        <p class="section-intro">I solve the problems that stop small businesses from growing online.</p>
        
        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon-wrapper">
              <PoundSterlingIcon aria-hidden="true" />
            </div>
            <h3>Your Google Ads are wasting money</h3>
            <p>
              Most businesses I audit are overspending on the wrong keywords, missing conversion tracking, 
              or targeting people who'll never buy. I fix the waste and get your ads bringing in actual customers.
            </p>
            <ul class="service-includes">
              <li><CheckIcon aria-hidden="true" /> Full account audit</li>
              <li><CheckIcon aria-hidden="true" /> Conversion tracking setup</li>
              <li><CheckIcon aria-hidden="true" /> Campaign restructuring</li>
              <li><CheckIcon aria-hidden="true" /> Monthly optimisation & reporting</li>
            </ul>
            <router-link to="/services/google-ads" class="service-link">
              Fix my Google Ads
              <ArrowRightIcon aria-hidden="true" />
            </router-link>
          </div>
          
          <div class="service-card">
            <div class="service-icon-wrapper">
              <SearchIcon aria-hidden="true" />
            </div>
            <h3>You're invisible on Google</h3>
            <p>
              When people search for what you do, they find your competitors instead. 
              I fix the technical problems holding you back and get you ranking where your customers are looking.
            </p>
            <ul class="service-includes">
              <li><CheckIcon aria-hidden="true" /> Technical SEO audit</li>
              <li><CheckIcon aria-hidden="true" /> Local SEO optimisation</li>
              <li><CheckIcon aria-hidden="true" /> Google Business Profile setup</li>
              <li><CheckIcon aria-hidden="true" /> Content strategy</li>
            </ul>
            <router-link to="/services/seo" class="service-link">
              Get me ranking
              <ArrowRightIcon aria-hidden="true" />
            </router-link>
          </div>
          
          <div class="service-card">
            <div class="service-icon-wrapper">
              <MonitorIcon aria-hidden="true" />
            </div>
            <h3>Your website doesn't bring in customers</h3>
            <p>
              A slow, confusing website is costing you business every day. 
              I build fast, conversion-focused sites that turn visitors into enquiries and phone calls.
            </p>
            <ul class="service-includes">
              <li><CheckIcon aria-hidden="true" /> Conversion-focused design</li>
              <li><CheckIcon aria-hidden="true" /> Mobile-first development</li>
              <li><CheckIcon aria-hidden="true" /> Speed optimisation</li>
              <li><CheckIcon aria-hidden="true" /> Analytics setup</li>
            </ul>
            <router-link to="/launch-sites" class="service-link">
              Get a website that works
              <ArrowRightIcon aria-hidden="true" />
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- How I Work Section -->
    <section class="process-section">
      <div class="container">
        <span class="section-label">Simple Process</span>
        <h2>How we'll work together</h2>
        <p class="section-intro">No complicated contracts or confusing proposals. Just a clear path to results.</p>
        
        <div class="process-steps">
          <div class="process-step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3>Free Strategy Call</h3>
              <p>We'll talk about your business, what's working, what isn't, and whether I can actually help. No sales pitch, just honest advice.</p>
            </div>
          </div>
          
          <div class="process-connector"></div>
          
          <div class="process-step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3>Clear Plan & Quote</h3>
              <p>If we're a good fit, I'll send you a straightforward proposal with fixed pricing. No hidden fees, no surprises.</p>
            </div>
          </div>
          
          <div class="process-connector"></div>
          
          <div class="process-step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3>Build & Launch</h3>
              <p>I get to work. Regular updates so you always know what's happening. Launch when everything's right, not rushed.</p>
            </div>
          </div>
          
          <div class="process-connector"></div>
          
          <div class="process-step">
            <div class="step-number">4</div>
            <div class="step-content">
              <h3>Ongoing Growth</h3>
              <p>Digital marketing isn't a one-time thing. I'll keep optimising, reporting, and finding new opportunities to grow your business.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="pricing-section">
      <div class="container">
        <span class="section-label">Transparent Pricing</span>
        <h2>Fixed prices, no surprises</h2>
        <p class="section-intro">You'll know exactly what you're paying from day one. No hourly rates or scope creep.</p>
        
        <div class="pricing-grid">
          <div class="pricing-card">
            <div class="pricing-header">
              <h3>Launch Site</h3>
              <div class="price">£600</div>
              <div class="price-term">One-off payment</div>
            </div>
            <div class="pricing-body">
              <p class="pricing-description">A professional 3-page website built to convert visitors into customers. Delivered in 14 days to 1 month.</p>
              <ul class="pricing-features">
                <li><CheckIcon aria-hidden="true" /> 3 professional pages</li>
                <li><CheckIcon aria-hidden="true" /> Mobile responsive design</li>
                <li><CheckIcon aria-hidden="true" /> Basic SEO setup</li>
                <li><CheckIcon aria-hidden="true" /> Google Business setup</li>
                <li><CheckIcon aria-hidden="true" /> Analytics installed</li>
                <li><CheckIcon aria-hidden="true" /> You own everything</li>
              </ul>
              <router-link to="/launch-sites" class="pricing-cta">
                Learn More
              </router-link>
            </div>
          </div>
          
          <div class="pricing-card featured">
            <div class="featured-badge">Most Popular</div>
            <div class="pricing-header">
              <h3>SEO + Ads</h3>
              <div class="price">£400</div>
              <div class="price-term">per month</div>
            </div>
            <div class="pricing-body">
              <p class="pricing-description">Ongoing management of your Google Ads and local SEO to bring in a steady stream of customers.</p>
              <ul class="pricing-features">
                <li><CheckIcon aria-hidden="true" /> Google Ads management</li>
                <li><CheckIcon aria-hidden="true" /> Local SEO optimisation</li>
                <li><CheckIcon aria-hidden="true" /> Conversion tracking</li>
                <li><CheckIcon aria-hidden="true" /> Keyword research</li>
                <li><CheckIcon aria-hidden="true" /> Competitor analysis</li>
                <li><CheckIcon aria-hidden="true" /> Monthly reporting</li>
              </ul>
              <router-link to="/contact" class="pricing-cta primary">
                Get Started
              </router-link>
            </div>
          </div>
          
          <div class="pricing-card">
            <div class="pricing-header">
              <h3>Hosting & Care</h3>
              <div class="price">£20</div>
              <div class="price-term">per month</div>
            </div>
            <div class="pricing-body">
              <p class="pricing-description">Keep your website fast, secure, and up-to-date without thinking about it.</p>
              <ul class="pricing-features">
                <li><CheckIcon aria-hidden="true" /> Fast, secure hosting</li>
                <li><CheckIcon aria-hidden="true" /> Weekly backups</li>
                <li><CheckIcon aria-hidden="true" /> Security updates</li>
                <li><CheckIcon aria-hidden="true" /> 2 hours of edits/month</li>
                <li><CheckIcon aria-hidden="true" /> 99.9% uptime guarantee</li>
                <li><CheckIcon aria-hidden="true" /> Priority support</li>
              </ul>
              <router-link to="/contact" class="pricing-cta">
                Add to Your Site
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about-section">
      <div class="container">
        <div class="about-content">
          <div class="about-image">
            <img 
              src="@/assets/webp/grad.webp" 
              alt="Andre Simpson - BSc Computer Science Graduate" 
              loading="lazy"
              decoding="async"
              width="500"
              height="500"
            >
          </div>
          <div class="about-text">
            <span class="section-label">About Me</span>
            <h2>Marketing that's built on <span class="highlight">technical expertise</span></h2>
            <p>
              I'm Andre Simpson, a freelance digital marketer and developer based in Stoke-on-Trent. 
              I started N15 Labs because I saw too many local businesses getting burned by agencies 
              that couldn't actually fix their problems.
            </p>
            <p>
              With a Computer Science degree and experience with Google Ads, Amazon Ads, and full-stack development, 
              I can do what most marketers can't: actually go into the code and fix what's broken. 
              When your conversion tracking isn't working or your site is slow, I don't just report the problem — I solve it.
            </p>
            
            <div class="trust-signals">
              <div class="trust-item">
                <GraduationCapIcon aria-hidden="true" />
                <span>BSc Computer Science (2:1), Staffordshire University</span>
              </div>
              <div class="trust-item">
                <BriefcaseIcon aria-hidden="true" />
                <span>Previously worked for Staffordshire University</span>
              </div>
              <div class="trust-item">
                <MapPinIcon aria-hidden="true" />
                <span>Based in Stoke-on-Trent, serving Staffordshire</span>
              </div>
              <div class="trust-item">
                <BadgeCheckIcon aria-hidden="true" />
                <span>Google Ads & Amazon Ads/A+ Content experience</span>
              </div>
            </div>
            
            <router-link to="/about" class="about-link">
              Learn more about my background
              <ArrowRightIcon aria-hidden="true" />
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA Section -->
    <section class="final-cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to stop guessing and start growing?</h2>
          <p>
            Book a free strategy call. We'll talk about your business, identify what's holding you back, 
            and figure out if I'm the right person to help. No pressure, no hard sell.
          </p>
          
          <div class="cta-form">
            <form @submit.prevent="submitEnquiry" class="contact-form">
              <div class="form-row">
                <div class="form-group">
                  <label for="name">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    v-model="form.name" 
                    required
                    placeholder="John Smith"
                    autocomplete="name"
                  >
                </div>
                <div class="form-group">
                  <label for="business">Business Name</label>
                  <input 
                    type="text" 
                    id="business" 
                    v-model="form.business" 
                    required
                    placeholder="Smith's Plumbing"
                    autocomplete="organization"
                  >
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label for="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    v-model="form.phone" 
                    required
                    placeholder="07123 456789"
                    autocomplete="tel"
                  >
                </div>
                <div class="form-group">
                  <label for="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="form.email" 
                    required
                    placeholder="john@smithsplumbing.co.uk"
                    autocomplete="email"
                  >
                </div>
              </div>
              <button type="submit" class="submit-btn" :disabled="isSubmitting">
                <span v-if="!isSubmitting">
                  Book Your Free Strategy Call
                  <ArrowRightIcon class="cta-arrow" aria-hidden="true" />
                </span>
                <span v-else>Sending...</span>
              </button>
              <p v-if="submitSuccess" class="success-message">
                Thanks! I'll be in touch within 24 hours to arrange your call.
              </p>
              <p v-if="submitError" class="error-message">
                Something went wrong. Please try again or call me directly.
              </p>
            </form>
          </div>
          
          <div class="cta-alternatives">
            <p>Prefer to talk now?</p>
            <a href="tel:+447931206686" class="phone-link">
              <PhoneIcon aria-hidden="true" />
              07931 206686
            </a>
          </div>
          
          <p class="cta-location">Proudly serving businesses in Stoke-on-Trent and across Staffordshire</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useHead } from '@vueuse/head'
import {
  ArrowRightIcon,
  CheckIcon,
  BuildingIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  BarChart3Icon,
  ScissorsIcon,
  PoundSterlingIcon,
  SearchIcon,
  MonitorIcon,
  GraduationCapIcon,
  BriefcaseIcon,
  MapPinIcon,
  BadgeCheckIcon,
  PhoneIcon
} from 'lucide-vue-next'

export default {
  name: 'HomePage',
  
  components: {
    ArrowRightIcon,
    CheckIcon,
    BuildingIcon,
    TrendingDownIcon,
    TrendingUpIcon,
    BarChart3Icon,
    ScissorsIcon,
    PoundSterlingIcon,
    SearchIcon,
    MonitorIcon,
    GraduationCapIcon,
    BriefcaseIcon,
    MapPinIcon,
    BadgeCheckIcon,
    PhoneIcon
  },
  
  setup() {
    useHead({
      title: 'Google Ads & SEO for Local Businesses | N15 Labs Stoke-on-Trent',
      meta: [
        {
          name: 'description',
          content: 'I help Stoke-on-Trent businesses get more customers online. Google Ads management, SEO, and conversion-focused websites from £600. Free strategy call available.'
        },
        {
          name: 'keywords',
          content: 'Google Ads Stoke-on-Trent, SEO Staffordshire, web design Stoke-on-Trent, digital marketing Staffordshire, PPC management, local SEO'
        },
        {
          property: 'og:title',
          content: 'Google Ads & SEO for Local Businesses | N15 Labs'
        },
        {
          property: 'og:description',
          content: 'I help Stoke-on-Trent businesses get more customers online. Google Ads, SEO, and websites that convert.'
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:url',
          content: 'https://n15labs.co.uk'
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://n15labs.co.uk'
        }
      ]
    })
  },
  
  data() {
    return {
      form: {
        name: '',
        business: '',
        phone: '',
        email: ''
      },
      isSubmitting: false,
      submitSuccess: false,
      submitError: false
    }
  },
  
  methods: {
    getParticleStyle(n) {
      const sizes = [60, 80, 100, 70, 90, 50]
      const positions = [
        { top: '10%', left: '5%' },
        { top: '20%', right: '10%' },
        { bottom: '30%', left: '15%' },
        { top: '60%', right: '5%' },
        { bottom: '10%', right: '20%' },
        { top: '40%', left: '2%' }
      ]
      const delays = [0, 2, 4, 1, 3, 5]
      
      return {
        width: `${sizes[n - 1]}px`,
        height: `${sizes[n - 1]}px`,
        ...positions[n - 1],
        animationDelay: `${delays[n - 1]}s`
      }
    },
    
    async submitEnquiry() {
      this.isSubmitting = true
      this.submitSuccess = false
      this.submitError = false
      
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.form)
        })
        
        if (response.ok) {
          this.submitSuccess = true
          this.form = { name: '', business: '', phone: '', email: '' }
        } else {
          this.submitError = true
        }
      } catch (error) {
        console.error('Form submission error:', error)
        this.submitError = true
      } finally {
        this.isSubmitting = false
      }
    }
  }
}
</script>

<style scoped>
/* ==================== BASE STYLES ==================== */
.home-container {
  width: 100%;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  color: #f4f4f5;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Section Labels */
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

.section-intro {
  font-size: 1.25rem;
  color: #d4d4d8;
  max-width: 640px;
  margin: 0 auto 3.5rem;
  line-height: 1.7;
}

.highlight {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ==================== HERO SECTION ==================== */
.hero-section {
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 5rem 2rem;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.floating-particles {
  position: absolute;
  inset: 0;
}

.particle {
  position: absolute;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  animation: float 20s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.3; }
  33% { transform: translate(30px, -30px) rotate(120deg); opacity: 0.6; }
  66% { transform: translate(-20px, 20px) rotate(240deg); opacity: 0.3; }
}

.hero-content {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
  max-width: 1200px;
  width: 100%;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.625rem 1.25rem;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 50px;
  color: #34d399;
  font-size: 0.9375rem;
  font-weight: 600;
  margin-bottom: 1.75rem;
}

.status-dot {
  width: 10px;
  height: 10px;
  background: #10b981;
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.2); }
}

.hero-headline {
  font-size: 3.75rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.75rem;
  color: #ffffff;
}

.gradient-text {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subhead {
  font-size: 1.375rem;
  color: #d4d4d8;
  line-height: 1.7;
  margin-bottom: 2.5rem;
}

.hero-stats {
  display: flex;
  gap: 2.5rem;
  margin-bottom: 2.5rem;
  padding: 1.75rem 0;
  border-top: 1px solid #374151;
  border-bottom: 1px solid #374151;
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.stat-item strong {
  font-size: 2rem;
  font-weight: 700;
  color: #3b82f6;
}

.stat-item span {
  font-size: 1rem;
  color: #d4d4d8;
}

.hero-ctas {
  display: flex;
  gap: 1.25rem;
  flex-wrap: wrap;
}

.cta-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  padding: 1.125rem 2rem;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.125rem;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.cta-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(59, 130, 246, 0.35);
}

.cta-primary .cta-arrow {
  width: 22px;
  height: 22px;
}

.cta-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  padding: 1.125rem 2rem;
  background: transparent;
  color: #f4f4f5;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.125rem;
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

.profile-container {
  position: relative;
}

.profile-glow {
  position: absolute;
  inset: -25px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  animation: glow 4s ease-in-out infinite;
}

@keyframes glow {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
}

.profile-image {
  width: 420px;
  height: 420px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #374151;
  position: relative;
  z-index: 1;
}

.profile-badge {
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.875rem 1.5rem;
  background: linear-gradient(135deg, #1a1a1a, #2a2a2a);
  border: 1px solid #374151;
  border-radius: 50px;
  color: #10b981;
  font-size: 1rem;
  font-weight: 600;
  white-space: nowrap;
  z-index: 2;
}

.profile-badge svg {
  width: 20px;
  height: 20px;
}

/* ==================== RESULTS SECTION ==================== */
.results-section {
  padding: 7rem 0;
  text-align: center;
  background: linear-gradient(180deg, #0a0a0a 0%, #111111 100%);
}

.results-section h2 {
  font-size: 2.75rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
  color: #ffffff;
}

/* Case Study Card */
.case-study-card {
  background: linear-gradient(135deg, #1a1a1a 0%, #222222 100%);
  border: 1px solid #374151;
  border-radius: 20px;
  padding: 3rem;
  text-align: left;
  margin-top: 3.5rem;
}

.case-study-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
  gap: 1.25rem;
}

.client-info {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.client-avatar {
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.client-avatar svg {
  width: 32px;
  height: 32px;
  color: white;
}

.client-info h3 {
  font-size: 1.625rem;
  font-weight: 700;
  margin-bottom: 0.375rem;
  color: #ffffff;
}

.client-type {
  font-size: 1rem;
  color: #a1a1aa;
}

.case-study-badge {
  padding: 0.625rem 1.25rem;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 50px;
  color: #34d399;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.case-study-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  margin-bottom: 2.5rem;
}

.challenge-section h4,
.solution-section h4 {
  font-size: 1.0625rem;
  font-weight: 600;
  color: #60a5fa;
  margin-bottom: 1.25rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.challenge-section p {
  color: #e4e4e7;
  line-height: 1.75;
  font-size: 1.0625rem;
}

.solution-list {
  list-style: none;
  padding: 0;
}

.solution-list li {
  position: relative;
  padding-left: 1.75rem;
  margin-bottom: 1.25rem;
  color: #e4e4e7;
  line-height: 1.65;
  font-size: 1.0625rem;
}

.solution-list li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: #10b981;
  font-weight: bold;
}

.solution-list li strong {
  color: #ffffff;
}

/* Results Metrics */
.results-metrics {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 2.5rem 0;
  border-top: 1px solid #374151;
  border-bottom: 1px solid #374151;
  margin-bottom: 2rem;
}

.metric {
  text-align: center;
}

.metric-value {
  font-size: 2.75rem;
  font-weight: 800;
  color: #3b82f6;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
}

.metric-icon {
  width: 32px;
  height: 32px;
}

.metric-icon.down,
.metric-icon.up {
  color: #10b981;
}

.metric-label {
  font-size: 1.0625rem;
  font-weight: 600;
  color: #ffffff;
  margin-top: 0.625rem;
}

.metric-detail {
  font-size: 0.9375rem;
  color: #a1a1aa;
  margin-top: 0.375rem;
}

.case-study-footer {
  text-align: center;
}

.case-study-link {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  color: #3b82f6;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.125rem;
  transition: all 0.3s ease;
}

.case-study-link:hover {
  gap: 1rem;
}

.case-study-link svg {
  width: 22px;
  height: 22px;
}

/* Additional Proof */
.additional-proof {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3.5rem;
}

.proof-card {
  background: linear-gradient(135deg, #1a1a1a 0%, #222222 100%);
  border: 1px solid #374151;
  border-radius: 16px;
  padding: 2.5rem;
  text-align: left;
}

.proof-icon {
  width: 56px;
  height: 56px;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: #3b82f6;
}

.proof-icon svg {
  width: 28px;
  height: 28px;
}

.proof-card h4 {
  font-size: 1.375rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #ffffff;
}

.proof-card p {
  color: #d4d4d8;
  line-height: 1.7;
  margin-bottom: 1.25rem;
  font-size: 1.0625rem;
}

.proof-metric {
  display: inline-block;
  padding: 0.625rem 1.25rem;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 50px;
  color: #60a5fa;
  font-size: 0.9375rem;
  font-weight: 600;
}

/* ==================== SERVICES SECTION ==================== */
.services-section {
  padding: 7rem 0;
  text-align: center;
}

.services-section h2 {
  font-size: 2.75rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
  color: #ffffff;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3.5rem;
}

.service-card {
  background: linear-gradient(135deg, #1a1a1a 0%, #222222 100%);
  border: 1px solid #374151;
  border-radius: 20px;
  padding: 2.5rem;
  text-align: left;
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-6px);
  border-color: #3b82f6;
  box-shadow: 0 20px 40px rgba(59, 130, 246, 0.1);
}

.service-icon-wrapper {
  width: 64px;
  height: 64px;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.75rem;
  color: #3b82f6;
}

.service-icon-wrapper svg {
  width: 32px;
  height: 32px;
}

.service-card h3 {
  font-size: 1.375rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
  color: #ffffff;
  line-height: 1.3;
}

.service-card > p {
  color: #d4d4d8;
  line-height: 1.7;
  margin-bottom: 1.75rem;
  font-size: 1.0625rem;
}

.service-includes {
  list-style: none;
  padding: 0;
  margin-bottom: 1.75rem;
}

.service-includes li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  color: #e4e4e7;
  font-size: 1rem;
}

.service-includes li svg {
  width: 20px;
  height: 20px;
  color: #10b981;
  flex-shrink: 0;
}

.service-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #3b82f6;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.0625rem;
  transition: all 0.3s ease;
}

.service-link svg {
  width: 20px;
  height: 20px;
}

.service-link:hover {
  gap: 0.875rem;
  color: #60a5fa;
}

/* ==================== PROCESS SECTION ==================== */
.process-section {
  padding: 7rem 0;
  text-align: center;
  background: linear-gradient(180deg, #0a0a0a 0%, #111111 100%);
}

.process-section h2 {
  font-size: 2.75rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
  color: #ffffff;
}

.process-steps {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  margin-top: 3.5rem;
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
}

.process-step {
  display: flex;
  gap: 1.75rem;
  text-align: left;
  width: 100%;
}

.step-number {
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.375rem;
  font-weight: 700;
  color: white;
  flex-shrink: 0;
}

.step-content h3 {
  font-size: 1.375rem;
  font-weight: 600;
  margin-bottom: 0.625rem;
  color: #ffffff;
}

.step-content p {
  color: #d4d4d8;
  line-height: 1.7;
  font-size: 1.0625rem;
}

.process-connector {
  width: 3px;
  height: 48px;
  background: linear-gradient(180deg, #3b82f6 0%, #8b5cf6 100%);
  margin-left: 26px;
}

/* ==================== PRICING SECTION ==================== */
.pricing-section {
  padding: 7rem 0;
  text-align: center;
}

.pricing-section h2 {
  font-size: 2.75rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
  color: #ffffff;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3.5rem;
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
  transform: scale(1.05);
}

.featured-badge {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  color: white;
  padding: 0.625rem;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.pricing-header {
  padding: 2.5rem 2rem 1.75rem;
  text-align: center;
}

.pricing-card.featured .pricing-header {
  padding-top: 3.5rem;
}

.pricing-header h3 {
  font-size: 1.375rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
  color: #ffffff;
}

.price {
  font-size: 3.25rem;
  font-weight: 800;
  color: #3b82f6;
}

.price-term {
  font-size: 1rem;
  color: #a1a1aa;
  margin-top: 0.25rem;
}

.pricing-body {
  padding: 0 2rem 2.5rem;
}

.pricing-description {
  color: #d4d4d8;
  line-height: 1.7;
  margin-bottom: 1.75rem;
  font-size: 1rem;
}

.pricing-features {
  list-style: none;
  padding: 0;
  margin-bottom: 1.75rem;
  text-align: left;
}

.pricing-features li {
  display: flex;
  align-items: center;
  gap: 0.875rem;
  margin-bottom: 0.875rem;
  color: #e4e4e7;
  font-size: 1rem;
}

.pricing-features li svg {
  width: 20px;
  height: 20px;
  color: #10b981;
  flex-shrink: 0;
}

.pricing-cta {
  display: block;
  width: 100%;
  padding: 1.125rem;
  background: transparent;
  border: 2px solid #52525b;
  color: #f4f4f5;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.0625rem;
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
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(59, 130, 246, 0.35);
}

/* ==================== ABOUT SECTION ==================== */
.about-section {
  padding: 7rem 0;
  background: linear-gradient(180deg, #0a0a0a 0%, #111111 100%);
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 5rem;
  align-items: center;
}

.about-image img {
  width: 100%;
  max-width: 420px;
  border-radius: 20px;
  border: 2px solid #374151;
}

.about-text h2 {
  font-size: 2.75rem;
  font-weight: 700;
  margin-bottom: 1.75rem;
  color: #ffffff;
}

.about-text > p {
  color: #e4e4e7;
  line-height: 1.8;
  margin-bottom: 1.25rem;
  font-size: 1.125rem;
}

.trust-signals {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2.5rem 0;
}

.trust-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #d4d4d8;
  font-size: 1.0625rem;
}

.trust-item svg {
  width: 24px;
  height: 24px;
  color: #3b82f6;
  flex-shrink: 0;
}

.about-link {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  color: #3b82f6;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.125rem;
  transition: all 0.3s ease;
}

.about-link svg {
  width: 22px;
  height: 22px;
}

.about-link:hover {
  gap: 1rem;
  color: #60a5fa;
}

/* ==================== FINAL CTA SECTION ==================== */
.final-cta-section {
  padding: 7rem 0;
  text-align: center;
}

.cta-content {
  max-width: 720px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: 2.75rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
  color: #ffffff;
}

.cta-content > p {
  color: #d4d4d8;
  font-size: 1.25rem;
  line-height: 1.7;
  margin-bottom: 2.5rem;
}

/* Contact Form */
.contact-form {
  background: linear-gradient(135deg, #1a1a1a 0%, #222222 100%);
  border: 1px solid #374151;
  border-radius: 20px;
  padding: 2.5rem;
  text-align: left;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  margin-bottom: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.625rem;
  color: #e4e4e7;
}

.form-group input {
  padding: 1rem 1.25rem;
  background: #0a0a0a;
  border: 1px solid #374151;
  border-radius: 10px;
  color: #f4f4f5;
  font-size: 1.0625rem;
  transition: all 0.3s ease;
}

.form-group input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-group input::placeholder {
  color: #71717a;
}

.submit-btn {
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  padding: 1.125rem 2rem;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
  border: none;
  font-weight: 600;
  font-size: 1.125rem;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 0.75rem;
}

.submit-btn .cta-arrow {
  width: 22px;
  height: 22px;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(59, 130, 246, 0.35);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.success-message {
  color: #10b981;
  font-weight: 600;
  margin-top: 1.25rem;
  text-align: center;
  font-size: 1.0625rem;
}

.error-message {
  color: #ef4444;
  font-weight: 600;
  margin-top: 1.25rem;
  text-align: center;
  font-size: 1.0625rem;
}

/* CTA Alternatives */
.cta-alternatives {
  margin-top: 2.5rem;
}

.cta-alternatives p {
  color: #a1a1aa;
  font-size: 1rem;
  margin-bottom: 0.75rem;
}

.phone-link {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  color: #3b82f6;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.375rem;
}

.phone-link svg {
  width: 26px;
  height: 26px;
}

.phone-link:hover {
  color: #60a5fa;
}

.cta-location {
  margin-top: 2.5rem;
  color: #a1a1aa;
  font-size: 1rem;
}

/* ==================== RESPONSIVE DESIGN ==================== */
@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3.5rem;
  }
  
  .hero-stats {
    justify-content: center;
  }
  
  .hero-ctas {
    justify-content: center;
  }
  
  .profile-image {
    width: 320px;
    height: 320px;
  }
  
  .case-study-content {
    grid-template-columns: 1fr;
  }
  
  .results-metrics {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .services-grid,
  .pricing-grid {
    grid-template-columns: 1fr;
    max-width: 520px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .pricing-card.featured {
    transform: none;
    order: -1;
  }
  
  .about-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .about-image img {
    margin: 0 auto;
  }
  
  .trust-signals {
    align-items: center;
  }
  
  .additional-proof {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1.25rem;
  }
  
  .hero-section {
    min-height: auto;
    padding: 3.5rem 1.25rem;
  }
  
  .hero-headline {
    font-size: 2.75rem;
  }
  
  .hero-subhead {
    font-size: 1.1875rem;
  }
  
  .hero-stats {
    flex-direction: column;
    gap: 1.75rem;
    text-align: center;
  }
  
  .hero-ctas {
    flex-direction: column;
    align-items: center;
  }
  
  .cta-primary,
  .cta-secondary {
    width: 100%;
    justify-content: center;
  }
  
  .profile-image {
    width: 280px;
    height: 280px;
  }
  
  .results-section h2,
  .services-section h2,
  .process-section h2,
  .pricing-section h2,
  .about-text h2,
  .cta-content h2 {
    font-size: 2.25rem;
  }
  
  .section-intro {
    font-size: 1.125rem;
  }
  
  .results-metrics {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .metric-value {
    font-size: 2.25rem;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .case-study-card {
    padding: 2rem;
  }
  
  .proof-card {
    padding: 2rem;
  }
}

@media (max-width: 480px) {
  .hero-headline {
    font-size: 2.25rem;
  }
  
  .profile-image {
    width: 240px;
    height: 240px;
  }
  
  .profile-badge {
    font-size: 0.875rem;
    padding: 0.625rem 1.25rem;
  }
  
  .results-section h2,
  .services-section h2,
  .process-section h2,
  .pricing-section h2,
  .about-text h2,
  .cta-content h2 {
    font-size: 1.875rem;
  }
  
  .price {
    font-size: 2.75rem;
  }
  
  .stat-item strong {
    font-size: 1.75rem;
  }
  
  .contact-form {
    padding: 1.75rem;
  }
}

/* ==================== ACCESSIBILITY ==================== */
@media (prefers-reduced-motion: reduce) {
  .particle,
  .profile-glow,
  .status-dot {
    animation: none;
  }
  
  .cta-primary:hover,
  .cta-secondary:hover,
  .pricing-cta:hover,
  .service-card:hover,
  .submit-btn:hover {
    transform: none;
  }
}

/* Focus states */
.cta-primary:focus,
.cta-secondary:focus,
.pricing-cta:focus,
.service-link:focus,
.case-study-link:focus,
.about-link:focus,
.phone-link:focus,
.submit-btn:focus {
  outline: 3px solid #3b82f6;
  outline-offset: 2px;
}

.form-group input:focus {
  outline: none;
}

/* ==================== PRINT ==================== */
@media print {
  .hero-background,
  .floating-particles,
  .profile-glow {
    display: none;
  }
  
  .home-container {
    background: white;
    color: black;
  }
}
</style>