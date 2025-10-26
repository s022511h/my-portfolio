<template>
  <div v-if="show" class="intro-overlay">
    <div class="intro-background">
      <div class="floating-particles">
        <div class="particle" v-for="n in 8" :key="n" :style="getParticleStyle(n)"></div>
      </div>
      <div class="gradient-orbs">
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
        <div class="orb orb-3"></div>
      </div>
    </div>
    
    <div class="intro-content">
      <div class="logo-container">
        <div class="logo-glow"></div>
        <img
          :src="logo"
          alt="N15 Labs - Performance-First Web Development"
          class="intro-logo"
          width="320"
          height="320"
          loading="eager"
        />
        <div class="logo-badge">
          <svg viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          Verified Developer
        </div>
      </div>
      
      <div class="intro-text">
        <h1 class="intro-title">
          <span class="title-line-1">N15</span>
          <span class="title-line-2 gradient-text">Labs</span>
        </h1>
        
        <p class="intro-subtitle">Performance-First Web Development</p>
        
        <div class="intro-taglines">
          <div class="tagline" v-for="(tag, index) in taglines" :key="tag" 
               :style="{ animationDelay: (index * 0.2 + 1) + 's' }">
            <span class="tag-icon">{{ tag.icon }}</span>
            <span class="tag-text">{{ tag.text }}</span>
          </div>
        </div>
        
        <div class="intro-stats">
          <div class="stat" v-for="(stat, index) in stats" :key="stat.label"
               :style="{ animationDelay: (index * 0.1 + 2) + 's' }">
            <strong>{{ stat.value }}</strong>
            <span>{{ stat.label }}</span>
          </div>
        </div>
      </div>
      
      <div class="intro-actions">
        <button @click="enterSite" class="enter-btn" aria-label="Enter portfolio">
          <span class="btn-text">Enter Portfolio</span>
          <svg class="btn-arrow" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
        
        <div class="skip-intro">
          <button @click="enterSite" class="skip-btn" aria-label="Skip intro">Skip Intro</button>
        </div>
      </div>
      
      <div class="intro-footer">
        <div class="location-badge">
          <svg viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
          </svg>
          Stoke-on-Trent, UK
        </div>
        <div class="tech-badge">
          Web Development Specialist
        </div>
      </div>
    </div>
    
    <div class="progress-indicator">
      <div class="progress-bar" :style="{ width: progressWidth + '%' }"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnimatedIntro',
  data() {
    return {
      show: true,
      progressWidth: 0,
      logo: require('@/assets/webp/logo-n15labs-white_comp.webp'),
      taglines: [
        { icon: '🚀', text: 'Modern & Fast' },
        { icon: '⚡', text: 'Performance-First' },
        { icon: '🎯', text: 'Results-Driven' },
        { icon: '🛠️', text: 'Custom Built' }
      ],
      stats: [
        { value: '<4s', label: 'Load Time' },
        { value : 'Full Stack', label: 'Expertise' },
        { value: '100%', label: 'Custom Code' }
      ]
    }
  },
  mounted() {
    this.show = true
    this.startProgress()
  },
  methods: {
    getParticleStyle(n) {
      return {
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
        animationDelay: (n * 0.3) + 's',
        animationDuration: (4 + Math.random() * 3) + 's'
      }
    },
    
    startProgress() {
      let progress = 0
      const interval = setInterval(() => {
        progress += 1
        this.progressWidth = progress
        if (progress >= 100) {
          clearInterval(interval)
        }
      }, 50)
    },
    
    enterSite() {
      this.show = false
      setTimeout(() => {
        this.$emit('enter')
      }, 500)
    }
  }
}
</script>

<style scoped>
.intro-overlay {
  position: fixed;
  inset: 0;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #111827 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  color: white;
  overflow: hidden;
  animation: fadeIn 1s ease-out;
  min-height: 100vh;
  min-height: 100dvh; /* Dynamic viewport height for mobile */
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.intro-background {
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
  width: 4px;
  height: 4px;
  background: rgba(59, 130, 246, 0.6);
  border-radius: 50%;
  animation: particleFloat 6s ease-in-out infinite;
}

@keyframes particleFloat {
  0%, 100% { 
    transform: translateY(0px) translateX(0px) scale(1);
    opacity: 0.3;
  }
  25% { 
    transform: translateY(-50px) translateX(30px) scale(1.2);
    opacity: 0.8;
  }
  50% { 
    transform: translateY(-100px) translateX(-20px) scale(0.8);
    opacity: 1;
  }
  75% { 
    transform: translateY(-50px) translateX(-40px) scale(1.1);
    opacity: 0.6;
  }
}

.gradient-orbs {
  position: absolute;
  inset: 0;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  animation: orbFloat 8s ease-in-out infinite;
}

.orb-1 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%);
  top: 10%;
  right: 10%;
  animation-delay: 0s;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(147, 51, 234, 0.2) 0%, transparent 70%);
  bottom: 20%;
  left: 5%;
  animation-delay: 2s;
}

