/**
 * https://ant.design/components/layout-cn/
 */

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Button } from 'antd'

const Home = () => (
  <div>home</div>
)

ReactDOM.render(
  <div>
    <Button type="primary">Primary</Button>
    <Home />
    1111
  </div>,
  document.getElementById('root')
)