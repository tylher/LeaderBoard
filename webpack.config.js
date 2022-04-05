const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Leader board',
        }),
    ],
    module: {
        rules:{
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
        },
    },
}