<template>
  <section>
    <div class="title">Latest Projects</div>
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

  .title {
    color: $section-title-color;
    font: $section-title-font;
  }
}
</style>