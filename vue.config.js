module.exports = {
  pwa: {
    iconPaths: {
      favicon32: 'img/icons/favicon.png',
      favicon16: 'img/icons/favicon.png',
      appleTouchIcon: 'img/icons/favicon.png',
      maskIcon: 'img/icons/favicon',
      msTileImage: 'img/icons/favicon.png'
    },
    serviceWorker:false,
    workboxPluginMode:'InjectManifest',
    workboxOptions: {
      swSrc: './app/sw.js', /* Empty file. */
    }
  },
  css: {
    loaderOptions: {
      // pass options to sass-loader
      // @/ is an alias to src/
      // so this assumes you have a file named `src/variables.sass`
      // Note: this option is named as "data" in sass-loader v7
      sass: {
        prependData: `@import "~@/assets/sass/mixins.sass"`
      },
    }
  }
}