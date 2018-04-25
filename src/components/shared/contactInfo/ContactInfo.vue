<template>
  <section>
    <icon name="map-marker"/>{{ info.location }}
    <icon name="regular/envelope"/>{{ info.email }}
    <icon name="link"/>{{ info.website }}
  </section>
</template>

<script>
export default {
  props: ['info'],
}
</script>

<style lang="scss">
</style>
