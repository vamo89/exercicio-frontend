<template>
  <header>
    <img :src="imgSrc" />
    <section class="info">
      <div class="name">{{ data.name }}</div>
      <div class="role">{{ data.role }}</div>
      <nav>
        <a><figure><icon class="social-media-icon" scale="1.3" name="brands/twitter"/></icon></figure></a>
        <a><figure><icon class="social-media-icon" scale="1.3" name="brands/google-plus-g"/></icon></figure></a>
        <a><figure><icon class="social-media-icon" scale="1.3" name="brands/linkedin-in"/></icon></figure></a>
        <a><figure><icon class="social-media-icon" scale="1.3" name="brands/github-alt"/></icon></figure></a>
        <a><figure><icon class="social-media-icon" scale="1.3" name="brands/yoast"/></icon></figure></a>
      </nav>
    </section>
    <button><icon class="icon" scale="0.8" name="paper-plane"/>Contact Me</button>
  </header>
</template>

<script>
export default {
  props: ['data'],
  computed: {
    imgSrc: function () {
      return `static/${this.data.picture}`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/constants.scss';

header {
  background-color: $header-background-color;

  border-top: 10px solid $header-border-color;
  display: flex;
  flex-direction: column;
  align-items: center;

  > * {
    margin: 15px;
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;

    .name {
      color: $header-title-color;
      font: $header-title-font;
    }

    .role {
      color: $header-subtitle-color;
      font: $header-subtitle-font;
    }

    nav figure {
      margin: 5px;
      display: inline-block;
      position: relative;

      background-color: $icon-color;
      border-radius: 50%;
      height: 40px;
      width: 40px;
      color: white;

      .social-media-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  button {
    color: white;
    background-color: $header-button-color;
    font: $header-button-font;
    text-transform: uppercase;
    padding: 5px;
    border-radius: 5px;
    border: solid 7px $header-button-color;
  }
}

@media (min-width: $break-mobile) {
  header {
    flex-direction: row;
    padding: 0 50px;

    .info {
      align-items: start;

      figure:first-child {
        margin-left: 0;
      }
    }

    button {
      margin-left: auto;
    }
  }
}

</style>
