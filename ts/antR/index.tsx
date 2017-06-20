import * as React from 'react'
import { render } from 'react-dom'

import { Icon } from './component'
import './component/style'

interface IAppProps {}
interface IAppState {}

class App extends React.Component<IAppProps, IAppState> {
  public render() {
    return (
      <div>
        Hello world
        <Icon className={'blue'} />
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))