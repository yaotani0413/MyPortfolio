<template>
  <section class="skill">
    <h1
      class="skill_title animate__rotateInDownLeft animate__animated animate__slower"
    >
      My Skill Set
    </h1>
    <ul
      id="skill_set_animation"
      class="skill_set animate__fadeIn animate__animated animate__slow"
    >
      <li class="skill_content">
        <span class="type">言語</span>・・・HTML / CSS / JavaScript
      </li>
      <li class="skill_content animate__fadeIn animate__animated">
        <span class="type">フレームワーク、ライブラリ</span>・・・Vue.js /
        Nuxt.js
      </li>
      <li class="skill_content animate__fadeIn animate__animated">
        <span class="type">ツール</span>・・・Git / Firebase
      </li>
      <li class="skill_content animate__fadeIn animate__animated">
        <span class="type">OS</span>・・・Windows / Linux / MAC
      </li>
    </ul>
    <div class="products">
      <img class="product" src="~assets/images/SNSApp1.png" alt="成果物" />
      <img class="right_img" src="~assets/images/right.png" alt="右矢印" />
      <img class="left_img" src="~assets/images/left.png" alt="左矢印" />
    </div>
    <ul class="product_description">
      <li>
        <span class="type">アプリ名</span><br />
        SAMPLE SNS
      </li>
      <li>
        <span class="type">説明</span><br />
        SNSにある機能の実装を目的としたアプリ
      </li>
      <li>
        <span class="type">機能</span><br />
        ユーザーの登録 / ユーザー情報の編集 / ログイン / ログアウト / 投稿
      </li>
      <li>
        <span class="type">技術・使用ソフト</span><br />
        Nuxt.js / JavaScript / HTML / CSS
      </li>
      <li><span class="type">URL</span><br /></li>
      <li>
        <span class="type">GitHub</span><br />
        <a href="https://github.com/yaotani0413/SAMPLE_Project">
          https://github.com/yaotani0413/SAMPLE_Project
        </a>
      </li>
    </ul>
  </section>
</template>

<script></script>

<style scoped>
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

#skill_set_animation {
  animation-duration: 2s; /* アニメーションの時間 */
  animation-delay: 2s; /* アニメーション開始時間 */
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
  background-image: url(~assets/images/PC.png);
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
</style>
