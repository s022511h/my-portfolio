<template>
  <div class="projects">
    <h2 class="section-title">📁 Featured Projects</h2>
    <p class="intro">
      These projects are more than code, they are digital blueprints that merge engineering with influence.
      Designed for real-world use, each project embodies a law of modern software: automation, clarity, and control.
      <br /><br />
      I don’t just write code. I build tools that solve problems, give power to creators, and offer clients an edge.
    </p>

    <div class="grid">
      <!-- SneakTrack -->
      <div class="project-item">
        <div class="project-slideshow">
          <img
            :src="sneaktrackImages[sneaktrackImageIndex]"
            :alt="'SneakTrack image ' + (sneaktrackImageIndex + 1)"
            class="project-thumb"
            width="640"
            height="360"
            loading="lazy"
          />

          <div class="slideshow-controls">
            <button @click="prevSneaktrackImage" :disabled="sneaktrackImageIndex === 0">‹</button>
            <button @click="nextSneaktrackImage" :disabled="sneaktrackImageIndex === sneaktrackImages.length - 1">›</button>
          </div>
        </div>

        <h3>SneakTrack</h3>
        <p><strong>Tech Stack:</strong> Next, Rest APIs, Firebase, Puppeteer</p>
        <p>
          Real-time sneaker tracking engine used by resellers, marketers, and creators. It connects APIs, scrapes release data,
          monitors stock levels, checks sizes, and caches everything via Firestore.
        </p>
        <ul class="project-highlights">
          <li>🚀 Real-time retailer scraping & size matching</li>
          <li>📊 Admin dashboard & push alerts for restocks</li>
          <li>⚡ Integrated with StockX, Sole Supplier, JD Sports</li>
        </ul>
        <div class="project-video" style="aspect-ratio: 16/9; width: 100%; max-width: 720px; margin: auto;">
          <lite-youtube
            videoid="U9SeG8yyVjo"
            style="width: 100%; height: auto;"
            playlabel="Play SneakTrack Demo"
          ></lite-youtube>
        </div>
      </div>

      <!-- Keyword Optimiser -->
      <div class="project-item">
        <div class="project-slideshow">
          <img loading="lazy" :src="keywordImages[keywordImageIndex]" :alt="'Keyword Optimiser image ' + (keywordImageIndex + 1)" class="project-thumb" width="400" height="225" />
          <div class="slideshow-controls">
            <button @click="prevKeywordImage" :disabled="keywordImageIndex === 0">‹</button>
            <button @click="nextKeywordImage" :disabled="keywordImageIndex === keywordImages.length - 1">›</button>
          </div>
        </div>

        <h3>Keyword Optimiser</h3>
        <p><strong>Tech Stack:</strong> Python, OpenAI API</p>
        <p>
          AI-powered platform to generate, evaluate and score high-performing keywords in seconds.
          Created to empower SEO agencies, solo marketers, and digital entrepreneurs.
        </p>
        <ul class="project-highlights">
          <li>🧠 Powered by GPT and keyword clustering logic</li>
          <li>📈 Built-in scoring engine with export to CSV</li>
          <li>🎯 Fine-tuned for speed, clarity, and UX</li>
        </ul>
      </div>

     <!-- Sales Tracker -->
    <div class="project-item">
      <div class="project-slideshow">
        <img loading="lazy" :src="salesTrackerImages[salesTrackerImageIndex]" :alt="'Sales Tracker image ' + (salesTrackerImageIndex + 1)" class="project-thumb" width="400" height="225" />
        <div class="slideshow-controls">
          <button @click="prevSalesTrackerImage" :disabled="salesTrackerImageIndex === 0">‹</button>
          <button @click="nextSalesTrackerImage" :disabled="salesTrackerImageIndex === salesTrackerImages.length - 1">›</button>
        </div>
      </div>

      <h3>🔒 SalesTracker (In Progress)</h3>
      <p><strong>Tech Stack:</strong> React, Node.js, Amazon Seller API</p>
      <p>
        A private analytics dashboard for resellers to track earnings, SKUs, and supplier deals.
        Designed to outmanoeuvre outdated spreadsheets with dynamic graphs and automation.
      </p>
      <ul class="project-highlights">
        <li>📦 Tracks inventory value, revenue, profit</li>
        <li>📊 Auto-imports data from marketplaces</li>
        <li>🔐 Login-gated with Firebase + Stripe webhook</li>
      </ul>
      <div class="project-video" style="aspect-ratio: 16/9; width: 100%; max-width: 720px; margin: auto;">
        <lite-youtube
          videoid="U9SeG8yyVjo"
          style="width: 100%; height: auto;"
          playlabel="Play SneakTrack Demo"
        ></lite-youtube>
      </div>
    </div>
    </div>
    </div>
    </template>

    <script>
import { defineAsyncComponent } from 'vue'
import 'lite-youtube-embed'



export default {
  name: 'CurrentProjects',
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
      salesTrackerImageIndex: 0
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
    }
  }
}
</script>

<style scoped>
.projects {
  padding: 3rem 2rem;
  background-color: #ffffff;
  color: #111;
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #222;
  text-align: center;
}

.intro {
  font-size: 1.125rem;
  max-width: 820px;
  margin: 0 auto 2.5rem;
  line-height: 1.8;
  color: #444;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2rem;
}

.project-item {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 1.5rem;
  border-radius: 12px;
  text-align: left;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
  transition: transform 0.2s ease;
}

.project-item:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
}

.project-thumb {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.project-video {
  width: 100%;
  border-radius: 8px;
  margin: 1rem 0;
}

.project-image {
  width: 100%;
  border-radius: 8px;
  margin: 1rem 0;
}

.project-highlights {
  list-style: none;
  padding-left: 0;
  margin: 1rem 0;
  font-size: 0.95rem;
  color: #333;
}

.project-highlights li {
  margin: 0.4rem 0;
}

a {
  display: inline-block;
  margin-top: 0.8rem;
  font-weight: 600;
  text-decoration: none;
  color: #407ba7;
  font-size: 1rem;
}

a:hover {
  text-decoration: underline;
}

.coming-soon {
  margin-top: 1rem;
  font-weight: bold;
  color: #ad0000;
}

.project-slideshow {
  position: relative;
  margin-bottom: 1rem;
}

.slideshow-controls {
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  gap: 0.5rem;
}

.slideshow-controls button {
  background-color: #407ba7;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.2rem;
  padding: 0.4rem 0.8rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.slideshow-controls button:hover {
  background-color: #ad0000;
}

.slideshow-controls button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
