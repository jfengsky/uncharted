"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const webpack_1 = require("webpack");
const webpack_node_externals_1 = require("webpack-node-externals");
exports.entry = {
    bundle: './ts/APP/index.tsx',
};
exports.plugs = [
    new webpack_1.default.optimize.CommonsChunkPlugin({
        name: ['vendor'],
    }),
];
exports.baseConfig = {
    output: {
        path: __dirname + '/../dist/',
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [],
};
exports.resolve = {
    modules: ['node_modules', 'src'],
    extensions: ['*', '.js', '.json'],
};
exports.node = {
    __dirname: false,
    __filename: false,
};
exports.externals = [webpack_node_externals_1.default()];
