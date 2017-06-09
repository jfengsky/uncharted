import webpack from 'webpack'
import nodeExternals from 'webpack-node-externals'

export const entry = {
  // bundle: './js/src/index.jsx',
  bundle: "./ts/src/index.tsx"
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
      {
        test: /\.ts|tsx$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      }
    ],
  },
  plugins: [],
}

export const resolve = {
  modules: ['node_modules', 'src'],
  extensions: ['*', '.js','.jsx','.ts', '.tsx', '.json']
}

export const node = {
  __dirname: false,
  __filename: false
}

export const externals = [nodeExternals()]