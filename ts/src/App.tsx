import * as React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Menu from './component/Menu'
import Home from './component/Home'
import Api from './component/Api'
import Tools from './component/Tools'

interface ITProps { }
interface ITState { }

export default class App extends React.Component<ITProps, ITState> {
  public render(): JSX.Element {
    return (
      <div style={{fontSize: 12}}>
        <Menu />
        <Route exact path='/' component={Home as any} />
        <Route path='/api' component={Api as any} />
        <Route path='/tools' component={Tools as any} />
      </div>
    )
  }
}