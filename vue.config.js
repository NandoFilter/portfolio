const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/style/variables.scss";
        `
      }
    }
  },
  transpileDependencies: true
})
