import webpack from 'webpack'
import nodeExternals from 'webpack-node-externals'

export const entry = {
  bundle: './js/src/index.js',
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