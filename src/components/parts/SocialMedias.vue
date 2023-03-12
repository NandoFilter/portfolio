<template>
  <div>
    <ul class="list">
      <li class="list_item" v-for="media in this.medias" :key="media">
        <a :href="media.href" target="_blank">
          <img :src="getImg(media.icon)" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      medias: [
        {
          icon: "github.svg",
          href: "https://github.com/NandoFilter",
        },
        {
          icon: "linkedin.svg",
          href: "https://www.linkedin.com/in/fernandofilter/",
        },
        {
          icon: "instagram.svg",
          href: "https://www.instagram.com/nandofilter/",
        },
        {
          icon: "discord.svg",
          href: "https://www.discordapp.com/users/664118258072420384",
        },
      ],
    };
  },
  methods: {
    getImg(name) {
      return require(`@/assets/img/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  align-items: center;
  flex-direction: row;

  list-style: none;

  margin: 0;
  padding: 0;

  &_item {
    padding-right: 24px;
  }
}
</style>
