const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");

module.exports = merge.merge(common, {
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "images/[name].[ext]"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader", 
                    "css-loader", 
                    "sass-loader"
                ]
            },
        ]
    }
});