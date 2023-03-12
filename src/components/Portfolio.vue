<template>
  <div class="portfolio">
    <Apresentation />
    <div class="content">
      <AboutMe />
      <Techs />
      <Contact />
    </div>
  </div>
</template>

<script>
import Apresentation from "./Apresentation.vue";
import AboutMe from "./AboutMe.vue";
import Techs from "./Techs.vue";
import Contact from "./Contact.vue";

export default {
  components: {
    Apresentation,
    AboutMe,
    Techs,
    Contact,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.portfolio {
  height: auto;
}
</style>
