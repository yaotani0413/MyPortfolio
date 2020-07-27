<template>
  <section class="contact">
    <h1 class="contact_title animate__rotateInDownLeft animate__animated animate__slower">Contact Me</h1>
    <div class="contact_container">
      <div class="contact_row">
        <div class="name_iptxt">
            <input type="text" class="name animate__fadeInLeft animate__animated animate__slow" placeholder="お名前">
        </div>
        <div class="mail_iptxt">
            <input type="text" class="mail animate__fadeInRight animate__animated animate__slow" placeholder="メールアドレス">
        </div>
      </div>
      <div class="comment_iptxt">
        <textarea class="comment animate__fadeInUp animate__animated animate__slow" name="comment" id="" cols="30" rows="10" placeholder="コメント"></textarea>
      </div>
    </div>
    <button type="submit" class="send_btn animate__fadeInUp animate__animated animate__delay-2s">SEND</button>
  </section>
</template>

<script>
</script>

<style scoped>
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
</style>

