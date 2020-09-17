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
      <!-- <validation-observer ref="obs"> -->
      <form
        class="contact_form"
        name="contact"
        method="POST"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <!-- <div class="contact_row"> -->
        <!-- <validation-provider
            class="name_check"
            name="お名前"
            rules="required"
        >-->
        <div class="name_iptxt">
          <input
            id="username"
            v-model="username"
            v-observe-visibility="visibilityChanged01"
            type="text"
            :class="{
              animate__fadeInLeft: isVisible01,
              animate__animated: isVisible01,
              animate__slow: isVisible01,
            }"
            name="username"
            class="name"
            placeholder="お名前"
          />
          <!-- <p class="error">
                {{ ProviderProps.errors[0] }}
          </p>-->
        </div>
        <!-- </validation-provider> -->
        <!-- <validation-provider -->
        <!-- v-slot="{ errors }"
            class="mail_check"
            rules="required|email|max:256"
            name="メールアドレス"
        >-->
        <div class="mail_iptxt">
          <input
            id="usermail"
            v-model="usermail"
            v-observe-visibility="visibilityChanged01"
            type="text"
            :class="{
              animate__fadeInRight: isVisible01,
              animate__animated: isVisible01,
              animate__slow: isVisible01,
            }"
            name="usermail"
            class="mail"
            placeholder="メールアドレス"
          />
          <!-- <p v-show="errors.length" class="p-contact__error">
                {{ errors[0] }}
          </p>-->
        </div>
        <!-- </validation-provider> -->
        <!-- </div> -->
        <div class="comment_iptxt">
          <textarea
            id="message"
            v-model="comment"
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
        <!-- <div v-show="false" class="contact_item"></div> -->
        <button
          v-observe-visibility="visibilityChanged01"
          type="button"
          :class="{
            animate__fadeInUp: isVisible01,
            animate__animated: isVisible01,
            'animate__delay-2s': isVisible01,
          }"
          class="send_btn"
          @click="postMessage()"
        >
          SEND
        </button>
        <span @click="postMessage()">aaaaaaaaa</span>
      </form>
      <!-- </validation-observer> -->
    </div>
  </section>
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      username: "",
      channel: "",
      text: "",
    }
  },
  methods: {
    visibilityChanged01(isVisible01) {
      this.isVisible01 = isVisible01
    },
    visibilityChanged02(isVisible02) {
      this.isVisible02 = isVisible02
    },
    async slack(text) {
      const webhookUrl =
        "https://hooks.slack.com/services/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"
      const data = {
        text: text,
      }
      const res = axios.post(webhookUrl, JSON.stringify(data), {
        withCredentials: false,
        transformRequest: [
          (data, headers) => {
            delete headers.post["Content-Type"]
            return data
          },
        ],
      })
      return res.data
    },
    async postMessage() {
      await this.slack("テストめっせーじ！！！！！！！！！！！！！！")
    },
  },
}
</script>

<style scoped>
@media screen and (min-width: 767px) {
  .contact {
    height: calc(100vh - 75px);
    background-image: url(https://res.cloudinary.com/djrmmyb4i/image/upload/v1596436064/wallpaper_jkmhga.jpg);
    background-size: contain;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
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

  .contact_form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .contact_row {
    margin-top: 50px;
    width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .name_iptxt {
    position: relative;
    width: 500px;
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

  .name_check {
    color: red;
  }

  .mail_check {
    color: red;
  }

  .mail_iptxt {
    position: relative;
    width: 500px;
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
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .comment {
    font: 18px/27px sans-serif;
    box-sizing: border-box;
    width: 50vw;
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
}

@media screen and (max-width: 767px) {
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

  .contact_form {
    width: 90vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .contact_row {
    margin-top: 50px;
    width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .name_iptxt {
    position: relative;
    width: 500px;
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

  .name_check {
    color: red;
  }

  .mail_check {
    color: red;
  }

  .mail_iptxt {
    position: relative;
    width: 500px;
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
    width: 100%;
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
}

@media screen and (max-width: 479px) {
  .contact {
    height: calc(100vh - 75px);
    width: 100%;
    background-image: url(https://res.cloudinary.com/djrmmyb4i/image/upload/v1596436064/wallpaper_jkmhga.jpg);
    background-size: contain;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .contact_title {
    margin: 0;
    font-size: 2.5rem;
    text-shadow: 5px 5px 5px #808080;
    letter-spacing: 1px;
    margin-top: 50px;
  }

  .contact_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .contact_form {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .contact_row {
    margin-top: 50px;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .name_iptxt {
    position: relative;
    width: 90vw;
  }

  .name {
    font: 12px/24px sans-serif;
    box-sizing: border-box;
    /* width: 100%; */
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

  .name_check {
    color: red;
    font: 12px/24px sans-serif;
  }

  .mail_check {
    color: red;
    font: 12px/24px sans-serif;
  }

  .mail_iptxt {
    position: relative;
    width: 90vw;
  }

  .mail {
    font: 12px/24px sans-serif;
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
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .comment {
    font: 14px/27px sans-serif;
    box-sizing: border-box;
    width: 90vw;
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
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-radius: 50%;
    text-align: center;
    overflow: hidden;
    box-shadow: 0px 0px 0px 5px #1ba1e2;
    border: dashed 1px #fff;
    transition: 0.4s;
    outline: none;
    cursor: pointer;
    font-size: 0.5rem;
  }

  .send_btn:hover {
    background: #1ba1e2;
    box-shadow: 0px 0px 0px 5px #1ba1e2;
    opacity: 0.8;
  }
}
</style>
