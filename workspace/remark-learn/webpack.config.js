const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: { loader: "ts-loader", options: { transpileOnly: true } },
        exclude: /node_modules/,
      },
      {
        test: /.(png|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          outputPath: "images",
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
    alias: {
      images: path.resolve(__dirname, "public/images"),
    },
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: "Html Plug",
      template: "public/index.html",
      favicon: "public/favicon.ico",
    }),
  ],
  optimization: {
    splitChunks: {
      name: "vendor",
      chunks: "all",
    },
  },
  devtool: "eval-source-map",
  devServer: {
    port: 3000,
    hot: true,
    liveReload: false,
  },
};
