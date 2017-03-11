var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var uglifyPlugin = webpack.optimize.UglifyJsPlugin;

var config = {
    entry: path.resolve(__dirname, "./src/index.js"),
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "index.[hash:8].js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader',
            include: path.resolve(__dirname, 'src')
        }, {
            test: /\.less/,
            loader: 'style-loader!css-loader!less-loader',
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
        new uglifyPlugin({
            compress: false
        }),
        new webpack.BannerPlugin('作者：zhaodj\n日期：2017-03-06')
    ]
};

module.exports = config;
