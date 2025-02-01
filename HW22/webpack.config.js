const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js', // Точка входа
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Папка, где будут храниться сгенерированные файлы
    },
    compress: true, // Включает сжатие
    port: 9000, // Порт для сервера
    open: true, // Открывать браузер при запуске
    hot: true, // Включить горячую замену модулей (если необходимо)
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Путь к шаблону HTML
    }),
  ],
};
