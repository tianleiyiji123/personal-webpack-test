/**
 * Created by wanglei on 2016/8/23.
 * webpack
 */

// webpack.config.js
var path = require('path');
var webpack = require('webpack');

module.exports = {
    //context: __dirname + "/webpack-loaders",
    entry: {
        imports: "./webpack-loaders/imports-loader/index.js",
        styleImg: "./webpack-loaders/style-img/index.js",
        lessLoader: "./webpack-loaders/less-loader/index.js"
        //styles:"./src/index.js"
    },
    output: {
        //path: path.join(__dirname, 'dist'),
        path: "./webpack-loaders/dist",
        //path: "./dist",
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
                test: /\.less$/,
                loaders: ["style-loader",
                    'css-loader',
                    "less-loader"
                ]
            },
            {
                test: /\.(png|jpg)$/,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
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
        ],
        resolve: {
            extensions: ['', '.js', '.jsx', '.css'],
            modulesDirectories: [
                'style-img'
            ]
        }
    }
};
