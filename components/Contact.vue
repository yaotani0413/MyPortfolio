<template>
  <section class="contact">
    <h1
      v-observe-visibility="visibilityChanged01"
      :class="{
        animate__rotateInDownLeft: isVisible01,
        animate__animated: isVisible01,
        animate__slower: isVisible01,
      }"
      class="contact_title"
    >
      Contact Me
    </h1>
    <div class="contact_container">
      <div class="contact_row">
        <form
          class="name_iptxt"
          name="contact"
          method="POST"
          data-netlify="true"
        >
          <input
            type="hidden"
            v-observe-visibility="visibilityChanged01"
            :class="{
              animate__fadeInLeft: isVisible01,
              animate__animated: isVisible01,
              animate__slow: isVisible01,
            }"
            class="name"
            placeholder="お名前"
            name="form-name"
            value="contact"
          />
        </form>
        <div class="mail_iptxt">
          <input
            type="text"
            v-observe-visibility="visibilityChanged01"
            :class="{
              animate__fadeInRight: isVisible01,
              animate__animated: isVisible01,
              animate__slow: isVisible01,
            }"
            class="mail"
            placeholder="メールアドレス"
          />
        </div>
      </div>
      <div class="comment_iptxt">
        <textarea
          id=""
          v-observe-visibility="visibilityChanged01"
          :class="{
            animate__fadeInUp: isVisible01,
            animate__animated: isVisible01,
            animate__slow: isVisible01,
          }"
          class="comment"
          name="comment"
          cols="30"
          rows="10"
          placeholder="コメント"
        ></textarea>
      </div>
    </div>
    <button
      type="submit"
      v-observe-visibility="visibilityChanged01"
      :class="{
        animate__fadeInUp: isVisible01,
        animate__animated: isVisible01,
        'animate__delay-2s': isVisible01,
      }"
      class="send_btn"
    >
      SEND
    </button>
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
.contact {
  height: calc(100vh - 75px);
  background-image: url(https://res.cloudinary.com/djrmmyb4i/image/upload/v1596436064/wallpaper_jkmhga.jpg);
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.contact_title {
  margin: 0;
  font-size: 4rem;
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
  border-bottom: 2px solid #1ba1e2;
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
  border-bottom: 2px solid #1ba1e2;
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
  background: rgba(255, 255, 255, 0.5);
}

.comment:focus {
  border: 2px solid #1ba1e2;
  outline: none;
  cursor: text;
}

.send_btn {
  display: inline-block;
  text-decoration: none;
  background: #1ba1e2;
  color: #fff;
  width: 100px;
  height: 100px;
  line-height: 100px;
  border-radius: 50%;
  text-align: center;
  overflow: hidden;
  box-shadow: 0px 0px 0px 5px #1ba1e2;
  border: dashed 1px #fff;
  transition: 0.4s;
  outline: none;
  cursor: pointer;
  font-size: 1.4rem;
}

.send_btn:hover {
  background: #1ba1e2;
  box-shadow: 0px 0px 0px 5px #1ba1e2;
  opacity: 0.8;
}
</style>
