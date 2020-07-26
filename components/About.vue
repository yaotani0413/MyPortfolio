<template>
  <section class=about>
    <h1 class="about_title">About me</h1>
    <div class="row">
      <img class="photo" src="~assets/images/my.JPG" alt="写真">
      <p class="introduce">
        1994年4月13日生まれの26歳、大阪出身のエンジニア。<br>
        帝京大学経済学部経済学科を卒業し、某携帯会社の代理店へ就職。<br>
        その後、日々のルーチンワークと今後の人生について悩みを抱え、エンジニアという生き方に魅力を感じたため、24歳でIT業界へ転職。<br>
         Ciscoルータの運用・監視よりキャリアをスタートし、MicrosoftAzureのサポート業務を経験。<br>現在はWeb業界目標に、日々勉強中。<br>
        ■GitHub :<a class="Github-URL" href="https://github.com/yaotani0413"> https://github.com/yaotani0413</a>
      </p>
    </div>
  </section>
</template>

<script>
</script>

<style scoped>
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
</style>