import * as React from 'react'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import initialState from './store/initialState'
import Menu from './component/Menu'
import Content from './component/Content'
import ApiRoute from './component/ApiRoute'
import PageRoute from './component/PageRoute'
import Tools from './component/Tools'
import PageType from './component/PageType'

interface ITProps { }
interface ITState { }

const components: any = {
  ApiRoute,
  PageRoute,
  Tools,
  PageType
}

class App extends React.Component<ITProps, ITState> {
  public render(): JSX.Element {
    const {
      api,
      page,
      tools
    } = initialState.menu
    const routeList: any[] = [...api, ...page, ... tools]
    return (
      <div style={{fontSize: 12}}>
        <Menu />
        {
          routeList.map( ({link, cmp}, index: number): JSX.Element => <Route key={index} exact={link === '/'} path={link} component={ components[cmp] as any} /> )
        }
      </div>
    )
  }
}

export default App