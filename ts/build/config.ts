import webpack from 'webpack'
import nodeExternals from 'webpack-node-externals'

export const entry = {
  bundle: './ts/APP/index.tsx',
}

export const plugs = [
  new webpack.optimize.CommonsChunkPlugin({
    name: ['vendor'],
  }),
]

export const baseConfig = {
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
}

export const resolve = {
  modules: ['node_modules', 'src'],
  extensions: ['*', '.js', '.json'],
}

export const node = {
  __dirname: false,
  __filename: false,
}

export const externals = [nodeExternals()]