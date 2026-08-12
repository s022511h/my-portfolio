<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="about-hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <span class="section-label">About N15 Labs</span>
            <h1>I help local businesses <span class="gradient-text">get more customers</span> from Google</h1>
            <p class="hero-intro">
              I'm Andre Simpson — a digital marketer, SEO specialist, and web developer 
              based in Stoke-on-Trent. I combine genuine technical skill with marketing 
              expertise to deliver results that actually matter to your business.
            </p>
          </div>
          <div class="hero-image">
            <div class="image-container">
              <img 
                :src="profileImage" 
                alt="Andre Simpson - N15 Labs Founder" 
                class="profile-photo"
              />
              <div class="image-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Me Section -->
    <section class="why-section">
      <div class="container">
        <h2>Why work with me?</h2>
        <p class="section-intro">
          Most marketing agencies are either developers who can't do marketing, or 
          marketers who can't build. I do both.
        </p>
        
        <div class="why-grid">
          <div class="why-card">
            <div class="why-icon">
              <CodeIcon aria-hidden="true" />
            </div>
            <div class="why-content">
              <h3>I Actually Build Things</h3>
              <p>
                I'm not just managing your ads — I built this website from scratch. When 
                your landing page needs fixing, I fix it myself. No waiting for "the tech team".
              </p>
            </div>
          </div>
          
          <div class="why-card">
            <div class="why-icon">
              <TrendingUpIcon aria-hidden="true" />
            </div>
            <div class="why-content">
              <h3>I Focus on Results</h3>
              <p>
                I don't care about impressions or vanity metrics. I care about how many 
                customers you're getting and how much you're paying for them.
              </p>
            </div>
          </div>
          
          <div class="why-card">
            <div class="why-icon">
              <MapPinIcon aria-hidden="true" />
            </div>
            <div class="why-content">
              <h3>I'm Local</h3>
              <p>
                Based in Stoke-on-Trent, I understand the Staffordshire market. You're not 
                working with a faceless agency in London — you're working with me directly.
              </p>
            </div>
          </div>
          
          <div class="why-card">
            <div class="why-icon">
              <ShieldCheckIcon aria-hidden="true" />
            </div>
            <div class="why-content">
              <h3>I'm Honest</h3>
              <p>
                I won't promise page one rankings in a week or inflate results to look good. 
                If something isn't working, I'll tell you and fix it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Background Section -->
    <section class="background-section">
      <div class="container">
        <div class="background-content">
          <div class="background-text">
            <span class="section-label">Background</span>
            <h2>From Computer Science to <span class="gradient-text">Business Results</span></h2>
            
            <div class="story-block">
              <p>
                I graduated from Staffordshire University with a 2:1 BSc (Hons) in Computer 
                Science, achieving 77% in Web Development. But I quickly realised that 
                most businesses don't need a developer — they need customers.
              </p>
              
              <p>
                That's why I pivoted from pure development to digital marketing. Now I use 
                my technical background to build fast, SEO-optimised websites and run 
                Google Ads campaigns that actually convert.
              </p>
              
              <p>
                Before starting N15 Labs, I worked for Staffordshire University and gained 
                hands-on experience with Google Ads, Amazon Advertising, and e-commerce 
                optimisation. I've managed over £60,000 in ad spend and generated 618+ 
                tracked conversions for clients.
              </p>
            </div>
          </div>
          
          <div class="credentials-card">
            <h3>Credentials</h3>
            <ul class="credentials-list">
              <li>
                <GraduationCapIcon aria-hidden="true" />
                <div>
                  <strong>BSc Computer Science (2:1)</strong>
                  <span>Staffordshire University</span>
                </div>
              </li>
              <li>
                <BriefcaseIcon aria-hidden="true" />
                <div>
                  <strong>Previous Role</strong>
                  <span>Staffordshire University</span>
                </div>
              </li>
              <li>
                <TargetIcon aria-hidden="true" />
                <div>
                  <strong>Google Ads Experience</strong>
                  <span>£60k+ ad spend managed</span>
                </div>
              </li>
              <li>
                <ShoppingCartIcon aria-hidden="true" />
                <div>
                  <strong>Amazon Advertising</strong>
                  <span>A+ Content &amp; PPC</span>
                </div>
              </li>
              <li>
                <MapPinIcon aria-hidden="true" />
                <div>
                  <strong>Based In</strong>
                  <span>Stoke-on-Trent, Staffordshire</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Results Section -->
    <section class="results-section">
      <div class="container">
        <h2>What I've Achieved for Clients</h2>
        
        <div class="results-grid">
          <div class="result-card">
            <div class="result-value">75%</div>
            <div class="result-label">Lower Cost Per Lead</div>
            <div class="result-detail">£111 → £28 for a regional home services company</div>
          </div>
          
          <div class="result-card">
            <div class="result-value">618+</div>
            <div class="result-label">Conversions Generated</div>
            <div class="result-detail">Tracked enquiries through Google Ads</div>
          </div>
          
          <div class="result-card">
            <div class="result-value">110%</div>
            <div class="result-label">Organic Traffic Growth</div>
            <div class="result-detail">Within 3 weeks of site launch</div>
          </div>
          
          <div class="result-card">
            <div class="result-value">4×</div>
            <div class="result-label">Better Than Previous Agency</div>
            <div class="result-detail">Same budget, four times the results</div>
          </div>
        </div>
        
        <div class="results-cta">
          <router-link to="/results" class="cta-link">
            See the full case studies
            <ArrowRightIcon aria-hidden="true" />
          </router-link>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="values-section">
      <div class="container">
        <h2>How I Work</h2>
        
        <div class="values-grid">
          <div class="value-card">
            <div class="value-icon">
              <MessageSquareIcon aria-hidden="true" />
            </div>
            <div class="value-content">
              <h3>Direct Communication</h3>
              <p>
                You work with me directly — no account managers, no runaround. When you 
                have a question, you get an answer from the person doing the work.
              </p>
            </div>
          </div>
          
          <div class="value-card">
            <div class="value-icon">
              <EyeIcon aria-hidden="true" />
            </div>
            <div class="value-content">
              <h3>Full Transparency</h3>
              <p>
                You'll always know what I'm doing and why. Monthly reports in plain English, 
                not jargon designed to confuse you.
              </p>
            </div>
          </div>
          
          <div class="value-card">
            <div class="value-icon">
              <TargetIcon aria-hidden="true" />
            </div>
            <div class="value-content">
              <h3>Results-Focused</h3>
              <p>
                I measure success by customers and revenue, not clicks and impressions. 
                If it's not making you money, we need to change it.
              </p>
            </div>
          </div>
          
          <div class="value-card">
            <div class="value-icon">
              <UsersIcon aria-hidden="true" />
            </div>
            <div class="value-content">
              <h3>Long-Term Partnership</h3>
              <p>
                I'm not looking for quick wins and exit. I want to help your business 
                grow month after month, year after year.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Personal Section -->
    <section class="personal-section">
      <div class="container">
        <div class="personal-content">
          <div class="personal-text">
            <h2>Beyond Work</h2>
            <p>
              When I'm not helping businesses grow online, you'll find me producing music 
              (N15 Studios was my first venture), exploring video games, or working on 
              creative writing projects. These interests shape how I approach digital 
              marketing — with creativity, attention to detail, and a genuine passion 
              for building things that work.
            </p>
            <p>
              The "N15" in N15 Labs comes from the postcode where I grew up in North London. 
              It's a reminder of where I started and the journey that brought me here.
            </p>
          </div>
          
          <div class="interests-list">
            <div class="interest-item">
              <MusicIcon aria-hidden="true" />
              <span>Music Production</span>
            </div>
            <div class="interest-item">
              <GamepadIcon aria-hidden="true" />
              <span>Gaming</span>
            </div>
            <div class="interest-item">
              <PenToolIcon aria-hidden="true" />
              <span>Creative Writing</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-card">
          <h2>Let's talk about your business</h2>
          <p>
            Book a free 30-minute strategy call. I'll take a look at your current 
            situation and tell you honestly what it'll take to get more customers 
            from Google.
          </p>
          <div class="cta-buttons">
            <a 
              href="https://calendly.com/n15labs/strategy-call" 
              target="_blank"
              rel="noopener noreferrer"
              class="cta-primary"
            >
              Book a Free Strategy Call
              <ArrowRightIcon aria-hidden="true" />
            </a>
          </div>
          <div class="contact-alternatives">
            <p>Or reach out directly:</p>
            <div class="contact-links">
              <a href="mailto:andre@n15labs.co.uk" class="contact-link">
                <MailIcon aria-hidden="true" />
                <span>andre@n15labs.co.uk</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/andre-simpson-502365178" 
                target="_blank"
                rel="noopener noreferrer"
                class="contact-link"
              >
                <LinkedinIcon aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useHead } from '@vueuse/head'
