<template>
  <body>
      <top />
      <about />
      <skill />
      <contact />
      <thank />
    <the-footer />
  </body>
</template>

<script>
import TheFooter from '~/components/thefooter';
import Top from '~/components/top';
import About from '~/components/about';
import Skill from '~/components/skill';
import Contact from '~/components/contact';
import Thank from '~/components/thank';

export default {
  components: {
    TheFooter,
    Top,
    About,
    Skill,
    Contact,
    Thank
  }
}
</script>

<style scoped>
body {
  margin: 0;
  max-width: 100%;
}
</style>
