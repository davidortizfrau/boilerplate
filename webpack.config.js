var path = require('path')
var webpack = require('webpack')

function configure(env) {

  var config = {
    entry: [
      // 'babel-polyfill',
      './src/index',
      './index.html'
    ]
  }

  config.module = {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /.*node_modules((?!afini).)*$/,
        options: {
          presets: ['es2015', 'stage-0', 'react'],
          plugins: ['transform-object-rest-spread']
        },
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      }
    ]
  }

  config.plugins = []

  config.plugins.push(
    new webpack.DefinePlugin({
      ENVIRONMENT: ENVIRONMENT
    })
  )

  config.output = {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  }

  if (env.dev) {
    config.devtool = 'eval'
    config.entry = [
      'webpack-dev-server/client',
      'webpack/hot/only-dev-server'
    ].concat(config.entry)
  }

  if (env.prod) {
    config.plugins.push(
      // new CompressionPlugin({
      //   asset: "[path].gz[query]",
      //   algorithm: "gzip",
      //   test: /\.js$|\.css$/,
      //   threshold: 10240,
      //   minRatio: 0.8
      // })
    )
  }

  return config
}

module.exports = configure
