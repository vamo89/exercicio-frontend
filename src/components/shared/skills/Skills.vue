<template>
  <section>
    <h2>Skills</h2>
    <div v-for="skill in skills" :key="skill.id">
      {{ skill.name }}: {{ skill.level }}
    </div>
    <a><icon name="external-link-alt"/>More on Coderwall</a>
  </section>
</template>

<script>
export default {
  props: ['skills'],
}
</script>

<style lang="scss">
</style>
