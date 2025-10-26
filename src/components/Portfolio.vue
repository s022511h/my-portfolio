<template>
  <div class="portfolio">
    <div class="container">
      <div class="portfolio-header">
        <span class="section-label">Technical Expertise</span>
        <h2>Skills & <span class="highlight">Technologies</span></h2>
        <p class="portfolio-intro">
          A comprehensive toolkit for building modern, performance-first web applications
        </p>
      </div>

      <div class="skills-categories">
        <div class="category-section">
          <div class="category-header">
            <div class="category-icon">🎨</div>
            <h3 class="category-title">Frontend Development</h3>
            <p class="category-description">User interface and experience technologies</p>
          </div>
          <div class="skills-grid frontend">
            <SkillCard
              v-for="skill in frontendSkills"
              :key="skill.name"
              :skill="skill"
            />
          </div>
        </div>

        <div class="category-section">
          <div class="category-header">
            <div class="category-icon">⚙️</div>
            <h3 class="category-title">Backend & Database</h3>
            <p class="category-description">Server-side logic and data management</p>
          </div>
          <div class="skills-grid backend">
            <SkillCard
              v-for="skill in backendSkills"
              :key="skill.name"
              :skill="skill"
            />
          </div>
        </div>

        <div class="category-section">
          <div class="category-header">
            <div class="category-icon">🛠️</div>
            <h3 class="category-title">Tools & Integration</h3>
            <p class="category-description">Development tools and third-party services</p>
          </div>
          <div class="skills-grid tools">
            <SkillCard
              v-for="skill in toolsSkills"
              :key="skill.name"
              :skill="skill"
            />
          </div>
        </div>
      </div>

      <div class="expertise-summary">
        <div class="summary-card">
          <h3>Ready to Build Your Project?</h3>
          <p>With expertise across the full development stack, I can bring your vision to life with modern, scalable solutions.</p>
          <router-link class="cta-primary" to="/contact">
            Get Your Free Consultation
            <svg class="cta-arrow" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" focusable="false">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useHead } from '@vueuse/head'
import { defineAsyncComponent } from 'vue'

const SkillCard = defineAsyncComponent(() => import('./SkillCard.vue'))

import {
  siReact, siNextdotjs, siJavascript, siTailwindcss,
  siHtml5, siNodedotjs, siExpress, siFirebase,
  siPhp, siPython,
  siMongodb, siMysql, siLinux, siGit, siWordpress,
  siPuppeteer, siOpenai, siGoogleanalytics
} from 'simple-icons/icons'

export default {
  name: 'PortfolioGallery',
  setup() {
    useHead({
      title: 'Technical Skills & Expertise | Andre Simpson',
      meta: [
        {
          name: 'description',
          content: 'Comprehensive technical skills in Vue.js, Node.js, React, Python, and modern web development tools. Frontend, backend, and full-stack expertise.'
        },
        {
          property: 'og:title',
          content: 'Technical Skills & Expertise | Andre Simpson'
        },
        {
          property: 'og:description',
          content: 'Comprehensive technical skills in Vue.js, Node.js, React, Python, and modern web development tools.'
        },
        {
          name: 'keywords',
          content: 'Vue.js, Node.js, React, JavaScript, Python, MongoDB, MySQL, web development skills, technical expertise'
        }
      ]
    })
  },
  components: {
    SkillCard
  },
  computed: {
    frontendSkills() {
      return [
        { name: 'JavaScript', icon: siJavascript?.svg, level: 'Expert', description: 'Language of the web — frontend & backend', proficiency: 95 },
        { name: 'HTML5', icon: siHtml5?.svg, level: 'Expert', description: 'Semantic structure for modern UIs', proficiency: 98 },
        { name: 'React.js', icon: siReact?.svg, level: 'Advanced', description: 'Component-based SPA development', proficiency: 80 },
        { name: 'Next.js', icon: siNextdotjs?.svg, level: 'Advanced', description: 'React framework with SSR and API routes', proficiency: 75 },
        { name: 'Tailwind CSS', icon: siTailwindcss?.svg, level: 'Advanced', description: 'Utility-first CSS styling framework', proficiency: 85 }
      ]
    },
    backendSkills() {
      return [
        { name: 'Node.js', icon: siNodedotjs?.svg, level: 'Expert', description: 'Backend JavaScript runtime', proficiency: 92 },
        { name: 'REST APIs', icon: siOpenai?.svg, level: 'Expert', description: 'Data flow via HTTP endpoints', proficiency: 95 },
        { name: 'Express.js', icon: siExpress?.svg, level: 'Advanced', description: 'Web server framework for Node.js', proficiency: 85 },
        { name: 'Firebase', icon: siFirebase?.svg, level: 'Advanced', description: 'Realtime DB, auth, hosting & functions', proficiency: 80 },
        { name: 'MongoDB', icon: siMongodb?.svg, level: 'Advanced', description: 'NoSQL database for flexible documents', proficiency: 78 },
        { name: 'MySQL', icon: siMysql?.svg, level: 'Advanced', description: 'Relational DB for structured queries', proficiency: 75 },
        { name: 'PHP', icon: siPhp?.svg, level: 'Intermediate', description: 'Server-side scripting language', proficiency: 70 },
        { name: 'Python', icon: siPython?.svg, level: 'Intermediate', description: 'Used for scraping, automation & data tools', proficiency: 72 }
      ]
    },
    toolsSkills() {
      return [
        { name: 'Git', icon: siGit?.svg, level: 'Expert', description: 'Version control with GitHub integration', proficiency: 95 },
        { name: 'SEO & Analytics', icon: siGoogleanalytics?.svg, level: 'Advanced', description: 'Data-driven site optimisation', proficiency: 85 },
        { name: 'Puppeteer', icon: siPuppeteer?.svg, level: 'Advanced', description: 'Web scraping & headless browser logic', proficiency: 82 },
        { name: 'WordPress', icon: siWordpress?.svg, level: 'Advanced', description: 'CMS development for creators & clients', proficiency: 80 },
        { name: 'ChatGPT / AI Tools', icon: siOpenai?.svg, level: 'Advanced', description: 'AI integrations & automation', proficiency: 78 },
        { name: 'Linux', icon: siLinux?.svg, level: 'Intermediate', description: 'CLI, server hosting & bash scripting', proficiency: 68 }
      ]
    }
  }
}
</script>

