<template>
  <div class="services-container">
    <section class="services-hero">
      <div class="hero-background">
        <div class="floating-particles">
          <div class="particle" v-for="n in 4" :key="n" :style="getParticleStyle(n)"></div>
        </div>
      </div>
      
      <div class="hero-content">
        <div class="hero-badge">
          <span class="status-dot"></span>
          Services & Solutions
        </div>
        
        <h1 class="hero-headline">
          Building <span class="gradient-text">Performance-First</span><br>
          Digital Solutions
        </h1>
        
        <p class="hero-subhead">
          I help businesses and individuals build modern web applications, optimize workflows, 
          and implement technical solutions that drive real results.
        </p>
      </div>
    </section>

    <section class="services-content">
      <div class="container">
        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon">🚀</div>
            <h3 class="service-title">Full-Stack Web Development</h3>
            <p class="service-description">
              Custom web applications built with modern frameworks like Vue.js, React, and Next.js. 
              From concept to deployment, I create responsive, accessible, and performance-optimized solutions.
            </p>
            <ul class="service-features">
              <li>Single Page Applications (SPAs)</li>
              <li>Progressive Web Apps (PWAs)</li>
              <li>E-commerce platforms</li>
              <li>Admin dashboards and CMS</li>
              <li>API integration and development</li>
            </ul>
          </div>

          <div class="service-card">
            <div class="service-icon">🛠️</div>
            <h3 class="service-title">Data Automation & Analytics</h3>
            <p class="service-description">
              Streamline your workflows with custom automation scripts and data processing solutions. 
              I build tools that save time and reduce manual work while improving accuracy.
            </p>
            <ul class="service-features">
              <li>Python/Node.js automation scripts</li>
              <li>CSV/Excel data processing</li>
              <li>API integrations and data syncing</li>
              <li>Reporting and analytics dashboards</li>
              <li>Database design and optimization</li>
            </ul>
          </div>

          <div class="service-card">
            <div class="service-icon">📊</div>
            <h3 class="service-title">SEO & Digital Optimization</h3>
            <p class="service-description">
              Improve your online presence with technical SEO implementations, performance optimization, 
              and content management tools that drive organic growth.
            </p>
            <ul class="service-features">
              <li>Technical SEO audits and fixes</li>
              <li>Page speed optimization</li>
              <li>Google Analytics & GA4 setup</li>
              <li>Content optimization tools</li>
              <li>Local SEO and schema markup</li>
            </ul>
          </div>

          <div class="service-card">
            <div class="service-icon">🤖</div>
            <h3 class="service-title">AI Integration & Consultation</h3>
            <p class="service-description">
              Leverage AI tools to enhance your applications and workflows. From ChatGPT API integration 
              to AI-assisted development strategies, I help you adopt AI effectively.
            </p>
            <ul class="service-features">
              <li>ChatGPT/OpenAI API integration</li>
              <li>AI-powered content tools</li>
              <li>Workflow automation with AI</li>
              <li>AI development strategy consulting</li>
              <li>Custom AI solution development</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="process-section">
      <div class="container">
        <h2 class="section-title">How I Work</h2>
        
        <div class="process-grid">
          <div class="process-step">
            <div class="step-number">1</div>
            <h3 class="step-title">Discovery</h3>
            <p class="step-description">
              We discuss your needs, goals, and technical requirements to define the project scope and timeline.
            </p>
          </div>
          
          <div class="process-step">
            <div class="step-number">2</div>
            <h3 class="step-title">Planning</h3>
            <p class="step-description">
              I create a detailed plan with milestones, technical specifications, and clear deliverables.
            </p>
          </div>
          
          <div class="process-step">
            <div class="step-number">3</div>
            <h3 class="step-title">Development</h3>
            <p class="step-description">
              Regular updates and iterative development with your feedback incorporated throughout the process.
            </p>
          </div>
          
          <div class="process-step">
            <div class="step-number">4</div>
            <h3 class="step-title">Delivery</h3>
            <p class="step-description">
              Final testing, deployment, and handover with documentation and ongoing support options.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="pricing-section">
      <div class="container">
        <h2 class="section-title">Flexible <span class="highlight">Pricing Options</span></h2>
        
        <div class="pricing-grid">
          <div class="pricing-card">
            <h3 class="pricing-title">Hourly Consultation</h3>
            <div class="pricing-amount">£20<span class="pricing-period">/hour</span></div>
            <p class="pricing-description">Perfect for quick fixes, advice, or small tasks</p>
            <ul class="pricing-features">
              <li>Minimum 2 hours</li>
              <li>Technical consultation</li>
              <li>Code reviews</li>
              <li>Problem-solving sessions</li>
            </ul>
          </div>
          
          <div class="pricing-card featured">
            <div class="featured-badge">Most Popular</div>
            <h3 class="pricing-title">Project-Based</h3>
            <div class="pricing-amount">Custom<span class="pricing-period">Quote</span></div>
            <p class="pricing-description">Fixed price for defined scope and deliverables</p>
            <ul class="pricing-features">
              <li>Detailed project planning</li>
              <li>Fixed timeline and budget</li>
              <li>Regular progress updates</li>
              <li>Full project delivery</li>
            </ul>
          </div>
          
          <div class="pricing-card">
            <h3 class="pricing-title">Monthly Retainer</h3>
            <div class="pricing-amount">£500<span class="pricing-period">/month</span></div>
            <p class="pricing-description">Ongoing development and maintenance support</p>
            <ul class="pricing-features">
              <li>20 hours included</li>
              <li>Priority support</li>
              <li>Regular maintenance</li>
              <li>Strategic planning</li>
            </ul>
          </div>
        </div>
        
        <p class="pricing-note">
          All prices exclude VAT. Custom packages available for larger projects or long-term partnerships.
        </p>
      </div>
    </section>

    <section class="technologies-section">
        <div class="container">
            <h2 class="section-title">Technologies I Work With</h2>
            
            <div class="tech-grid">
            <div class="tech-category">
                <h3 class="tech-category-title">Frontend</h3>
                <div class="tech-items">
                <span class="tech-item">Vue.js</span>
                <span class="tech-item">React</span>
                <span class="tech-item">Next.js</span>
                <span class="tech-item">Nuxt 3</span>
                <span class="tech-item">JavaScript</span>
                <span class="tech-item">TypeScript</span>
                <span class="tech-item">Tailwind CSS</span>
                </div>
            </div>
            
            <div class="tech-category">
                <h3 class="tech-category-title">Backend</h3>
                <div class="tech-items">
                <span class="tech-item">Node.js</span>
                <span class="tech-item">Python</span>
                <span class="tech-item">PHP</span>
                <span class="tech-item">C#/.NET</span>
                <span class="tech-item">Java</span>
                <span class="tech-item">Laravel</span>
                <span class="tech-item">Express.js</span>
                </div>
            </div>
            
            <div class="tech-category">
                <h3 class="tech-category-title">Database & Cloud</h3>
                <div class="tech-items">
                <span class="tech-item">MySQL</span>
                <span class="tech-item">MongoDB</span>
                <span class="tech-item">Firestore</span>
                <span class="tech-item">Supabase</span>
                <span class="tech-item">AWS</span>
                <span class="tech-item">Railway</span>
                </div>
            </div>
            
            <div class="tech-category">
                <h3 class="tech-category-title">Tools & Integration</h3>
                <div class="tech-items">
                <span class="tech-item">REST APIs</span>
                <span class="tech-item">Amazon Seller API</span>
                <span class="tech-item">Docker</span>
                <span class="tech-item">Linux</span>
                <span class="tech-item">Git/GitHub</span>
                <span class="tech-item">WordPress</span>
                </div>
            </div>
            
            <div class="tech-category">
                <h3 class="tech-category-title">AI & Analytics</h3>
                <div class="tech-items">
                <span class="tech-item">ChatGPT API</span>
                <span class="tech-item">Puppeteer</span>
                <span class="tech-item">Google Analytics</span>
                <span class="tech-item">CMS Services</span>
                </div>
            </div>
            </div>
        </div>
        </section>

    <section class="cta-section">
      <div class="container">
        <div class="cta-card">
          <h2 class="cta-title">Ready to Start Your Project?</h2>
          <p class="cta-description">
            Let's discuss how I can help bring your ideas to life. I offer free initial consultations 
            to understand your needs and provide honest advice on the best path forward.
          </p>
          
          <div class="cta-actions">
            <router-link class="cta-primary" to="/contact">
              Start a Conversation
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </router-link>
            <router-link class="cta-secondary" to="/projects">
              View Portfolio
            </router-link>
          </div>
          
          <p class="cta-note">
            Typically respond within 24 hours • Based in Stoke-on-Trent, UK
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ServicesPage',
  methods: {
    getParticleStyle(n) {
      return {
        left: Math.random() * 100 + '%',
        animationDelay: (n * 0.8) + 's',
        animationDuration: (4 + Math.random() * 2) + 's'
      }
    }
  },
  mounted() {
    document.title = 'Services - Andre Simpson | Full-Stack Developer'
  }
}
</script>

