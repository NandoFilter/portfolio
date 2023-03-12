<template>
  <div class="portfolio">
    <Apresentation />
    <div class="content">
      <AboutMe />
      <Techs />
      <Contact />
    </div>
    <Footer />
  </div>
</template>

<script>
import Apresentation from "./Apresentation.vue";
import AboutMe from "./AboutMe.vue";
import Techs from "./Techs.vue";
import Contact from "./Contact.vue";
import Footer from "./parts/Footer.vue";

export default {
  components: {
    Apresentation,
    AboutMe,
    Techs,
    Contact,
    Footer,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss">
.portfolio {
  height: auto;

  background: $background;
}
</style>
