<template>
  <div class="pricing-page">
    <!-- Hero Section -->
    <section class="pricing-hero">
      <div class="container">
        <span class="section-label">Pricing</span>
        <h1>Transparent pricing.<br><span class="gradient-text">No surprises.</span></h1>
        <p class="hero-intro">
          Fixed prices for all services. You'll always know exactly what you're paying 
          before we start. No hidden fees, no hourly billing guesswork.
        </p>
      </div>
    </section>

    <!-- Main Services Section -->
    <section class="services-section">
      <div class="container">
        <h2>Core Services</h2>
        
        <div class="pricing-grid">
          <!-- Launch Sites -->
          <div class="pricing-card">
            <div class="card-header">
              <div class="card-icon">
                <GlobeIcon aria-hidden="true" />
              </div>
              <h3>Launch Sites</h3>
              <p class="card-tagline">Professional website for local businesses</p>
            </div>
            <div class="card-price">
              <span class="amount">£600</span>
              <span class="period">one-off</span>
            </div>
            <ul class="card-features">
              <li><CheckIcon aria-hidden="true" /> 3 professional pages</li>
              <li><CheckIcon aria-hidden="true" /> Mobile responsive design</li>
              <li><CheckIcon aria-hidden="true" /> Basic SEO setup</li>
              <li><CheckIcon aria-hidden="true" /> Google Analytics</li>
              <li><CheckIcon aria-hidden="true" /> Google Business setup</li>
              <li><CheckIcon aria-hidden="true" /> 2 rounds of revisions</li>
              <li><CheckIcon aria-hidden="true" /> You own everything</li>
            </ul>
            <div class="card-timeline">
              <ClockIcon aria-hidden="true" />
              <span>14 days to 1 month delivery</span>
            </div>
            <router-link to="/launch-sites" class="card-cta">
              Learn More
              <ArrowRightIcon aria-hidden="true" />
            </router-link>
          </div>

          <!-- Google Ads -->
          <div class="pricing-card">
            <div class="card-header">
              <div class="card-icon">
                <TargetIcon aria-hidden="true" />
              </div>
              <h3>Google Ads Management</h3>
              <p class="card-tagline">Get more customers from paid search</p>
            </div>
            <div class="card-price">
              <span class="amount">£750</span>
              <span class="period">/month</span>
            </div>
            <ul class="card-features">
              <li><CheckIcon aria-hidden="true" /> Campaign setup &amp; management</li>
              <li><CheckIcon aria-hidden="true" /> Keyword research &amp; targeting</li>
              <li><CheckIcon aria-hidden="true" /> Ad copywriting</li>
              <li><CheckIcon aria-hidden="true" /> Landing page recommendations</li>
              <li><CheckIcon aria-hidden="true" /> Conversion tracking setup</li>
              <li><CheckIcon aria-hidden="true" /> Monthly performance reports</li>
              <li><CheckIcon aria-hidden="true" /> Ongoing optimisation</li>
            </ul>
            <div class="card-note">
              <span>Ad spend not included — you pay Google directly</span>
            </div>
            <router-link to="/services/google-ads" class="card-cta">
              Learn More
              <ArrowRightIcon aria-hidden="true" />
            </router-link>
          </div>

          <!-- SEO -->
          <div class="pricing-card">
            <div class="card-header">
              <div class="card-icon">
                <SearchIcon aria-hidden="true" />
              </div>
              <h3>SEO Services</h3>
              <p class="card-tagline">Rank higher in organic search</p>
            </div>
            <div class="card-price">
              <span class="amount">£750</span>
              <span class="period">/month</span>
            </div>
            <ul class="card-features">
              <li><CheckIcon aria-hidden="true" /> Technical SEO audit &amp; fixes</li>
              <li><CheckIcon aria-hidden="true" /> On-page optimisation</li>
              <li><CheckIcon aria-hidden="true" /> Local SEO (Google Business)</li>
              <li><CheckIcon aria-hidden="true" /> Content recommendations</li>
              <li><CheckIcon aria-hidden="true" /> Competitor analysis</li>
              <li><CheckIcon aria-hidden="true" /> Monthly ranking reports</li>
              <li><CheckIcon aria-hidden="true" /> Link building outreach</li>
            </ul>
            <div class="card-note">
              <span>3-month minimum commitment recommended</span>
            </div>
            <router-link to="/services/seo" class="card-cta">
              Learn More
              <ArrowRightIcon aria-hidden="true" />
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Bundle Section -->
    <section class="bundle-section">
      <div class="container">
        <div class="bundle-card">
          <div class="bundle-badge">Best Value</div>
          <div class="bundle-content">
            <div class="bundle-info">
              <h3>Google Ads + SEO Bundle</h3>
              <p>
                Get the best of both worlds — paid ads for immediate results and SEO 
                for long-term organic growth. Most businesses see the best ROI with 
                this combined approach.
              </p>
              <ul class="bundle-features">
                <li><CheckIcon aria-hidden="true" /> Everything in Google Ads Management</li>
                <li><CheckIcon aria-hidden="true" /> Everything in SEO Services</li>
                <li><CheckIcon aria-hidden="true" /> Integrated strategy across both channels</li>
                <li><CheckIcon aria-hidden="true" /> Combined monthly reporting</li>
                <li><CheckIcon aria-hidden="true" /> Priority support</li>
              </ul>
            </div>
            <div class="bundle-pricing">
              <div class="bundle-price">
                <span class="original">£1,500/month</span>
                <span class="amount">£1,200</span>
                <span class="period">/month</span>
              </div>
              <div class="bundle-savings">
                <SparklesIcon aria-hidden="true" />
                <span>Save £300/month</span>
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
      </div>
    </section>

    <!-- Hosting Section -->
    <section class="hosting-section">
      <div class="container">
        <h2>Hosting &amp; Care</h2>
        <p class="section-intro">
          Keep your website running smoothly without lifting a finger. I handle all 
          the technical stuff so you can focus on your business.
        </p>
        
        <div class="hosting-card">
          <div class="hosting-content">
            <div class="hosting-price">
              <span class="amount">£40</span>
              <span class="period">/month</span>
            </div>
            <div class="hosting-features">
              <div class="feature-column">
                <div class="feature-item">
                  <ServerIcon aria-hidden="true" />
                  <span>Fast, secure hosting</span>
                </div>
                <div class="feature-item">
                  <DatabaseIcon aria-hidden="true" />
                  <span>Weekly backups</span>
                </div>
                <div class="feature-item">
                  <ShieldCheckIcon aria-hidden="true" />
                  <span>SSL certificate</span>
                </div>
              </div>
              <div class="feature-column">
                <div class="feature-item">
                  <WrenchIcon aria-hidden="true" />
                  <span>2 hours of edits/month</span>
                </div>
                <div class="feature-item">
                  <HeadphonesIcon aria-hidden="true" />
                  <span>Priority support</span>
                </div>
                <div class="feature-item">
                  <ActivityIcon aria-hidden="true" />
                  <span>99.9% uptime guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Add-ons Section -->
    <section class="addons-section">
      <div class="container">
        <h2>Add-ons &amp; Extras</h2>
        
        <div class="addons-grid">
          <div class="addon-card">
            <div class="addon-icon">
              <FileTextIcon aria-hidden="true" />
            </div>
            <h3>Additional Pages</h3>
            <p>Extra pages beyond the standard 3-page package</p>
            <div class="addon-price">£150 <span>per page</span></div>
          </div>
          
          <div class="addon-card">
            <div class="addon-icon">
              <PenToolIcon aria-hidden="true" />
            </div>
            <h3>Extra Revisions</h3>
            <p>Additional revision rounds beyond the included 2</p>
            <div class="addon-price">£75 <span>per round</span></div>
          </div>
          
          <div class="addon-card">
            <div class="addon-icon">
              <ClockIcon aria-hidden="true" />
            </div>
            <h3>Additional Dev Time</h3>
            <p>Extra development hours for ongoing changes</p>
            <div class="addon-price">£50 <span>per hour</span></div>
          </div>
          
          <div class="addon-card">
            <div class="addon-icon">
              <ShoppingCartIcon aria-hidden="true" />
            </div>
            <h3>Amazon Advertising</h3>
            <p>PPC campaigns and A+ Content for Amazon sellers</p>
            <div class="addon-price">From £500 <span>/month</span></div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
      <div class="container">
        <h2>Pricing Questions</h2>
        
        <div class="faq-list">
          <div class="faq-item">
            <h3>What's included in the ad spend?</h3>
            <p>
              The management fee (£750/month) covers my time and expertise. The actual 
              ad spend — what you pay Google to run your ads — is separate. You pay 
              Google directly, so you always have full control and visibility. I'll 
              recommend a budget based on your goals, typically starting at £500-1000/month.
            </p>
          </div>
          
          <div class="faq-item">
            <h3>Are there any setup fees?</h3>
            <p>
              No hidden setup fees for Google Ads or SEO services. For websites, the 
              £600 is all-inclusive. The price you see is the price you pay.
            </p>
          </div>
          
          <div class="faq-item">
            <h3>What's the minimum contract length?</h3>
            <p>
              For Google Ads, I recommend at least 3 months to see meaningful results, 
              but there's no lock-in — you can cancel anytime with 30 days notice. For 
              SEO, I strongly recommend a 6-month commitment because results take time.
            </p>
          </div>
          
          <div class="faq-item">
            <h3>Do you offer payment plans?</h3>
            <p>
              For website projects, I can split the payment into two instalments: 50% 
              upfront, 50% on completion. Monthly services are billed at the start of 
              each month.
            </p>
          </div>
          
          <div class="faq-item">
            <h3>What if I need something custom?</h3>
            <p>
              No problem. Book a strategy call and we'll discuss your specific needs. 
              I'll give you a clear quote before we start, so there are no surprises.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-card">
          <h2>Not sure which service you need?</h2>
          <p>
            Book a free 30-minute strategy call. I'll take a look at your current 
            situation and recommend the best approach for your business and budget.
          </p>
          <a 
            href="https://calendly.com/n15labs/strategy-call" 
            target="_blank"
            rel="noopener noreferrer"
            class="cta-primary"
          >
            Book a Free Strategy Call
            <ArrowRightIcon aria-hidden="true" />
          </a>
          <p class="cta-note">No obligation. No pressure. Just honest advice.</p>
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
  ClockIcon,
  GlobeIcon,
  TargetIcon,
  SearchIcon,
  SparklesIcon,
  ServerIcon,
  DatabaseIcon,
  ShieldCheckIcon,
  WrenchIcon,
  HeadphonesIcon,
  ActivityIcon,
  FileTextIcon,
  PenToolIcon,
  ShoppingCartIcon
} from 'lucide-vue-next'

