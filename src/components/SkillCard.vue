<template>
  <div class="skill">
    <span v-if="skill && skill.icon" class="icon" v-html="skill.icon"></span>

    <p class="skill-name">
      {{ skill?.name || 'Unknown' }}
      <small>{{ skill?.level || '' }}</small>
    </p>

    <p class="skill-desc">
      {{ skill?.description || 'No description provided.' }}
    </p>
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
  }
}
</script>

<style scoped>
.skill {
  background-color: #f9f9f9;
  padding: 1.2rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  transition: all 0.2s ease;
}
.skill:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}
.icon {
  display: inline-block;
  width: 42px;
  height: 42px;
  margin-bottom: 0.6rem;
}
.icon svg {
  width: 100%;
  height: 100%;
  fill: #407ba7;
}
.skill-name {
  font-weight: 600;
  font-size: 1rem;
  margin: 0.2rem 0;
}
.skill-desc {
  font-size: 0.85rem;
  color: #555;
  margin-top: 0.3rem;
  line-height: 1.4;
}
</style>
