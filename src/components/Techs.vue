<template>
  <div class="techs">
    <div class="content">
      <TopicTitle label="Tecnologias" class="content_title" />
      <ul class="content_list">
        <li class="content_item" v-for="tech in this.techs" :key="tech">
          <img :src="getImg(tech.icon)" />
          <p>{{ tech.name }}</p>
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
      techs: [
        { icon: "vue.svg", name: "Vue.js" },
        { icon: "typescript.svg", name: "TypeScript" },
        { icon: "javascript.svg", name: "JavaScript" },
        { icon: "node.svg", name: "Node.js" },
        { icon: "java.svg", name: "Java" },
        { icon: "html.svg", name: "HTML" },
        { icon: "css.svg", name: "CSS" },
        { icon: "nuxt.svg", name: "Nuxt.js" },
        { icon: "vuetify.svg", name: "Vuetify" },
      ],
    };
  },
  methods: {
    getImg(icon) {
      return require(`@/assets/img/techs/${icon}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.techs {
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
    list-style: none;
  }

  &_item {
    display: flex;
    flex-direction: column;
    align-items: center;

    & p {
      margin: 0;
    }
  }
}
</style>
