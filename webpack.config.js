const dotenv = require("dotenv");
const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const appSrc = path.resolve(__dirname, "src");
const appHtml = path.resolve(__dirname, "public", "index.html");
const appPublic = path.resolve(__dirname, "public");

const webpackEnv = process.env.NODE_ENV;

dotenv.config();

module.exports = (webpackEnv) => {
  const isProd = webpackEnv === "production";

  return {
    mode: webpackEnv,
    plugins: [new HtmlWebpackPlugin({ template: appHtml })],
    entry: "./src/index.js",
    module: {
      rules: [
        {
          test: /\.(js|mjs|jsx)$/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react", "@babel/preset-env"],
              cacheDirectory: true,
              cacheCompression: false,
            },
          },
          include: appSrc,
          exclude: /(node_modules|bower_components)/,
        },
        {
          loader: "file-loader",
          exclude: [/\.(js|mjs|jsx)$/, /\.html$/, /\.json$/],
          options: {
            outputPath: "static/media",
            name: "[name].[hash:8].[ext]",
            esModule: false,
          },
        },
      ],
    },
    cache: {
      type: isProd ? "filesystem" : "memory",
    },
    output: {
      filename: isProd
        ? "static/js/[name].[chunkhash:8].js"
        : "static/js/bundle.js",
      path: path.join(__dirname, "build"),
    },
    devServer: {
      host: "localhost",
      port: 3000,
      contentBase: appPublic,
      open: true,
      hot: true,
      historyApiFallback: true,
      overlay: true,
      stats: "errors-only",
      after: function (_, _, _) {
        console.log(
          `============☆★ Ringle & trunchat team분들 안녕하세요! ★☆============ \n본 프로젝트는 다음 주소에서 동작합니다: http://localhost:3000\n====================================================================`
        );
      },
    },
  };
};
