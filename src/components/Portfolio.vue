<template>
  <div class="portfolio">
    <Apresentation />
    <AboutMe />
  </div>
</template>

<script>
import Apresentation from "./Apresentation.vue";
import AboutMe from "./AboutMe.vue";

export default {
  components: {
    Apresentation,
    AboutMe,
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
