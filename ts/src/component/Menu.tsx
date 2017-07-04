import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

interface ITMenuListItem {
  title: string
  link: string
}

interface ITMenuList {
  data: ITMenuListItem[]
}

interface ITProps {
  dispatch: () => any
  menu: {
    page: ITMenuListItem[]
    api: ITMenuListItem[]
    tools: ITMenuListItem[]
  }
}
interface ITState { }

// 简单样式，菜单都左浮动
const floatStyle = {
  float: 'left'
}

const MenuList = (props: ITMenuList): JSX.Element => (
  <ul style={floatStyle}>
    {
      props.data.map( (item: ITMenuListItem, index: number): JSX.Element => (
        <li key={index}><Link to={item.link}>{item.title}</Link></li>
      ))
    }
  </ul>
)

class Menu extends React.Component<ITProps, ITState> {
  public render():JSX.Element {
    let {
      api,
      tools,
      page
    } = this.props.menu
    return (
      <div>
        <MenuList data={...page} />
        <MenuList data={...api} />
        <MenuList data={...tools} />
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  ...state
})

export default connect(mapStateToProps)(Menu)