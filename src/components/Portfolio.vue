<template>
  <div class="portfolio">
    <h2>Technical Skills</h2>
    <div class="skills-grid">
      <SkillCard
        v-for="skill in skills"
        :key="skill.name"
        :skill="skill"
      />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

const SkillCard = defineAsyncComponent(() => import('./SkillCard.vue'))

import {
  siVuedotjs, siReact, siNextdotjs, siJavascript, siTailwindcss,
  siHtml5, siCss3, siNodedotjs, siExpress, siFirebase,
  siPhp, siLaravel, siCsharp, siPython, siKotlin,
  siMongodb, siMysql, siLinux, siGit, siWordpress,
  siPuppeteer, siOpenai, siAmazonaws, siGoogleanalytics
} from 'simple-icons/icons'

export default {
  name: 'PortfolioGallery',
  components: {
    SkillCard
  },
  data() {
    return {
      skills: [
        { name: 'Vue.js', icon: siVuedotjs?.svg, level: '⭐⭐⭐⭐', description: 'Frontend framework for reactive interfaces' },
        { name: 'React.js', icon: siReact?.svg, level: '⭐⭐⭐', description: 'Component-based SPA development' },
        { name: 'Next.js', icon: siNextdotjs?.svg, level: '⭐⭐⭐', description: 'React framework with SSR and API routes' },
        { name: 'JavaScript', icon: siJavascript?.svg, level: '⭐⭐⭐⭐', description: 'Language of the web — frontend & backend' },
        { name: 'Tailwind CSS', icon: siTailwindcss?.svg, level: '⭐⭐⭐', description: 'Utility-first CSS styling framework' },
        { name: 'HTML5', icon: siHtml5?.svg, level: '⭐⭐⭐⭐', description: 'Semantic structure for modern UIs' },
        { name: 'CSS3', icon: siCss3?.svg, level: '⭐⭐⭐', description: 'Styling and layout techniques' },

        { name: 'Node.js', icon: siNodedotjs?.svg, level: '⭐⭐⭐⭐', description: 'Backend JavaScript runtime' },
        { name: 'Express.js', icon: siExpress?.svg, level: '⭐⭐⭐', description: 'Web server framework for Node.js' },
        { name: 'Firebase', icon: siFirebase?.svg, level: '⭐⭐⭐', description: 'Realtime DB, auth, hosting & functions' },
        { name: 'PHP', icon: siPhp?.svg, level: '⭐⭐⭐', description: 'Server-side scripting language' },
        { name: 'Laravel', icon: siLaravel?.svg, level: '⭐⭐', description: 'PHP framework for modern backend apps' },
        { name: 'C#', icon: siCsharp?.svg, level: '⭐⭐', description: 'OOP language used in .NET ecosystem' },
        { name: 'Python', icon: siPython?.svg, level: '⭐⭐⭐', description: 'Used for scraping, automation & data tools' },
        { name: 'Kotlin', icon: siKotlin?.svg, level: '⭐', description: 'Strongly typed language for Android/Java apps' },
        { name: 'REST APIs', icon: siOpenai?.svg, level: '⭐⭐⭐⭐', description: 'Data flow via HTTP endpoints' },

        { name: 'MongoDB', icon: siMongodb?.svg, level: '⭐⭐⭐', description: 'NoSQL database for flexible documents' },
        { name: 'MySQL', icon: siMysql?.svg, level: '⭐⭐⭐', description: 'Relational DB for structured queries' },
        { name: 'Linux', icon: siLinux?.svg, level: '⭐⭐', description: 'CLI, server hosting & bash scripting' },
        { name: 'Git', icon: siGit?.svg, level: '⭐⭐⭐⭐', description: 'Version control with GitHub integration' },
        { name: 'WordPress', icon: siWordpress?.svg, level: '⭐⭐⭐', description: 'CMS development for creators & clients' },
        { name: 'Puppeteer', icon: siPuppeteer?.svg, level: '⭐⭐⭐', description: 'Web scraping & headless browser logic' },
        { name: 'ChatGPT / AI Tools', icon: siOpenai?.svg, level: '⭐⭐⭐', description: 'AI integrations & automation' },
        { name: 'Amazon SP API', icon: siAmazonaws?.svg, level: '⭐⭐', description: 'E-commerce product data + automation' },
        { name: 'SEO & Analytics', icon: siGoogleanalytics?.svg, level: '⭐⭐⭐', description: 'Data-driven site optimisation' }
      ]
    }
  }
}
</script>

<style scoped>
.portfolio {
  padding: 2rem;
  background-color: white;
  color: black;
  text-align: center;
}
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.25rem;
  margin-top: 1.5rem;
}
</style>
