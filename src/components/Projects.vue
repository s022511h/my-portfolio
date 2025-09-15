<template>
  <div class="projects">
    <div class="container">
      <div class="projects-header">
        <span class="section-label">Portfolio Showcase</span>
        <h2 class="section-title">Featured <span class="highlight">Projects</span></h2>
        <p class="intro">
          These projects are more than code, they are digital blueprints that merge engineering with influence.
          Designed for real-world use, each project embodies a law of modern software. Automation, clarity, and control.
        </p>
        <p class="intro-secondary">
          I don't just write code. I build tools that solve problems, give power to creators, and offer clients an edge.
        </p>
      </div>

      <div class="projects-grid">
        <!-- SneakTrack -->
        <div class="project-card featured">
          <div class="project-badge">Featured Project</div>
          
          <div class="project-slideshow">
            <img
              :src="sneaktrackImages[sneaktrackImageIndex]"
              :alt="'SneakTrack interface ' + (sneaktrackImageIndex + 1)"
              class="project-image"
              loading="lazy"
              @click="openModal('sneaktrack', sneaktrackImageIndex)"
            />
            <div class="slideshow-controls">
              <button 
                @click="prevSneaktrackImage" 
                :disabled="sneaktrackImageIndex === 0"
                class="control-btn"
              >‹</button>
              <button 
                @click="nextSneaktrackImage" 
                :disabled="sneaktrackImageIndex === sneaktrackImages.length - 1"
                class="control-btn"
              >›</button>
            </div>
          </div>

          <div class="project-content">
            <h3 class="project-title">SneakTrack</h3>
            <div class="tech-stack">
              <span class="tech-tag">Next.js</span>
              <span class="tech-tag">REST APIs</span>
              <span class="tech-tag">Firebase</span>
              <span class="tech-tag">Puppeteer</span>
            </div>
            <p class="project-description">
              Real-time sneaker tracking engine used by resellers, marketers, and creators. It connects APIs, scrapes release data,
              monitors stock levels, checks sizes, and caches everything via Firestore.
            </p>
            <ul class="project-highlights">
              <li>• Real-time retailer scraping & size matching</li>
              <li>• Admin dashboard & push alerts for restocks</li>
              <li>• Integrated with StockX, Sole Supplier, JD Sports</li>
            </ul>
            <div class="video-container">
              <iframe
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/g5rU04Ki0AY"
                title="SneakTrack Demo"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                style="border: none; display: block;"
              ></iframe>
            </div>
          </div>
        </div>

        <!-- Keyword Optimiser -->
        <div class="project-card">
          <div class="project-slideshow">
            <img 
              :src="keywordImages[keywordImageIndex]" 
              :alt="'Keyword Optimiser interface ' + (keywordImageIndex + 1)" 
              class="project-image"
              loading="lazy"
              @click="openModal('keyword', keywordImageIndex)"
            />
            <div class="slideshow-controls">
              <button 
                @click="prevKeywordImage" 
                :disabled="keywordImageIndex === 0"
                class="control-btn"
              >‹</button>
              <button 
                @click="nextKeywordImage" 
                :disabled="keywordImageIndex === keywordImages.length - 1"
                class="control-btn"
              >›</button>
            </div>
          </div>

          <div class="project-content">
            <h3 class="project-title">Keyword Optimiser</h3>
            <div class="tech-stack">
              <span class="tech-tag">Python</span>
              <span class="tech-tag">OpenAI API</span>
              <span class="tech-tag">AI/ML</span>
            </div>
            <p class="project-description">
              AI-powered platform to generate, evaluate and score high-performing keywords in seconds.
              Created to empower SEO agencies, solo marketers, and digital entrepreneurs.
            </p>
            <ul class="project-highlights">
              <li>• Powered by GPT and keyword clustering logic</li>
              <li>• Built-in scoring engine with export to CSV</li>
              <li>• Fine-tuned for speed, clarity, and UX</li>
            </ul>
          </div>
        </div>

        <!-- Sales Tracker -->
        <div class="project-card in-progress">
          <div class="project-badge progress">In Development</div>
          
          <div class="project-slideshow">
            <img 
              :src="salesTrackerImages[salesTrackerImageIndex]" 
              :alt="'Sales Tracker interface ' + (salesTrackerImageIndex + 1)" 
              class="project-image"
              loading="lazy"
              @click="openModal('salestracker', salesTrackerImageIndex)"
            />
            <div class="slideshow-controls">
              <button 
                @click="prevSalesTrackerImage" 
                :disabled="salesTrackerImageIndex === 0"
                class="control-btn"
              >‹</button>
              <button 
                @click="nextSalesTrackerImage" 
                :disabled="salesTrackerImageIndex === salesTrackerImages.length - 1"
                class="control-btn"
              >›</button>
            </div>
          </div>

          <div class="project-content">
            <h3 class="project-title">SalesTracker</h3>
            <div class="tech-stack">
              <span class="tech-tag">React</span>
              <span class="tech-tag">Node.js</span>
              <span class="tech-tag">Amazon API</span>
              <span class="tech-tag">Firebase</span>
            </div>
            <p class="project-description">
              A private analytics dashboard for resellers to track earnings, SKUs, and supplier deals.
              Designed to outmanoeuvre outdated spreadsheets with dynamic graphs and automation.
            </p>
            <ul class="project-highlights">
              <li>• Tracks inventory value, revenue, profit</li>
              <li>• Auto-imports data from marketplaces</li>
              <li>• Login-gated with Firebase + Stripe webhook</li>
            </ul>
            <div class="video-container">
              <iframe
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/U9SeG8yyVjo"
                title="SalesTracker Demo"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                style="border: none; display: block;"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="modalOpen" class="modal-overlay" @click.self="closeModal">
      <button class="modal-close" @click="closeModal">
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
      
      <div class="modal-content">
        <img
          :src="currentModalImages[modalImageIndex]"
          :alt="'Project image ' + (modalImageIndex + 1)"
          class="modal-image"
        />
        
        <div class="modal-controls" v-if="currentModalImages.length > 1">
          <button 
            @click="prevModalImage" 
            :disabled="modalImageIndex === 0"
            class="modal-nav-btn"
          >
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
          </button>
          
          <span class="modal-counter">{{ modalImageIndex + 1 }} / {{ currentModalImages.length }}</span>
          
          <button 
            @click="nextModalImage" 
            :disabled="modalImageIndex === currentModalImages.length - 1"
            class="modal-nav-btn"
          >
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useHead } from '@vueuse/head'

