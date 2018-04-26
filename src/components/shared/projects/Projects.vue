<template>
  <section>
    Latest Projects
    <ul>
      <li v-for="(project, index) in projects" :key="project.id">
        <Project :project="project" :featured="index === 0" />
      </li>
    </ul>
  </section>
</template>

<script>
import Project from '../project/Project'

export default {
  components: {
    Project,
  },
  props: ['projects'],
}
</script>

<style lang="scss" scoped>
@import '../../../assets/constants';

section {
  background-color: $section-background-color;
}
</style>