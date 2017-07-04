import * as React from 'react'

import Menu from './component/Menu'
import Contents from './component/Content'

interface ITProps { }
interface ITState { }

export default class App extends React.Component<ITProps, ITState> {
  public render() {
    return (
      <div>
        <Menu />
        <Contents />
      </div>
    )
  }
}