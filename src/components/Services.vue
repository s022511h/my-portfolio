<template>
  <div class="services-page">
    <!-- Hero Section -->
    <section class="services-hero">
      <div class="container">
        <span class="section-label">Services</span>
        <h1>I help local businesses <span class="gradient-text">get more customers</span> from Google.</h1>
        <p class="hero-intro">
          Whether it's paid ads for immediate results, SEO for long-term growth, or a 
          website that actually converts — I've got you covered. No jargon. Just results.
        </p>
        <div class="hero-actions">
          <a 
            href="https://calendly.com/n15labs/strategy-call" 
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary"
          >
            Book a Free Strategy Call
            <ArrowRightIcon aria-hidden="true" />
          </a>
          <router-link to="/pricing" class="btn-secondary">
            View Pricing
          </router-link>
        </div>
      </div>
    </section>

    <!-- Main Services Section -->
    <section class="main-services">
      <div class="container">
        <!-- Google Ads -->
        <div class="service-block">
          <div class="service-content">
            <div class="service-icon">
              <TargetIcon aria-hidden="true" />
            </div>
            <div class="service-header">
              <span class="service-problem">Your Google Ads are wasting money</span>
              <h2>Google Ads Management</h2>
            </div>
            <p class="service-description">
              Most businesses throw money at Google Ads without knowing what's working. 
              I audit your campaigns, cut the waste, and focus your budget on keywords 
              that actually bring in customers.
            </p>
            <div class="service-results">
              <div class="result-item">
                <TrendingDownIcon aria-hidden="true" />
                <span>75% lower cost per lead</span>
              </div>
              <div class="result-item">
                <UsersIcon aria-hidden="true" />
                <span>618+ conversions generated</span>
              </div>
              <div class="result-item">
                <PoundSterlingIcon aria-hidden="true" />
                <span>£60k+ ad spend managed</span>
              </div>
            </div>
            <div class="service-includes">
              <h4>What's included:</h4>
              <ul>
                <li><CheckIcon aria-hidden="true" /> Campaign setup &amp; ongoing management</li>
                <li><CheckIcon aria-hidden="true" /> Keyword research &amp; targeting</li>
                <li><CheckIcon aria-hidden="true" /> Ad copywriting that converts</li>
                <li><CheckIcon aria-hidden="true" /> Conversion tracking setup</li>
                <li><CheckIcon aria-hidden="true" /> Monthly performance reports</li>
              </ul>
            </div>
            <div class="service-footer">
              <div class="service-price">
                <span class="price-amount">£750</span>
                <span class="price-period">/month</span>
              </div>
              <router-link to="/services/google-ads" class="service-cta">
                Learn More
                <ArrowRightIcon aria-hidden="true" />
              </router-link>
            </div>
          </div>
        </div>

        <!-- SEO -->
        <div class="service-block alt">
          <div class="service-content">
            <div class="service-icon">
              <SearchIcon aria-hidden="true" />
            </div>
            <div class="service-header">
              <span class="service-problem">You're invisible on Google</span>
              <h2>SEO Services</h2>
            </div>
            <p class="service-description">
              If your competitors show up when people search for your services and you don't, 
              you're losing customers every day. I fix the technical issues holding you back 
              and build your organic presence over time.
            </p>
            <div class="service-results">
              <div class="result-item">
                <TrendingUpIcon aria-hidden="true" />
                <span>+110% organic clicks</span>
              </div>
              <div class="result-item">
                <BarChart3Icon aria-hidden="true" />
                <span>+194% month-on-month growth</span>
              </div>
              <div class="result-item">
                <MapPinIcon aria-hidden="true" />
                <span>Local SEO specialist</span>
              </div>
            </div>
            <div class="service-includes">
              <h4>What's included:</h4>
              <ul>
                <li><CheckIcon aria-hidden="true" /> Technical SEO audit &amp; fixes</li>
                <li><CheckIcon aria-hidden="true" /> On-page optimisation</li>
                <li><CheckIcon aria-hidden="true" /> Local SEO &amp; Google Business</li>
                <li><CheckIcon aria-hidden="true" /> Competitor analysis</li>
                <li><CheckIcon aria-hidden="true" /> Monthly ranking reports</li>
              </ul>
            </div>
            <div class="service-footer">
              <div class="service-price">
                <span class="price-amount">£750</span>
                <span class="price-period">/month</span>
              </div>
              <router-link to="/services/seo" class="service-cta">
                Learn More
                <ArrowRightIcon aria-hidden="true" />
              </router-link>
            </div>
          </div>
        </div>

        <!-- Web Design -->
        <div class="service-block">
          <div class="service-content">
            <div class="service-icon">
              <GlobeIcon aria-hidden="true" />
            </div>
            <div class="service-header">
              <span class="service-problem">Your website doesn't bring in customers</span>
              <h2>Web Design</h2>
            </div>
            <p class="service-description">
              A slow, outdated website costs you customers. I build fast, mobile-friendly 
              websites designed to convert visitors into leads. No templates. No monthly 
              lock-ins. You own everything.
            </p>
            <div class="service-results">
              <div class="result-item">
                <ZapIcon aria-hidden="true" />
                <span>Sub-2.5 second load times</span>
              </div>
              <div class="result-item">
                <SmartphoneIcon aria-hidden="true" />
                <span>Mobile-first design</span>
              </div>
              <div class="result-item">
                <ShieldCheckIcon aria-hidden="true" />
                <span>Full ownership included</span>
              </div>
            </div>
            <div class="service-includes">
              <h4>What's included:</h4>
              <ul>
                <li><CheckIcon aria-hidden="true" /> 3 professional pages</li>
                <li><CheckIcon aria-hidden="true" /> Mobile responsive design</li>
                <li><CheckIcon aria-hidden="true" /> Basic SEO setup</li>
                <li><CheckIcon aria-hidden="true" /> Google Analytics &amp; Business setup</li>
                <li><CheckIcon aria-hidden="true" /> 2 rounds of revisions</li>
              </ul>
            </div>
            <div class="service-footer">
              <div class="service-price">
                <span class="price-amount">£600</span>
                <span class="price-period">one-off</span>
              </div>
              <router-link to="/services/web-design" class="service-cta">
                Learn More
                <ArrowRightIcon aria-hidden="true" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bundle Section -->
    <section class="bundle-section">
      <div class="container">
        <div class="bundle-card">
          <div class="bundle-badge">Best Value</div>
          <div class="bundle-header">
            <div class="bundle-icon">
              <SparklesIcon aria-hidden="true" />
            </div>
            <h2>Google Ads + SEO Bundle</h2>
            <p>
              Get the best of both worlds — paid ads for immediate traffic and SEO for 
              long-term organic growth. This combined approach delivers the best ROI 
              for most local businesses.
            </p>
          </div>
          <div class="bundle-features">
            <div class="feature-col">
              <h4>From Google Ads:</h4>
              <ul>
                <li><CheckIcon aria-hidden="true" /> Full campaign management</li>
                <li><CheckIcon aria-hidden="true" /> Keyword targeting</li>
                <li><CheckIcon aria-hidden="true" /> Conversion tracking</li>
              </ul>
            </div>
            <div class="feature-col">
              <h4>From SEO:</h4>
              <ul>
                <li><CheckIcon aria-hidden="true" /> Technical optimisation</li>
                <li><CheckIcon aria-hidden="true" /> Local SEO</li>
                <li><CheckIcon aria-hidden="true" /> Monthly reports</li>
              </ul>
            </div>
            <div class="feature-col">
              <h4>Bundle extras:</h4>
              <ul>
                <li><CheckIcon aria-hidden="true" /> Integrated strategy</li>
                <li><CheckIcon aria-hidden="true" /> Priority support</li>
                <li><CheckIcon aria-hidden="true" /> Combined reporting</li>
              </ul>
            </div>
          </div>
          <div class="bundle-pricing">
            <div class="bundle-price">
              <span class="original">£1,500/month</span>
              <span class="amount">£1,200</span>
              <span class="period">/month</span>
            </div>
            <div class="bundle-savings">
              <SparklesIcon aria-hidden="true" />
              <span>Save £300 every month</span>
            </div>
            <a 
              href="https://calendly.com/n15labs/strategy-call" 
              target="_blank"
              rel="noopener noreferrer"
              class="bundle-cta"
            >
              Book a Strategy Call
              <ArrowRightIcon aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Amazon Section -->
    <section class="amazon-section">
      <div class="container">
        <div class="amazon-card">
          <div class="amazon-content">
            <div class="amazon-icon">
              <ShoppingCartIcon aria-hidden="true" />
            </div>
            <h3>Sell on Amazon?</h3>
            <p>
              I also help Amazon sellers with PPC campaigns and A+ Content creation. 
              If you're looking to improve your Amazon presence, let's talk.
            </p>
          </div>
          <a 
            href="https://calendly.com/n15labs/strategy-call" 
            target="_blank"
            rel="noopener noreferrer"
            class="amazon-cta"
          >
            Discuss Amazon Services
            <ArrowRightIcon aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="process-section">
      <div class="container">
        <div class="section-header">
          <h2>How I Work</h2>
          <p>A straightforward process with no surprises.</p>
        </div>
        
        <div class="process-steps">
          <div class="process-step">
            <div class="step-number">1</div>
            <h3>Free Strategy Call</h3>
            <p>
              We jump on a 30-minute call. I learn about your business, look at your 
              current situation, and give you honest advice — whether that means 
              working together or not.
            </p>
          </div>
          
          <div class="step-connector">
            <ArrowRightIcon aria-hidden="true" />
          </div>
          
          <div class="process-step">
            <div class="step-number">2</div>
            <h3>Plan &amp; Quote</h3>
            <p>
              If we're a good fit, I put together a clear plan with fixed pricing. 
              You'll know exactly what you're getting and what you're paying before 
              we start.
            </p>
          </div>
          
          <div class="step-connector">
            <ArrowRightIcon aria-hidden="true" />
          </div>
          
          <div class="process-step">
            <div class="step-number">3</div>
            <h3>Build &amp; Launch</h3>
            <p>
              I get to work. You get regular updates throughout. For websites, that's 
              14 days to 1 month. For ads and SEO, we start seeing data within the 
              first month.
            </p>
          </div>
          
          <div class="step-connector">
            <ArrowRightIcon aria-hidden="true" />
          </div>
          
          <div class="process-step">
            <div class="step-number">4</div>
            <h3>Ongoing Growth</h3>
            <p>
              For monthly services, I continuously optimise based on real data. 
              Monthly reports show exactly what's working and where your money is going.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-card">
          <h2>Not sure where to start?</h2>
          <p>
            Book a free strategy call. I'll take a look at your current situation 
            and tell you honestly what would make the biggest difference for your 
            business — no pressure, no obligation.
          </p>
          <a 
            href="https://calendly.com/n15labs/strategy-call" 
            target="_blank"
            rel="noopener noreferrer"
            class="cta-primary"
          >
            Book a Free Strategy Call
            <CalendarIcon aria-hidden="true" />
          </a>
          <div class="cta-alternatives">
            <span>Or</span>
            <router-link to="/contact">send me a message</router-link>
            <span>•</span>
            <router-link to="/pricing">view full pricing</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useHead } from '@vueuse/head'
