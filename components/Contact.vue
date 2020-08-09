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
      <validation-observer ref="obs">
        <form
          class="contact_form"
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          :class="sendingClass"
          @submit.prevent="onSubmit"
        >
          <div class="contact_row">
            <validation-provider
              class="name_check"
              name="お名前"
              rules="required"
            >
              <div slot-scope="ProviderProps" class="name_iptxt">
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
                <p class="error">
                  {{ ProviderProps.errors[0] }}
                </p>
              </div>
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              class="mail_check"
              rules="required|email|max:256"
              name="メールアドレス"
            >
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
                <p v-show="errors.length" class="p-contact__error">
                  {{ errors[0] }}
                </p>
              </div>
            </validation-provider>
          </div>
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
          <div v-show="false" class="contact_item">
            <input v-model="botField" type="text" name="bot-field" />
          </div>
          <button
            v-observe-visibility="visibilityChanged01"
            type="submit"
            :class="{
              animate__fadeInUp: isVisible01,
              animate__animated: isVisible01,
              'animate__delay-2s': isVisible01,
            }"
            class="send_btn"
            :disabled="invalid || !validated"
          >
            SEND
          </button>
        </form>
      </validation-observer>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      comment: "",
      botField: "",
      isSubmit: false,
      isSending: false,
      isError: false,
      isVisible01: false,
      isVisible02: false,
    }
  },
  computed: {
    sendingClass() {
      return {
        "is-sending": this.isSending,
        "is-error": this.isError,
        "is-complete": this.isSubmit,
      }
    },
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
    onSubmit() {
      if (this.isSending) {
        return
      }
      this.isSending = true
      this.completeMessage = "送信処理中..."
      const params = new URLSearchParams()
      params.append("username", this.name)
      params.append("usermail", this.mail)
      params.append("comment", this.comment)
      if (this.botField) {
        params.append("bot^field", this.botField)
      }
      this.$axios
        .$post("/", params)
        .then(() => {
          this.completeMessage = "お問い合わせを送信しました"
          this.resetForrm()
          this.isSubmit = true
        })
        .catch(() => {
          this.completeMessage = "お問い合わせの送信が失敗しました"
          this.isError = true
        })
        .finally(() => {
          this.isSending = false
        })
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
