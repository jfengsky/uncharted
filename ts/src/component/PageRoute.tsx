import * as React from 'react'
import { Route, Switch} from 'react-router-dom'

import initialState from '../store/initialState'

import Home from './Home'
import AddPage from './AddPage'
import PageType from './PageType'
import PageTypeApi from './PageTypeApi'

const RouterApi = ({match}: any): JSX.Element => {
  let {
    type,
    id
  } = match.params
  let param = {
    id
  }
  switch(type) {
    case 'type':
      return <PageType {...param} />
    case 'typeApi':
      return <PageTypeApi />
    default:
      return <AddPage />
  }
}

const PageRoute = ({match}: any): JSX.Element => {
  return (
    <Switch>
      <Route exact path={match.url} component={Home as any} />
      <Route path={`${match.url}/:type/:id`} component={RouterApi} />
      <Route path={`${match.url}/:type`} component={RouterApi} /> 
    </Switch>
  )
}

export default PageRoute