var path123 = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        main: './app.ts'
    },
    resolve: {
        extensions: [ ".webpack.js", ".web.js", ".js", ".ts"]
    },
    output: {
        // publicPath: "/js/",
       //path: path123.join(__dirname, '/bin/'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    }
};
