<template>
  <footer>
    <div class="top">
      <span class="top_line" />
      <img src="@/assets/img/tag_icon.svg" />
      <span class="top_line" />
    </div>
    <div class="bottom">
      <p class="bottom_text">&#169; Made by NandoFilter - 2023</p>
      <SocialMedias class="bottom_medias" />
    </div>
  </footer>
</template>

<script>
import SocialMedias from "./SocialMedias.vue";

export default {
  components: {
    SocialMedias,
  },
};
</script>

<style lang="scss" scoped>
footer {
  background: $background-dark;
}

.top {
  display: flex;
  flex-direction: row;
  align-items: center;

  &_line {
    height: 2px;
    width: 80%;

    display: block;

    border: 3px solid $background;
    border-radius: 10px;
    box-sizing: border-box;
  }

  & img {
    margin: 20px 10px;
  }
}

.bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 15px;

  &_text {
    margin: 0 30px;
    font-size: 18px;
  }

  &_medias {
    margin-right: 10px;
  }
}
</style>