import gradImage from '@/assets/webp/grad.webp'
import {
  ArrowRightIcon,
  CodeIcon,
  TrendingUpIcon,
  MapPinIcon,
  ShieldCheckIcon,
  GraduationCapIcon,
  BriefcaseIcon,
  TargetIcon,
  ShoppingCartIcon,
  MessageSquareIcon,
  EyeIcon,
  UsersIcon,
  MusicIcon,
  GamepadIcon,
  PenToolIcon,
  MailIcon,
  LinkedinIcon
} from 'lucide-vue-next'

export default {
  name: 'AboutPage',
  
  components: {
    ArrowRightIcon,
    CodeIcon,
    TrendingUpIcon,
    MapPinIcon,
    ShieldCheckIcon,
    GraduationCapIcon,
    BriefcaseIcon,
    TargetIcon,
    ShoppingCartIcon,
    MessageSquareIcon,
    EyeIcon,
    UsersIcon,
    MusicIcon,
    GamepadIcon,
    PenToolIcon,
    MailIcon,
    LinkedinIcon
  },
  
  data() {
    return {
      profileImage: gradImage
    }
  },
  
  setup() {
    useHead({
      title: 'About Andre Simpson | N15 Labs | Digital Marketing Stoke-on-Trent',
      meta: [
        {
          name: 'description',
          content: 'Meet Andre Simpson, founder of N15 Labs. BSc Computer Science graduate, Google Ads specialist, and web developer helping Stoke-on-Trent businesses grow online.'
        },
        {
          property: 'og:title',
          content: 'About Andre Simpson | N15 Labs'
        },
        {
          property: 'og:description',
          content: 'Digital marketer, SEO specialist, and web developer based in Stoke-on-Trent helping local businesses get more customers.'
        },
        {
          name: 'keywords',
          content: 'Andre Simpson, N15 Labs, digital marketing Stoke-on-Trent, web developer Staffordshire, Google Ads specialist'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://n15labs.co.uk/about'
        }
      ]
    })
  }
}
</script>