export default {
  name: 'CurrentProjects',
  setup() {
    useHead({
      title: 'Featured Projects | SneakTrack, Keyword Optimiser | Andre Simpson',
      meta: [
        {
          name: 'description',
          content: 'Featured development projects including SneakTrack (sneaker tracking), Keyword Optimiser (AI-powered SEO tool), and SalesTracker dashboard.'
        },
        {
          property: 'og:title',
          content: 'Featured Projects | SneakTrack, Keyword Optimiser | Andre Simpson'
        },
        {
          property: 'og:description',
          content: 'Featured development projects including SneakTrack sneaker tracking engine and AI-powered SEO tools.'
        },
        {
          name: 'keywords',
          content: 'SneakTrack, sneaker tracking, keyword optimiser, SEO tools, AI automation, web scraping, React, Vue.js projects'
        }
      ]
    })
  },
  data() {
    return {
      sneaktrackImages: [
        require('@/assets/webp/sneaktrack-image.webp'),
        require('@/assets/webp/sneaktrack-image2.webp'),
        require('@/assets/webp/sneaktrack-image3.webp'),
        require('@/assets/webp/sneaktrack-image4.webp')
      ],
      sneaktrackImageIndex: 0,

      keywordImages: [
        require('@/assets/webp/keyword.webp'),
        require('@/assets/webp/keyword2.webp')
      ],
      keywordImageIndex: 0,

      salesTrackerImages: [
        require('@/assets/webp/sales-tracker.webp'),
        require('@/assets/webp/sales-tracker-code.avif')
      ],
      salesTrackerImageIndex: 0,

      modalOpen: false,
      modalImageIndex: 0,
      currentModalImages: [],
      currentProject: ''
    };
  },
  methods: {
    nextSneaktrackImage() {
      if (this.sneaktrackImageIndex < this.sneaktrackImages.length - 1) {
        this.sneaktrackImageIndex++;
      }
    },
    prevSneaktrackImage() {
      if (this.sneaktrackImageIndex > 0) {
        this.sneaktrackImageIndex--;
      }
    },
    nextKeywordImage() {
      if (this.keywordImageIndex < this.keywordImages.length - 1) {
        this.keywordImageIndex++;
      }
    },
    prevKeywordImage() {
      if (this.keywordImageIndex > 0) {
        this.keywordImageIndex--;
      }
    },
    nextSalesTrackerImage() {
      if (this.salesTrackerImageIndex < this.salesTrackerImages.length - 1) {
        this.salesTrackerImageIndex++;
      }
    },
    prevSalesTrackerImage() {
      if (this.salesTrackerImageIndex > 0) {
        this.salesTrackerImageIndex--;
      }
    },
    
    openModal(project, imageIndex) {
      this.currentProject = project;
      this.modalImageIndex = imageIndex;
      
      switch(project) {
        case 'sneaktrack':
          this.currentModalImages = this.sneaktrackImages;
          break;
        case 'keyword':
          this.currentModalImages = this.keywordImages;
          break;
        case 'salestracker':
          this.currentModalImages = this.salesTrackerImages;
          break;
      }
      
      this.modalOpen = true;
      document.body.style.overflow = 'hidden';
    },
    
    closeModal() {
      this.modalOpen = false;
      document.body.style.overflow = '';
    },
    
    nextModalImage() {
      if (this.modalImageIndex < this.currentModalImages.length - 1) {
        this.modalImageIndex++;
      }
    },
    
    prevModalImage() {
      if (this.modalImageIndex > 0) {
        this.modalImageIndex--;
      }
    }
  },
  
  mounted() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modalOpen) {
        this.closeModal();
      }
    });
  }
}
</script>

