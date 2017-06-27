
import * as React from 'react'

import './style/index.css'

export default class Menu extends React.Component<any, any> {
  public render(){
    return(
      <ul className="ant-menu ant-menu-dark">
        {this.props.children}
      </ul>
    )
  }
}