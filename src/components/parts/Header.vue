<template>
  <header>
    <img src="@/assets/img/logo.svg" alt="" />
    <li class="options">
      <ul>
        Home
      </ul>
      <ul>
        Sobre
      </ul>
      <ul>
        Contato
      </ul>
    </li>
  </header>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;

  margin: 5px 75px;
}

.options {
  display: flex;
  flex-direction: row;

  list-style: none;
}

.options ul {
  font-size: 20px;
}
</style>
