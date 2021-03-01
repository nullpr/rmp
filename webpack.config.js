const { merge } = require('webpack-merge');
const baseConfig = require('./config/webpack.base');
const devConfig = require('./config/webpack.dev');
const prodConfig = require('./config/webpack.prod');

module.exports = (env) => {
    return env.MODE === 'production' ?  merge(baseConfig, prodConfig) : merge(baseConfig, devConfig);
};