<style scoped>
.portfolio {
  padding: 6rem 0;
  background: #f9fafb;
  min-height: 100vh;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.portfolio-header {
  text-align: center;
  margin-bottom: 5rem;
}

.section-label {
  display: inline-block;
  background: #dbeafe;
  color: #1d4ed8;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
}

.portfolio-header h2 {
  font-size: 2.5rem;
  font-weight: 800;
  color: #111827;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.highlight {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.portfolio-intro {
  font-size: 1.25rem;
  color: #6b7280;
  margin-bottom: 0;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
}

.skills-categories {
  display: flex;
  flex-direction: column;
  gap: 5rem;
  margin-bottom: 5rem;
}

.category-section {
  position: relative;
}

.category-header {
  text-align: center;
  margin-bottom: 3rem;
}

.category-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.category-title {
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;
  position: relative;
}

.category-description {
  font-size: 1.125rem;
  color: #6b7280;
  margin: 0;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.skills-grid {
  display: grid;
  gap: 1.5rem;
  margin-top: 2rem;
}

.skills-grid.frontend {
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}

.skills-grid.backend {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.skills-grid.tools {
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}

.expertise-summary {
  background: linear-gradient(135deg, #111827 0%, #1f2937 100%);
  border-radius: 24px;
  padding: 3rem;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;
}

.expertise-summary::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
}

.summary-card h3 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
}

.summary-card p {
  font-size: 1.25rem;
  color: #d1d5db;
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
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

.cta-arrow {
  width: 18px;
  height: 18px;
  transition: transform 0.3s ease;
}

.cta-primary:hover .cta-arrow {
  transform: translateX(3px);
}

@media (max-width: 1024px) {
  .skills-grid.frontend,
  .skills-grid.backend,
  .skills-grid.tools {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
}

@media (max-width: 768px) {
  .portfolio {
    padding: 4rem 0;
  }

  .container {
    padding: 0 1.5rem;
  }

  .portfolio-header {
    margin-bottom: 4rem;
  }

  .portfolio-header h2 {
    font-size: 2rem;
  }

  .portfolio-intro {
    font-size: 1.125rem;
  }

  .skills-categories {
    gap: 4rem;
    margin-bottom: 4rem;
  }

  .category-title {
    font-size: 1.75rem;
  }

  .category-description {
    font-size: 1rem;
  }

  .skills-grid.frontend,
  .skills-grid.backend,
  .skills-grid.tools {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.25rem;
  }

  .expertise-summary {
    padding: 2rem;
  }

  .summary-card h3 {
    font-size: 1.75rem;
  }

  .summary-card p {
    font-size: 1.125rem;
  }
}

@media (max-width: 480px) {
  .portfolio {
    padding: 3rem 0;
  }

  .container {
    padding: 0 1rem;
  }

  .portfolio-header {
    margin-bottom: 3rem;
  }

  .portfolio-header h2 {
    font-size: 1.75rem;
  }

  .portfolio-intro {
    font-size: 1rem;
  }

  .skills-grid.frontend,
  .skills-grid.backend,
  .skills-grid.tools {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .category-title {
    font-size: 1.5rem;
  }

  .category-icon {
    font-size: 2.5rem;
  }

  .expertise-summary {
    padding: 1.5rem;
  }

  .summary-card h3 {
    font-size: 1.5rem;
  }

  .summary-card p {
    font-size: 1rem;
  }

  .cta-primary {
    padding: 1rem 1.5rem;
    font-size: 1rem;
  }
}
</style>