.orb-3 {
  width: 250px;
  height: 250px;
  background: radial-gradient(circle, rgba(34, 197, 94, 0.25) 0%, transparent 70%);
  top: 50%;
  right: 30%;
  animation-delay: 4s;
}

@keyframes orbFloat {
  0%, 100% { 
    transform: translateY(0px) scale(1);
    opacity: 0.6;
  }
  50% { 
    transform: translateY(-30px) scale(1.1);
    opacity: 0.8;
  }
}

.intro-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 90vw;
  width: 100%;
  max-width: 600px;
  padding: clamp(1rem, 4vw, 2rem);
  animation: slideUp 1.5s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: clamp(1rem, 3vh, 2rem);
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.logo-container {
  position: relative;
  animation: logoReveal 2s ease-out;
  flex-shrink: 0;
}

@keyframes logoReveal {
  0% {
    opacity: 0;
    transform: scale(0.8) rotate(-5deg);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.1) rotate(2deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}

.logo-glow {
  position: absolute;
  inset: -20px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%);
  border-radius: 50%;
  z-index: -1;
  animation: glowPulse 3s ease-in-out infinite;
}

@keyframes glowPulse {
  0%, 100% { 
    opacity: 0.6; 
    transform: scale(1);
  }
  50% { 
    opacity: 1; 
    transform: scale(1.1);
  }
}

