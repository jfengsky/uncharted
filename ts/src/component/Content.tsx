import * as React from 'react'

interface ITProps {}
interface ITState {}

export default class Contents extends React.Component<ITProps, ITState> {
  public render(){
    return (
      <div style={{clear: 'both'}}>content</div>
    )
  }
}