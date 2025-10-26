<template>
  <div class="blog-container">
    <section class="blog-hero">
      <div class="hero-background">
        <div class="floating-particles">
          <div class="particle" v-for="n in 4" :key="n" :style="getParticleStyle(n)"></div>
        </div>
      </div>
      
      <div class="hero-content">
        <div class="hero-badge">
          <span class="status-dot"></span>
          Development Insights
        </div>
        
        <h1 class="hero-headline">
          Blog & <span class="gradient-text">Articles</span>
        </h1>
        
        <p class="hero-subhead">
          Thoughts on development, career transitions, and lessons learned building full-stack applications. 
          Real insights from a developer's journey.
        </p>
      </div>
    </section>

    <section class="blog-content">
      <div class="container">
        <div class="filter-section">
          <h3 class="filter-title">Explore by Topic</h3>
          <div class="filter-tags">
            <button 
              v-for="tag in tags" 
              :key="tag"
              @click="selectedTag = tag"
              :class="[
                'filter-tag',
                selectedTag === tag ? 'active' : ''
              ]"
              :aria-pressed="selectedTag === tag"
            >
              {{ tag }}
            </button>
          </div>
        </div>

        <div class="posts-grid">
          <article 
            v-for="post in filteredPosts" 
            :key="post.id"
            class="post-card"
            @click="openPost(post)"
          >
            <div class="post-image">
              <img :src="post.image" :alt="post.title" />
              <div class="post-image-overlay"></div>
            </div>
            
            <div class="post-content">
              <div class="post-header">
                <div class="post-tags">
                  <span 
                    v-for="tag in post.tags" 
                    :key="tag"
                    class="post-tag"
                  >
                    {{ tag }}
                  </span>
                </div>
                <span class="post-date">{{ post.date }}</span>
              </div>
              
              <h2 class="post-title">{{ post.title }}</h2>
              <p class="post-excerpt">{{ post.excerpt }}</p>
              
              <div class="post-footer">
                <span class="read-time">{{ post.readTime }} min read</span>
                <button class="read-more-btn" aria-label="Read more about {{ post.title }}">
                  Read More →
                </button>
              </div>
            </div>
          </article>
        </div>

        <section class="curator-section">
          <div class="curator-header">
            <h2>Latest Updates</h2>
            <p>Recent posts, projects, and insights from my development journey</p>
          </div>
          
          <div class="curator-container">
            <div id="curator-feed-default-feed-layout">
              <a href="https://curator.io" target="_blank" class="crt-logo crt-tag">Powered by Curator.io</a>
            </div>
          </div>
        </section>

        <div class="coming-soon-card">
          <h3 class="coming-soon-title">More Content Coming Soon</h3>
          <p class="coming-soon-text">
            I'm actively working on new articles about full-stack development, project case studies, and career insights.
          </p>
        </div>
      </div>
    </section>

    <div v-if="selectedPost" class="modal-overlay" @click.self="closePost">
      <div class="modal-container">
        <div class="modal-header">
          <h2 class="modal-title">{{ selectedPost.title }}</h2>
          <button @click="closePost" class="modal-close" aria-label="Close post">
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        
        <div class="modal-meta">
          <span class="modal-date">{{ selectedPost.date }}</span>
          <span class="modal-read-time">{{ selectedPost.readTime }} min read</span>
          <div class="modal-tags">
            <span 
              v-for="tag in selectedPost.tags" 
              :key="tag"
              class="modal-tag"
            >
              {{ tag }}
            </span>
          </div>
        </div>
        
        <div class="modal-content" v-html="selectedPost.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import codexBuilderImage from '@/assets/webp/codex-builder.webp';
import n15LogoImage from '@/assets/webp/logo-n15labs_comp.webp';
import AIimageAR from '@/assets/webp/ai-a&r.webp';  

