let HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = {
    entry: {
        main: "./src/index.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            }
        ]
    }
};