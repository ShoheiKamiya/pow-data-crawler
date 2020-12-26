module.exports = {
  entry: './index.js',
  target: 'node',
  output: {
    path: __dirname + '/dist',
    filename: 'sample.js',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
            plugins: ['@babel/plugin-proposal-async-generator-functions'],
          },
        },
      },
    ],
  },
};
