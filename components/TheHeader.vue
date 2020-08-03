<template>
  <div class="header">
    <img
      class="logo"
      src="https://res.cloudinary.com/djrmmyb4i/image/upload/v1596436063/logo_hembq8.png"
      alt="ロゴ"
    />
    <ul class="nav_content">
      <li @click="scrollTop" class="nav_btn">
        Top
      </li>
      <li @click="scrollAbout" class="nav_btn">
        About
      </li>
      <li @click="scrollSkill" class="nav_btn">
        Skill
      </li>
      <li @click="scrollContact" class="nav_btn">
        Contact
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    scrollTop() {
      window.scroll({
        top: 0,
        behavior: "smooth",
      })
    },
    scrollAbout() {
      window.scroll({
        top: 930,
        behavior: "smooth",
      })
    },
    scrollSkill() {
      window.scroll({
        top: 1855,
        behavior: "smooth",
      })
    },
    scrollContact() {
      window.scroll({
        top: 3713,
        behavior: "smooth",
      })
    },
  },
}
</script>

<style scoped>
.header {
  height: 75px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.9);
  color: #000000;
  z-index: 10;
  box-shadow: 0 0 5px 2px #808080;
}

.logo {
  height: 70px;
  width: 70px;
  display: inline-block;
  margin-left: 40px;
  cursor: pointer;
}

.nav_content {
  margin: 0;
  padding: 0;
  display: block;
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  cursor: pointer;
}

.nav_content:last-child {
  margin-right: 40px;
}

.nav_btn {
  margin-left: 50px;
}

.nav_btn:hover {
  opacity: 0.8;
}
</style>
