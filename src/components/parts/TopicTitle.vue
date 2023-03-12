<template>
  <div>
    <div class="title">
      <span class="title_line"></span>
      <p class="title_label">{{ this.label }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  flex-direction: row;

  &_line {
    width: 2px;
    height: 40px;

    transform: rotate(20deg);
    transform-origin: top left;

    background: $primary-color;
    border: 3px solid $primary-color;
    border-radius: 10px;
    box-sizing: border-box;
  }

  &_label {
    font-size: 32px;

    margin: 0;
  }
}
</style>
