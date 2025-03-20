const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    background: './src/extension/background.ts',
    content: './src/extension/content.ts',
    popup: './public/extension/popup.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'extension/[name].js',
    clean: true
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.extension.json'
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'public/manifest.json', to: 'manifest.json' },
        { from: 'public/icon16.svg', to: 'icon16.png' },
        { from: 'public/icon48.svg', to: 'icon48.png' },
        { from: 'public/icon128.svg', to: 'icon128.png' },
        { from: 'public/extension/popup.html', to: 'extension/popup.html' },
        { from: 'public/extension/scanning.html', to: 'extension/scanning.html' },
        { from: 'public/extension/scanning.js', to: 'extension/scanning.js' }
      ]
    })
  ]
}; 