<template>
  <section class="top">
    <h1
      v-observe-visibility="visibilityChanged01"
      :class="{
        animate__rotateInDownLeft: isVisible01,
        animate__animated: isVisible01,
        animate__slower: isVisible01,
      }"
      class="top_title"
    >
      Hello World!
    </h1>
    <h4
      v-observe-visibility="visibilityChanged01"
      :class="{
        animate__fadeInUp: isVisible01,
        animate__animated: isVisible01,
        animate__slow: isVisible01,
      }"
      class="top_subtitle"
    >
      This is Yaotani's instruction manual
    </h4>
    <div class="street moving"></div>
    <img
      class="car suspention"
      src="https://res.cloudinary.com/djrmmyb4i/image/upload/v1596436064/car_xiyxbn.png"
      alt="クルマ"
    />
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
.top {
  overflow: hidden;
  height: 93vh;
  background-color: #1ba1e2;
  margin-top: 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  position: relative;
}

.street {
  background: url("https://res.cloudinary.com/djrmmyb4i/image/upload/v1596436064/street_clsph2.png");
  background-size: contain;
  height: 360px;
  width: 500%;
  position: absolute;
  bottom: 0;
  left: 0;
}

.car {
  width: 200px;
  height: 80px;
  position: absolute;
  bottom: 0;
  left: 120px;
}

@keyframes moving {
  100% {
    transform: translateX(-3000px);
  }
}

@keyframes suspention {
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(3px);
  }
  0% {
    transform: translateY(0px);
  }
}

.moving {
  animation: moving 25s linear infinite;
}

.suspention {
  animation: suspention 1s linear infinite;
}

.top_title {
  margin: 0;
  font-size: 4.2rem;
  text-align: center;
  text-shadow: 5px 5px 5px #808080;
  letter-spacing: 1px;
  font-weight: bold;
}

.top_subtitle {
  font-size: 2rem;
  margin: 0;
  text-align: center;
  text-shadow: 5px 5px 5px #808080;
  letter-spacing: 1px;
  font-weight: bold;
}
</style>
