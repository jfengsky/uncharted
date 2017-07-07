import * as React from 'react'
import { Route, Switch} from 'react-router-dom'

import initialState from '../store/initialState'

import Api from './Api'
import ApiType from './ApiType'
import AddApi from './AddApi'

interface ITMatch {
  url: string
}

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
      return <ApiType {...param} />
    default:
      return <AddApi />
  }
}

const ApiRoute = ({match}: any): JSX.Element => {
  return (
    <Switch>
      <Route exact path={match.url} component={Api as any} />
      <Route path={`${match.url}/:type/:id`} component={RouterApi} />
      <Route path={`${match.url}/:type`} component={RouterApi} />
    </Switch>
  )
}

// const ApiRoute = ( {location}: any) => {
//   const {
//     api
//   } = initialState.menu
//   let ApiCmp

//   api.map( (item) => {
//     if(item.link === location.pathname ){
//       ApiCmp = item.cmp
//     }
//   })
//   return <Route path={location.pathname} component={ApiCmp} />
// }

export default ApiRoute