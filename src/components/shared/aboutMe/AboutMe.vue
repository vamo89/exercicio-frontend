<template>
  <section>
    <div class="title">About Me</div>
    <div class="text">{{ text }}</div>
  </section>
</template>

<script>
export default {
  props: ['text'],
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

  .text {
    color: $text-color;
    font: $text-font;

    white-space: pre-line;
  }
}
</style>
