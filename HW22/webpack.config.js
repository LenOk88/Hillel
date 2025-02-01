const path = require('path');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ImageMinimizerPlugin({
      minimizer: [
        {
          implementation: ImageMinimizerPlugin.imageminGenerate,
          options: {
            plugins: [
              ['imagemin-mozjpeg', { quality: 70, progressive: true }],
              ['imagemin-pngquant', { quality: [0.65, 0.90] }],
            ],
          },
        },
      ],
    }),
  ],
};