import {
  ArrowRightIcon,
  TargetIcon,
  SearchIcon,
  GlobeIcon,
  CheckIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  UsersIcon,
  PoundSterlingIcon,
  BarChart3Icon,
  MapPinIcon,
  ZapIcon,
  SmartphoneIcon,
  ShieldCheckIcon,
  SparklesIcon,
  ShoppingCartIcon,
  CalendarIcon
} from 'lucide-vue-next'

export default {
  name: 'ServicesPage',
  
  components: {
    ArrowRightIcon,
    TargetIcon,
    SearchIcon,
    GlobeIcon,
    CheckIcon,
    TrendingDownIcon,
    TrendingUpIcon,
    UsersIcon,
    PoundSterlingIcon,
    BarChart3Icon,
    MapPinIcon,
    ZapIcon,
    SmartphoneIcon,
    ShieldCheckIcon,
    SparklesIcon,
    ShoppingCartIcon,
    CalendarIcon
  },
  
  setup() {
    useHead({
      title: 'Services | Google Ads, SEO & Web Design | N15 Labs Stoke-on-Trent',
      meta: [
        {
          name: 'description',
          content: 'Digital marketing services for local businesses. Google Ads management, SEO, and conversion-focused web design. Transparent pricing from £600.'
        },
        {
          property: 'og:title',
          content: 'Services | N15 Labs'
        },
        {
          property: 'og:description',
          content: 'Google Ads, SEO, and web design services for Stoke-on-Trent businesses. Get more customers from Google.'
        },
        {
          name: 'keywords',
          content: 'Google Ads management Stoke-on-Trent, SEO services Staffordshire, web design Stoke-on-Trent, digital marketing services'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://n15labs.co.uk/services'
        }
      ]
    })
  }
}
</script>

