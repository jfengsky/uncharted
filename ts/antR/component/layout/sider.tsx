import * as React from 'react'

export interface ITSiderProps {
  className: string,
  style?: any
}

export default class Sider extends React.Component<ITSiderProps, any> {
  render(){
    return (
      <div className="ant-layout-sider" style={this.props.style}>
        <div className="ant-layout-sider-children">{this.props.children}</div>
      </div>
    )
  }
}