<style scoped>
/* ==================== BASE STYLES ==================== */
.about-page {
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
.about-hero {
  padding: 8rem 0 5rem;
}

.hero-content {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  align-items: center;
}

.hero-text h1 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: #ffffff;
  line-height: 1.2;
}

.hero-intro {
  font-size: 1.25rem;
  color: #a1a1aa;
  line-height: 1.7;
}

.hero-image {
  display: flex;
  justify-content: center;
}

.image-container {
  position: relative;
}

.profile-photo {
  width: 320px;
  height: 320px;
  border-radius: 20px;
  object-fit: cover;
  border: 3px solid #27272a;
  position: relative;
  z-index: 2;
}

.image-glow {
  position: absolute;
  top: 20px;
  left: 20px;
  right: -20px;
  bottom: -20px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3));
  border-radius: 20px;
  z-index: 1;
  filter: blur(20px);
}

/* ==================== WHY SECTION ==================== */
.why-section {
  padding: 5rem 0;
  background: linear-gradient(180deg, #111111 0%, #0a0a0a 100%);
}

.why-section h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #ffffff;
}

.why-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.why-card {
  background: linear-gradient(135deg, #18181b 0%, #1f1f23 100%);
  border: 1px solid #27272a;
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  gap: 1.5rem;
  transition: all 0.3s ease;
}

.why-card:hover {
  border-color: #3b82f6;
}

.why-icon {
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

.why-icon svg {
  width: 28px;
  height: 28px;
}

.why-content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #ffffff;
}

.why-content p {
  color: #a1a1aa;
  line-height: 1.7;
  font-size: 1rem;
}

/* ==================== BACKGROUND SECTION ==================== */
.background-section {
  padding: 5rem 0;
}

.background-content {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 4rem;
  align-items: start;
}

.background-text h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #ffffff;
}

.story-block p {
  color: #a1a1aa;
  line-height: 1.8;
  font-size: 1.0625rem;
  margin-bottom: 1.25rem;
}

.credentials-card {
  background: linear-gradient(135deg, #18181b 0%, #1f1f23 100%);
  border: 1px solid #27272a;
  border-radius: 16px;
  padding: 2rem;
  position: sticky;
  top: 2rem;
}

.credentials-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #ffffff;
}

.credentials-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.credentials-list li {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.25rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid #27272a;
}

.credentials-list li:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.credentials-list li svg {
  width: 24px;
  height: 24px;
  color: #3b82f6;
  flex-shrink: 0;
  margin-top: 2px;
}

.credentials-list li div {
  display: flex;
  flex-direction: column;
}

.credentials-list li strong {
  color: #ffffff;
  font-weight: 600;
  font-size: 1rem;
}

