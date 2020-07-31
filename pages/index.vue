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
import TheFooter from "~/components/TheFooter"
import Top from "~/components/Top"
import About from "~/components/About"
import Skill from "~/components/Skill"
import Contact from "~/components/Contact"
import Thank from "~/components/Thank"

export default {
  components: {
    TheFooter,
    Top,
    About,
    Skill,
    Contact,
    Thank,
  },
}
</script>

<style scoped>
body {
  margin: 0;
  max-width: 100%;
}
</style>
