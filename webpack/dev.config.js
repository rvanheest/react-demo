const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => ({
    mode: 'development',

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'css-hot-loader',
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
        new MiniCssExtractPlugin(),
    ]
});
