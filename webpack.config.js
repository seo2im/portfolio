const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './srcs/app.tsx',
    target: 'web',
    mode: 'development',

    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.join(__dirname, '/build'),
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
            },
            {
                test: /\.(png|svg|gif|ttf)$/,
                loader: 'url-loader'
            }
        ]
    },
    devServer : {
        port : 4000,
        historyApiFallback : true,
	},
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public', 'index.html')
        })
    ],
}