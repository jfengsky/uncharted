import * as React from 'react'

interface ITProps {}
interface ITState {}

export default class Home extends React.Component<ITProps, ITState> {
  public render(): JSX.Element{
    return (
      <div style={{clear: 'both'}}>Home</div>
    )
  }
}