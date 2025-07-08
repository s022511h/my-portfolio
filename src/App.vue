<template>
  <div id="app">
    <AnimatedIntro v-if="showIntro" @enter="handleEnter" />

    <div v-else>
      <AppHeader />
      <router-view style="flex: 1;" />
      <AppFooter />
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { watch, onMounted } from 'vue'
import AppHeader from './components/Header.vue'
import AppFooter from './components/Footer.vue'
import AnimatedIntro from './components/AnimatedIntro.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    AnimatedIntro
  },
  data() {
    return {
      showIntro: !localStorage.getItem('n15labs-visited'),
      mySocket: null
    }
  },
  methods: {
    handleEnter() {
      localStorage.setItem('n15labs-visited', true)
      this.showIntro = false
    },
    setupWebSocket() {
      this.mySocket = new WebSocket('wss://your-websocket-url.com')

      this.mySocket.onopen = () => {
        console.log('WebSocket connected')
      }

      this.mySocket.onmessage = (event) => {
        console.log('Message received:', event.data)
      }

      this.mySocket.onclose = () => {
        console.log('WebSocket closed')
        setTimeout(() => {
          this.setupWebSocket()
        }, 3000)
      }

      this.mySocket.onerror = (err) => {
        console.error('WebSocket error:', err)
        this.mySocket.close()
      }
    }
  },
  mounted() {
    this.setupWebSocket()

    window.addEventListener('pagehide', () => {
      if (this.mySocket && this.mySocket.readyState === WebSocket.OPEN) {
        console.log('Closing WebSocket on pagehide')
        this.mySocket.close()
      }
    })

    window.addEventListener('pageshow', event => {
      if (event.persisted) {
        console.log('Page restored from bfcache — optionally reconnecting WebSocket')
      }
    })
  },
  setup() {
    const route = useRoute()

    watch(
      () => route.fullPath,
      () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    )
  }
}
</script>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

router-view {
  flex: 1;
}
</style>
