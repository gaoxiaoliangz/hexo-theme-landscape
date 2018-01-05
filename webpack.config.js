const { generateConfig, resolveApp } = require('@gxl/webpack-utils')

module.exports = generateConfig({
  babel: true,
}, {
  entry: {
    main: resolveApp('source/_src/index.js')
  },
  output: {
    path: resolveApp('source'),
    filename: '[name].js'
  },
  devtool: 'sourcemap'
})
