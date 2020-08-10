<template>
  <section class="about">
    <h1
      v-observe-visibility="visibilityChanged01"
      :class="{
        animate__rotateInDownLeft: isVisible01,
        animate__animated: isVisible01,
        animate__slower: isVisible01,
      }"
      class="about_title"
    >
      About me
    </h1>
    <div class="row">
      <div
        v-observe-visibility="visibilityChanged01"
        :class="{
          animate__fadeIn: isVisible01,
          animate__animated: isVisible01,
          animate__slow: isVisible01,
          'animate__delay-2s': isVisible01,
        }"
        class="blowing"
      >
        <p class="one_word">
          大学では軽音部で、<br />会長を務め、<br />ドラムを叩いてました！
        </p>
      </div>
      <img
        v-observe-visibility="visibilityChanged01"
        :class="{
          animate__fadeInBottomLeft: isVisible01,
          animate__animated: isVisible01,
          animate__slow: isVisible01,
        }"
        class="photo"
        src="https://res.cloudinary.com/djrmmyb4i/image/upload/v1596436065/my_hvjqss.jpg"
        alt="写真"
      />
      <p
        v-observe-visibility="visibilityChanged01"
        :class="{
          animate__fadeInBottomRight: isVisible01,
          animate__animated: isVisible01,
          animate__slow: isVisible01,
        }"
        class="introduce"
      >
        1994年4月13日生まれの26歳、大阪出身のエンジニア。<br />
        帝京大学経済学部経済学科を卒業し、某携帯会社の代理店へ就職。<br />
        その後、日々のルーチンワークと今後の人生について悩みを抱え、エンジニアという生き方に魅力を感じたため、24歳でIT業界へ転職。<br />
        Ciscoルータの運用・監視よりキャリアをスタートし、MicrosoftAzureのサポート業務を経験。<br />現在はWeb業界目標に、日々勉強中。<br />
        ■GitHub :
        <a class="Github-URL" href="https://github.com/yaotani0413">
          https://github.com/yaotani0413
        </a>
      </p>
    </div>
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
@media screen and (min-width: 767px) {
  .about {
    height: calc(100vh - 75px);
    background-image: url(https://res.cloudinary.com/djrmmyb4i/image/upload/v1596436064/wallpaper_jkmhga.jpg);
    background-size: contain;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .blowing {
    position: relative;
    margin-right: 70px;
    padding: 15px;
    background: #fff;
    border: 1px solid black;
    border-radius: 50%;
    height: 150px;
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .blowing:before {
    content: "";
    position: absolute;
    left: 333px;
    width: 13px;
    height: 12px;
    bottom: 0;
    background: #fff;
    border-radius: 50%;
    border: 1px solid black;
  }

  .blowing:after {
    content: "";
    position: absolute;
    left: 307px;
    width: 20px;
    height: 18px;
    bottom: 3px;
    background: #fff;
    border-radius: 50%;
    border: 1px solid black;
  }

  .blowing p {
    margin: 0;
    padding: 0;
    text-align: center;
  }

  .about_title {
    margin: 0;
    font-size: 5rem;
    text-align: center;
    text-shadow: 5px 5px 5px #808080;
    letter-spacing: 1px;
    margin-bottom: 100px;
  }

  .row {
    display: flex;
    width: 80%;
  }

  .photo {
    height: 300px;
    border-radius: 50%;
  }

  .introduce {
    width: 730px;
    padding: 40px;
    font-size: 1.2rem;
  }
}

@media screen and (max-width: 767px) {
  .about {
    height: calc(100vh - 75px);
    background-image: url(https://res.cloudinary.com/djrmmyb4i/image/upload/v1596436064/wallpaper_jkmhga.jpg);
    background-size: contain;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .blowing {
    position: relative;
    margin-right: 70px;
    padding: 15px;
    background: #fff;
    border: 1px solid black;
    border-radius: 50%;
    height: 100px;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .blowing:before {
    content: "";
    position: absolute;
    top: 120px;
    left: 5px;
    width: 13px;
    height: 12px;
    bottom: 0;
    background: #fff;
    border-radius: 50%;
    border: 1px solid black;
  }

  .blowing:after {
    content: "";
    position: absolute;
    top: 90px;
    left: -5px;
    width: 20px;
    height: 18px;
    bottom: 3px;
    background: #fff;
    border-radius: 50%;
    border: 1px solid black;
  }

  .blowing p {
    margin: 0;
    padding: 0;
    text-align: center;
    font-size: 0.5rem;
  }

  .about_title {
    margin: 0;
    font-size: 5rem;
    text-align: center;
    text-shadow: 5px 5px 5px #808080;
    letter-spacing: 1px;
    margin-top: 50px;
  }

  .row {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
  }

  .photo {
    height: 300px;
    border-radius: 50%;
  }

  .introduce {
    width: 730px;
    padding: 40px;
    font-size: 1.2rem;
  }
}

@media screen and (max-width: 479px) {
  .about {
    height: calc(100vh - 75px);
    background-image: url(https://res.cloudinary.com/djrmmyb4i/image/upload/v1596436064/wallpaper_jkmhga.jpg);
    background-size: contain;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .blowing {
    position: relative;
    padding: 15px;
    background: #fff;
    border: 1px solid black;
    border-radius: 50%;
    height: 80px;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .blowing:before {
    content: "";
    position: absolute;
    top: 95px;
    left: 15px;
    width: 13px;
    height: 12px;
    bottom: 0;
    background: #fff;
    border-radius: 50%;
    border: 1px solid black;
  }

  .blowing:after {
    content: "";
    position: absolute;
    top: 75px;
    left: 15px;
    width: 20px;
    height: 18px;
    bottom: 3px;
    background: #fff;
    border-radius: 50%;
    border: 1px solid black;
  }

  .blowing p {
    margin: 0;
    padding: 0;
    text-align: center;
    font-size: 0.2rem;
  }

  .about_title {
    margin: 0;
    font-size: 3rem;
    text-align: center;
    text-shadow: 5px 5px 5px #808080;
    letter-spacing: 1px;
    margin-bottom: 30px;
    margin-top: 10px;
  }

  .row {
    display: flex;
    width: 80%;
  }

  .photo {
    height: 250px;
    border-radius: 50%;
  }

  .introduce {
    width: 100%;
    padding: 0;
    font-size: 0.74rem;
    margin-top: 20px;
  }
}
</style>
