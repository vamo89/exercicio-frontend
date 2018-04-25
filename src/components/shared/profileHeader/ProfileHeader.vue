<template>
  <header>
    <img :src="imgSrc" />
    <section>
      <div>{{ data.name }}</div>
      <div>{{ data.role }}</div>
      <nav>
        <a><icon name="brands/twitter"/></a>
        <a><icon name="brands/google-plus"/></a>
        <a><icon name="brands/linkedin"/></a>
        <a><icon name="brands/github-alt"/></a>
        <a><icon name="brands/yoast"/></a>
      </nav>
    </section>
    <button><icon name="regular/paper-plane"/>Contact Me</button>
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
