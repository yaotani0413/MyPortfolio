<template>
  <section class="skill">
    <h1
      v-observe-visibility="visibilityChanged01"
      :class="{
        animate__rotateInDownLeft: isVisible01,
        animate__animated: isVisible01,
        animate__slower: isVisible01,
      }"
      class="skill_title"
    >
      My Skill Set
    </h1>
    <ul
      id="skill_set_animation1"
      v-observe-visibility="visibilityChanged01"
      :class="{
        animate__fadeIn: isVisible01,
        animate__animated: isVisible01,
        animate__slow: isVisible01,
      }"
      class="skill_set"
    >
      <li
        id="skill_set_animation1"
        v-observe-visibility="visibilityChanged02"
        class="skill_content"
        :class="{
          animate__lightSpeedInRight: isVisible02,
          animate__animated: isVisible02,
          animate__slower: isVisible02,
        }"
      >
        <span class="type">言語</span>・・・HTML / CSS / JavaScript
      </li>
      <li
        id="skill_set_animation2"
        v-observe-visibility="visibilityChanged02"
        class="skill_content"
        :class="{
          animate__lightSpeedInRight: isVisible02,
          animate__animated: isVisible02,
          animate__slower: isVisible02,
        }"
      >
        <span class="type">フレームワーク、ライブラリ</span>・・・Vue.js /
        Nuxt.js
      </li>
      <li
        id="skill_set_animation3"
        v-observe-visibility="visibilityChanged02"
        class="skill_content"
        :class="{
          animate__lightSpeedInRight: isVisible02,
          animate__animated: isVisible02,
          animate__slower: isVisible02,
        }"
      >
        <span class="type">ツール</span>・・・Git / Firebase
      </li>
      <li
        id="skill_set_animation4"
        v-observe-visibility="visibilityChanged02"
        class="skill_content"
        :class="{
          animate__lightSpeedInRight: isVisible02,
          animate__animated: isVisible02,
          animate__slower: isVisible02,
        }"
      >
        <span class="type">OS</span>・・・Windows / Linux / MAC
      </li>
    </ul>
    <div
      v-observe-visibility="visibilityChanged01"
      :class="{
        animate__fadeIn: isVisible01,
        animate__animated: isVisible01,
        animate__slow: isVisible01,
      }"
      class="products"
    >
      <img
        class="product"
        src="https://res.cloudinary.com/djrmmyb4i/image/upload/v1596436065/SNSApp1_o0tq2v.png"
        alt="成果物"
      />
      <img
        class="right_img"
        src="https://res.cloudinary.com/djrmmyb4i/image/upload/v1596436063/right_pfg2zw.png"
        alt="右矢印"
      />
      <img
        class="left_img"
        src="https://res.cloudinary.com/djrmmyb4i/image/upload/v1596436063/left_mbc5u0.png"
        alt="左矢印"
      />
    </div>
    <ul
      id="skill_set_animation1"
      v-observe-visibility="visibilityChanged01"
      :class="{
        animate__fadeIn: isVisible01,
        animate__animated: isVisible01,
        animate__slower: isVisible01,
      }"
      class="product_description"
    >
      <li
        id="skill_set_animation1"
        v-observe-visibility="visibilityChanged02"
        class="skill_content"
        :class="{
          animate__lightSpeedInRight: isVisible02,
          animate__animated: isVisible02,
          animate__slower: isVisible02,
        }"
      >
        <span class="type">アプリ名</span>
        <br />SAMPLE SNS
      </li>
      <li
        id="skill_set_animation2"
        v-observe-visibility="visibilityChanged02"
        class="skill_content"
        :class="{
          animate__lightSpeedInRight: isVisible02,
          animate__animated: isVisible02,
          animate__slower: isVisible02,
        }"
      >
        <span class="type">説明</span>
        <br />SNSにある機能の実装を目的としたアプリ
      </li>
      <li
        id="skill_set_animation3"
        v-observe-visibility="visibilityChanged02"
        class="skill_content"
        :class="{
          animate__lightSpeedInRight: isVisible02,
          animate__animated: isVisible02,
          animate__slower: isVisible02,
        }"
      >
        <span class="type">機能</span>
        <br />ユーザーの登録 / ユーザー情報の編集 / ログイン / ログアウト / 投稿
      </li>
      <li
        id="skill_set_animation4"
        v-observe-visibility="visibilityChanged02"
        class="skill_content"
        :class="{
          animate__lightSpeedInRight: isVisible02,
          animate__animated: isVisible02,
          animate__slower: isVisible02,
        }"
      >
        <span class="type">技術・使用ソフト</span>
        <br />Nuxt.js / JavaScript / HTML / CSS
      </li>
      <li
        id="skill_set_animation5"
        v-observe-visibility="visibilityChanged02"
        class="skill_content"
        :class="{
          animate__lightSpeedInRight: isVisible02,
          animate__animated: isVisible02,
          animate__slower: isVisible02,
        }"
      >
        <span class="type">URL</span>
        <br />
      </li>
      <li
        id="skill_set_animation6"
        v-observe-visibility="visibilityChanged02"
        class="skill_content"
        :class="{
          animate__lightSpeedInRight: isVisible02,
          animate__animated: isVisible02,
          animate__slower: isVisible02,
        }"
      >
        <span class="type">GitHub</span>
        <br />
        <a href="https://github.com/yaotani0413/SAMPLE_Project">
          https://github.com/yaotani0413/SAMPLE_Project
        </a>
      </li>
    </ul>
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
#skill_set_animation1 {
  animation-duration: 0.5s;
  animation-delay: 0.5s;
}
#skill_set_animation2 {
  animation-duration: 0.5s;
  animation-delay: 0.7s;
}
#skill_set_animation3 {
  animation-duration: 0.5s;
  animation-delay: 0.9s;
}
#skill_set_animation4 {
  animation-duration: 0.5s;
  animation-delay: 1.1s;
}
#skill_set_animation5 {
  animation-duration: 0.5s;
  animation-delay: 1.3s;
}
#skill_set_animation6 {
  animation-duration: 0.5s;
  animation-delay: 1.5s;
}

