<template>
  <transition name="fade">
    <div v-show="show" class="intro-overlay">
      <div class="intro-content">
        <img
          :src="logo"
          alt="N15 Labs"
          class="intro-logo"
          width="240"
          height="240"
          loading="eager"
        />
        <button @click="enterSite" class="intro-button">Enter</button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'AnimatedIntro',
  data() {
    return {
      show: true,
      logo: require('@/assets/webp/logo-n15labs-white.webp')
    }
  },
  mounted() {
    this.show = true
  },
  methods: {
    enterSite() {
      this.show = false
      this.$emit('enter')
    }
  }
}
</script>

<style scoped>
.intro-overlay {
  position: fixed;
  inset: 0;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: fadeIn 1s ease-out;
  pointer-events: auto;
}

.intro-content {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.intro-logo {
  max-width: 360px;
  width: 80%;
  height: auto;
  margin-bottom: 2rem;
}

.intro-button {
  padding: 1.5rem 3rem;
  font-size: 1.5rem;
  border: none;
  background: #407ba7;
  color: white;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.intro-button:hover {
  background: #5fa4cc;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
