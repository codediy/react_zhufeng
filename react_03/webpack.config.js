var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var openBrowserPlugin = require('open-browser-webpack-plugin');
var extractTextWebpackPlugin = require('extract-text-webpack-plugin');

var config = {
    entry: path.resolve(__dirname, "./src/index.js"),
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "index.[hash:5].js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.css/,
            loader: extractTextWebpackPlugin.extract({ fallback: 'style-loader', use: ['css-loader'] }),
            include: path.resolve(__dirname, 'src')
        }]
    },
    devServer: {
        contentBase: 'dist',
        inline: true,
        port: 8080,
        stats: {
            colors: true
        }
    },
    plugins: [
        new htmlWebpackPlugin({
            title: '搭建前段开发环境',
            template: './src/index.html'
        }),
        new openBrowserPlugin({
            url: 'http://localhost:8080'
        }),
        new webpack.BannerPlugin('作者：zhaodj\n日期：2017-03-06'),
        new extractTextWebpackPlugin("styles.css")
    ]
};

module.exports = config;
