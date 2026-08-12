<template>
  <div class="service-page">
    <!-- Hero Section -->
    <section class="service-hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <span class="section-label">SEO Services</span>
            <h1>Get found on Google by <span class="gradient-text">local customers</span></h1>
            <p class="hero-intro">
              When people search for what you do, they find your competitors instead. 
              I fix the technical problems holding you back and get you ranking where 
              your customers are actually looking.
            </p>
            <div class="hero-stats">
              <div class="stat">
                <strong>110%</strong>
                <span>Organic Traffic Growth</span>
              </div>
              <div class="stat">
                <strong>3 weeks</strong>
                <span>To See First Results</span>
              </div>
              <div class="stat">
                <strong>Local</strong>
                <span>Staffordshire Focus</span>
              </div>
            </div>
            <div class="hero-ctas">
              <a 
                href="https://calendly.com/n15labs/strategy-call" 
                target="_blank"
                rel="noopener noreferrer"
                class="cta-primary"
              >
                Get a Free SEO Audit
                <ArrowRightIcon aria-hidden="true" />
              </a>
              <router-link to="/case-studies" class="cta-secondary">
                See Results
              </router-link>
            </div>
          </div>
          <div class="hero-visual">
            <div class="visual-card">
              <div class="card-header">
                <SearchIcon aria-hidden="true" />
                <span>Search Rankings</span>
              </div>
              <div class="search-results">
                <div class="search-query">
                  <span class="query-text">"driveways staffordshire"</span>
                </div>
                <div class="ranking-item top">
                  <span class="rank">#1</span>
                  <div class="ranking-info">
                    <span class="site">Your Business</span>
                    <span class="status">After optimisation</span>
                  </div>
                  <TrendingUpIcon class="trend-icon up" aria-hidden="true" />
                </div>
                <div class="ranking-item previous">
                  <span class="rank">#8</span>
                  <div class="ranking-info">
                    <span class="site">Your Business</span>
                    <span class="status">Before</span>
                  </div>
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
              <EyeOffIcon aria-hidden="true" />
            </div>
            <h3>You're invisible on Google</h3>
            <p>
              When people search for your services, they find everyone except you. 
              Your competitors are getting the customers that should be yours.
            </p>
          </div>
          <div class="problem-card">
            <div class="problem-icon">
              <MapPinOffIcon aria-hidden="true" />
            </div>
            <h3>You don't show up in local searches</h3>
            <p>
              Searches like "plumber near me" or "barber in Stoke-on-Trent" bring up 
              everyone but you. Your Google Business Profile is either missing or broken.
            </p>
          </div>
          <div class="problem-card">
            <div class="problem-icon">
              <GaugeIcon aria-hidden="true" />
            </div>
            <h3>Your website is slow and outdated</h3>
            <p>
              Google penalises slow websites. If your site takes more than 3 seconds 
              to load, you're losing both rankings and customers.
            </p>
          </div>
          <div class="problem-card">
            <div class="problem-icon">
              <FileQuestionIcon aria-hidden="true" />
            </div>
            <h3>You've been burned by "SEO experts" before</h3>
            <p>
              Previous agencies promised the world, took your money, and delivered 
              nothing but confusing reports and excuses.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Solution Section -->
    <section class="solution-section">
      <div class="container">
        <span class="section-label">How I Fix It</span>
        <h2>SEO that actually <span class="highlight">gets you found</span></h2>
        <p class="section-intro">
          I focus on what actually moves the needle for local businesses — technical fixes, 
          local visibility, and content that ranks.
        </p>

        <div class="solution-grid">
          <div class="solution-card">
            <div class="solution-number">1</div>
            <div class="solution-content">
              <h3>Technical SEO Audit</h3>
              <p>
                I'll crawl your site like Google does and find every technical issue 
                that's holding you back — broken links, slow pages, missing meta tags, 
                crawl errors, and more.
              </p>
              <ul class="solution-checklist">
                <li><CheckIcon aria-hidden="true" /> Site speed analysis</li>
                <li><CheckIcon aria-hidden="true" /> Mobile responsiveness check</li>
                <li><CheckIcon aria-hidden="true" /> Indexing & crawl error fixes</li>
              </ul>
            </div>
          </div>

          <div class="solution-card">
            <div class="solution-number">2</div>
            <div class="solution-content">
              <h3>Local SEO Setup</h3>
              <p>
                For local businesses, showing up in Google Maps and "near me" searches 
                is everything. I'll optimise your Google Business Profile and build 
                local citations that matter.
              </p>
              <ul class="solution-checklist">
                <li><CheckIcon aria-hidden="true" /> Google Business Profile optimisation</li>
                <li><CheckIcon aria-hidden="true" /> Local citation building</li>
                <li><CheckIcon aria-hidden="true" /> Review strategy</li>
              </ul>
            </div>
          </div>

          <div class="solution-card">
            <div class="solution-number">3</div>
            <div class="solution-content">
              <h3>On-Page Optimisation</h3>
              <p>
                Every page on your site needs to tell Google what it's about. I'll 
                optimise your titles, meta descriptions, headers, and content to 
                target the keywords your customers are searching.
              </p>
              <ul class="solution-checklist">
                <li><CheckIcon aria-hidden="true" /> Keyword research</li>
                <li><CheckIcon aria-hidden="true" /> Title & meta optimisation</li>
                <li><CheckIcon aria-hidden="true" /> Content improvements</li>
              </ul>
            </div>
          </div>

          <div class="solution-card">
            <div class="solution-number">4</div>
            <div class="solution-content">
              <h3>Ongoing Monitoring</h3>
              <p>
                SEO isn't a one-time fix. I'll track your rankings, monitor your 
                competitors, and continuously improve your visibility with monthly 
                optimisations.
              </p>
              <ul class="solution-checklist">
                <li><CheckIcon aria-hidden="true" /> Ranking tracking</li>
                <li><CheckIcon aria-hidden="true" /> Competitor analysis</li>
                <li><CheckIcon aria-hidden="true" /> Monthly reporting</li>
              </ul>
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
            <div class="feature-icon">
              <SearchIcon aria-hidden="true" />
            </div>
            <h3>Keyword Research</h3>
            <p>
              I'll find the exact words your customers use when searching for your 
              services — not just high-volume keywords, but ones that actually convert.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <MapPinIcon aria-hidden="true" />
            </div>
            <h3>Google Business Profile</h3>
            <p>
              Full setup and optimisation of your Google Business listing so you 
              show up in Maps and local pack results.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <FileTextIcon aria-hidden="true" />
            </div>
            <h3>Content Strategy</h3>
            <p>
              I'll identify content gaps and create a plan for pages and posts that 
              will bring in organic traffic for years.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <LinkIcon aria-hidden="true" />
            </div>
            <h3>Technical Fixes</h3>
            <p>
              Broken links, slow pages, missing schemas — I'll fix the technical 
              issues that are hurting your rankings.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <BarChart3Icon aria-hidden="true" />
            </div>
            <h3>Monthly Reporting</h3>
            <p>
              Clear reports showing your ranking progress, traffic growth, and what 
              I'm working on — no jargon, just results.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <UsersIcon aria-hidden="true" />
            </div>
            <h3>Competitor Analysis</h3>
            <p>
              I'll show you exactly what your competitors are doing to rank and 
              how we can beat them.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Case Study Section -->
    <section class="case-study-section">
      <div class="container">
        <div class="case-study-card">
          <div class="case-study-header">
            <span class="case-study-label">Real Results</span>
            <h2>Regional Home Services Company</h2>
            <p class="case-study-meta">Driveway & Paving • Staffordshire & Shropshire</p>
          </div>
          
          <div class="case-study-content">
            <div class="case-study-story">
              <h3>The Problem</h3>
              <p>
                A driveway company with multiple locations had zero organic visibility. 
                Their old website wasn't optimised for any local keywords, and they 
                weren't showing up in Google Maps at all.
              </p>
              
              <h3>What I Did</h3>
              <ul>
                <li>Built new location-specific landing pages</li>
                <li>Optimised Google Business Profiles for each area</li>
                <li>Fixed technical issues slowing down the site</li>
                <li>Created content targeting local service keywords</li>
              </ul>
            </div>
            
            <div class="case-study-results">
              <div class="result-metric">
                <div class="result-value">
                  <TrendingUpIcon class="result-icon" aria-hidden="true" />
                  110%
                </div>
                <div class="result-label">Organic Traffic Growth</div>
                <div class="result-detail">Within 3 weeks</div>
              </div>
              <div class="result-metric">
                <div class="result-value">194%</div>
                <div class="result-label">Month-on-Month Growth</div>
                <div class="result-detail">Sustained increase</div>
              </div>
              <div class="result-metric">
                <div class="result-value">Page 1</div>
                <div class="result-label">Local Keywords</div>
                <div class="result-detail">Multiple locations</div>
              </div>
            </div>
          </div>
          
          <router-link to="/case-studies" class="case-study-link">
            Read the full case study
            <ArrowRightIcon aria-hidden="true" />
          </router-link>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="pricing-section">
      <div class="container">
        <span class="section-label">Investment</span>
        <h2>Transparent pricing</h2>
        <p class="section-intro">
          SEO is a long-term investment. I charge a flat monthly rate — no hidden fees, 
          no surprise charges.
        </p>

        <div class="pricing-card">
          <div class="pricing-header">
            <h3>SEO + Local Optimisation</h3>
            <div class="price">
                <span class="amount">£750</span>
                <span class="period">/month</span>
            </div>
          </div>
          <div class="pricing-body">
            <ul class="pricing-features">
              <li><CheckIcon aria-hidden="true" /> Comprehensive technical audit</li>
              <li><CheckIcon aria-hidden="true" /> Google Business Profile setup & optimisation</li>
              <li><CheckIcon aria-hidden="true" /> Local citation building</li>
              <li><CheckIcon aria-hidden="true" /> On-page SEO optimisation</li>
              <li><CheckIcon aria-hidden="true" /> Keyword research & tracking</li>
              <li><CheckIcon aria-hidden="true" /> Content recommendations</li>
              <li><CheckIcon aria-hidden="true" /> Competitor monitoring</li>
              <li><CheckIcon aria-hidden="true" /> Monthly reporting (plain English)</li>
              <li><CheckIcon aria-hidden="true" /> Direct access — no account managers</li>
            </ul>
            <p class="pricing-note">
              Need Google Ads too? Bundle SEO + Google Ads management for £1,200/month 
              (save £300 vs booking separately). Book a call to discuss your specific needs.
            </p>
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
            <h3>How long does SEO take to work?</h3>
            <p>
              You'll typically see initial improvements within 4-8 weeks for local SEO. 
              Significant ranking changes usually happen around the 3-6 month mark. 
              SEO is a long game, but the results compound over time.
            </p>
          </div>
          
          <div class="faq-item">
            <h3>Can you guarantee first page rankings?</h3>
            <p>
              No — and anyone who promises guaranteed rankings is lying to you. Google's 
              algorithm is constantly changing. What I can guarantee is that I'll do 
              everything in my power to improve your visibility, and I'll be transparent 
              about what's working and what isn't.
            </p>
          </div>
          
          <div class="faq-item">
            <h3>Do I need a new website for SEO to work?</h3>
            <p>
              Not necessarily. Many SEO improvements can be made to your existing site. 
              However, if your site is extremely outdated, slow, or not mobile-friendly, 
              a rebuild might be the better investment. I'll be honest about what you need.
            </p>
          </div>
          
          <div class="faq-item">
            <h3>What's the difference between SEO and Google Ads?</h3>
            <p>
              Google Ads gets you immediate visibility — you pay to appear at the top. 
              SEO is about earning those rankings organically. Ads stop when you stop 
              paying; SEO results compound over time. Ideally, you want both.
            </p>
          </div>
          
          <div class="faq-item">
            <h3>Do you do link building?</h3>
            <p>
              I focus on earning links naturally through quality content and local 
              citations, not buying links or using dodgy tactics that could get you 
              penalised. Sustainable growth over quick fixes.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-card">
          <h2>Ready to get found on Google?</h2>
          <p>
            Book a free strategy call. I'll take a quick look at your current SEO 
            situation and tell you honestly what it'll take to improve your rankings.
          </p>
          <a 
            href="https://calendly.com/n15labs/strategy-call" 
            target="_blank"
            rel="noopener noreferrer"
            class="cta-primary"
          >
            Book Your Free Strategy Call
            <ArrowRightIcon aria-hidden="true" />
          </a>
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
  SearchIcon,
  TrendingUpIcon,
  EyeOffIcon,
  MapPinOffIcon,
  GaugeIcon,
  FileQuestionIcon,
  CheckIcon,
  MapPinIcon,
  FileTextIcon,
  LinkIcon,
  BarChart3Icon,
  UsersIcon
} from 'lucide-vue-next'

