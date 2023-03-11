<template>
  <div class="apresentation">
    <Header />
    <div class="content">
      <span class="content_line" />
      <p class="content_title">
        Eu me chamo Fernando, <br />sou um Desenvolvedor Fullstack
      </p>
      <button class="content_btn">Me contate</button>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";

export default {
  components: {
    Header,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.apresentation {
  width: 100%;
  height: 75vh;

  position: absolute;
  top: 0;

  background: linear-gradient(180deg, #1b1f24 0%, #1b1f24 100%);
}

.content {
  position: absolute;

  width: 837px;
  height: 233px;

  left: 75px;
  top: 250px;

  &_line {
    width: 175px;

    display: block;

    border: 3px solid #fff;
    border-radius: 10px;
  }

  &_title {
    font-size: 54px;
    font-weight: 500;

    margin: 0;
    padding: 20px 0 30px 0;
  }

  &_btn {
    width: 226px;
    height: 55px;

    background: $primary-color;
    border-radius: 10px;
    border: none;

    /* Text */
    font-family: "Inter";
    font-size: 24px;

    color: #ffffff;
  }
}
</style>
