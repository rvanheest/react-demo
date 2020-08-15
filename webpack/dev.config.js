const webpack = require("webpack");
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const commonConfig = require("./common.config");

module.exports = (env, argv) => merge(commonConfig(env, argv), ({
    mode: 'development',
    target: 'web',
    output: {
        publicPath: "/"
    },

    devServer: {
        historyApiFallback: true,
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: true,
                            // if hmr does not work, this is a forceful method.
                            reloadAll: true,
                        }
                    },
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
        ],
    },

    plugins: [
        new webpack.DefinePlugin({
            __DEVELOPMENT__: true,
        }),
        new MiniCssExtractPlugin(),
    ]
}));
