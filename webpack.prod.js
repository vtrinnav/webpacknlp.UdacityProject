const { required } = require("nodemon/lib/config");
const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');



module.exports={
    mode: 'production',
    devtool: 'source-map',
    entry: './src/client/index.js',
    optimization:{
        minimizer:[new TerserPlugin({}), new CssMinimizerPlugin({})],
    },
    output:{
        libraryTarget: 'var',
        library: 'Client'
    },
    stats: 'verbose', 
    module: {
        rules: [
            {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
            },
            {
                test:/\.scss$/,
                use:[MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            template: "./src/client/index.html",
            filename: "./index.html",
        }),
        new MiniCssExtractPlugin({filename: "[name].css"}),
        new WorkboxPlugin.GenerateSW(),

    ]


};




