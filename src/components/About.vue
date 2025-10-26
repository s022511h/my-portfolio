<template>
  <div class="about-container">
    <section class="about-hero">
      <div class="hero-background">
        <div class="floating-particles">
          <div class="particle" v-for="n in 4" :key="n" :style="getParticleStyle(n)"></div>
        </div>
      </div>
      
      <div class="hero-content">
        <div class="hero-badge">
          <span class="status-dot"></span>
          About Andre Simpson
        </div>
        
        <h1 class="hero-headline">
          From Music to <span class="gradient-text">Code</span><br>
          My Developer Journey
        </h1>
        
        <p class="hero-subhead">
          A story of transformation, resilience, and finding purpose in building digital solutions 
          that make a real difference for businesses and creators.
        </p>
      </div>
    </section>

    <section class="story-section">
      <div class="container">
        <div class="story-content">
          <div class="story-text">
            <h2 class="section-title">The Journey to <span class="highlight">Full-Stack Development</span></h2>
            
            <div class="story-card">
              <h3 class="story-subtitle">From Music Production to Code</h3>
              <p class="story-paragraph">
                My path to software development has been anything but conventional. Starting as a music producer/ DJ 
                and studio owner with N15 Studios, I discovered my passion for creating digital experiences that solve real problems.
              </p>
              
              <p class="story-paragraph">
                After taking to Computer Science when initially seeking a business course, I completed my degree
                with University of Staffordshire finding a renewed purpose. I graduated with a 2:1 BSc (Hons) in Computer Science, achieving 77% in Web Development and 70% in my final project.
              </p>
              
              <p class="story-paragraph">
                Today, I combine my creative background with technical expertise to build full-stack applications 
                that are both functional and engaging. I specialise in full-stack development, and modern web 
                technologies, with a growing interest in AI integration and automation.
              </p>
            </div>
          </div>
          
          <div class="story-visual">
            <div class="profile-container">
               <img :src="gradImage" alt="Andre Simpson - Developer" class="profile-image">
              <div class="profile-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="values-section">
      <div class="container">
        <h2 class="section-title">What Drives Me</h2>
        
        <div class="values-grid">
          <div class="value-card">
            <div class="value-icon">🚀</div>
            <h3 class="value-title">Performance-First Mindset</h3>
            <p class="value-description">
              Every line of code I write is optimised for speed and efficiency. I believe fast websites 
              create better user experiences and drive real business results.
            </p>
          </div>
          
          <div class="value-card">
            <div class="value-icon">🎯</div>
            <h3 class="value-title">Problem-Solving Focus</h3>
            <p class="value-description">
              I don't just write code. I solve problems. Whether it's automating workflows or building 
              custom tools, I focus on creating solutions that make a difference.
            </p>
          </div>
          
          <div class="value-card">
            <div class="value-icon">🎨</div>
            <h3 class="value-title">Creative Engineering</h3>
            <p class="value-description">
              My background in music production taught me that great work combines technical skill with 
              creative vision. I bring this same approach to software development.
            </p>
          </div>
          
          <div class="value-card">
            <div class="value-icon">📚</div>
            <h3 class="value-title">Continuous Learning</h3>
            <p class="value-description">
              Technology evolves rapidly, and so do I. From AI tools to new frameworks, I'm always 
              expanding my skillset to deliver cutting-edge solutions.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="achievements-section">
      <div class="container">
        <h2 class="section-title">Academic & Professional <span class="highlight">Achievements</span></h2>
        
        <div class="achievements-grid">
          <div class="achievement-card">
            <div class="achievement-header">
              <div class="achievement-icon">🎓</div>
              <h3 class="achievement-title">BSc Computer Science (2:1)</h3>
            </div>
            <p class="achievement-description">
              Graduated from Staffordshire University with strong marks in Web Development (77%) 
              and Final Year Project (70%). Specialised in modern web frameworks and full-stack development.
            </p>
          </div>
          
          <div class="achievement-card">
            <div class="achievement-header">
              <div class="achievement-icon">💻</div>
              <h3 class="achievement-title">SneakTrack Project</h3>
            </div>
            <p class="achievement-description">
              Built a production-level real-time tracking application using Next.js, Firebase, and Puppeteer. 
              Scored 70/100 and demonstrated advanced full-stack development skills.
            </p>
          </div>
          
          <div class="achievement-card">
            <div class="achievement-header">
              <div class="achievement-icon">🏢</div>
              <h3 class="achievement-title">N15 Labs Founder</h3>
            </div>
            <p class="achievement-description">
              Founded and operate N15 Labs, delivering custom web solutions and automation tools. 
              Combine entrepreneurial vision with technical execution.
            </p>
          </div>
          
          <div class="achievement-card">
            <div class="achievement-header">
              <div class="achievement-icon">🌟</div>
              <h3 class="achievement-title">Industry Experience</h3>
            </div>
            <p class="achievement-description">
              Gained real-world experience at University of Staffordshire and Tamworth Camping, 
              working on production systems and data automation projects.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="personal-section">
      <div class="container">
        <div class="personal-content">
          <div class="personal-text">
            <h2 class="section-title">Beyond the Code</h2>
            
            <div class="personal-card">
              <p class="personal-paragraph">
                When I'm not coding, you'll find me in the studio producing music, exploring new gaming worlds, 
                or diving into creative writing projects. These interests aren't just hobbies, they inform my 
                approach to development, bringing creativity and storytelling to technical solutions.
              </p>
              
              <div class="interests-list">
                <div class="interest-item">
                  <span class="interest-icon">🎵</span>
                  <span class="interest-text">Music Production & Studio Engineering</span>
                </div>
                <div class="interest-item">
                  <span class="interest-icon">🎮</span>
                  <span class="interest-text">Gaming & Interactive Storytelling</span>
                </div>
                <div class="interest-item">
                  <span class="interest-icon">👟</span>
                  <span class="interest-text">Sneaker Collecting & Reselling</span>
                </div>
                <div class="interest-item">
                  <span class="interest-icon">✍️</span>
                  <span class="interest-text">Creative Writing & World-Building</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="contact-card">
            <h3 class="contact-title">Let's Connect</h3>
            <p class="contact-description">
              I'm always interested in discussing new projects, collaboration opportunities, 
              or just chatting about technology and creative processes.
            </p>
            
            <div class="contact-actions">
              <router-link class="cta-primary" to="/contact">
                Start a Conversation
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </router-link>
              
              <div class="social-links">
                <a href="mailto:dre_86@hotmail.co.uk" class="social-link">
                  <span>Email</span>
                </a>
                <a href="https://www.linkedin.com/in/andre-simpson-502365178" class="social-link">
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/s022511h/" class="social-link">
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import gradImage from '@/assets/webp/grad.webp';

