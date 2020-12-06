const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  devServer: {
    // abrir la APP en el BROWSER
    // open: true,
    open: 'chrome',

    // HACK para permitir ver la APP desde otros dispositivos
    // host: '0.0.0.0',

    // ver el progreso de compilacion en la consola
    progress: true,

    // esto para que todas las URLs que fallen (404) devuelvan nuestro index.html
    // historyApiFallback: true,

    // para que los errores en consola aparescan en un overlay en el BROWSER
    // overlay: true,

    // habilitar HMR
    hot: true,
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html',
    }),
  ],
};