export default {
  name: 'PricingPage',
  
  components: {
    ArrowRightIcon,
    CheckIcon,
    ClockIcon,
    GlobeIcon,
    TargetIcon,
    SearchIcon,
    SparklesIcon,
    ServerIcon,
    DatabaseIcon,
    ShieldCheckIcon,
    WrenchIcon,
    HeadphonesIcon,
    ActivityIcon,
    FileTextIcon,
    PenToolIcon,
    ShoppingCartIcon
  },
  
  setup() {
    useHead({
      title: 'Pricing | Google Ads, SEO & Web Design | N15 Labs Stoke-on-Trent',
      meta: [
        {
          name: 'description',
          content: 'Transparent pricing for digital marketing services. Google Ads from £750/month, SEO from £750/month, websites from £600. No hidden fees.'
        },
        {
          property: 'og:title',
          content: 'Pricing | N15 Labs'
        },
        {
          property: 'og:description',
          content: 'Transparent pricing for Google Ads, SEO, and web design services in Stoke-on-Trent.'
        },
        {
          name: 'keywords',
          content: 'digital marketing pricing, Google Ads cost, SEO pricing, web design cost Stoke-on-Trent'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://n15labs.co.uk/pricing'
        }
      ]
    })
  }
}
</script>

<style scoped>
/* ==================== BASE STYLES ==================== */
.pricing-page {
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

.section-intro {
  font-size: 1.25rem;
  color: #a1a1aa;
  max-width: 680px;
  line-height: 1.7;
  margin-bottom: 3rem;
}

/* ==================== HERO SECTION ==================== */
.pricing-hero {
  padding: 8rem 0 5rem;
  text-align: center;
}

.pricing-hero h1 {
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

/* ==================== SERVICES SECTION ==================== */
.services-section {
  padding: 5rem 0;
}

.services-section h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #ffffff;
  text-align: center;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.pricing-card {
  background: linear-gradient(135deg, #18181b 0%, #1f1f23 100%);
  border: 1px solid #27272a;
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
}

.card-header {
  margin-bottom: 1.5rem;
}

.card-icon {
  width: 56px;
  height: 56px;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  color: #3b82f6;
}

.card-icon svg {
  width: 28px;
  height: 28px;
}

.card-header h3 {
  font-size: 1.375rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.card-tagline {
  color: #a1a1aa;
  font-size: 0.9375rem;
}

.card-price {
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #27272a;
}

.card-price .amount {
  font-size: 2.5rem;
  font-weight: 800;
  color: #3b82f6;
}

.card-price .period {
  font-size: 1rem;
  color: #71717a;
  margin-left: 0.25rem;
}

.card-features {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
  flex-grow: 1;
}

.card-features li {
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
  margin-bottom: 0.75rem;
  color: #d4d4d8;
  font-size: 0.9375rem;
  line-height: 1.5;
}

.card-features li svg {
  width: 18px;
  height: 18px;
  color: #10b981;
  flex-shrink: 0;
  margin-top: 2px;
}

.card-timeline {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 8px;
  margin-bottom: 1.5rem;
  color: #60a5fa;
  font-size: 0.875rem;
  font-weight: 500;
}

.card-timeline svg {
  width: 16px;
  height: 16px;
}

.card-note {
  padding: 0.75rem;
  background: rgba(161, 161, 170, 0.1);
  border-radius: 8px;
  margin-bottom: 1.5rem;
}

.card-note span {
  color: #a1a1aa;
  font-size: 0.8125rem;
}

.card-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  background: transparent;
  border: 2px solid #3f3f46;
  color: #f4f4f5;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.card-cta:hover {
  border-color: #3b82f6;
  color: #3b82f6;
}

.card-cta svg {
  width: 18px;
  height: 18px;
}

/* ==================== BUNDLE SECTION ==================== */
.bundle-section {
  padding: 5rem 0;
  background: linear-gradient(180deg, #111111 0%, #0a0a0a 100%);
}

.bundle-card {
  background: linear-gradient(135deg, #18181b 0%, #1f1f23 100%);
  border: 2px solid #3b82f6;
  border-radius: 24px;
  overflow: hidden;
  position: relative;
}

.bundle-badge {
  position: absolute;
  top: 0;
  right: 2rem;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  color: white;
  padding: 0.5rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 0 0 12px 12px;
}

.bundle-content {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 3rem;
  padding: 3rem;
}

.bundle-info h3 {
  font-size: 1.75rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
}

.bundle-info > p {
  color: #a1a1aa;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.bundle-features {
  list-style: none;
  padding: 0;
  margin: 0;
}

.bundle-features li {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  margin-bottom: 0.75rem;
  color: #d4d4d8;
  font-size: 1rem;
}

.bundle-features li svg {
  width: 18px;
  height: 18px;
  color: #10b981;
}

.bundle-pricing {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  background: rgba(59, 130, 246, 0.05);
  border-radius: 16px;
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
  display: flex;
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
  padding: 1rem 1.75rem;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.bundle-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.35);
}

.bundle-cta svg {
  width: 18px;
  height: 18px;
}

/* ==================== HOSTING SECTION ==================== */
.hosting-section {
  padding: 5rem 0;
}

.hosting-section h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #ffffff;
  text-align: center;
}

.hosting-section .section-intro {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.hosting-card {
  background: linear-gradient(135deg, #18181b 0%, #1f1f23 100%);
  border: 1px solid #27272a;
  border-radius: 20px;
  padding: 3rem;
  max-width: 800px;
  margin: 0 auto;
}

.hosting-content {
  display: flex;
  align-items: center;
  gap: 3rem;
}

.hosting-price {
  text-align: center;
  padding-right: 3rem;
  border-right: 1px solid #27272a;
}

.hosting-price .amount {
  font-size: 3rem;
  font-weight: 800;
  color: #3b82f6;
}

.hosting-price .period {
  display: block;
  font-size: 1rem;
  color: #71717a;
}

.hosting-features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem 2rem;
  flex-grow: 1;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #d4d4d8;
  font-size: 0.9375rem;
}

.feature-item svg {
  width: 20px;
  height: 20px;
  color: #3b82f6;
}

/* ==================== ADD-ONS SECTION ==================== */
.addons-section {
  padding: 5rem 0;
  background: linear-gradient(180deg, #111111 0%, #0a0a0a 100%);
}

.addons-section h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #ffffff;
  text-align: center;
}

.addons-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.addon-card {
  background: linear-gradient(135deg, #18181b 0%, #1f1f23 100%);
  border: 1px solid #27272a;
  border-radius: 16px;
  padding: 1.5rem;
  text-align: center;
}

.addon-icon {
  width: 48px;
  height: 48px;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: #3b82f6;
}

.addon-icon svg {
  width: 24px;
  height: 24px;
}

.addon-card h3 {
  font-size: 1.0625rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.addon-card p {
  color: #71717a;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.addon-price {
  font-size: 1.25rem;
  font-weight: 700;
  color: #3b82f6;
}

.addon-price span {
  font-size: 0.875rem;
  font-weight: 400;
  color: #71717a;
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
  display: grid;
  gap: 1rem;
}

.faq-item {
  background: linear-gradient(135deg, #18181b 0%, #1f1f23 100%);
  border: 1px solid #27272a;
  border-radius: 12px;
  padding: 1.75rem;
}

.faq-item h3 {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #ffffff;
}

.faq-item p {
  color: #a1a1aa;
  line-height: 1.7;
  font-size: 1rem;
}

/* ==================== CTA SECTION ==================== */
.cta-section {
  padding: 5rem 0;
  background: linear-gradient(180deg, #111111 0%, #0a0a0a 100%);
}

.cta-card {
  background: linear-gradient(135deg, #18181b 0%, #1f1f23 100%);
  border: 1px solid #27272a;
  border-radius: 20px;
  padding: 4rem;
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.cta-card h2 {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #ffffff;
}

.cta-card > p {
  font-size: 1.125rem;
  color: #a1a1aa;
  margin-bottom: 2rem;
  line-height: 1.7;
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
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.35);
}

.cta-primary svg {
  width: 20px;
  height: 20px;
}

.cta-note {
  margin-top: 1.5rem;
  color: #71717a;
  font-size: 0.9375rem;
}

/* ==================== RESPONSIVE ==================== */
@media (max-width: 1024px) {
  .pricing-grid {
    grid-template-columns: 1fr;
    max-width: 450px;
    margin: 0 auto;
  }
  
  .bundle-content {
    grid-template-columns: 1fr;
  }
  
  .bundle-pricing {
    padding: 2rem;
  }
  
  .addons-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1.25rem;
  }
  
  .pricing-hero {
    padding: 6rem 0 3rem;
  }
  
  .pricing-hero h1 {
    font-size: 2.75rem;
  }
  
  .hero-intro {
    font-size: 1.125rem;
  }
  
  .services-section h2,
  .hosting-section h2,
  .addons-section h2,
  .faq-section h2,
  .cta-card h2 {
    font-size: 2rem;
  }
  
  .hosting-content {
    flex-direction: column;
    text-align: center;
  }
  
  .hosting-price {
    padding-right: 0;
    padding-bottom: 1.5rem;
    border-right: none;
    border-bottom: 1px solid #27272a;
  }
  
  .hosting-features {
    grid-template-columns: 1fr;
    justify-items: center;
  }
  
  .cta-card {
    padding: 2.5rem 1.5rem;
  }
}

@media (max-width: 480px) {
  .pricing-hero h1 {
    font-size: 2.25rem;
  }
  
  .addons-grid {
    grid-template-columns: 1fr;
  }
  
  .bundle-card {
    border-radius: 16px;
  }
  
  .bundle-content {
    padding: 2rem 1.5rem;
  }
  
  .bundle-badge {
    right: 1rem;
  }
  
  .bundle-price .amount {
    font-size: 2.5rem;
  }
}

/* ==================== ACCESSIBILITY ==================== */
@media (prefers-reduced-motion: reduce) {
  .cta-primary,
  .bundle-cta,
  .card-cta {
    transition: none;
  }
}

.cta-primary:focus,
.bundle-cta:focus,
.card-cta:focus {
  outline: 3px solid #3b82f6;
  outline-offset: 2px;
}
</style>