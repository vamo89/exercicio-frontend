<template>
  <section class="project" :featured="featured" >
    <div>{{ project.title }}</div>
    <div>{{ project.subtitle }}</div>
    <img :src="imgSrc" />
    <div>{{ project.description }}</div>
    <a :href="url"><icon name="external-link-alt"/>Find out more</a>
    <button :link="url"><icon name="regular/thumbs-up"/>Back My Project</button>
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
section.project:not([featured]) {
  display: grid;
  justify-items: center;

  img {
    order: -1;
  }

  button {
    display: none;
  }
}

section.project[featured] a {
  display: none;
}
</style>
