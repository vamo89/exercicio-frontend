<template>
  <section :featured="featured" >
    <div>{{ project.title }}</div>
    <div>{{ project.subtitle }}</div>
    <img :src="imgSrc" />
    <div>{{ project.description }}</div>
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

section:not([featured]) {
  display: grid;
  justify-items: center;

  img {
    order: -1;
  }

  button {
    display: none;
  }
}

section[featured] a {
  display: none;
}
</style>
