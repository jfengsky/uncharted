import * as React from 'react'

export interface ITSiderProps {
  className: string
}

export default class Sider extends React.Component<ITSiderProps, any> {
  render(){
    return (
      <div className="ant-layout-sider">
        <div className="ant-layout-sider-children">{this.props.children}</div>
      </div>
    )
  }
}