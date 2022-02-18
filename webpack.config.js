const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  // Define the entry points of our application (can be multiple for different sections of a website)
  entry: {
    main: "./src/index.js",
    style: "./src/style.js"
  },

  // Define the destination directory and filenames of compiled resources
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },

  // Define development options
  devtool: "source-map",

  // Define loaders
  module: {
    rules: [
      // CSS, PostCSS, and Sass
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              sourceMap: true,
              url: false,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  'autoprefixer',
                ]
              }
            }
          },
          'sass-loader'
        ],
      },
      // Use babel for JS files
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },

  // Define used plugins
  plugins: [
    new Dotenv({
      path: "./.env"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
};
