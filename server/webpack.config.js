const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
    mode: "development",
    entry: './src/server.js',
    externals: nodeExternals(),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [{
            test: /\.js?/,
            loader: 'babel-loader',
            query: {
                presets: ['@babel/preset-env']
            }
        }]
    }
}