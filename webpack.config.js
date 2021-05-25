const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './srcs/app.tsx',
    target: 'web',
    mode: 'development',

    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, '/docs'),
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
        historyApiFallback : true,
		port : 4000,
	},
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public', 'index.html')
        })
    ],
}