export default {
  name: 'BlogPage',
  data() {
    return {
      selectedTag: 'All',
      selectedPost: null,
      tags: ['All', 'Projects', 'Career', 'AI', 'Technical', 'Business'],
      posts: [
        {
          id: 1,
          title: 'Codex Builder: A Worldbuilding App for Writers & Creatives',
          excerpt: 'A Nuxt 3 Progressive Web App for writers, game designers, and creatives. Manage characters, factions, items, and locations with offline-first storage and JSON export.',
          image: codexBuilderImage,
          content: `
            <p>I've always believed technology should empower imagination. Codex Builder was born from that idea: a <strong>worldbuilding companion tool</strong> for writers, game designers, and creatives who want structure without losing flexibility.</p>
            
            <h3>What Codex Builder Does</h3>
            <ul>
              <li>📖 Track <strong>characters, items, factions, and locations</strong> in one place.</li>
              <li>🔗 Create <strong>relationships</strong> between entries (character belongs to group, item found in location).</li>
              <li>💾 <strong>Offline-first storage</strong> with IndexedDB + localForage.</li>
              <li>🔍 <strong>Tag filtering and fuzzy search</strong> for quick navigation.</li>
              <li>📤 <strong>JSON import/export</strong> for backups and collaboration.</li>
            </ul>
            
            <p>It's a <strong>Nuxt 3 Progressive Web App (PWA)</strong> built to be fast, portable, and adaptable.</p>
            
            <h3>The Tech Behind It</h3>
            <ul>
              <li><strong>Nuxt 3 + Tailwind CSS</strong> for a clean, responsive UI.</li>
              <li><strong>Pinia</strong> for entity and tag state management.</li>
              <li><strong>IndexedDB</strong> for offline data.</li>
              <li>Planned: <strong>.NET 8 backend</strong> with JWT authentication for per-user Codex syncing.</li>
            </ul>
            
            <p>Codex Builder isn't just another project — it's proof that modern frameworks can support <strong>both technical scalability and creative workflows</strong>.</p>
            
            <p>Want to test it out? Check out my projects on N15 Labs.</p>
          `,
          tags: ['Projects', 'Technical', 'Nuxt'],
          date: 'Jan 2025',
          readTime: 4
        },
        {
          id: 2,
          title: 'Launching N15 Labs: My Freelance Developer Journey',
          excerpt: 'N15 Labs is my freelance web development brand, offering fast, modern websites, PWAs, and audits for businesses. Here\'s how I turned my Computer Science degree into a freelance career.',
          image: n15LogoImage,
          content: `
            <p>After graduating with a <strong>BSc in Computer Science (2:1)</strong>, I wanted to keep momentum. My dissertation project (SneakTrack) showed I could design real-time web systems. Codex Builder proved I could merge creativity with tech. The next step? <strong>Launching N15 Labs</strong>.</p>
            
            <h3>What N15 Labs Offers</h3>
            <p>At <strong>N15 Labs</strong>, I help businesses upgrade their digital presence with:</p>
            <ul>
              <li>🌐 <strong>Websites & PWAs</strong> – built with frameworks like Nuxt, React, and Next.js.</li>
              <li>🛒 <strong>Ecommerce solutions</strong> – Medusa.js, Stripe, and Shopify integrations.</li>
              <li>🔎 <strong>Audits & performance fixes</strong> – SEO, UX, accessibility, and Lighthouse optimisation.</li>
              <li>🎨 <strong>Design to code</strong> – taking Figma prototypes to production-ready apps.</li>
            </ul>
            
            <h3>Why N15 Labs?</h3>
            <p>Because modern businesses need <strong>sites that perform in the real world</strong>. I don't just design; I optimise speed, SEO, and conversions. My approach blends <strong>software engineering, marketing insight, and creativity</strong>.</p>
            
            <h3>Freelance Projects So Far</h3>
            <ul>
              <li><strong>SneakTrack</strong> → real-time sneaker tracking app.</li>
              <li><strong>Keyword Optimiser</strong> → AI-powered SEO tool.</li>
              <li><strong>Codex Builder</strong> → worldbuilding PWA for writers.</li>
            </ul>
            
            <p>Each one shows my ability to <strong>ship complete systems</strong>, not just prototypes.</p>
            
            <h3>Looking Ahead</h3>
            <p>Through N15 Labs, I'm expanding into:</p>
            <ul>
              <li>📊 SaaS tools for creatives & entrepreneurs.</li>
              <li>🔮 AI integrations in everyday business apps.</li>
              <li>🏗️ More local partnerships in Stoke-on-Trent and beyond.</li>
            </ul>
            
            <p>Want to collaborate? Explore my work at N15 Labs and let's build something together.</p>
          `,
          tags: ['Career', 'Business', 'Freelance'],
          date: 'Dec 2024',
          readTime: 5
        },
        {
          id: 3,
          title: 'AI A&R: Rethinking Artist Development with Artificial Intelligence',
          excerpt: 'Can AI become the new A&R for the music industry? Here\'s my idea for using AI to scout, evaluate, and support musicians — blending data-driven insights with human creativity.',
          image: AIimageAR,
          content: `
            <p>I've always been fascinated by how technology can <strong>reshape creative industries</strong>. From sneaker tracking with SneakTrack to worldbuilding with Codex Builder, my projects often sit at the intersection of data and culture. Music is no different.</p>
            
            <p>Traditional <strong>A&R (Artists & Repertoire)</strong> has always been about talent scouts finding the next big thing. But in 2025, streaming numbers, TikTok virality, and algorithm-driven playlists are just as influential as record execs. That raises the question: <strong>can AI play the role of an A&R scout?</strong></p>
            
            <h3>The Concept: AI as an Artist Scout</h3>
            <p>My AI A&R idea is simple but ambitious: build a system that can <strong>spot rising talent before the industry does</strong>.</p>
            
            <p>It would work by combining:</p>
            <ul>
              <li>📊 <strong>Streaming data analysis</strong> – spotting sudden spikes on Spotify, Apple Music, or SoundCloud.</li>
              <li>🎥 <strong>Social listening</strong> – monitoring TikTok, Instagram, and YouTube for engagement, not just views.</li>
              <li>🎼 <strong>Audio analysis</strong> – AI models that evaluate a track's structure, energy, and genre fit.</li>
              <li>🤝 <strong>Community validation</strong> – fan feedback loops and local scene data.</li>
            </ul>
            
            <h3>Why It Matters for Musicians</h3>
            <p>This isn't about replacing human creativity. It's about giving artists fairer visibility and <strong>leveling the playing field</strong>.</p>
            
            <p>Right now:</p>
            <ul>
              <li>Big labels dominate discovery because they control playlists and PR.</li>
              <li>Independent artists often get drowned out, even if their music connects with real fans.</li>
              <li>A&R scouting is still influenced by <strong>bias, luck, or geography</strong>.</li>
            </ul>
            
            <p>An AI A&R system could:</p>
            <ul>
              <li>🌍 Highlight talented artists outside major markets.</li>
              <li>📈 Provide real-time insights into growing fanbases.</li>
              <li>🎤 Help managers decide when an artist is ready to pitch to labels.</li>
              <li>💡 Even guide artists themselves — showing which tracks resonate most.</li>
            </ul>
            
            <h3>The Tech Behind the Vision</h3>
            <p>The system would blend <strong>data engineering and AI models</strong>:</p>
            <ul>
              <li><strong>APIs</strong> – pull live data from Spotify, YouTube, TikTok, etc.</li>
              <li><strong>Natural Language Processing (NLP)</strong> – analyse lyrics, fan comments, and reviews.</li>
              <li><strong>Audio ML models</strong> – detect patterns in BPM, chord progressions, and energy curves.</li>
              <li><strong>Recommendation algorithms</strong> – rank artists based on growth momentum, not just raw numbers.</li>
              <li><strong>Dashboards</strong> – visualise artist potential for A&Rs, managers, and creators.</li>
            </ul>
            
            <p>Think of it as <strong>Google Analytics for music careers</strong>.</p>
            
            <h3>What's Next</h3>
            <p>For now, this idea is still in the <strong>concept stage</strong> — but it's one I want to prototype under <strong>N15 Labs</strong>. Imagine combining my experience building real-time apps like SneakTrack with music industry data to create a platform that helps <strong>musicians rise without gatekeepers</strong>.</p>
            
            <p>The future of A&R won't be just boardrooms and showcases. It will be <strong>AI-driven insights + human judgment</strong>. Together, they could discover the next Kendrick Lamar, SZA, or Burna Boy — before the hype even starts.</p>
            
            <p>Want to collaborate on this idea? Reach out via N15 Labs — I'm always looking to connect with musicians, producers, and labels who want to explore how tech can <strong>transform artist development</strong>.</p>
          `,
          tags: ['AI', 'Music', 'Concept', 'Innovation'],
          date: 'Nov 2024',
          readTime: 6
        }
      ]
    }
  },
  computed: {
    filteredPosts() {
      if (this.selectedTag === 'All') {
        return this.posts
      }
      return this.posts.filter(post => post.tags.includes(this.selectedTag))
    }
  },
  methods: {
    getParticleStyle(n) {
      return {
        left: Math.random() * 100 + '%',
        animationDelay: (n * 0.8) + 's',
        animationDuration: (4 + Math.random() * 2) + 's'
      }
    },
    openPost(post) {
      this.selectedPost = post
      document.body.style.overflow = 'hidden'
    },
    closePost() {
      this.selectedPost = null
      document.body.style.overflow = ''
    },
    loadCuratorFeed() {
      if (typeof window !== 'undefined' && !window.curatorLoaded) {
        const script = document.createElement('script')
        script.async = true
        script.charset = 'UTF-8'
        script.src = 'https://cdn.curator.io/published/38c15047-637d-4c17-a463-dac2317e9d1e.js'
        document.head.appendChild(script)
        window.curatorLoaded = true
      }
    }
  },
  mounted() {
    document.title = 'Blog - Andre Simpson | Full-Stack Developer'
    this.loadCuratorFeed()
  }
}
</script>

