import { entry, plugs, baseConfig } from './config'

export default Object.assign(
  {},
  { ...baseConfig },
  { devtool: '#source-map' },
  { plugins: plugs },
  { entry },
)
