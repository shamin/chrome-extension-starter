const path = require('path');

module.exports = {
    entry: {
        'options': './src/options/options.js',
        'popup': './src/popup/popup.js',
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },]
    },
};
