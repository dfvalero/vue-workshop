'use strict';

var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');
var fileName = '[name]';

module.exports = {
    context: __dirname + '/app',
    entry: {
        app: __dirname + '/app/app',
        legacy: __dirname + '/app/legacy'
    },
    output: {
        path: __dirname + '/build',
        filename: fileName + '.js'
    },
    resolve: {
        alias: {
            'vue': __dirname + '/node_modules/vue/dist/vue.common.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract({
                            use: 'css-loader!sass-loader',
                            fallback: 'vue-style-loader'
                        })
                    }
                }
            },
            {
                test: /\.js$/,
                include: __dirname + '/app',
                exclude: /(node_modules)/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'file-loader?publicPath=build/'
            },
            {
                test: /\.svg$/,
                loader: 'vue-svg-loader'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' })
            }
        ]
    },
    resolveLoader: {
        alias: {
            'scss-loader': 'sass-loader',
        },
    },
    plugins: [
        new ExtractTextPlugin(fileName + '.css'),
        new CleanWebpackPlugin(['build'], {
            root: __dirname,
            verbose: false,
            dry: false
        }),
        new ManifestPlugin()
    ],
    stats: {
        assets: true,
        children: false
    }
};