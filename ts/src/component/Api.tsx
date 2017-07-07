import * as React from 'react'
import { connect } from 'react-redux'

interface ITProps {}
interface ITState {}

class Api extends React.Component<ITProps, ITState> {
  public render(){
    return (
      <div style={{clear: 'both'}}>Api list</div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  ...state
})

export default connect(mapStateToProps)(Api)