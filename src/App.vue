<template>
  <Portfolio />
</template>

<script>
import Portfolio from "./components/Portfolio.vue";

export default {
  name: "App",
  components: {
    Portfolio,
  },
};
</script>

<style>
@font-face {
  font-family: "Inter";
  src: url("@/assets/fonts/Inter-Regular.ttf");
}

body {
  background: #232b35;

  margin: 0;

  color: #fff;
  font-family: "Inter";
}
</style>
