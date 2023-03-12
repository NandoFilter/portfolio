<template>
  <div class="portfolio">
    <Apresentation />
  </div>
</template>

<script>
import Apresentation from "./parts/Apresentation.vue";

export default {
  components: {
    Apresentation,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.portfolio {
  height: 200vh;
}
</style>
