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
        <button @click="enterSite" class="enter-btn">
          <span class="btn-text">Enter Portfolio</span>
          <svg class="btn-arrow" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
        
        <div class="skip-intro">
          <button @click="enterSite" class="skip-btn">Skip Intro</button>
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
          Vue.js & Node.js Specialist
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
      logo: require('@/assets/webp/logo-n15labs-white.webp'),
      taglines: [
        { icon: '🚀', text: 'Modern & Fast' },
        { icon: '⚡', text: 'Performance-First' },
        { icon: '🎯', text: 'Results-Driven' },
        { icon: '🛠️', text: 'Custom Built' }
      ],
      stats: [
        { value: '<2.5s', label: 'Load Time' },
        { value: '50+', label: 'Projects' },
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
  max-width: 600px;
  padding: 2rem;
  animation: slideUp 1.5s ease-out;
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
  margin-bottom: 2rem;
  animation: logoReveal 2s ease-out;
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
  inset: -40px;
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
  width: 320px;
  height: 320px;
  max-width: 80vw;
  height: auto;
  border-radius: 24px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
  border: 3px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;
}

.intro-logo:hover {
  transform: scale(1.02);
}

.logo-badge {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(34, 197, 94, 0.9);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: badgeSlide 1s ease-out 1.5s both;
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
  width: 16px;
  height: 16px;
}

.intro-text {
  margin-bottom: 3rem;
}

.intro-title {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 800;
  line-height: 0.9;
  margin-bottom: 1rem;
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
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  color: #a1a1aa;
  margin-bottom: 2rem;
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
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.tagline {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.75rem 1rem;
  border-radius: 50px;
  backdrop-filter: blur(10px);
  opacity: 0;
  animation: taglineSlide 0.8s ease-out both;
}

.tag-icon {
  font-size: 1rem;
}

.tag-text {
  font-size: 0.875rem;
  font-weight: 500;
  color: #d1d5db;
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
  gap: 3rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.stat {
  text-align: center;
  opacity: 0;
  animation: statFade 0.6s ease-out both;
}

.stat strong {
  display: block;
  font-size: 2rem;
  font-weight: 800;
  color: white;
  margin-bottom: 0.25rem;
}

.stat span {
  font-size: 0.875rem;
  color: #71717a;
  font-weight: 500;
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
  margin-bottom: 2rem;
  animation: actionsFade 1s ease-out 2.5s both;
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
  padding: 1.25rem 2.5rem;
  border: none;
  border-radius: 16px;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 30px rgba(59, 130, 246, 0.4);
  margin-bottom: 1rem;
}

.enter-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 40px rgba(59, 130, 246, 0.5);
}

.enter-btn:active {
  transform: translateY(-1px);
}

.btn-arrow {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.enter-btn:hover .btn-arrow {
  transform: translateX(4px);
}

.skip-intro {
  margin-top: 1rem;
}

.skip-btn {
  background: none;
  border: none;
  color: #71717a;
  font-size: 0.875rem;
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
  gap: 2rem;
  flex-wrap: wrap;
  animation: footerFade 1s ease-out 3s both;
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
  font-size: 0.875rem;
  color: #a1a1aa;
  font-weight: 500;
}

.location-badge svg {
  width: 16px;
  height: 16px;
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

@media (max-width: 768px) {
  .intro-content {
    padding: 1rem;
  }
  
  .intro-logo {
    width: 250px;
    height: 250px;
  }
  
  .intro-taglines {
    gap: 0.5rem;
  }
  
  .tagline {
    padding: 0.5rem 0.75rem;
  }
  
  .intro-stats {
    gap: 2rem;
  }
  
  .intro-footer {
    gap: 1rem;
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 480px) {
  .intro-title {
    font-size: 3rem;
  }
  
  .enter-btn {
    padding: 1rem 2rem;
    font-size: 1rem;
  }
  
  .intro-taglines {
    flex-direction: column;
    align-items: center;
  }
  
  .intro-stats {
    flex-direction: column;
    gap: 1rem;
  }
}

/* Accessibility improvements */
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

/* Focus states for accessibility */
.enter-btn:focus,
.skip-btn:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}
</style>