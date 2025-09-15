<template>
  <div class="skill-card">
    <div class="skill-header">
      <div class="skill-icon-container">
        <span v-if="skill && skill.icon" class="skill-icon" v-html="skill.icon"></span>
        <div class="icon-glow"></div>
      </div>
      <div class="skill-level-badge" :class="levelClass">
        {{ skill?.level || 'Beginner' }}
      </div>
    </div>

    <div class="skill-content">
      <h3 class="skill-name">{{ skill?.name || 'Unknown' }}</h3>
      <p class="skill-description">
        {{ skill?.description || 'No description provided.' }}
      </p>
      
      <div class="skill-proficiency" v-if="skill?.proficiency">
        <div class="proficiency-label">
          <span>Proficiency</span>
          <span class="proficiency-percentage">{{ skill.proficiency }}%</span>
        </div>
        <div class="proficiency-bar">
          <div 
            class="proficiency-fill" 
            :style="{ width: skill.proficiency + '%' }"
            :class="levelClass"
          ></div>
        </div>
      </div>
    </div>

    <div class="skill-hover-effect"></div>
  </div>
</template>

<script>
export default {
  name: 'SkillCard',
  props: {
    skill: {
      type: Object,
      required: true,
      default: () => ({}) 
    }
  },
  computed: {
    levelClass() {
      const level = this.skill?.level?.toLowerCase() || 'beginner'
      if (level === 'expert') return 'expert'
      if (level === 'advanced') return 'advanced'
      if (level === 'intermediate') return 'intermediate'
      return 'beginner'
    }
  }
}
</script>

<style scoped>
.skill-card {
  position: relative;
  background: #ffffff;
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 240px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.skill-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  border-color: #3b82f6;
}

.skill-card:hover .icon-glow {
  opacity: 1;
  transform: scale(1.3);
}

.skill-card:hover .skill-hover-effect {
  opacity: 1;
}

.skill-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.skill-icon-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
}

.skill-icon {
  display: inline-block;
  width: 48px;
  height: 48px;
  z-index: 2;
  position: relative;
  transition: transform 0.3s ease;
}

.skill-card:hover .skill-icon {
  transform: scale(1.1);
}

.skill-icon svg {
  width: 100%;
  height: 100%;
  fill: #3b82f6;
  transition: fill 0.3s ease;
}

.skill-card:hover .skill-icon svg {
  fill: #1d4ed8;
}

.icon-glow {
  position: absolute;
  inset: -15px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%);
  border-radius: 50%;
  opacity: 0;
  transition: all 0.3s ease;
  transform: scale(0.8);
  z-index: 1;
}

.skill-level-badge {
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.skill-level-badge.expert {
  background: linear-gradient(135deg, #10b981, #059669);
}

.skill-level-badge.advanced {
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
}

.skill-level-badge.intermediate {
  background: linear-gradient(135deg, #f59e0b, #d97706);
}

.skill-level-badge.beginner {
  background: linear-gradient(135deg, #6b7280, #4b5563);
}

.skill-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.skill-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 1rem 0;
  line-height: 1.3;
}

.skill-description {
  font-size: 1rem;
  color: #6b7280;
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
  flex: 1;
}

.skill-proficiency {
  margin-top: auto;
}

.proficiency-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
}

.proficiency-percentage {
  font-weight: 700;
  color: #111827;
}

.proficiency-bar {
  height: 8px;
  background: #f3f4f6;
  border-radius: 50px;
  overflow: hidden;
  position: relative;
}

.proficiency-fill {
  height: 100%;
  border-radius: 50px;
  transition: width 0.8s ease;
  position: relative;
}

.proficiency-fill.expert {
  background: linear-gradient(135deg, #10b981, #059669);
}

.proficiency-fill.advanced {
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
}

.proficiency-fill.intermediate {
  background: linear-gradient(135deg, #f59e0b, #d97706);
}

.proficiency-fill.beginner {
  background: linear-gradient(135deg, #6b7280, #4b5563);
}

.proficiency-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.skill-hover-effect {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.skill-card:focus-within {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

@media (max-width: 768px) {
  .skill-card {
    padding: 1.5rem;
    min-height: 220px;
  }

  .skill-header {
    margin-bottom: 1.25rem;
  }

  .skill-icon-container {
    height: 50px;
    width: 50px;
  }

  .skill-icon {
    width: 40px;
    height: 40px;
  }

  .skill-name {
    font-size: 1.125rem;
  }

  .skill-description {
    font-size: 0.9375rem;
  }

  .skill-level-badge {
    padding: 0.375rem 0.75rem;
    font-size: 0.8125rem;
  }
}

@media (max-width: 480px) {
  .skill-card {
    padding: 1.25rem;
    min-height: 200px;
  }

  .skill-icon-container {
    height: 45px;
    width: 45px;
  }

  .skill-icon {
    width: 36px;
    height: 36px;
  }

  .skill-name {
    font-size: 1rem;
  }

  .skill-description {
    font-size: 0.875rem;
  }

  .skill-level-badge {
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
  }

  .proficiency-label {
    font-size: 0.8125rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .skill-card,
  .skill-icon,
  .icon-glow,
  .skill-hover-effect,
  .proficiency-fill {
    transition: none;
  }

  .skill-card:hover {
    transform: none;
  }

  .skill-card:hover .skill-icon {
    transform: none;
  }

  .skill-card:hover .icon-glow {
    transform: none;
  }

  .proficiency-fill::after {
    animation: none;
  }
}
</style>