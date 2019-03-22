const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: './index.js',

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
    },

    resolve: {
        extensions: ['.js', '.jsx ']
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: "../src/index.html",
            filename: "./index.html"
        })
    ],

    watch: false
};