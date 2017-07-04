import * as React from 'react'

interface ITProps { }
interface ITState { }

export default class Menu extends React.Component<ITProps, ITState> {
  public render(): any {
    const floatStyle = {
      float: 'left'
    }
    return (
      <div>
        <ul style={floatStyle}>
          <li>页面列表</li>
          <li>编辑页面类型</li>
          <li>新增页面</li>
        </ul>
        <ul style={floatStyle}>
          <li>接口列表</li>
          <li>编辑接口类型</li>
          <li>新增接口</li>
        </ul>
      </div>
    )
  }
}