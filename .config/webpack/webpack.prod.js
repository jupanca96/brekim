const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const cssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const terserPlugin = require("terser-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const fixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");

const plugins = () => [
  new miniCssExtractPlugin({
    filename: "[name].css",
  }),
  new fixStyleOnlyEntriesPlugin(),
];

module.exports = merge(common, {
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [
      new cssMinimizerPlugin({
        minimizerOptions: {
          level: {
            1: {
              roundingPrecision: "all=3,px=5",
            },
          },
        },
      }),
      new terserPlugin(),
    ],
  },
  plugins: plugins(),
});