@media screen and (min-width: 767px) {
  .skill {
    height: 100%;
    background-color: #1ba1e2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .skill_title {
    color: #fff;
    font-size: 4rem;
    text-align: center;
    text-shadow: 5px 5px 5px #808080;
    letter-spacing: 1px;
    margin-top: 150px;
    margin-bottom: 50px;
  }

  .skill_set {
    margin: 0;
    padding-left: 60px;
    height: 300px;
    width: 700px;
    background-color: #fff;
    box-shadow: 2px 2px 4px;
  }

  .skill_content {
    list-style: none;
    padding-left: 24px;
    position: relative;
    margin-top: 35px;
  }

  .skill_content:before,
  .skill_content:after {
    content: "";
    display: block;
    position: absolute;
  }

  .skill_content:before {
    width: 17px;
    height: 17px;
    border-radius: 9px;
    background: #1ba1e2;
    left: 0;
    top: 8px;
  }

  .skill_content:after {
    border-left: 2px solid #fff;
    border-bottom: 2px solid #fff;
    width: 8px;
    height: 5px;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    left: 4px;
    top: 13px;
  }

  .type {
    background: linear-gradient(transparent 60%, #ff0 0%);
    font-size: 1.3rem;
  }

  .products {
    width: 700px;
    height: 600px;
    margin-top: 100px;
    background-image: url(https://res.cloudinary.com/djrmmyb4i/image/upload/v1596436063/PC_mdh9ha.png);
    background-size: contain;
    position: relative;
    z-index: 1;
  }

  .product {
    position: absolute;
    top: 42px;
    left: 40px;
    width: 620px;
    height: 350px;
    z-index: 1;
  }

  .right_img {
    width: 60px;
    height: 60px;
    position: absolute;
    top: 200px;
    left: 570px;
    z-index: 2;
    cursor: pointer;
  }

  .right_img:hover {
    opacity: 0.8;
  }

  .left_img {
    width: 60px;
    height: 60px;
    position: absolute;
    top: 200px;
    left: 70px;
    z-index: 2;
    cursor: pointer;
  }

  .left_img:hover {
    opacity: 0.8;
  }

  .product_description {
    background-color: #fff;
    width: 600px;
    height: 500px;
    box-shadow: 2px 2px 4px;
    margin: 0;
    line-height: 40px;
    margin-top: 30px;
    margin-bottom: 50px;
    padding-left: 20px;
  }

  .product_description li {
    list-style: none;
    padding-left: 24px;
    position: relative;
    margin-right: 20px;
    margin-top: 8px;
  }

  .product_description li:before,
  .product_description li:after {
    content: "";
    display: block;
    position: absolute;
  }

  .product_description li:before {
    width: 17px;
    height: 17px;
    border-radius: 9px;
    background: #1ba1e2;
    left: 0;
    top: 10px;
  }

  .product_description li:after {
    border-left: 2px solid #fff;
    border-bottom: 2px solid #fff;
    width: 8px;
    height: 5px;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    left: 4px;
    top: 15px;
  }
}

@media screen and (max-width: 767px) {
  .skill {
    height: 100%;
    background-color: #1ba1e2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .skill_title {
    color: #fff;
    font-size: 4rem;
    text-align: center;
    text-shadow: 5px 5px 5px #808080;
    letter-spacing: 1px;
    margin-top: 150px;
    margin-bottom: 50px;
  }

  .skill_set {
    margin: 0;
    padding-left: 60px;
    height: 300px;
    width: 700px;
    background-color: #fff;
    box-shadow: 2px 2px 4px;
  }

  .skill_content {
    list-style: none;
    padding-left: 24px;
    position: relative;
    margin-top: 35px;
  }

  .skill_content:before,
  .skill_content:after {
    content: "";
    display: block;
    position: absolute;
  }

  .skill_content:before {
    width: 17px;
    height: 17px;
    border-radius: 9px;
    background: #1ba1e2;
    left: 0;
    top: 8px;
  }

  .skill_content:after {
    border-left: 2px solid #fff;
    border-bottom: 2px solid #fff;
    width: 8px;
    height: 5px;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    left: 4px;
    top: 13px;
  }

  .type {
    background: linear-gradient(transparent 60%, #ff0 0%);
    font-size: 1.3rem;
  }

  .products {
    width: 700px;
    height: 600px;
    margin-top: 100px;
    background-image: url(https://res.cloudinary.com/djrmmyb4i/image/upload/v1596436063/PC_mdh9ha.png);
    background-size: contain;
    position: relative;
    z-index: 1;
  }

  .product {
    position: absolute;
    top: 42px;
    left: 40px;
    width: 620px;
    height: 350px;
    z-index: 1;
  }

  .right_img {
    width: 60px;
    height: 60px;
    position: absolute;
    top: 200px;
    left: 570px;
    z-index: 2;
    cursor: pointer;
  }

  .right_img:hover {
    opacity: 0.8;
  }

  .left_img {
    width: 60px;
    height: 60px;
    position: absolute;
    top: 200px;
    left: 70px;
    z-index: 2;
    cursor: pointer;
  }

  .left_img:hover {
    opacity: 0.8;
  }

  .product_description {
    background-color: #fff;
    width: 600px;
    height: 500px;
    box-shadow: 2px 2px 4px;
    margin: 0;
    line-height: 40px;
    margin-top: 30px;
    margin-bottom: 50px;
    padding-left: 20px;
  }

  .product_description li {
    list-style: none;
    padding-left: 24px;
    position: relative;
    margin-right: 20px;
    margin-top: 8px;
  }

  .product_description li:before,
  .product_description li:after {
    content: "";
    display: block;
    position: absolute;
  }

  .product_description li:before {
    width: 17px;
    height: 17px;
    border-radius: 9px;
    background: #1ba1e2;
    left: 0;
    top: 10px;
  }

  .product_description li:after {
    border-left: 2px solid #fff;
    border-bottom: 2px solid #fff;
    width: 8px;
    height: 5px;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    left: 4px;
    top: 15px;
  }
}

@media screen and (max-width: 479px) {
  .skill {
    height: 100%;
    background-color: #1ba1e2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .skill_title {
    color: #fff;
    font-size: 2.7rem;
    text-align: center;
    text-shadow: 5px 5px 5px #808080;
    letter-spacing: 1px;
    margin-top: 80px;
    margin-bottom: 50px;
  }

  .skill_set {
    margin: 0;
    padding-left: 20px;
    height: 300px;
    width: 90%;
    background-color: #fff;
    box-shadow: 2px 2px 4px;
  }

  .skill_content {
    list-style: none;
    /* padding-left: 24px; */
    position: relative;
    /* margin-top: 35px; */
  }

  .skill_content:before,
  .skill_content:after {
    content: "";
    display: block;
    position: absolute;
  }

  .skill_content:before {
    width: 17px;
    height: 17px;
    border-radius: 9px;
    background: #1ba1e2;
    left: 0;
    top: 8px;
  }

  .skill_content:after {
    border-left: 2px solid #fff;
    border-bottom: 2px solid #fff;
    width: 8px;
    height: 5px;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    left: 4px;
    top: 13px;
  }

  .type {
    background: linear-gradient(transparent 60%, #ff0 0%);
    font-size: 0.8rem;
  }

  .products {
    width: 300px;
    height: 250px;
    margin-top: 30px;
    margin-bottom: 20px;
    background-image: url(https://res.cloudinary.com/djrmmyb4i/image/upload/v1596436063/PC_mdh9ha.png);
    background-size: contain;
    position: relative;
    z-index: 1;
  }

  .product {
    position: absolute;
    top: 18px;
    left: 16px;
    width: 262px;
    height: 150px;
    z-index: 1;
  }

  .right_img {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 90px;
    left: 235px;
    z-index: 2;
    cursor: pointer;
  }

  .right_img:hover {
    opacity: 0.8;
  }

  .left_img {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 90px;
    left: 40px;
    z-index: 2;
    cursor: pointer;
  }

  .left_img:hover {
    opacity: 0.8;
  }

  .product_description {
    background-color: #fff;
    width: 90%;
    height: 100%;
    box-shadow: 2px 2px 4px;
    margin: 0;
    padding-left: 20px;
    font-size: 0.7rem;
    margin-bottom: 20px;
  }

  .product_description li {
    list-style: none;
    position: relative;
  }

  .product_description li:before,
  .product_description li:after {
    content: "";
    display: block;
    position: absolute;
  }

  .product_description li:before {
    width: 17px;
    height: 17px;
    border-radius: 9px;
    background: #1ba1e2;
    left: 0;
    top: 10px;
  }

  .product_description li:after {
    border-left: 2px solid #fff;
    border-bottom: 2px solid #fff;
    width: 8px;
    height: 5px;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    left: 4px;
    top: 15px;
  }
}
</style>
