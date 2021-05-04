// arquivos de configuração do webpack
const modoDev = process.env.NODE_ENV !== "production";
// const webpack = require("webpack");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

exports.default = {
  mode: modoDev ? "development" : "production",
  entry: "./src/principal.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "build/",
  },
  devServer: {
    contentBase: "../Webpackbuild",
    port: 5500,
  },
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        use: [
          MiniCSSExtractPlugin.loader, // extrai o css e gera o arquivo na pasta dest ..
          // "style-loader", adiciona CSS a DOM injetando a tag style
          "css-loader", // interpreta @import, url() ...
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: "estilo.css",
    }),
    new TerserPlugin({
      parallel: true,
      terserOptions: {
        ecma: 6,
      },
    }),
  ],
};
