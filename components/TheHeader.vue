<template>
  <div class="header">
    <img
      class="logo"
      src="https://res.cloudinary.com/djrmmyb4i/image/upload/v1596436063/logo_hembq8.png"
      alt="ロゴ"
    />
    <ul class="nav_content">
      <li class="nav_btn" @click="scrollTop">
        Top
      </li>
      <li class="nav_btn" @click="scrollAbout">
        About
      </li>
      <li class="nav_btn" @click="scrollSkill">
        Skill
      </li>
      <li class="nav_btn" @click="scrollContact">
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
      if (window.innerWidth > 768) {
        window.scroll({
          top: 930,
          behavior: "smooth",
        })
      } else if (window.innerWidth <= 768 && window.innerWidth > 479) {
        window.scroll({
          top: 950,
          behavior: "smooth",
        })
      } else {
        window.scroll({
          top: 738,
          behavior: "smooth",
        })
      }
    },
    scrollSkill() {
      if (window.innerWidth > 768) {
        window.scroll({
          top: 1855,
          behavior: "smooth",
        })
      } else if (window.innerWidth <= 768 && window.innerWidth > 479) {
        window.scroll({
          top: 1900,
          behavior: "smooth",
        })
      } else {
        window.scroll({
          top: 1475,
          behavior: "smooth",
        })
      }
    },
    scrollContact() {
      if (window.innerWidth > 768) {
        window.scroll({
          top: 3713,
          behavior: "smooth",
        })
      } else if (window.innerWidth <= 768 && window.innerWidth > 479) {
        window.scroll({
          top: 3758,
          behavior: "smooth",
        })
      } else {
        window.scroll({
          top: 2805,
          behavior: "smooth",
        })
      }
    },
  },
}
</script>

<style scoped>
@media screen and (min-width: 768px) {
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
    padding-right: 50px;
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
}

@media screen and (max-width: 768px) {
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
    padding-right: 50px;
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
}

@media screen and (max-width: 479px) {
  .header {
    height: 75px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.9);
    color: #000000;
    z-index: 10;
    box-shadow: 0 0 5px 2px #808080;
    padding: 0;
  }

  .logo {
    display: none;
  }

  .nav_btn {
    margin-left: 50px;
  }
}
</style>
