const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/js/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'styles.css' }),
        new HtmlWebpackPlugin({ template: './src/index.html', filename: 'index.html' }),
        new HtmlWebpackPlugin({ template: './src/create-pet.html', filename: 'create-pet.html' }),
        new HtmlWebpackPlugin({ template: './src/list-pets.html', filename: 'list-pets.html' })
    ],
    devServer: {
        static: './dist',
        port: 3000
    },
    mode: 'development'
};