<style>

.projects {
  padding: 4rem 0;
  background: #f9fafb;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.projects-header {
  text-align: center;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.section-label {
  display: inline-block;
  background: #dbeafe;
  color: #1d4ed8;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
}

.projects .section-title,
.section-title {
  font-size: 4rem !important;
  font-weight: 900 !important;
  color: #111827 !important;
  margin-bottom: 1.5rem !important;
  line-height: 1.1 !important;
  letter-spacing: -0.02em !important;
}

.highlight {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.projects .intro,
.intro {
  font-size: 1.5rem !important;
  color: #374151 !important;
  margin-bottom: 1rem !important;
  line-height: 1.7 !important;
  font-weight: 600 !important;
}

.projects .intro-secondary,
.intro-secondary {
  font-size: 1.375rem !important;
  color: #111827 !important;
  margin-bottom: 0 !important;
  line-height: 1.6 !important;
  font-weight: 700 !important;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.project-card {
  position: relative;
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
}

.project-card.featured {
  border: 2px solid #3b82f6;
}

.project-card.in-progress {
  border: 2px solid #f59e0b;
}

.project-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #3b82f6;
  color: white;
  padding: 0.375rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  z-index: 10;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.project-badge.progress {
  background: #f59e0b;
}

.project-slideshow {
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
  background: #f3f4f6;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  cursor: pointer;
  transition: transform 0.3s ease;
  background: #ffffff;
}

.project-image:hover {
  transform: scale(1.02);
}

.slideshow-controls {
  position: absolute;
  bottom: 0.75rem;
  right: 0.75rem;
  display: flex;
  gap: 0.25rem;
}

.control-btn {
  width: 32px;
  height: 32px;
  background: rgba(0, 0, 0, 0.7);
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: bold;
  transition: background 0.3s ease;
}

.control-btn:hover:not(:disabled) {
  background: rgba(59, 130, 246, 0.9);
}

.control-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.project-content {
  padding: 1.5rem;
}

.projects .project-title,
.project-title {
  font-size: 2.25rem !important;
  font-weight: 700 !important;
  color: #111827 !important;
  margin-bottom: 1.25rem !important;
  letter-spacing: -0.01em !important;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.projects .tech-tag,
.tech-tag {
  background: #f3f4f6 !important;
  color: #1f2937 !important;
  padding: 0.5rem 1rem !important;
  border-radius: 12px !important;
  font-size: 1rem !important;
  font-weight: 500 !important;
  border: 1px solid #e5e7eb !important;
  transition: all 0.2s ease !important;
}

.tech-tag:hover {
  background: #e5e7eb !important;
  transform: translateY(-1px);
}

.projects .project-description,
.project-description {
  font-size: 1.25rem !important;
  color: #374151 !important;
  line-height: 1.7 !important;
  margin-bottom: 1.5rem !important;
  font-weight: 500 !important;
}

.project-highlights {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
}

.projects .project-highlights li,
.project-highlights li {
  font-size: 1.125rem !important;
  color: #1f2937 !important;
  margin-bottom: 0.75rem !important;
  line-height: 1.6 !important;
  font-weight: 500 !important;
}

.video-container {
  width: 100%;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 1rem;
  background: #000;
}

.video-container iframe {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
}

.modal-close {
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 12px;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 1001;
}

.modal-close:hover {
  background: rgba(255, 255, 255, 0.2);
}

.modal-close svg {
  width: 24px;
  height: 24px;
}

.modal-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.modal-image {
  max-width: 100%;
  max-height: calc(90vh - 100px);
  border-radius: 12px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
  object-fit: contain;
}

.modal-controls {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
  background: rgba(0, 0, 0, 0.5);
  padding: 1rem 2rem;
  border-radius: 50px;
  backdrop-filter: blur(10px);
}

.modal-nav-btn {
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 12px;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.modal-nav-btn:hover:not(:disabled) {
  background: rgba(59, 130, 246, 0.8);
  transform: scale(1.05);
}

.modal-nav-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.modal-nav-btn svg {
  width: 20px;
  height: 20px;
}

.modal-counter {
  color: white;
  font-weight: 500;
  font-size: 1rem;
  min-width: 60px;
  text-align: center;
}

@media (max-width: 768px) {
  .projects {
    padding: 3rem 0;
  }

  .container {
    padding: 0 1rem;
  }

  .projects-header {
    margin-bottom: 2rem;
  }

  .projects .section-title,
  .section-title {
    font-size: 3rem !important;
  }

  .projects .intro,
  .intro {
    font-size: 1.375rem !important;
  }

  .projects .intro-secondary,
  .intro-secondary {
    font-size: 1.25rem !important;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .project-slideshow {
    height: 200px;
  }

  .project-content {
    padding: 1.5rem;
  }

  .projects .project-title,
  .project-title {
    font-size: 1.875rem !important;
  }

  .projects .project-description,
  .project-description {
    font-size: 1.125rem !important;
  }

  .projects .project-highlights li,
  .project-highlights li {
    font-size: 1.0625rem !important;
  }

  .projects .tech-tag,
  .tech-tag {
    font-size: 1rem !important;
    padding: 0.5rem 1rem !important;
  }

  .video-container {
    height: 160px;
  }

  .modal-overlay {
    padding: 1rem;
  }

  .modal-close {
    top: 1rem;
    right: 1rem;
    width: 40px;
    height: 40px;
  }

  .modal-controls {
    gap: 1rem;
    padding: 0.75rem 1.5rem;
  }

  .modal-nav-btn {
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 480px) {
  .projects .section-title,
  .section-title {
    font-size: 2.5rem !important;
  }

  .project-slideshow {
    height: 180px;
  }

  .project-content {
    padding: 1rem;
  }

  .project-badge {
    font-size: 0.6875rem;
    padding: 0.25rem 0.5rem;
  }

  .control-btn {
    width: 28px;
    height: 28px;
    font-size: 1rem;
  }

  .video-container {
    height: 140px;
  }

  .modal-controls {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>