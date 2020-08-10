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
    <div id="nav-drawer">
      <input id="nav-input" type="checkbox" class="nav-unshown" />
      <label id="nav-open" for="nav-input"><span></span></label>
      <label id="nav-close" class="nav-unshown" for="nav-input"></label>
      <div id="nav-contents">
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
    </div>
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
@media screen and (min-width: 768px) {
  #nav-drawer {
    display: none;
  }

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
  #nav-drawer {
    display: none;
  }

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
  }

  .header > ul {
    display: none;
  }

  #nav-drawer {
    position: relative;
  }

  .nav-unshown {
    display: none;
  }

  #nav-open {
    display: inline-block;
    width: 30px;
    height: 22px;
    vertical-align: middle;
  }

  #nav-open span,
  #nav-open span:before,
  #nav-open span:after {
    position: absolute;
    height: 3px;
    width: 25px;
    border-radius: 3px;
    background: #555;
    display: block;
    content: "";
    cursor: pointer;
  }
  #nav-open span:before {
    bottom: -8px;
  }
  #nav-open span:after {
    bottom: -16px;
  }

  #nav-close {
    display: none;
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0;
    transition: 0.3s ease-in-out;
  }

  #nav-contents {
    overflow: auto;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 90%;
    max-width: 330px;
    height: 100%;
    background: #fff;
    transition: 0.3s ease-in-out;
    -webkit-transform: translateX(-105%);
    transform: translateX(-105%);
  }

  #nav-input:checked ~ #nav-close {
    display: block;
    opacity: 0.5;
  }

  #nav-input:checked ~ #nav-content {
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
    box-shadow: 6px 0 25px rgba(0, 0, 0, 0.15);
  }
}
</style>
