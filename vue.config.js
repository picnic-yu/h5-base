module.exports = {
    // ...sass全局变量
    css: {
      loaderOptions: {
        sass: {
          data: `
            @import "@/assets/styles/_variable.scss";
          `
        }
      }
    }
  }