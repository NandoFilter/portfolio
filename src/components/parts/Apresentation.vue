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
    <div class="follow">
      <p class="follow_label">Me siga</p>
      <SocialMedias />
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import SocialMedias from "./SocialMedias.vue";

export default {
  components: {
    Header,
    SocialMedias,
  },
};
</script>

<style lang="scss" scoped>
.apresentation {
  width: 100%;
  height: 75vh;

  position: relative;
  top: -4.6px;

  background: $background-dark;
}

.content {
  position: absolute;
  top: 35%;
  left: 75px;

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

.follow {
  display: flex;
  flex-direction: column;

  position: absolute;
  bottom: 50px;
  right: 50px;

  &_label {
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.18rem;
  }
}
</style>
