var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
module.exports = {
    entry: path.resolve(__dirname,'src/index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                use: ["babel-loader"],
                test: /\.(ts|tsx|js|jsx)$/,

            },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
    resolve: {
        extensions: [
            '.ts',
            '.tsx',
            '.js',
            '.jsx',
            '.css',
        ],
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new Dotenv()
    ]
};