<style scoped>
/* ==================== BASE STYLES ==================== */
.services-page {
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
.services-hero {
  padding: 8rem 0 5rem;
  text-align: center;
}

.services-hero h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: #ffffff;
  line-height: 1.15;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.hero-intro {
  font-size: 1.375rem;
  color: #a1a1aa;
  line-height: 1.7;
  max-width: 700px;
  margin: 0 auto 2.5rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  padding: 1.125rem 2rem;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.0625rem;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.35);
}

.btn-primary svg {
  width: 20px;
  height: 20px;
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  padding: 1.125rem 2rem;
  background: transparent;
  border: 2px solid #3f3f46;
  color: #f4f4f5;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.0625rem;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  border-color: #52525b;
  background: rgba(255, 255, 255, 0.03);
}

/* ==================== MAIN SERVICES ==================== */
.main-services {
  padding: 3rem 0;
}

.service-block {
  background: linear-gradient(135deg, #18181b 0%, #1f1f23 100%);
  border: 1px solid #27272a;
  border-radius: 24px;
  padding: 3rem;
  margin-bottom: 2rem;
}

.service-block.alt {
  background: linear-gradient(135deg, #1f1f23 0%, #18181b 100%);
}

.service-content {
  max-width: 900px;
}

.service-icon {
  width: 64px;
  height: 64px;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: #3b82f6;
}

.service-icon svg {
  width: 32px;
  height: 32px;
}

.service-header {
  margin-bottom: 1.25rem;
}

.service-problem {
  display: inline-block;
  color: #ef4444;
  font-size: 0.9375rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.service-header h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
}

.service-description {
  font-size: 1.125rem;
  color: #a1a1aa;
  line-height: 1.7;
  margin-bottom: 2rem;
  max-width: 700px;
}

.service-results {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(16, 185, 129, 0.05);
  border: 1px solid rgba(16, 185, 129, 0.15);
  border-radius: 12px;
}

.result-item {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  color: #34d399;
  font-weight: 600;
  font-size: 0.9375rem;
}

.result-item svg {
  width: 20px;
  height: 20px;
}

.service-includes h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
}

.service-includes ul {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 0.75rem;
}

.service-includes li {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  color: #d4d4d8;
  font-size: 0.9375rem;
}

.service-includes li svg {
  width: 18px;
  height: 18px;
  color: #3b82f6;
  flex-shrink: 0;
}

.service-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding-top: 2rem;
  border-top: 1px solid #27272a;
}

