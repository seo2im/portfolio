const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { getTokenSourceMapRange } = require('typescript')

module.exports = {
    entry: './srcs/app.tsx',
    target: 'web',
    mode: 'development',

    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, '/docs'),
        publicPath: '/'
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
                test: /\.(png|svg)$/,
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