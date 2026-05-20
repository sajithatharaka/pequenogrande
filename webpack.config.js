const path = require('path');

module.exports = {
  mode: 'production', // or 'development'
  entry: './src/routes/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