.service-price {
  display: flex;
  align-items: baseline;
  gap: 0.25rem;
}

.price-amount {
  font-size: 2.5rem;
  font-weight: 800;
  color: #3b82f6;
}

.price-period {
  font-size: 1rem;
  color: #71717a;
}

.service-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.75rem;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.service-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.35);
}

.service-cta svg {
  width: 18px;
  height: 18px;
}

/* ==================== BUNDLE SECTION ==================== */
.bundle-section {
  padding: 3rem 0 5rem;
}

.bundle-card {
  background: linear-gradient(135deg, #18181b 0%, #1f1f23 100%);
  border: 2px solid #3b82f6;
  border-radius: 24px;
  padding: 3rem;
  position: relative;
}

.bundle-badge {
  position: absolute;
  top: -14px;
  left: 2rem;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  color: white;
  padding: 0.5rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 50px;
}

.bundle-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.bundle-icon {
  width: 64px;
  height: 64px;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: #3b82f6;
}

.bundle-icon svg {
  width: 32px;
  height: 32px;
}

.bundle-header h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
}

.bundle-header p {
  font-size: 1.125rem;
  color: #a1a1aa;
  line-height: 1.7;
  max-width: 700px;
  margin: 0 auto;
}

.bundle-features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 2.5rem;
  padding: 2rem;
  background: rgba(59, 130, 246, 0.05);
  border-radius: 16px;
}

.feature-col h4 {
  font-size: 0.9375rem;
  font-weight: 600;
  color: #60a5fa;
  margin-bottom: 1rem;
}

.feature-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-col li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #d4d4d8;
  font-size: 0.9375rem;
  margin-bottom: 0.625rem;
}

.feature-col li svg {
  width: 16px;
  height: 16px;
  color: #10b981;
}

.bundle-pricing {
  text-align: center;
}

.bundle-price {
  margin-bottom: 1rem;
}

.bundle-price .original {
  display: block;
  font-size: 1rem;
  color: #71717a;
  text-decoration: line-through;
  margin-bottom: 0.25rem;
}

.bundle-price .amount {
  font-size: 3rem;
  font-weight: 800;
  color: #3b82f6;
}

.bundle-price .period {
  font-size: 1.125rem;
  color: #71717a;
}

.bundle-savings {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 50px;
  color: #34d399;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.bundle-savings svg {
  width: 16px;
  height: 16px;
}

.bundle-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  padding: 1.125rem 2rem;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.0625rem;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.bundle-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.35);
}

.bundle-cta svg {
  width: 20px;
  height: 20px;
}

/* ==================== AMAZON SECTION ==================== */
.amazon-section {
  padding: 0 0 5rem;
}

