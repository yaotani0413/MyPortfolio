<template>
  <div class="footer">
    <h6
      v-observe-visibility="visibilityChanged01"
      :class="{
        animate__fadeInRight: isVisible01,
        animate__animated: isVisible01,
        animate__slow: isVisible01,
      }"
      class="copyright"
    >
      ©︎ 2020 Atsushi Yaotani
    </h6>
  </div>
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
    visibilityChanged01(isVisible01, entry) {
      this.isVisible01 = isVisible01
      console.log(entry)
    },
    visibilityChanged02(isVisible02, entry) {
      this.isVisible02 = isVisible02
      console.log(entry)
    },
  },
}
</script>

<style scoped>
@media screen and (min-width: 767px) {
  .footer {
    height: 75px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .copyright {
    margin: 0;
    margin-left: 50px;
    font-size: 0.9rem;
    font-weight: normal;
  }
}

@media screen and (max-width: 767px) {
  .footer {
    height: 75px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .copyright {
    margin: 0;
    margin-left: 50px;
    font-size: 0.9rem;
    font-weight: normal;
  }
}

@media screen and (max-width: 479px) {
  .footer {
    height: 75px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .copyright {
    margin: 0;
    margin-left: 30px;
    font-size: 0.6rem;
    font-weight: normal;
  }
}
</style>
