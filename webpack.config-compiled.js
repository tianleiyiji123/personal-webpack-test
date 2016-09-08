/**
 * Created by wanglei on 2016/8/23.
 * webpack
 */

// webpack.config.js
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './test/app.js',
    output: {
        //path: path.join(__dirname, 'dist'),
        path: "./dist",
        filename: 'dog.js'
    },
    //plugins: [
    //    new webpack.optimize.UglifyJsPlugin({
    //        compressor: {
    //            warnings: false
    //        },
    //    })
    //],
    module: {
        loaders: [{
            test: /\.css$/,
            loaders: ['style', 'css']
        }, {
            test: /\.(png|jpg)$/,
            loaders: ['file?hash=sha512&digest=hex&name=[hash].[ext]', 'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false']
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
            loader: 'babel',
            query: {
                presets: ['es2015']
            }
        }]
    }
};

//# sourceMappingURL=webpack.config-compiled.js.map