.amazon-card {
  background: linear-gradient(135deg, #18181b 0%, #1f1f23 100%);
  border: 1px solid #27272a;
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
}

.amazon-content {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.amazon-icon {
  width: 48px;
  height: 48px;
  background: rgba(251, 146, 60, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fb923c;
  flex-shrink: 0;
}

.amazon-icon svg {
  width: 24px;
  height: 24px;
}

.amazon-content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.25rem;
}

.amazon-content p {
  color: #a1a1aa;
  font-size: 0.9375rem;
  max-width: 400px;
}

.amazon-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  background: transparent;
  border: 2px solid #fb923c;
  color: #fb923c;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9375rem;
  border-radius: 10px;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.amazon-cta:hover {
  background: rgba(251, 146, 60, 0.1);
}

.amazon-cta svg {
  width: 18px;
  height: 18px;
}

/* ==================== PROCESS SECTION ==================== */
.process-section {
  padding: 5rem 0;
  background: linear-gradient(180deg, #111111 0%, #0a0a0a 100%);
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.75rem;
}

.section-header p {
  font-size: 1.25rem;
  color: #a1a1aa;
}

.process-steps {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.process-step {
  flex: 1;
  min-width: 220px;
  max-width: 260px;
  text-align: center;
}

.step-number {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  margin: 0 auto 1.25rem;
}

.process-step h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.75rem;
}

.process-step p {
  color: #a1a1aa;
  font-size: 0.9375rem;
  line-height: 1.6;
}

.step-connector {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3f3f46;
  padding-top: 0.75rem;
}

.step-connector svg {
  width: 24px;
  height: 24px;
}

/* ==================== CTA SECTION ==================== */
.cta-section {
  padding: 5rem 0;
}

.cta-card {
  background: linear-gradient(135deg, #18181b 0%, #1f1f23 100%);
  border: 1px solid #27272a;
  border-radius: 24px;
  padding: 4rem;
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.cta-card h2 {
  font-size: 2.25rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
}

.cta-card > p {
  font-size: 1.125rem;
  color: #a1a1aa;
  line-height: 1.7;
  margin-bottom: 2rem;
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
  margin-bottom: 1.5rem;
}

.cta-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.35);
}

.cta-primary svg {
  width: 20px;
  height: 20px;
}

.cta-alternatives {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  color: #71717a;
  font-size: 0.9375rem;
}

.cta-alternatives a {
  color: #60a5fa;
  text-decoration: none;
  transition: color 0.3s ease;
}

.cta-alternatives a:hover {
  color: #3b82f6;
  text-decoration: underline;
}

/* ==================== RESPONSIVE ==================== */
@media (max-width: 1024px) {
  .bundle-features {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .process-steps {
    flex-direction: column;
    align-items: center;
  }
  
  .process-step {
    max-width: 400px;
  }
  
  .step-connector {
    transform: rotate(90deg);
    padding: 0.5rem 0;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1.25rem;
  }
  
  .services-hero {
    padding: 6rem 0 3rem;
  }
  
  .services-hero h1 {
    font-size: 2.75rem;
  }
  
  .hero-intro {
    font-size: 1.125rem;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .service-block {
    padding: 2rem;
  }
  
  .service-header h2 {
    font-size: 1.75rem;
  }
  
  .service-footer {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .bundle-card {
    padding: 2rem 1.5rem;
  }
  
  .bundle-header h2,
  .section-header h2,
  .cta-card h2 {
    font-size: 2rem;
  }
  
  .amazon-card {
    flex-direction: column;
    text-align: center;
  }
  
  .amazon-content {
    flex-direction: column;
    text-align: center;
  }
  
  .cta-card {
    padding: 2.5rem 1.5rem;
  }
}

@media (max-width: 480px) {
  .services-hero h1 {
    font-size: 2.25rem;
  }
  
  .service-results {
    flex-direction: column;
    gap: 1rem;
  }
  
  .bundle-price .amount {
    font-size: 2.5rem;
  }
  
  .cta-alternatives {
    flex-direction: column;
    gap: 0.5rem;
  }
}

/* ==================== ACCESSIBILITY ==================== */
@media (prefers-reduced-motion: reduce) {
  .btn-primary,
  .btn-secondary,
  .service-cta,
  .bundle-cta,
  .amazon-cta,
  .cta-primary {
    transition: none;
  }
}

.btn-primary:focus,
.btn-secondary:focus,
.service-cta:focus,
.bundle-cta:focus,
.amazon-cta:focus,
.cta-primary:focus {
  outline: 3px solid #3b82f6;
  outline-offset: 2px;
}
</style>