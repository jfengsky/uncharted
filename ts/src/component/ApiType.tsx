import * as React from 'react'
// import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

interface ITProps {
  id?: any
}
interface ITState {
}

class ApiType extends React.Component<ITProps, ITState> {
  public render(): JSX.Element{
    return (
      <div>api type {this.props.id}</div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  ...state
})

const mapDispatchToProps = (dispatch: any) =>({})

export default connect(mapStateToProps, mapDispatchToProps)(ApiType)

// const ApiType = (match: any) => {
//   return (
//     <div>
//       <Route exact path={match.url} component={() => (<div>api1</div>)} />
//       <Route path={`${match.url}/:type`} component={()=>(<div>api2</div>)} />
//     </div>
//   )
// }

// export default ApiType