.credentials-list li span {
  color: #71717a;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

/* ==================== RESULTS SECTION ==================== */
.results-section {
  padding: 5rem 0;
  background: linear-gradient(180deg, #111111 0%, #0a0a0a 100%);
}

.results-section h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #ffffff;
  text-align: center;
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.result-card {
  background: linear-gradient(135deg, #18181b 0%, #1f1f23 100%);
  border: 1px solid #27272a;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
}

.result-value {
  font-size: 2.75rem;
  font-weight: 800;
  color: #3b82f6;
  margin-bottom: 0.5rem;
}

.result-label {
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.result-detail {
  font-size: 0.875rem;
  color: #71717a;
}

.results-cta {
  text-align: center;
  margin-top: 2.5rem;
}

.cta-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #3b82f6;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.0625rem;
  transition: gap 0.3s ease;
}

.cta-link:hover {
  gap: 0.875rem;
}

.cta-link svg {
  width: 20px;
  height: 20px;
}

/* ==================== VALUES SECTION ==================== */
.values-section {
  padding: 5rem 0;
}

.values-section h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #ffffff;
  text-align: center;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.value-card {
  background: linear-gradient(135deg, #18181b 0%, #1f1f23 100%);
  border: 1px solid #27272a;
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  gap: 1.5rem;
}

.value-icon {
  width: 48px;
  height: 48px;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: #3b82f6;
}

.value-icon svg {
  width: 24px;
  height: 24px;
}

.value-content h3 {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #ffffff;
}

.value-content p {
  color: #a1a1aa;
  line-height: 1.7;
  font-size: 0.9375rem;
}

/* ==================== PERSONAL SECTION ==================== */
.personal-section {
  padding: 5rem 0;
  background: linear-gradient(180deg, #111111 0%, #0a0a0a 100%);
}

.personal-content {
  max-width: 800px;
  margin: 0 auto;
}

.personal-text h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #ffffff;
}

.personal-text p {
  color: #a1a1aa;
  line-height: 1.8;
  font-size: 1.0625rem;
  margin-bottom: 1.25rem;
}

.interests-list {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.interest-item {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.75rem 1.25rem;
  background: linear-gradient(135deg, #18181b 0%, #1f1f23 100%);
  border: 1px solid #27272a;
  border-radius: 50px;
  color: #a1a1aa;
  font-size: 0.9375rem;
}

.interest-item svg {
  width: 18px;
  height: 18px;
  color: #3b82f6;
}

/* ==================== CTA SECTION ==================== */
.cta-section {
  padding: 5rem 0;
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

.cta-buttons {
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
}

.cta-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.35);
}

.cta-primary svg {
  width: 20px;
  height: 20px;
}

.contact-alternatives {
  border-top: 1px solid #27272a;
  padding-top: 1.5rem;
}

.contact-alternatives > p {
  color: #71717a;
  font-size: 0.9375rem;
  margin-bottom: 1rem;
}

.contact-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.contact-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #a1a1aa;
  text-decoration: none;
  font-size: 0.9375rem;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: #3b82f6;
}

.contact-link svg {
  width: 18px;
  height: 18px;
}

/* ==================== RESPONSIVE ==================== */
@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .hero-image {
    order: -1;
  }
  
  .profile-photo {
    width: 280px;
    height: 280px;
  }
  
  .why-grid,
  .values-grid {
    grid-template-columns: 1fr;
  }
  
  .background-content {
    grid-template-columns: 1fr;
  }
  
  .credentials-card {
    position: relative;
    top: 0;
  }
  
  .results-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1.25rem;
  }
  
  .about-hero {
    padding: 6rem 0 3rem;
  }
  
  .hero-text h1 {
    font-size: 2.5rem;
  }
  
  .hero-intro {
    font-size: 1.125rem;
  }
  
  .profile-photo {
    width: 240px;
    height: 240px;
  }
  
  .why-section h2,
  .background-text h2,
  .results-section h2,
  .values-section h2,
  .cta-card h2 {
    font-size: 2rem;
  }
  
  .why-card,
  .value-card {
    flex-direction: column;
    gap: 1rem;
  }
  
  .cta-card {
    padding: 2.5rem 1.5rem;
  }
}

@media (max-width: 480px) {
  .hero-text h1 {
    font-size: 2rem;
  }
  
  .profile-photo {
    width: 200px;
    height: 200px;
  }
  
  .results-grid {
    grid-template-columns: 1fr;
  }
  
  .result-value {
    font-size: 2.25rem;
  }
  
  .interests-list {
    flex-direction: column;
  }
  
  .contact-links {
    flex-direction: column;
    align-items: center;
  }
}

/* ==================== ACCESSIBILITY ==================== */
@media (prefers-reduced-motion: reduce) {
  .cta-primary,
  .cta-link,
  .why-card,
  .contact-link {
    transition: none;
  }
}

.cta-primary:focus,
.cta-link:focus,
.contact-link:focus {
  outline: 3px solid #3b82f6;
  outline-offset: 2px;
}
</style>