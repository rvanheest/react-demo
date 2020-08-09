const webpack = require('webpack');
const { merge } = require('webpack-merge');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MinifyPlugin = require("babel-minify-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const commonConfig = require("./common.config");

module.exports = (env, argv) => merge(commonConfig(env, argv), ({
    mode: 'production',
    target: 'web',

    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].bundle.[contenthash].js',
        chunkFilename: '[name].bundle.[contenthash].js',
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                path: 'webpack/postcss.config.js',
                            },
                        },
                    },
                ],
            },
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].bundle.[contenthash].css',
            chunkFilename: '[name].bundle.[contenthash].css',
        }),
        // Minify JS
        new MinifyPlugin(),
        // Minify CSS
        new webpack.LoaderOptionsPlugin({
            minimize: true,
        }),
    ],

    optimization: {
        minimize: true,
        minimizer: [
            new OptimizeCssAssetsPlugin({}),
        ],
        splitChunks: {
            chunks: 'all',
            name: 'vendor',
        },
    },
}));
