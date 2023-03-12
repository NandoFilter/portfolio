<template>
  <div class="about_me">
    <div class="content">
      <TopicTitle label="Sobre mim" class="content_title" />
      <div class="content_text">
        <p>
          Atualmente, com meus 20 anos, trabalho com Desenvolvimento de Software
          na
          <a href="https://www.interactsolutions.com" target="_blank"
            >Interact Solutions</a
          >
          e estudo Engenharia de Software na
          <a href="https://www.univates.br" target="_blank">Univates</a>.
        </p>
        <p>
          Possuo afinidade com o Desenvolvimento Web, juntamente com UI/UX
          Design, com o objetivo de criar aplicações agradáveis, intuitivas e
          acessíveis para todos.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import TopicTitle from "./parts/TopicTitle.vue";

export default {
  components: {
    TopicTitle,
  },
};
</script>

<style lang="scss" scoped>
.about_me {
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

  &_text {
    margin: 0;
    padding: 0;

    text-align: justify;

    font-size: 20px;

    line-height: 30px;

    & a {
      color: #fff;
      text-decoration: none;
    }

    & a:hover {
      color: $primary-color;
    }
  }
}
</style>
