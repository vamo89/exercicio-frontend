<template>
  <section>
    {{ info.location }}
    {{ info.email }}
    {{ info.website }}
  </section>
</template>

<script>
export default {
  props: ['info'],
}
</script>

<style lang="scss">
</style>
