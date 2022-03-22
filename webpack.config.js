var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: [
        "./index.js"
    ],
    output: {
        path: __dirname + "/build",
        filename: "main.js"
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['react-hot', 'babel-loader'], exclude: /node_modules/ },
            { test: /\.jsx?$/, loaders: ['react-hot', 'babel-loader'], exclude: /node_modules/ },
            { test: /\.svg$/, loader: "raw" },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.(eot|svg|ttf|woff|woff2)$/, loader: 'file?name=src/css/[name].[ext]' },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }

        ]
    }
};