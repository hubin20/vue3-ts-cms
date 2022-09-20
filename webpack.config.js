const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
module.exports = {
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      memoryLimit: 5000
    })
  ]
}
