// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const nodeExternals = require('webpack-node-externals');

const isProduction = process.env.NODE_ENV == 'production';


const config = {
    entry: './src/main.ts',
    resolve: { extensions: ['.ts'] },
    output: {
        path: path.resolve(__dirname, 'release'),
    },
    plugins: [
        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    target: 'node',
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: [/node_modules/],
                use: ['ts-loader'],
            }
            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    optimization: {
        minimize: true
    }
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        
    } else {
        config.mode = 'development';
    }
    return config;
};
