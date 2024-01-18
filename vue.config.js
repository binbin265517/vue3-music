const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/variable.scss";
          @import "@/assets/scss/mixin.scss";
        `,
      },
    },
  },
  transpileDependencies: true,
  lintOnSave: false,
})
