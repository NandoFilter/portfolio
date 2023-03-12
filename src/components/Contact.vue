<template>
  <div class="contact">
    <div class="content">
      <TopicTitle label="Contato" class="content_title" />
      <ul class="content_list">
        <li v-for="button in this.buttons" :key="button">
          <button class="content_item">
            <img :src="getImg(button.icon)" />
            {{ button.text }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import TopicTitle from "./parts/TopicTitle.vue";

export default {
  components: {
    TopicTitle,
  },
  data() {
    return {
      buttons: [
        { icon: "mail.svg", text: "fernandohfilter10@gmail.com" },
        { icon: "phone.svg", text: "+55 51 99325-0899" },
        { icon: "map-pin.svg", text: "Lajeado/RS - Brasil" },
      ],
    };
  },
  methods: {
    getImg(icon) {
      return require(`@/assets/img/contact/${icon}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.contact {
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 65px 0;
}

.content {
  display: flex;
  flex-direction: column;

  width: 55%;

  &_title {
    margin-left: 25px;
  }

  &_list {
    display: flex;
    flex-direction: row;
    justify-content: center;

    list-style: none;

    padding: 0;
  }

  &_item {
    background: $primary-color;
    color: #fff;

    margin: 0 10px;
    padding: 5px 10px;

    border: none;
    border-radius: 10px;

    font-family: "Inter";
    font-size: 20px;

    display: flex;
    align-items: center;

    & img {
      padding: 0 5px;
    }
  }
}
</style>
