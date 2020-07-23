<template>
  <body>
    <main>
      <section class="top">
        <h1 class="top_title"><span class="greet">Hello World!</span><br>This is Yaotani's instruction manual</h1>
        <p class="drum">
          <button>GO!</button>
        </p>
      </section>
      <section class=about>
        <h1 class="about_title">About me</h1>
        <div class="row">
          <img class="photo" src="~assets/images/my.JPG" alt="写真">
          <p class="introduce">
            1994年4月13日生まれの26歳、大阪出身のエンジニア。<br>
            帝京大学経済学部経済学科を卒業し、某携帯会社の代理店へ就職。<br>
            その後、日々のルーチンワークと今後の人生について悩みを抱え、エンジニアという生き方に魅力を感じたため、24歳でIT業界へ転職。<br>
            Ciscoルータの運用・監視よりキャリアをスタートし、MicrosoftAzureのサポート業務を経験。<br>現在はWeb業界を目標に、日々勉強中。<br>
            ■GitHub :<a class="Github-URL" href="https://github.com/yaotani0413"> https://github.com/yaotani0413</a>
          </p>
        </div>
      </section>
      <section class="skill">
        <h1 class="skill_title">My Skill Set</h1>
        <ul class="skill_set">
          <li class="skill_content">
            <span class="type">言語</span>・・・HTML / CSS / JavaScript
          </li>
          <li class="skill_content">
            <span class="type">フレームワーク、ライブラリ</span>・・・Vue.js / Nuxt.js
          </li>
          <li class="skill_content">
            <span class="type">ツール</span>・・・Git / Firebase
          </li>
          <li class="skill_content">
            <span class="type">OS</span>・・・Windows / Linux / MAC
          </li>
        </ul>
        <div class="products">
          <img class="product" src="~assets/images/SNSApp1.png" alt="成果物">
          <img class="right_img" src="~assets/images/right.png" alt="右矢印">
          <img class="left_img" src="~assets/images/left.png" alt="左矢印">
        </div>
        <ul class="product_description">
          <li>
            <span class="type">アプリ名</span><br>
            SAMPLE SNS
          </li>
          <li>
            <span class="type">説明</span><br>
            SNSにある機能の実装を目的としたアプリ
          </li>
          <li>
            <span class="type">機能</span><br>
            ユーザーの登録 / ユーザー情報の編集 / ログイン / ログアウト / 投稿
          </li>
          <li>
            <span class="type">技術・使用ソフト</span><br>
            Nuxt.js / JavaScript / HTML / CSS
          </li>
          <li>
            <span class="type">URL</span><br>
          </li>
          <li>
            <span class="type">GitHub</span><br>
            <a href="https://github.com/yaotani0413/SAMPLE_Project">https://github.com/yaotani0413/SAMPLE_Project</a>
          </li>
        </ul>
      </section>
      <section class="contact">
        <h1 class="contact_title">Contact Me</h1>
        <div class="contact_container">
          <div class="contact_row">
            <div class="name_iptxt">
                <input  class="name" type="text" placeholder="お名前">
            </div>
            <div class="mail_iptxt">
                <input class="mail" type="text" placeholder="メールアドレス">
            </div>
          </div>
          <div class="comment_iptxt">
            <textarea class="comment" name="comment" id="" cols="30" rows="10" placeholder="コメント"></textarea>
          </div>
        </div>
        <button class="send_btn" type="submit">SEND</button>
      </section>
      <section class="thank">
        <h1 class="thank_title">Thank you for watching!</h1>
        <h3 class="thank_subtitle">〜Aiming for greater heights〜</h3>
      </section>
    </main>
    <footer class="footer">
      <h6 class="copyright">©︎ 2020 Atsushi Yaotani</h6>
    </footer>
  </body>
</template>

<script>
export default {
}
</script>

