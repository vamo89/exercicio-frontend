<template>
  <section>
    <h2>About Me</h2>
    <div>{{ text }}</div>
  </section>
</template>

<script>
export default {
  props: ['text'],
}
</script>

<style lang="scss" scoped>
section div {
  white-space: pre-line;
}
</style>