<style scoped>
.services-container {
  background: #fafafa;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.services-hero {
  position: relative;
  min-height: 70vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  color: white;
  overflow: hidden;
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
  width: 6px;
  height: 6px;
  background: rgba(59, 130, 246, 0.4);
  border-radius: 50%;
  animation: float 5s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { 
    transform: translateY(0px) translateX(0px);
    opacity: 0.2;
  }
  50% { 
    transform: translateY(-80px) translateX(40px);
    opacity: 0.8;
  }
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  text-align: center;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(16, 185, 129, 0.15);
  border: 1px solid rgba(16, 185, 129, 0.3);
  padding: 0.75rem 1.25rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  color: #10b981;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #10b981;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.hero-headline {
  font-size: clamp(3rem, 6vw, 4.5rem);
  font-weight: 800;
  line-height: 1.1;
  margin: 0 0 2rem 0;
  letter-spacing: -0.02em;
}

.gradient-text {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subhead {
  font-size: 1.375rem;
  line-height: 1.7;
  color: #a1a1aa;
  margin-bottom: 0;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.services-content {
  padding: 6rem 0;
  background: white;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.service-card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border-color: #3b82f6;
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  display: block;
}

.service-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
}

.service-description {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 1.0625rem;
}

.service-features {
  list-style: none;
  padding: 0;
  margin: 0;
}

.service-features li {
  padding: 0.5rem 0;
  color: #374151;
  font-size: 0.9375rem;
  position: relative;
  padding-left: 1.5rem;
}

.service-features li:before {
  content: '•';
  position: absolute;
  left: 0;
  color: #3b82f6;
  font-weight: bold;
}

.process-section {
  padding: 6rem 0;
  background: #f9fafb;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #111827;
  margin-bottom: 3rem;
  text-align: center;
}

.highlight {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.process-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.process-step {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;
}

.process-step:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.step-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: #3b82f6;
  color: white;
  border-radius: 50%;
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 auto 1rem auto;
}

.step-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
}

