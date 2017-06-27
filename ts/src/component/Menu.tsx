import * as React from 'react'
import { Menu as MenuAnt, Layout } from '../../antR/component'

const { Sider } = Layout

interface ITProps { }
interface ITState { }

export default class Menu extends React.Component<ITProps, ITState> {
  public render(): any {
    return (
      <Sider style={{ width: '200px' }}>
        <div className="logo">logo</div>
        <MenuAnt>
          <li>
            <div className="ant-menu-submenu-title">
              <span>
                <i className="anticon anticon-user" />
                <span className="nav-text">页面列表</span>
              </span>
            </div>
            <ul className="ant-menu ant-menu-inline ant-menu-sub">
              <li className="ant-menu-item-selected ant-menu-item" style={{ paddingLeft: 48 }}>
                添加页面
                  </li>
              <li className="ant-menu-item" style={{ paddingLeft: 48 }}>
                添加页面类型
                  </li>
            </ul>
          </li>
        </MenuAnt>
      </Sider>
    )
  }
}