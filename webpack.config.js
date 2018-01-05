const { generateConfig, resolveApp } = require('@gxl/webpack-utils')

module.exports = generateConfig({
  babel: true,
  sass: {
    extract: true
  },
  media: {
    loadImgWithUrlLoader: true,
  }
}, {
  entry: {
    main: resolveApp('source/_modules/index.js'),
  },
  output: {
    path: resolveApp('source/build'),
    filename: '[name].js',
    publicPath: '/blog/build/'
  },
  devtool: 'sourcemap'
})
