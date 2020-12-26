module.exports = {
  entry: './index.js',
  target: 'node',
  output: {
    path: __dirname + '/dist',
    filename: 'sample.js',
  },
  mode: 'production',
};
