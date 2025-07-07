<template>
  <section class="profile-carousel">
    <div class="carousel-controls">
      <button @click="currentSlide = 0" :class="{ active: currentSlide === 0 }">👤 About Me</button>
      <button @click="currentSlide = 1" :class="{ active: currentSlide === 1 }">🛠️ Services</button>
    </div>

    <div v-show="currentSlide === 0" class="carousel-slide">
      <div class="profile-image">
        <img src="@/assets/webp/me.avif" alt="Andre Simpson" width="1080" height="600"
            loading="eager"
            etchpriority="high" />
      </div>

      <h1>Hi, I’m <span class="highlight">Andre Simpson</span></h1>
      <p class="headline">Full Stack Developer • Vue & Node • Creator of N15 Labs</p>
      <p class="bio">
        I build <strong>visionary tools</strong> and <strong>future-proof platforms</strong>. I’m a Computer Science graduate (2:1 Honours),
        founder of <em>N15 Labs</em>, and developer of award-level systems like SneakTrack (70/100 final year score).
        <br /><br />
        From AI-powered SEO tools to automation dashboards and custom APIs. I merge logic with creativity.
        Whether it’s a solo project or collaborative sprint, I code with intention, scale with strategy, and always leave a footprint.
      </p>

      <div class="bio-visuals">
        <img src="@/assets/webp/workspace.webp" alt="Workspace Setup" width="400" height="225" loading="lazy" />
        <img src="@/assets/webp/code.avif" alt="Code Editor" width="400" height="225" loading="lazy" />
      </div>

      <div class="highlight-grid">
        <div class="highlight-card"><span class="icon">👑</span><p><strong>Founder, N15 Labs</strong></p></div>
        <div class="highlight-card"><span class="icon">⚡</span><p><strong>SneakTrack</strong> – Final Year Project (70/100)</p></div>
        <div class="highlight-card"><span class="icon">🧠</span><p><strong>BSc (Hons)</strong> Computer Science – 2:1</p></div>
        <div class="highlight-card"><span class="icon">🧪</span><p><strong>Tech Stack:</strong> Vue, Node.js, Git, Vercel</p></div>
      </div>

      <div class="sneaktrack-preview" style="aspect-ratio: 16/9; width: 100%; max-width: 720px; margin: auto;">
        <iframe
          loading="lazy"
          src="https://www.youtube.com/embed/U9SeG8yyVjo"
          title="SneakTrack Demo"
          frameborder="0"
          style="width: 100%; height: 100%;"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <router-link class="cta" to="/projects">Explore My Work</router-link>

      <div class="social-links">
        <a href="https://github.com/s022511h/" target="_blank" aria-label="GitHub">🐙 GitHub</a>
        <a href="https://linkedin.com/in/andre-simpson-502365178" target="_blank" aria-label="LinkedIn">🔗 LinkedIn</a>
      </div>
    </div>

    <div v-show="currentSlide === 1" class="carousel-slide">
      <h1>🛠️ Services I Offer</h1>
      <ul class="services-list">
        <li>🔧 Full Stack Apps — <strong>Next.js, Node.js, Firebase, MongoDB</strong></li>
        <li>📊 Dashboards & Analytics — <strong>Python, REST APIs, GPT</strong></li>
        <li>🛍️ E-commerce & Automation — <strong>Amazon SP API, Puppeteer, Stripe</strong></li>
        <li>🎯 Creator Sites — <strong>WordPress, Tailwind, CMS</strong></li>
        <li>🌐 API Dev & Integration — <strong>REST, GraphQL, Webhooks</strong></li>
      </ul>

      <div class="video-placeholder" style="aspect-ratio: 16/9; width: 100%; max-width: 720px; margin: auto;">
        <iframe
          loading="lazy"
          src="https://www.youtube.com/embed/U9SeG8yyVjo"
          title="SalesTracker Demo"
          frameborder="0"
          style="width: 100%; height: 100%;"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <div class="cta-buttons">
        <router-link class="cta secondary" to="/portfolio">View My Skillset</router-link>
        <router-link class="cta" to="/contact">Work With Me</router-link>
      </div>
    </div>
  </section>

  <section class="n15-labs-section">
    <h1>Welcome to <span class="highlight">N15 Labs</span></h1>
    <p>
      N15 Labs is the innovation vault where I build and launch <strong>custom full stack apps, creative automations</strong>,
      and experimental systems. Delivered fast, lean, and clean.
    </p>

    <div class="n15-labs-visuals">
      <img
        :src="slideshowImages[currentImageIndex]"
        :alt="'Slide ' + (currentImageIndex + 1)"
        width="640"
        height="360"
        class="slideshow-image"
        loading="lazy"
        @click="openModal"
      />

      <div class="slideshow-controls">
        <button @click="prevImage" :disabled="currentImageIndex === 0">‹</button>
        <button @click="nextImage" :disabled="currentImageIndex === slideshowImages.length - 1">›</button>
      </div>

      <div v-if="modalOpen" class="modal-overlay" @click.self="closeModal">
        <span class="close-btn" @click="closeModal">✖</span>
        <img
          :src="slideshowImages[currentImageIndex]"
          :alt="'Full view of slide ' + (currentImageIndex + 1)"
          class="modal-image"
          width="800"
          height="600"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      currentSlide: 0,
      currentImageIndex: 0,
      modalOpen: false,
      showVideo: false,
      slideshowImages: [
        require('@/assets/webp/wireframe-collage.webp'),
        require('@/assets/webp/collage.webp')
      ]
    }
  },
  mounted() {
    setTimeout(() => {
      this.showVideo = true
    }, 300)
  },
  methods: {
    scrollToLabs() {
      const labsSection = document.querySelector('.n15-labs-section')
      if (labsSection) {
        labsSection.scrollIntoView({ behavior: 'smooth' })
      }
    },
    nextImage() {
      if (this.currentImageIndex < this.slideshowImages.length - 1) {
        this.currentImageIndex++
      }
    },
    prevImage() {
      if (this.currentImageIndex > 0) {
        this.currentImageIndex--
      }
    },
    openModal() {
      this.modalOpen = true
    },
    closeModal() {
      this.modalOpen = false
    }
  }
}
</script>

