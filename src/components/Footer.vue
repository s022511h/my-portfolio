<template> 
  <footer class="app-footer">
    <div class="footer-top">
      <a class="footer-left" href="tel:07931206686">📞 07931 206686</a>

      <div class="logo-block">
        <img
          :src="require('@/assets/webp/logo-n15labs-white.webp')"
          alt="N15 Labs Footer Logo"
          class="footer-logo"
          width="120"
          height="120"
          loading="lazy"
        />
      </div>

      <a class="footer-right" href="mailto:dre_86@hotmail.co.uk">dre_86@hotmail.co.uk</a>
    </div>

    <div class="social-icons">
      <a href="https://github.com/s022511h" target="_blank" aria-label="GitHub">
        <GithubIcon />
      </a>
      <a href="https://linkedin.com/in/andre-simpson-502365178" target="_blank" aria-label="LinkedIn">
        <LinkedinIcon />
      </a>
      <a href="https://www.instagram.com/n15labs?utm_source=ig_web_button_share_sheet&igsh=MXBwYXN6ZWF0d3FibA==" target="_blank" aria-label="Instagram">
        <InstagramIcon />
      </a>
      <a href="https://x.com" target="_blank" aria-label="Twitter/X">
        <TwitterIcon />
      </a>
    </div>

    <p class="copyright">
      &copy; {{ new Date().getFullYear() }} N15 Labs. Built by Andre Simpson.
    </p>
  </footer>
</template>

<script>
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  TwitterIcon
} from 'lucide-vue-next'

export default {
  name: 'AppFooter',
  components: {
    GithubIcon,
    LinkedinIcon,
    InstagramIcon,
    TwitterIcon
  }
}
</script>

<style scoped>
.app-footer {
  background-color: #111;
  color: #eee;
  padding: 2rem 1.5rem;
  border-top: 2px solid #222;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.3);
  margin-top: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-left,
.footer-right {
  font-size: 1.5rem;
  color: #ccc;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
  max-width: 200px;
  margin-left: 10px;
  margin-right: 20px;
}

.logo-block {
  flex: 1;
  display: flex;
  justify-content: center;
}

.footer-logo {
  width: 120px;
  height: 120px;
  object-fit: contain;
}

.social-icons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.social-icons a {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #eee;
  font-size: 1.6rem;
  transition: color 0.3s ease;
}

.social-icons a:hover {
  color: #407ba7;
}

copyright {
  font-size: 1rem;
  opacity: 0.7;
}

@media (max-width: 600px) {
  .footer-top {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0.5rem;
  }

  .footer-left,
  .footer-right {
    font-size: 1.2rem;
    max-width: 100%;
    justify-content: center;
    margin: 0;
  }

  .logo-block {
    justify-content: center;
  }

  .footer-logo {
    width: 100px;
    height: 100px;
  }
}
</style>