.step-description {
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
}

.pricing-section {
  padding: 6rem 0;
  background: white;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.pricing-card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  text-align: center;
  position: relative;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.pricing-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.pricing-card.featured {
  border-color: #3b82f6;
  transform: scale(1.05);
}

.featured-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: #3b82f6;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
}

.pricing-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
}

.pricing-amount {
  font-size: 2.5rem;
  font-weight: 800;
  color: #3b82f6;
  margin-bottom: 1rem;
}

.pricing-period {
  font-size: 1rem;
  font-weight: 500;
  color: #6b7280;
}

.pricing-description {
  color: #6b7280;
  margin-bottom: 1.5rem;
}

.pricing-features {
  list-style: none;
  padding: 0;
  margin: 0;
}

.pricing-features li {
  padding: 0.5rem 0;
  color: #374151;
  font-size: 0.9375rem;
}

.pricing-note {
  text-align: center;
  color: #6b7280;
  font-style: italic;
  margin: 0;
}

.technologies-section {
  padding: 6rem 0;
  background: #f9fafb;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.tech-category {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
}

.tech-category-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
}

.tech-items {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.tech-item {
  background: #f3f4f6;
  color: #374151;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid #e5e7eb;
}

.cta-section {
  padding: 6rem 0;
  background: white;
}

.cta-card {
  background: linear-gradient(135deg, #111827 0%, #1f2937 100%);
  color: white;
  padding: 4rem;
  border-radius: 24px;
  text-align: center;
}

.cta-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: white;
}

.cta-description {
  font-size: 1.25rem;
  color: #d1d5db;
  margin-bottom: 2.5rem;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
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
  font-weight: 600;
  font-size: 1.125rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.3);
}

.cta-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(59, 130, 246, 0.4);
}

.cta-primary svg {
  width: 18px;
  height: 18px;
}

.cta-secondary {
  display: inline-flex;
  align-items: center;
  color: #d4d4d8;
  padding: 1.25rem 2rem;
  border: 1px solid #374151;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.125rem;
  transition: all 0.3s ease;
}

.cta-secondary:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: #4b5563;
}

.cta-note {
  color: #9ca3af;
  font-style: italic;
  margin: 0;
}

@media (max-width: 768px) {
  .hero-content {
    padding: 2rem 1rem;
  }
  
  .hero-headline {
    font-size: 2.75rem;
  }
  
  .hero-subhead {
    font-size: 1.25rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .services-grid,
  .process-grid,
  .pricing-grid,
  .tech-grid {
    grid-template-columns: 1fr;
  }
  
  .pricing-card.featured {
    transform: none;
  }
  
  .cta-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .cta-card {
    padding: 3rem 2rem;
  }
  
  .cta-title {
    font-size: 2rem;
  }
  
  .cta-description {
    font-size: 1.125rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }
  
  .hero-headline {
    font-size: 2.25rem;
  }
  
  .section-title {
    font-size: 1.75rem;
  }
  
  .service-card,
  .process-step,
  .pricing-card,
  .tech-category {
    padding: 1.5rem;
  }
  
  .cta-card {
    padding: 2rem 1.5rem;
  }
}
</style>