export default {
  name: 'SEOService',
  
  components: {
    ArrowRightIcon,
    SearchIcon,
    TrendingUpIcon,
    EyeOffIcon,
    MapPinOffIcon,
    GaugeIcon,
    FileQuestionIcon,
    CheckIcon,
    MapPinIcon,
    FileTextIcon,
    LinkIcon,
    BarChart3Icon,
    UsersIcon
  },
  
  setup() {
    useHead({
      title: 'SEO Services Stoke-on-Trent | Local SEO | N15 Labs',
      meta: [
        {
          name: 'description',
          content: 'Get found on Google by local customers. SEO services for Stoke-on-Trent businesses. 110% organic traffic growth achieved. Free SEO audit available.'
        },
        {
          property: 'og:title',
          content: 'SEO Services | N15 Labs Stoke-on-Trent'
        },
        {
          property: 'og:description',
          content: 'Get found on Google by local customers. Local SEO services for Staffordshire businesses.'
        },
        {
          name: 'keywords',
          content: 'SEO Stoke-on-Trent, SEO services Staffordshire, local SEO, Google Business Profile, search engine optimisation'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://n15labs.co.uk/services/seo'
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
  max-width: 400px;
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

.search-results {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.search-query {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 0.75rem 1rem;
}

.query-text {
  color: #d4d4d8;
  font-family: monospace;
  font-size: 0.9375rem;
}

.ranking-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  border: 1px solid transparent;
}

.ranking-item.top {
  border-color: rgba(16, 185, 129, 0.3);
  background: rgba(16, 185, 129, 0.1);
}

.ranking-item.previous {
  opacity: 0.6;
}

.rank {
  font-size: 1.25rem;
  font-weight: 700;
  color: #3b82f6;
  min-width: 36px;
}

.ranking-item.top .rank {
  color: #10b981;
}

.ranking-info {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.ranking-info .site {
  color: #ffffff;
  font-weight: 500;
}

.ranking-info .status {
  color: #a1a1aa;
  font-size: 0.8125rem;
}

.trend-icon {
  width: 20px;
  height: 20px;
}

.trend-icon.up {
  color: #10b981;
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

.solution-number {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  flex-shrink: 0;
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
  margin-bottom: 1.25rem;
}

.solution-checklist {
  list-style: none;
  padding: 0;
  margin: 0;
}

.solution-checklist li {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  margin-bottom: 0.5rem;
  color: #e4e4e7;
  font-size: 0.9375rem;
}

.solution-checklist li svg {
  width: 18px;
  height: 18px;
  color: #10b981;
  flex-shrink: 0;
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
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.feature-card {
  background: linear-gradient(135deg, #1a1a1a 0%, #222222 100%);
  border: 1px solid #374151;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
}

.feature-icon {
  width: 56px;
  height: 56px;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.25rem;
  color: #3b82f6;
}

.feature-icon svg {
  width: 28px;
  height: 28px;
}

.feature-card h3 {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #ffffff;
}

.feature-card p {
  color: #d4d4d8;
  line-height: 1.7;
  font-size: 0.9375rem;
}

/* ==================== CASE STUDY SECTION ==================== */
.case-study-section {
  padding: 5rem 0;
}

.case-study-card {
  background: linear-gradient(135deg, #1a1a1a 0%, #222222 100%);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 20px;
  padding: 3rem;
}

.case-study-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.case-study-label {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 50px;
  color: #34d399;
  font-size: 0.8125rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
}

.case-study-header h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #ffffff;
}

.case-study-meta {
  color: #a1a1aa;
  font-size: 1rem;
}

.case-study-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 2rem;
}

.case-study-story h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #60a5fa;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.case-study-story p {
  color: #d4d4d8;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-size: 1rem;
}

.case-study-story ul {
  list-style: none;
  padding: 0;
}

.case-study-story ul li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.75rem;
  color: #e4e4e7;
  font-size: 1rem;
  line-height: 1.6;
}

.case-study-story ul li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: #10b981;
}

.case-study-results {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.result-metric {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
}

.result-value {
  font-size: 2.5rem;
  font-weight: 800;
  color: #3b82f6;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.result-icon {
  width: 28px;
  height: 28px;
  color: #10b981;
}

.result-label {
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin-top: 0.25rem;
}

.result-detail {
  font-size: 0.875rem;
  color: #a1a1aa;
  margin-top: 0.25rem;
}

.case-study-link {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  color: #3b82f6;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.0625rem;
  transition: all 0.3s ease;
}

.case-study-link:hover {
  gap: 1rem;
}

.case-study-link svg {
  width: 20px;
  height: 20px;
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

.pricing-card {
  background: linear-gradient(135deg, #1a1a1a 0%, #222222 100%);
  border: 1px solid #374151;
  border-radius: 20px;
  max-width: 600px;
  margin: 0 auto;
  overflow: hidden;
}

.pricing-header {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  padding: 2rem;
  text-align: center;
}

.pricing-header h3 {
  font-size: 1.375rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: white;
}

.price {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 0.25rem;
}

.price .amount {
  font-size: 3rem;
  font-weight: 800;
  color: white;
}

.price .period {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.8);
}

.pricing-body {
  padding: 2rem;
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
  gap: 0.75rem;
  margin-bottom: 1rem;
  color: #e4e4e7;
  font-size: 1rem;
  line-height: 1.5;
}

.pricing-features li svg {
  width: 20px;
  height: 20px;
  color: #10b981;
  flex-shrink: 0;
  margin-top: 2px;
}

.pricing-note {
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 8px;
  padding: 1rem;
  color: #d4d4d8;
  font-size: 0.9375rem;
  line-height: 1.6;
  text-align: left;
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
  
  .case-study-content {
    grid-template-columns: 1fr;
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
  
  .case-study-card {
    padding: 2rem;
  }
  
  .case-study-results {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .result-metric {
    flex: 1;
    min-width: 140px;
  }
  
  .result-value {
    font-size: 2rem;
  }
  
  .cta-card {
    padding: 2.5rem 1.5rem;
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
  
  .price .amount {
    font-size: 2.5rem;
  }
  
  .case-study-results {
    flex-direction: column;
  }
  
  .result-metric {
    min-width: auto;
  }
}

/* ==================== ACCESSIBILITY ==================== */
@media (prefers-reduced-motion: reduce) {
  .cta-primary,
  .cta-secondary,
  .case-study-link {
    transition: none;
  }
}

.cta-primary:focus,
.cta-secondary:focus,
.case-study-link:focus {
  outline: 3px solid #3b82f6;
  outline-offset: 2px;
}
</style>