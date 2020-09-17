<template>
  <section class="thank">
    <h1
      v-observe-visibility="visibilityChanged01"
      :class="{
        animate__zoomIn: isVisible01,
        animate__animated: isVisible01,
        animate__slow: isVisible01,
      }"
      class="thank_title"
    >
      Thank you for watching!
    </h1>
    <h3
      v-observe-visibility="visibilityChanged01"
      :class="{
        animate__fadeIn: isVisible01,
        animate__animated: isVisible01,
        animate__slow: isVisible01,
        'animate__delay-2s': isVisible01,
      }"
      class="thank_subtitle"
    >
      〜Aiming for greater heights〜
    </h3>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isVisible01: false,
      isVisible02: false,
    }
  },
  methods: {
    visibilityChanged01(isVisible01) {
      this.isVisible01 = isVisible01
    },
    visibilityChanged02(isVisible02) {
      this.isVisible02 = isVisible02
    },
  },
}
</script>

<style scoped>
@media screen and (min-width: 767px) {
  .thank {
    background-color: #1ba1e2;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .thank_title {
    color: #fff;
    text-align: center;
    font-size: 2rem;
    text-shadow: 5px 5px 5px #808080;
    letter-spacing: 1px;
    margin: 0;
  }

  .thank_subtitle {
    margin: 0;
    text-shadow: 5px 5px 5px #808080;
    letter-spacing: 1px;
    color: #fff;
  }
}

@media screen and (max-width: 767px) {
  .thank {
    background-color: #1ba1e2;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .thank_title {
    color: #fff;
    text-align: center;
    font-size: 2rem;
    text-shadow: 5px 5px 5px #808080;
    letter-spacing: 1px;
    margin: 0;
  }

  .thank_subtitle {
    margin: 0;
    text-shadow: 5px 5px 5px #808080;
    letter-spacing: 1px;
    color: #fff;
  }
}

@media screen and (max-width: 479px) {
  .thank {
    background-color: #1ba1e2;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .thank_title {
    color: #fff;
    text-align: center;
    font-size: 1.5rem;
    text-shadow: 5px 5px 5px #808080;
    letter-spacing: 1px;
    margin: 0;
  }

  .thank_subtitle {
    margin: 0;
    text-shadow: 5px 5px 5px #808080;
    letter-spacing: 1px;
    color: #fff;
    font-size: 0.5rem;
  }
}
</style>
