/**
 * Created by wanglei on 2016/8/23.
 * webpack
 */

// webpack.config.js
var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: __dirname + "/src",
    entry: {
        //imports:"./imports-loader/index.js",
        //styleImg:"./style-img/index.js"
        styles:"./index.js"
    },
    output: {
        //path: path.join(__dirname, 'dist'),
        //path: "./webpack-loaders/dist",
        path: "./dist",
        filename: "[name].bundle.js"
    },
    //plugins: [
    //    new webpack.optimize.UglifyJsPlugin({
    //        compressor: {
    //            warnings: false
    //        },
    //    })
    //],
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg)$/,
                loaders: [
                    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },
            //{
            //    test: /\.json$/,
            //    exclude: /node_modules/,
            //    loaders: 'json',
            //    include: "path/to/your/sources"
            //},
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};
