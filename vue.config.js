// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: [
//     'vuetify'
//   ]
// })
module.exports = {
  lintOnSave: true,

  transpileDependencies: ["vuetify"],

  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/style.scss";`,
      },
    },
  },
};