<style scoped>
.home-intro {
  padding: 3.5rem 2rem;
  background: linear-gradient(to bottom, #fafafa, #fff);
  color: #111;
  text-align: center;
  max-width: 960px;
  margin: 0 auto;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.05);
}

.profile-image img {
  width: 260px;
  height: 260px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #222;
  margin-bottom: 1.25rem;
}

h1 {
  font-size: 2.8rem;
  font-weight: 700;
  margin: 0.75rem 0;
  line-height: 1.3;
}

.highlight {
  color: #407ba7;
  font-weight: 700;
}

.headline {
  font-size: 1.4rem;
  font-weight: 500;
  color: #444;
  margin-bottom: 1.5rem;
}

.bio {
  font-size: 1.5rem;
  line-height: 1.8;
  color: #333;
  margin: 1.5rem 0;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
}

.highlights {
  list-style: none;
  padding: 0;
  margin: 2rem 0;
  font-size: 1.05rem;
  line-height: 1.6;
  font-weight: 500;
  color: #222;
}

.highlights li {
  margin: 0.75rem 0;
  font-size: 1.5rem;
}

.cta {
  display: inline-block;
  background-color: #111;
  color: #fff;
  padding: 0.9rem 1.8rem;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  margin-top: 20px;
}

.cta:hover {
  background-color: #ad0000;
}

.cta.secondary {
  background-color: #407ba7;
  margin-right: 1rem;
}

.cta.secondary:hover {
  background-color: #ad0000;
  color: #fff;
}

.social-links {
  margin-top: 2rem;
}

.social-links a {
  margin: 0 0.75rem;
  font-size: 2rem;
  text-decoration: none;
  color: #222;
  font-weight: 500;
}

.social-links a:hover {
  color: #407ba7;
}

.scroll-down {
  margin-top: 2.5rem;
  font-size: 1.05rem;
  font-weight: 500;
  opacity: 0.7;
  animation: pulse 2s infinite;
  cursor: pointer;
}

@keyframes pulse {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
}

.n15-labs-section {
  padding: 4rem 2rem;
  background-color: #f4f4f4;
  color: #111;
  text-align: center;
  max-width: 1200px;
  margin: 4rem auto;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
}

.n15-labs-section h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
}

.n15-labs-section p {
  font-size: 1.5rem;
  margin-bottom: 2.2rem;
  line-height: 1.8;
  color: #333;
}

.services-section {
  background-color: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.06);
  margin-bottom: 3rem;
  text-align: center;
}

.services-section h3 {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
  color: #111;
}

.services-section ul {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
}

.services-section li {
  font-size: 1.05rem;
  margin: 0.6rem 0;
  color: #333;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.video-placeholder {
  max-width: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin: 2rem auto;
}

.highlight-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.2rem;
  margin: 3rem 0;
}

.highlight-card {
  background-color: #ffffff;
  border: 1px solid #e3e3e3;
  border-left: 4px solid #407ba7;
  border-radius: 8px;
  padding: 1rem;
  text-align: left;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  transition: transform 0.3s ease;
  font-size: 1.25rem;
}

.highlight-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
}

.highlight-card .icon {
  font-size: 1.4rem;
  margin-right: 0.5rem;
}

.bio-visuals {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
}

.bio-visuals img {
  max-width: 400px;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  object-fit: cover;
}

.sneaktrack-preview {
  margin: 2rem auto;
  max-width: 720px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
}

.sneaktrack-video {
  width: 100%;
  height: 360px;
  display: block;
  border: none;
  border-radius: 10px;
}

.n15-labs-visuals {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}

.slideshow-image {
  width: 100%;
  max-width: 640px;
  height: 360px;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  transition: opacity 0.3s ease;
}

.slideshow-controls {
  margin-top: 0.8rem;
  display: flex;
  gap: 1rem;
}

.slideshow-controls button {
  background-color: #407ba7;
  color: #fff;
  font-size: 1.4rem;
  padding: 0.4rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.slideshow-controls button:hover {
  background-color: #305c82;
}

.slideshow-controls button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.salestracker-video {
  width: 100%;
  height: auto;
  border-radius: 12px;
  display: block;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}

.modal-image {
  max-width: 90%;
  max-height: 90%;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  object-fit: contain;
}

.close-btn {
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  z-index: 1001;
  background: transparent;
  border: none;
}

.profile-carousel {
  max-width: 1280px;
  margin: 4rem auto;
  padding: 3rem 2rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.05);
  text-align: center;
}

.carousel-controls {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.carousel-controls button {
  padding: 0.7rem 1.6rem;
  font-size: 1.5rem;
  border: none;
  border-radius: 6px;
  background-color: #ddd;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.carousel-controls button.active {
  background-color: #407ba7;
  color: #fff;
}

.carousel-controls button:hover:not(.active) {
  background-color: #ad0000;
  color: #fff;
}


.carousel-slide {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}

.services-list {
  list-style: none;
  padding: 0;
  margin: 2rem 0;
  font-size: 1.1rem;
  line-height: 1.8;
}

@media (max-width: 600px) {
  .slideshow-image {
    height: 240px;
  }
}
</style>