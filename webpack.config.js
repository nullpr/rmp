const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = (env) => {
    const isProduction = env.MODE === "production"
    const mode = isProduction ? "production" : "development";

    return {
        mode,
        entry: path.join(__dirname, 'index.js'),
        output: {
            path: path.join(__dirname, 'build'),
            filename: 'bundle.js'
        },
        devServer: {
            port: isProduction ? 1111 : 1000,
            hot: true,
            open: true,
            historyApiFallback: true
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            ]
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new HTMLWebpackPlugin({
                favicon: false,
                showErrors: true,
                cache: true,
                template: path.join(__dirname, 'index.html')
            }),
            new webpack.DefinePlugin({
                'MODE': JSON.stringify(mode)
            })
        ]
    }
}