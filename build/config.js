import webpack from 'webpack'
import nodeExternals from 'webpack-node-externals'

export const resolve = {
  extensions: [".ts", ".tsx", ".js", ".json"]
}

export const node = {
  __dirname: false,
  __filename: false,
}

export const externals = [nodeExternals(),{
  "react": "React",
  "react-dom": "ReactDOM"
}]

export const module = {
  rules: [
    // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
    // {
    //   test: /\.(ts|tsx)$/,
    //   exclude: /node_modules/,
    //   loader: 'ts-loader'
    // },
    { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
    { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
    // { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
  ]
}