<style>
.blog-container {
  background: #fafafa;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.blog-hero {
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

.blog-container .hero-badge,
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(147, 51, 234, 0.15);
  border: 1px solid rgba(147, 51, 234, 0.3);
  padding: 0.75rem 1.25rem;
  border-radius: 50px;
  font-size: 1.125rem !important;
  font-weight: 600 !important;
  color: #9333ea;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #9333ea;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.blog-container .hero-headline,
.hero-headline {
  font-size: clamp(3.5rem, 7vw, 5rem) !important;
  font-weight: 800 !important;
  line-height: 1.1 !important;
  margin: 0 0 2rem 0 !important;
  letter-spacing: -0.02em !important;
}

.gradient-text {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.blog-container .hero-subhead,
.hero-subhead {
  font-size: 1.5rem !important;
  line-height: 1.7 !important;
  color: #a1a1aa !important;
  margin-bottom: 0 !important;
  max-width: 700px !important;
  margin-left: auto !important;
  margin-right: auto !important;
  font-weight: 500 !important;
}

.blog-content {
  padding: 6rem 0;
  background: white;
}

.filter-section {
  margin-bottom: 4rem;
  text-align: center;
}

.blog-container .filter-title,
.filter-title {
  font-size: 2rem !important;
  font-weight: 700 !important;
  color: #111827 !important;
  margin-bottom: 1.5rem !important;
}

.filter-tags {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.filter-tag {
  padding: 0.75rem 1.5rem;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 50px;
  font-weight: 500 !important;
  font-size: 1.0625rem !important;
  color: #374151;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-tag:hover {
  background: #f3f4f6;
  border-color: #d1d5db;
}

.filter-tag.active {
  background: #3b82f6;
  border-color: #3b82f6;
  color: white;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.post-card {
  background: white;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.post-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border-color: #3b82f6;
}

.post-image {
  position: relative;
  height: 240px;
  overflow: hidden;
}

.post-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.post-card:hover .post-image img {
  transform: scale(1.05);
}

.post-image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.post-card:hover .post-image-overlay {
  opacity: 1;
}

.post-content {
  padding: 2rem;
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.post-tags {
  display: flex;
  gap: 0.5rem;
}

.post-tag {
  background: #f3f4f6;
  color: #6b7280;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8125rem !important;
  font-weight: 500;
}

.post-date {
  color: #9ca3af;
  font-size: 0.9375rem !important;
  font-style: italic;
}

.blog-container .post-title,
.post-title {
  font-size: 1.75rem !important;
  font-weight: 700 !important;
  color: #111827 !important;
  margin-bottom: 1rem !important;
  line-height: 1.3 !important;
}

.blog-container .post-excerpt,
.post-excerpt {
  color: #6b7280 !important;
  line-height: 1.6 !important;
  margin-bottom: 1.5rem !important;
  font-size: 1.125rem !important;
  font-weight: 500 !important;
}

.post-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.read-time {
  color: #9ca3af;
  font-size: 1rem !important;
}

.read-more-btn {
  color: #3b82f6;
  font-weight: 600 !important;
  font-size: 1.0625rem !important;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s ease;
}

.read-more-btn:hover {
  color: #1d4ed8;
}

.curator-section {
  margin: 6rem 0 4rem 0;
  text-align: center;
}

.curator-header {
  margin-bottom: 3rem;
}

.blog-container .curator-header h2,
.curator-header h2 {
  font-size: 3rem !important;
  font-weight: 800 !important;
  color: #111827 !important;
  margin-bottom: 1rem !important;
}

.blog-container .curator-header p,
.curator-header p {
  font-size: 1.375rem !important;
  color: #6b7280 !important;
  font-weight: 500 !important;
  margin: 0 !important;
}

.curator-container {
  background: #f9fafb;
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid #e5e7eb;
}

#curator-feed-default-feed-layout {
  min-height: 200px;
}

.crt-logo.crt-tag {
  font-size: 0.875rem !important;
  color: #9ca3af !important;
  text-decoration: none !important;
  opacity: 0.7 !important;
}

.coming-soon-card {
  background: #f9fafb;
  padding: 3rem;
  border-radius: 16px;
  text-align: center;
  border: 1px solid #e5e7eb;
}

.blog-container .coming-soon-title,
.coming-soon-title {
  font-size: 2rem !important;
  font-weight: 700 !important;
  color: #111827 !important;
  margin-bottom: 1rem !important;
}

.blog-container .coming-soon-text,
.coming-soon-text {
  color: #6b7280 !important;
  font-size: 1.25rem !important;
  font-weight: 500 !important;
  margin: 0 !important;
}

.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
  overflow-y: auto;
}

.modal-container {
  background: white;
  border-radius: 16px;
  max-width: 4xl;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem 2rem 1rem;
  border-bottom: 1px solid #e5e7eb;
}

.blog-container .modal-title,
.modal-title {
  font-size: 2rem !important;
  font-weight: 700 !important;
  color: #111827 !important;
  margin: 0 !important;
  padding-right: 2rem !important;
}

.modal-close {
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #6b7280;
  transition: all 0.3s ease;
}

.modal-close:hover {
  background: #f3f4f6;
  color: #374151;
}

.modal-close svg {
  width: 20px;
  height: 20px;
}

.modal-meta {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1rem 2rem;
  border-bottom: 1px solid #e5e7eb;
  font-size: 1rem !important;
  color: #6b7280;
}

.modal-tags {
  display: flex;
  gap: 0.5rem;
}

.modal-tag {
  background: #f3f4f6;
  color: #6b7280;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8125rem !important;
}

.modal-content {
  padding: 2rem;
  line-height: 1.7;
  color: #374151;
  font-size: 1.125rem !important;
}

.modal-content h3 {
  font-size: 1.5rem !important;
  font-weight: 700 !important;
  color: #111827 !important;
  margin: 2rem 0 1rem 0 !important;
}

.modal-content p {
  margin-bottom: 1.5rem !important;
  font-size: 1.125rem !important;
}

.modal-content ul {
  margin-bottom: 1.5rem !important;
  padding-left: 1.5rem !important;
}

.modal-content li {
  margin-bottom: 0.5rem !important;
  font-size: 1.0625rem !important;
}

.modal-content strong {
  font-weight: 600 !important;
  color: #111827 !important;
}

@media (max-width: 768px) {
  .hero-content {
    padding: 2rem 1rem;
  }
  
  .blog-container .hero-headline,
  .hero-headline {
    font-size: 3rem !important;
  }
  
  .blog-container .hero-subhead,
  .hero-subhead {
    font-size: 1.375rem !important;
  }

  .blog-container .filter-title,
  .filter-title {
    font-size: 1.75rem !important;
  }

  .blog-container .curator-header h2,
  .curator-header h2 {
    font-size: 2.5rem !important;
  }

  .blog-container .curator-header p,
  .curator-header p {
    font-size: 1.25rem !important;
  }

  .blog-container .post-title,
  .post-title {
    font-size: 1.5rem !important;
  }

  .blog-container .post-excerpt,
  .post-excerpt {
    font-size: 1.0625rem !important;
  }

  .blog-container .coming-soon-title,
  .coming-soon-title {
    font-size: 1.75rem !important;
  }

  .blog-container .coming-soon-text,
  .coming-soon-text {
    font-size: 1.125rem !important;
  }
  
  .posts-grid {
    grid-template-columns: 1fr;
  }
  
  .filter-tags {
    flex-direction: column;
    align-items: center;
  }
  
  .modal-overlay {
    padding: 1rem;
  }
  
  .modal-header {
    padding: 1.5rem 1.5rem 1rem;
  }
  
  .modal-meta {
    padding: 1rem 1.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .modal-content {
    padding: 1.5rem;
  }

  .curator-container {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }
  
  .blog-container .hero-headline,
  .hero-headline {
    font-size: 2.5rem !important;
  }

  .blog-container .curator-header h2,
  .curator-header h2 {
    font-size: 2rem !important;
  }
  
  .post-content {
    padding: 1.5rem;
  }
  
  .coming-soon-card {
    padding: 2rem;
  }

  .curator-container {
    padding: 1rem;
  }
}
</style>