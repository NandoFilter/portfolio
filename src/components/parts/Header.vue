<template>
  <header>
    <img src="@/assets/img/logo.svg" />
    <ul class="options">
      <li class="option" v-for="option in this.options" :key="option">
        <a :href="option.href">{{ option.label }}</a>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  data() {
    return {
      options: [
        { label: "Home", href: "#home" },
        { label: "Sobre", href: "#about" },
        { label: "Contato", href: "#contact" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;

  margin: 5px 75px;
  padding-top: 10px;
}

.options {
  display: flex;
  flex-direction: row;

  list-style: none;
}

.option {
  font-size: 20px;
  padding: 0 18px;

  & a {
    color: #fff;
    text-decoration: none;
  }

  & a:hover {
    color: $primary-color;
  }
}
</style>
