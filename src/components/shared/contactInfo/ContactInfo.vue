<template>
  <section>
    <div><icon class="icon" name="map-marker"/>{{ info.location }}</div>
    <div><icon class="icon" name="regular/envelope"/><a>{{ info.email }}</a></div>
    <div><icon class="icon" name="link"/><a>{{ info.website }}</a></div>
  </section>
</template>

<script>
export default {
  props: ['info'],
}
</script>

<style lang="scss" scoped>
@import '../../../assets/constants';

section {
  background-color: $section-background-color;
  font: $text-font;

  .icon {
    color: $icon-color;
  }
}
</style>
