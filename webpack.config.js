var webpack = require('webpack');
module.exports = {
    entry: './src/index.ts',
    output: {
        // libraryTarget: "var",
        // library: "mcapi",
        filename: 'lib/mcapi.min.js'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    }
}