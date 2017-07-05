import * as React from 'react'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Home from './Home'
import Api from './Api'
import Tools from './Tools'

interface ITProps {
  menu: {
    api: any[]
    page: any[]
    tools: any[]
  }
}
interface ITState {}

const components: any = {
  Home,
  Api,
  Tools
}

class Contents extends React.Component<ITProps, ITState> {
  public render(){
    const {
      api,
      page,
      tools
    } = this.props.menu
    const routeList: any[] = [...api, ...page, ... tools]
    return (
      <div style={{clear: 'both'}}>
        <Route exact path='/' component={Home as any} />
        <Route path='/api' component={Api as any} />
        {/*{
          routeList.map( ({link, cmp}, index: number): JSX.Element => {
            let componentItem: JSX.Element = components[cmp]
            return componentItem && <Route key={index} exact={link === '/'} path={link} component={ componentItem as any} />
          })
        }*/}
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  ...state
})

export default connect(mapStateToProps)(Contents)

/*
<Route exact path='/' component={Home as any} />
<Route path='/page/type' component={() => (<div>/page/type</div>)} />
<Route path='/page/typeApi' component={() => (<div>/page/typeApi</div>)} />
<Route path='/api' component={Api as any} />
<Route path='/tools' component={Tools as any} />
*/