.intro-logo {
  width: clamp(180px, 25vw, 280px);
  height: clamp(180px, 25vw, 280px);
  border-radius: clamp(16px, 2vw, 24px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
  border: 3px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;
}

.intro-logo:hover {
  transform: scale(1.02);
}

.logo-badge {
  position: absolute;
  bottom: clamp(8px, 2vw, 15px);
  left: 50%;
  transform: translateX(-50%);
  background: rgba(34, 197, 94, 0.9);
  color: white;
  padding: clamp(0.375rem, 1.5vw, 0.5rem) clamp(0.75rem, 2vw, 1rem);
  border-radius: 50px;
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: badgeSlide 1s ease-out 1.5s both;
  white-space: nowrap;
}

@keyframes badgeSlide {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

.logo-badge svg {
  width: clamp(14px, 3vw, 16px);
  height: clamp(14px, 3vw, 16px);
}

.intro-text {
  flex-shrink: 0;
}

.intro-title {
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 800;
  line-height: 0.9;
  margin-bottom: clamp(0.5rem, 2vh, 1rem);
  letter-spacing: -0.03em;
}

.title-line-1 {
  display: block;
  animation: titleSlide 1s ease-out 0.5s both;
}

.title-line-2 {
  display: block;
  animation: titleSlide 1s ease-out 0.8s both;
}

.gradient-text {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-size: 200% 100%;
  animation: gradientShift 3s ease-in-out infinite;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes titleSlide {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.intro-subtitle {
  font-size: clamp(1rem, 3vw, 1.25rem);
  color: #a1a1aa;
  margin-bottom: clamp(1rem, 3vh, 1.5rem);
  font-weight: 500;
  animation: subtitleFade 1s ease-out 1.2s both;
}

@keyframes subtitleFade {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.intro-taglines {
  display: flex;
  justify-content: center;
  gap: clamp(0.5rem, 2vw, 1rem);
  flex-wrap: wrap;
  margin-bottom: clamp(1rem, 3vh, 1.5rem);
}

.tagline {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: clamp(0.5rem, 1.5vw, 0.75rem) clamp(0.75rem, 2vw, 1rem);
  border-radius: 50px;
  backdrop-filter: blur(10px);
  opacity: 0;
  animation: taglineSlide 0.8s ease-out both;
}

.tag-icon {
  font-size: clamp(0.875rem, 2vw, 1rem);
}

.tag-text {
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  font-weight: 500;
  color: #d1d5db;
  white-space: nowrap;
}

@keyframes taglineSlide {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.intro-stats {
  display: flex;
  justify-content: center;
  gap: clamp(1.5rem, 5vw, 3rem);
  margin-bottom: clamp(1rem, 3vh, 2rem);
  flex-wrap: wrap;
}

.stat {
  text-align: center;
  opacity: 0;
  animation: statFade 0.6s ease-out both;
}

.stat strong {
  display: block;
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 800;
  color: white;
  margin-bottom: 0.25rem;
}

.stat span {
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: #71717a;
  font-weight: 500;
  white-space: nowrap;
}

@keyframes statFade {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.intro-actions {
  animation: actionsFade 1s ease-out 2.5s both;
  flex-shrink: 0;
}

@keyframes actionsFade {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.enter-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  padding: clamp(1rem, 3vw, 1.25rem) clamp(1.5rem, 4vw, 2.5rem);
  border: none;
  border-radius: clamp(12px, 2vw, 16px);
  font-size: clamp(1rem, 3vw, 1.125rem);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 30px rgba(59, 130, 246, 0.4);
  margin-bottom: clamp(0.5rem, 2vh, 1rem);
  white-space: nowrap;
}

.enter-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 40px rgba(59, 130, 246, 0.5);
}

.enter-btn:active {
  transform: translateY(-1px);
}

.btn-arrow {
  width: clamp(16px, 4vw, 20px);
  height: clamp(16px, 4vw, 20px);
  transition: transform 0.3s ease;
}

.enter-btn:hover .btn-arrow {
  transform: translateX(4px);
}

.skip-intro {
  margin-top: clamp(0.5rem, 2vh, 1rem);
}

.skip-btn {
  background: none;
  border: none;
  color: #71717a;
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.skip-btn:hover {
  color: #d1d5db;
  background: rgba(255, 255, 255, 0.05);
}

.intro-footer {
  display: flex;
  justify-content: center;
  gap: clamp(1rem, 4vw, 2rem);
  flex-wrap: wrap;
  animation: footerFade 1s ease-out 3s both;
  flex-shrink: 0;
}

@keyframes footerFade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.location-badge,
.tech-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: #a1a1aa;
  font-weight: 500;
  white-space: nowrap;
}

.location-badge svg {
  width: clamp(14px, 3vw, 16px);
  height: clamp(14px, 3vw, 16px);
  color: #22c55e;
}

.progress-indicator {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: rgba(255, 255, 255, 0.1);
  z-index: 3;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  transition: width 0.1s ease;
}

/* Mobile-specific optimizations */
@media (max-height: 700px) {
  .intro-content {
    gap: clamp(0.75rem, 2vh, 1.5rem);
  }
  
  .intro-title {
    font-size: clamp(2rem, 6vw, 4rem);
  }
  
  .intro-logo {
    width: clamp(150px, 20vw, 220px);
    height: clamp(150px, 20vw, 220px);
  }
}

@media (max-width: 768px) {
  .intro-taglines {
    gap: 0.5rem;
  }
  
  .intro-stats {
    gap: 1.5rem;
  }
  
  .intro-footer {
    gap: 1rem;
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 480px) {
  .intro-taglines {
    flex-direction: column;
    align-items: center;
  }
  
  .intro-stats {
    flex-direction: column;
    gap: 1rem;
  }
}

/* Landscape mobile orientation */
@media (max-height: 500px) and (orientation: landscape) {
  .intro-content {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: clamp(1rem, 3vw, 2rem);
    max-width: 95vw;
  }
  
  .logo-container {
    flex-shrink: 0;
  }
  
  .intro-logo {
    width: clamp(120px, 15vw, 180px);
    height: clamp(120px, 15vw, 180px);
  }
  
  .intro-text {
    flex: 1;
    min-width: 300px;
  }
  
  .intro-actions {
    width: 100%;
    order: 3;
  }
  
  .intro-footer {
    width: 100%;
    order: 4;
  }
}

@media (prefers-reduced-motion: reduce) {
  .particle,
  .orb,
  .logo-container,
  .logo-glow,
  .gradient-text,
  .intro-content,
  .title-line-1,
  .title-line-2,
  .intro-subtitle,
  .tagline,
  .stat,
  .intro-actions,
  .intro-footer {
    animation: none;
  }
  
  .gradient-text {
    background: #3b82f6;
    -webkit-background-clip: unset;
    -webkit-text-fill-color: unset;
    background-clip: unset;
  }
}

.enter-btn:focus,
.skip-btn:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}
</style>