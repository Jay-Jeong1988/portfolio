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
  }
}