<style>
body {
  margin: 0;
  max-width: 100%;
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
  background-color: rgba( 255, 255, 255, 0.9 );
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

.about {
  height: calc(100vh - 75px);
  background-image: url(~assets/images/wallpaper.jpeg);
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.about_title {
  margin: 0;
  font-size: 4.5rem;
  text-align: center;
  text-shadow: 5px 5px 5px #808080; 
  letter-spacing: 1px;
}

.row {
  display: flex;
}

.photo {
  height: 300px;
  border-radius: 50%;
  border: solid 3px #1BA1E2;
}

.introduce {
  width: 730px;
  padding: 40px;
  font-size: 1.2rem;
}

.skill {
  height: 100%;
  background-color: #1BA1E2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.skill_title {
  color: #fff;
  font-size: 4.0rem;
  text-align: center;
  text-shadow: 5px 5px 5px #808080; 
  letter-spacing: 1px;
  margin-top: 150px;
}

.skill_set {
  margin: 0;
  padding-left: 60px;
  height: 300px;
  width: 700px;
  background-color: #fff;
  box-shadow: 2px 2px 4px ;
}

.skill_content {
  list-style:none;
	padding-left:24px;
  position:relative;
  margin-top: 35px;
}

.skill_content:before,
.skill_content:after {
  content:"";
	display:block;
	position:absolute;
}

.skill_content:before {
  width:17px;
	height:17px;
	border-radius:9px;
	background:#1BA1E2;
	left:0;top:8px;
}

.skill_content:after {
  border-left:2px solid #fff;
	border-bottom:2px solid #fff;
	width:8px;
	height:5px;
	-webkit-transform:rotate(-45deg);
	transform:rotate(-45deg);
	left:4px;
	top:13px;
}

.type {
  background:linear-gradient(transparent 60%, #ff0 0%);
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
  box-shadow: 2px 2px 4px ;
  margin: 0;
  line-height: 40px;
  margin-top: 30px;
  margin-bottom: 50px;
  padding-left: 20px;
}

.product_description li {
  list-style:none;
	padding-left:24px;
  position:relative;
  margin-right: 20px;
  margin-top: 8px;
}

.product_description li:before,
.product_description li:after {
  content:"";
	display:block;
	position:absolute;
}

.product_description li:before {
  width:17px;
	height:17px;
	border-radius:9px;
	background:#1BA1E2;
	left:0;top:10px;
}

.product_description li:after {
  border-left:2px solid #fff;
	border-bottom:2px solid #fff;
	width:8px;
	height:5px;
	-webkit-transform:rotate(-45deg);
	transform:rotate(-45deg);
	left:4px;
	top:15px;
}


.contact {
  height: calc(100vh - 75px);
  background-image: url(~assets/images/wallpaper.jpeg);
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.contact_title {
  margin: 0;
  font-size: 4.0rem;
  text-shadow: 5px 5px 5px #808080; 
  letter-spacing: 1px;
}

.contact_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.contact_row {
  margin-top: 50px;
  width: 800px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.name_iptxt {
  position: relative;
	width: 80%;
	margin: 40px 3%;
}

.name {
  font: 15px/24px sans-serif;
	box-sizing: border-box;
	width: 100%;
	padding: 0.3em;
	transition: 0.3s;
	letter-spacing: 1px;
	color: black;
	border: none;
	border-bottom: 2px solid #808080;
	background: transparent;
}

.name:focus {
	border-bottom: 2px solid #1BA1E2;
  outline: none;
  cursor: text;
}

.mail_iptxt {
  position: relative;
	width: 80%;
	margin: 40px 3%;
}

.mail {
  font: 15px/24px sans-serif;
	box-sizing: border-box;
	width: 100%;
	padding: 0.3em;
	transition: 0.3s;
	letter-spacing: 1px;
	color: black;
	border: none;
	border-bottom: 2px solid #808080;
	background: transparent;
}

.mail:focus {
	border-bottom: 2px solid #1BA1E2;
  outline: none;
  cursor: text;
}

.comment_iptxt {
  position: relative;
  width: 100%;
  margin: 40px 3%;
}

.comment {
  font: 18px/27px sans-serif;
  box-sizing: border-box;
  width: 800px;
  padding: 0.3em;
  transition: 0.3s;
  letter-spacing: 1px;
  color: black;
  border: none;
  border: 2px solid #808080;
  background: rgba( 255, 255, 255, 0.5 );
}

.comment:focus {
  border: 2px solid #1BA1E2;
  outline: none;
  cursor: text;
}

.send_btn {
  display: inline-block;
  text-decoration: none;
  background: #1BA1E2;
  color: #FFF;
  width: 100px;
  height: 100px;
  line-height: 100px;
  border-radius: 50%;
  text-align: center;
  overflow: hidden;
  box-shadow: 0px 0px 0px 5px #1BA1E2;
  border: dashed 1px #FFF;
  transition: .4s;
  outline: none;
  cursor: pointer;
  font-size: 1.4rem;
}

.send_btn:hover {
  background: #1BA1E2;
  box-shadow: 0px 0px 0px 5px #1BA1E2;
  opacity: 0.8;
}

.thank {
  background-color: #1BA1E2;
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
</style>
