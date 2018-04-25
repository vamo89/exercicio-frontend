<template>
  <header>
    <img :src="imgSrc" />
    <section>
      <div>{{ data.name }}</div>
      <div>{{ data.role }}</div>
      <nav>
        <a>twitter</a>
        <a>google+</a>
        <a>ankedIn</a>
        <a>github</a>
        <a>yahoo?</a>
      </nav>
    </section>
    <button>Contact Me</button>
  </header>
</template>

<script>
export default {
  props: ['data'],
  computed: {
    imgSrc: function () {
      return `/static/${this.data.picture}`
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  border-top: 10px solid grey;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
