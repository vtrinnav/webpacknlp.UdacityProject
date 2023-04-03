// Path: webpack.prod.js
const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: './src/client/index.js',
    output: {
        libraryTarget: 'var',
        library: 'Client'
    },
    mode: 'production',
    devtool: 'source-map',
    stats: 'verbose',
    module: {
        rules: [
            {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            },
            {
                test:/\.scss$/,
                use:[ 'style-loader', 'css-loader', 'sass-loader']
            },
        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            template: "./src/client/index.html",
            filename: "./index.html",
        }),
        new CleanWebpackPlugin
    ]
};







            





