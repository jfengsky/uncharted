import webpack from 'webpack'

export const resolve = {
  extensions: [".ts", ".tsx", ".js", ".json"]
}

export const externals = {
  "react": "React",
  "react-dom": "ReactDOM"
}

export const module = {
  rules: [
    // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
    {
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      loader: 'ts-loader'
    },

    // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
    // { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
  ]
}