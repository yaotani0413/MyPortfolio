<template>
  <section class="top">
      <h1 class="top_title"><span class="greet">Hello World!</span><br>This is Yaotani's instruction manual</h1>
    <p class="drum">
      <button>GO!</button>
    </p>
  </section>
</template>

<script>
</script>

<style scoped>

.top {
  height: 100vh;
  background-color: #1BA1E2;
  margin-top: 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.top_title {
  margin: 0;
  font-size: 2rem;
  text-align: center;
  text-shadow: 5px 5px 5px #808080; 
  letter-spacing: 1px;
  font-weight: bold;
}

.greet {
  font-size: 4rem;
}

.drum {
  height: 450px;
  width: 450px;
  background-image: url(~assets/images/drum.png);
  background-size: cover;
  position: relative;
}

.drum button {
  font-size: 2rem;
  position: absolute;
  top: 208px;
  left: 150px;
  cursor: pointer;
  color: #fff;
  background-color: black;
  border-radius: 50%;
  width: 135px;
  height: 135px;
  border: none;
}

.drum button:hover {
  opacity: 0.8;
}

.drum button:focus {
  outline: none;
}
</style>