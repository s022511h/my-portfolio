<template>
  <div class="resume-container">
    <section class="resume-hero">
      <div class="hero-background">
        <div class="floating-particles">
          <div class="particle" v-for="n in 4" :key="n" :style="getParticleStyle(n)"></div>
        </div>
      </div>
      
      <div class="hero-content">
        <div class="hero-badge">
          <span class="status-dot"></span>
          Available for Hire
        </div>
        
        <h1 class="hero-headline">
          Andre <span class="gradient-text">Simpson</span><br>
          Full-Stack Developer
        </h1>
        
        <p class="hero-subhead">
          Computer Science Graduate (2:1) with expertise in Vue.js, Node.js, and modern web technologies. 
          Building performance-first applications for ambitious businesses.
        </p>
        
        <div class="contact-details">
          <div class="contact-item">
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span>dre_86@hotmail.co.uk</span>
          </div>
          <div class="contact-item">
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span>07931 206686</span>
          </div>
          <div class="contact-item">
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
            </svg>
            <span>Stoke-on-Trent, UK</span>
          </div>
        </div>

        <div class="hero-actions">
          <button @click="downloadCV" class="cta-primary">
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
            Download CV PDF
          </button>
          <router-link class="cta-secondary" to="/contact">
            Get In Touch
          </router-link>
        </div>
      </div>
    </section>

    <section class="resume-content">
      <div class="container">
        <!-- Professional Summary -->
        <div class="resume-section">
          <h2 class="section-title">Professional Summary</h2>
          <div class="summary-card">
            <p class="summary-text">
              Computer Science graduate (BSc Hons, 2:1) with strong skills in PHP, Python, VBA, and data automation, 
              combined with experience in React, Next.js, and database systems (SQL & NoSQL). I build reliable automation 
              scripts, clean data workflows, and scalable tools that improve accuracy and efficiency.
            </p>
          </div>
        </div>

        <!-- Experience -->
        <div class="resume-section">
          <h2 class="section-title">Employment Experience</h2>
          
          <div class="experience-grid">
            <div class="experience-card">
              <div class="experience-header">
                <h3 class="job-title">Freelance Software & Web Developer</h3>
                <div class="company-period">
                  <span class="company">N15 Labs</span>
                  <span class="period">Jan 2024 - Present</span>
                </div>
              </div>
              <ul class="experience-details">
                <li>Shipped small internal utilities and web UIs. Also, reusable components, form workflows, and admin-style pages for content/ops.</li>
                <li>Implemented accessibility fixes and Lighthouse-led performance improvements. Set up GA4, env configs, and basic CI checks.</li>
                <li>Wrote batch scripts in Python/Node for catalogue clean-ups and data formatting to reduce manual work.</li>
              </ul>
            </div>

            <div class="experience-card">
              <div class="experience-header">
                <h3 class="job-title">Web Marketing Assistant</h3>
                <div class="company-period">
                  <span class="company">Staffordshire University</span>
                  <span class="period">Sep 2024 - Jun 2025</span>
                </div>
              </div>
              <ul class="experience-details">
                <li>Maintained/debugged HTML/CSS/JS in production; delivered accessibility & UX improvements and performed cross-browser QA.</li>
                <li>Collaborated with designers/content teams; shipped safe, incremental changes with clear notes and handover.</li>
              </ul>
            </div>

            <div class="experience-card">
              <div class="experience-header">
                <h3 class="job-title">Digital Marketing & SEO Intern</h3>
                <div class="company-period">
                  <span class="company">Tamworth Camping</span>
                  <span class="period">Jul 2024 - Jan 2025</span>
                </div>
              </div>
              <ul class="experience-details">
                <li>Structured product data (SKUs, attributes) and built Python helpers to validate inputs before publishing.</li>
                <li>Contributed to reporting and content performance reviews using spreadsheets and basic BI charts.</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Education -->
        <div class="resume-section">
          <h2 class="section-title">Education</h2>
          
          <div class="education-card">
            <div class="education-header">
              <h3 class="degree-title">BSc (Hons) Computer Science (2:1)</h3>
              <div class="institution-period">
                <span class="institution">University of Staffordshire</span>
                <span class="period">2023-2025</span>
              </div>
            </div>
            <div class="grades-grid">
              <div class="grade-item">
                <span class="subject">Web Development:</span>
                <span class="grade excellent">77%</span>
              </div>
              <div class="grade-item">
                <span class="subject">Web & AI:</span>
                <span class="grade excellent">70%</span>
              </div>
              <div class="grade-item">
                <span class="subject">Web Frameworks:</span>
                <span class="grade good">60%</span>
              </div>
              <div class="grade-item">
                <span class="subject">Final Project:</span>
                <span class="grade excellent">70%</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Key Projects -->
        <div class="resume-section">
          <h2 class="section-title">Key Projects</h2>
          
          <div class="projects-grid">
            <div class="project-card">
              <h3 class="project-title">SneakTrack — Real-Time Stock & Price Tracker</h3>
              <div class="project-tech">Next.js (React) • TypeScript • Firebase • REST APIs</div>
              <p class="project-description">
                Built a data intensive dashboard that normalises live product data, adds filters/watchlists/notifications, 
                and exposes results via a performant, mobile-first UI. Implemented validation, retries, and structured 
                logging to aid troubleshooting. (Final-year project, 70/100)
              </p>
            </div>

            <div class="project-card">
              <h3 class="project-title">Codex Builder — Story-World CMS / PWA</h3>
              <div class="project-tech">Nuxt 3 (Vue 3 + TypeScript) • Pinia • Tailwind • Firebase Auth</div>
              <p class="project-description">
                Multi-entity CRUD (Characters/Items/Locations/Groups) with relationships, tags, and export flows. 
                Offline-first behaviours, composables/stores for clean state, and accessible component architecture.
              </p>
            </div>

            <div class="project-card">
              <h3 class="project-title">Content Optimiser Tool — AI-Assisted Research</h3>
              <div class="project-tech">Python (Flask) • ChatGPT API • React</div>
              <p class="project-description">
                REST API that scores topics and returns suggestions; handled rate limits/errors and provided 
                concise API docs and sample requests.
              </p>
            </div>
          </div>
        </div>

        <!-- Skills -->
        <div class="resume-section">
          <h2 class="section-title">Technical Skills</h2>
          
          <div class="skills-grid">
            <div class="skill-category">
              <h3 class="category-title">Frontend Development</h3>
              <div class="skill-tags">
                <span class="skill-tag">Vue.js</span>
                <span class="skill-tag">React</span>
                <span class="skill-tag">Next.js</span>
                <span class="skill-tag">Nuxt 3</span>
                <span class="skill-tag">Tailwind CSS</span>
                <span class="skill-tag">JavaScript</span>
                <span class="skill-tag">TypeScript</span>
              </div>
            </div>

            <div class="skill-category">
              <h3 class="category-title">Backend & Database</h3>
              <div class="skill-tags">
                <span class="skill-tag">Node.js</span>
                <span class="skill-tag">Python</span>
                <span class="skill-tag">PHP</span>
                <span class="skill-tag">MySQL</span>
                <span class="skill-tag">Firestore</span>
                <span class="skill-tag">REST APIs</span>
              </div>
            </div>

            <div class="skill-category">
              <h3 class="category-title">Tools & Workflow</h3>
              <div class="skill-tags">
                <span class="skill-tag">Git/GitHub</span>
                <span class="skill-tag">Postman</span>
                <span class="skill-tag">GA4</span>
                <span class="skill-tag">CI/CD</span>
                <span class="skill-tag">Puppeteer</span>
                <span class="skill-tag">ChatGPT API</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ResumeView',
  methods: {
    getParticleStyle(n) {
      return {
        left: Math.random() * 100 + '%',
        animationDelay: (n * 0.8) + 's',
        animationDuration: (4 + Math.random() * 2) + 's'
      }
    },
    downloadCV() {
      const link = document.createElement('a');
      link.href = '/Andre_Simpson_CV.pdf'; 
      link.download = 'Andre_Simpson_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  },
  mounted() {
    document.title = 'Resume - Andre Simpson | Full-Stack Developer'
  }
}
</script>

<style scoped>
.resume-container {
  background: #fafafa;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.resume-hero {
  position: relative;
  min-height: 80vh;
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
  background: rgba(34, 197, 94, 0.15);
  border: 1px solid rgba(34, 197, 94, 0.3);
  padding: 0.75rem 1.25rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
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
  margin-bottom: 2.5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.contact-details {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #d1d5db;
  font-size: 1rem;
}

.contact-item svg {
  width: 18px;
  height: 18px;
  color: #3b82f6;
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.cta-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  padding: 1.25rem 2rem;
  border: none;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.125rem;
  cursor: pointer;
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

.resume-content {
  padding: 6rem 0;
  background: white;
}

.resume-section {
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #111827;
  margin-bottom: 2rem;
  text-align: center;
}

.summary-card {
  background: #f9fafb;
  padding: 2rem;
  border-radius: 16px;
  border-left: 4px solid #3b82f6;
  max-width: 800px;
  margin: 0 auto;
}

.summary-text {
  font-size: 1.25rem;
  line-height: 1.7;
  color: #374151;
  margin: 0;
}

.experience-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.experience-card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.experience-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  border-color: #3b82f6;
}

.experience-header {
  margin-bottom: 1.5rem;
}

.job-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;
}

.company-period {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.company {
  font-size: 1.125rem;
  font-weight: 600;
  color: #3b82f6;
}

.period {
  font-size: 1rem;
  color: #6b7280;
  font-style: italic;
}

.experience-details {
  list-style: none;
  padding: 0;
  margin: 0;
}

.experience-details li {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  position: relative;
  color: #374151;
  line-height: 1.6;
  font-size: 1.0625rem;
}

.experience-details li:before {
  content: '•';
  position: absolute;
  left: 0;
  color: #3b82f6;
  font-weight: bold;
  font-size: 1.25rem;
}

.education-card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  max-width: 700px;
  margin: 0 auto;
}

.education-header {
  margin-bottom: 1.5rem;
}

.degree-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;
}

.institution-period {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.institution {
  font-size: 1.125rem;
  font-weight: 600;
  color: #3b82f6;
}

.grades-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.grade-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  background: #f9fafb;
  border-radius: 8px;
}

.subject {
  font-weight: 500;
  color: #374151;
}

.grade {
  font-weight: 700;
  font-size: 1.125rem;
}

.grade.excellent {
  color: #059669;
}

.grade.good {
  color: #d97706;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.project-card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  border-color: #3b82f6;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.75rem;
}

.project-tech {
  font-size: 0.875rem;
  color: #3b82f6;
  font-weight: 500;
  margin-bottom: 1rem;
}

.project-description {
  color: #4b5563;
  line-height: 1.6;
  margin: 0;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.skill-category {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.category-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.skill-tag {
  background: #f3f4f6;
  color: #374151;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;
}

.skill-tag:hover {
  background: #3b82f6;
  color: white;
  border-color: #3b82f6;
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
  
  .contact-details {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .company-period,
  .institution-period {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .projects-grid,
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  .grades-grid {
    grid-template-columns: 1fr;
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
  
  .experience-card,
  .project-card,
  .skill-category {
    padding: 1.5rem;
  }
}
</style>