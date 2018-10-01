const merge = require('webpack-merge');
const common = require('./webpack.dev.js');

// delete dev related keys
delete common.mode;
delete common.devServer;

module.exports = merge(common, {
  mode: 'production',
});
