const { required } = require("nodemon/lib/config");
const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports={
    mode: 'development',
    devtool: 'source-map',
    entry: './src/client/index.js',
    stats: 'verbose',
    module: {
        rules: [
            {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
            }
        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            template: "./src/client/index.html",
            filename: "./index.html",
        })
    ]


};




