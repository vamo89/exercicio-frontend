<template>
  <section class="project" :featured="featured" >
    <div class="title">{{ project.title }}</div>
    <div class="subtitle">{{ project.subtitle }}</div>
    <img :src="imgSrc" />
    <div class="text">{{ project.description }}</div>
    <a :href="project.url"><icon name="external-link-alt"/>Find out more</a>
    <button :link="project.url"><icon name="regular/thumbs-up"/>Back My Project</button>
  </section>
</template>

<script>
export default {
  props: ['project', 'featured'],
  computed: {
    imgSrc: function () {
      return `/static/${this.project.picture}`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/constants';

// Basic css
section {
  display: grid;
  justify-items: center;

  .text {
    color: $text-color;
    font: $text-font;
  }

  .title {
    color: $section-title-color;
    font: $project-title-font;
  }

  .subtitle {
    color: $section-subtitle-color;
  }
}

// Only featured
section.project[featured] {
  title {
    font: $project-title-featured-font;
  }

  a {
    display: none;
  }

  button {
    color: white;
    background-color: $projects-button-color;
    font: $header-button-font;
    text-transform: uppercase;
    padding: 0;
    border-radius: 5px;
    border: solid 7px $projects-button-color;
  }
}

// Only non-featured
section.project:not([featured]) {
  border-top: 1px solid grey;

  img {
    order: -1;
  }

  button {
    display: none;
  }
}
</style>
