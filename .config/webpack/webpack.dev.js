const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const miniCssExtractPlugin = require("mini-css-extract-plugin");
const fixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const webpackShellPluginNext = require("webpack-shell-plugin-next");

require("dotenv").config();
const storeUrl = process.env.STORE_URL;

const plugins = () => [
  new miniCssExtractPlugin({
    filename: "[name].css",
  }),
  new fixStyleOnlyEntriesPlugin(),
  new webpackShellPluginNext({
    onBuildStart: {
      scripts: ["echo Webpack build in progress...🛠"],
    },
/*     onBuildEnd: {
      scripts: ["echo Build Complete 📦", `shopify theme dev -s ${storeUrl}`],
      parallel: true, //this is required to make webpack watch run in background.
    }, */
  }),
];

module.exports = merge(common, {
  mode: "development",
  devtool: "cheap-source-map",
  plugins: plugins(),
});