export default {
  name: 'AboutPage',
  
  data() {
    return {
      gradImage
    };
  },
  
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
    document.title = 'About - Andre Simpson | Full-Stack Developer'
  }
}
</script>

<style scoped>
.about-container {
  background: #fafafa;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.about-hero {
  position: relative;
  min-height: 70vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  color: white;
  overflow: hidden;
  padding-top: 100px;
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
  background: rgba(59, 130, 246, 0.15);
  border: 1px solid rgba(59, 130, 246, 0.3);
  padding: 0.75rem 1.25rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  color: #3b82f6;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #3b82f6;
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

.story-section {
  padding: 6rem 0;
  background: white;
}

.story-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: center;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #111827;
  margin-bottom: 2rem;
  line-height: 1.2;
}

.highlight {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.story-card {
  background: #f9fafb;
  padding: 2rem;
  border-radius: 16px;
  border-left: 4px solid #3b82f6;
}

.story-subtitle {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
}

.story-paragraph {
  font-size: 1.125rem;
  line-height: 1.7;
  color: #374151;
  margin-bottom: 1.5rem;
}

.story-paragraph:last-child {
  margin-bottom: 0;
}

.profile-container {
  position: relative;
  display: flex;
  justify-content: center;
}

.profile-image {
  width: 300px;
  height: 300px;
  border-radius: 24px;
  object-fit: cover;
  border: 3px solid rgba(59, 130, 246, 0.2);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
}

.profile-image:hover {
  transform: scale(1.02);
}

.profile-glow {
  position: absolute;
  inset: -30px;
  background: linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2));
  border-radius: 40px;
  z-index: -1;
  filter: blur(30px);
  animation: glowPulse 3s ease-in-out infinite;
}

@keyframes glowPulse {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.7; }
}

.values-section {
  padding: 6rem 0;
  background: #f9fafb;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.value-card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.value-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border-color: #3b82f6;
}

.value-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.value-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
}

.value-description {
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
}

.achievements-section {
  padding: 6rem 0;
  background: white;
}

.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.achievement-card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.achievement-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border-color: #3b82f6;
}

.achievement-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.achievement-icon {
  font-size: 2rem;
}

.achievement-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin: 0;
}

.achievement-description {
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
}

.personal-section {
  padding: 6rem 0;
  background: #f9fafb;
}

.personal-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: start;
}

.personal-card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.personal-paragraph {
  font-size: 1.125rem;
  line-height: 1.7;
  color: #374151;
  margin-bottom: 2rem;
}

.interests-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.interest-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #f9fafb;
  border-radius: 12px;
}

.interest-icon {
  font-size: 1.5rem;
}

.interest-text {
  font-weight: 500;
  color: #374151;
}

.contact-card {
  background: linear-gradient(135deg, #111827 0%, #1f2937 100%);
  color: white;
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  position: sticky;
  top: 2rem;
}

.contact-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
}

.contact-description {
  color: #d1d5db;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.contact-actions {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.cta-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
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

.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-link {
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  text-decoration: none;
  color: #d1d5db;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

@media (max-width: 768px) {
  .hero-content {
    padding: 2rem 1rem;
  }

   .about-hero {
    padding-top: 90px; 
  }
  
  .hero-headline {
    font-size: 2.75rem;
  }
  
  .hero-subhead {
    font-size: 1.25rem;
  }
  
  .story-content,
  .personal-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .profile-image {
    width: 250px;
    height: 250px;
  }
  
  .contact-card {
    position: relative;
    top: 0;
  }
  
  .social-links {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }
  
  .hero-headline {
    font-size: 2.25rem;
  }

  .about-hero {
    padding-top: 80px; 
  }
  
  .section-title {
    font-size: 1.75rem;
  }
  
  .value-card,
  .achievement-card,
  .personal-card,
  .contact-card {
    padding: 1.5rem;
  }
}
</style>