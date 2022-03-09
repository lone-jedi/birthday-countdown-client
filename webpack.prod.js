const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge.merge(common, {
    mode: "production",
    output: {
        filename: "[name].[hash].bundle.js",
        path: path.resolve(__dirname, "build"),
        assetModuleFilename: "images/[name].[hash].[ext]"
    },
    plugins: [
        new MiniCssExtractPlugin({filename: "[name].[hash].css"}), 
        new CleanWebpackPlugin.CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    "css-loader", 
                    "sass-loader"
                ]
            },
        ]
    }
});