<template>
  <div class="not-found">
    <div class="nf-inner">
      <span class="nf-code">404</span>
      <h1>Page not found</h1>
      <p>That page doesn't exist — it may have moved or been renamed.</p>
      <div class="nf-links">
        <router-link to="/">Home</router-link>
        <router-link to="/services">Services</router-link>
        <router-link to="/case-studies">Results</router-link>
        <router-link to="/pricing">Pricing</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { useHead } from '@vueuse/head'

export default {
  name: 'NotFoundPage',
  setup() {
    useHead({
      title: 'Page not found | N15 Labs',
      meta: [{ name: 'robots', content: 'noindex, follow' }]
    })
  }
}
</script>

<style scoped>
.not-found {
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #0a0a0a 0%, #111111 100%);
  color: #f4f4f5;
  padding: 6rem 1.5rem 4rem;
}

.nf-inner {
  text-align: center;
  max-width: 520px;
}

.nf-code {
  display: block;
  font-size: 5rem;
  font-weight: 800;
  line-height: 1;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.75rem;
}

.nf-inner h1 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: #ffffff;
}

.nf-inner p {
  color: #a1a1aa;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.nf-links {
  display: flex;
  gap: 1.25rem;
  justify-content: center;
  flex-wrap: wrap;
}

.nf-links a {
  color: #60a5fa;
  text-decoration: none;
  font-weight: 500;
}

.nf-links a:hover {
  text-decoration: underline;
}

.nf-links a:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}
</style>