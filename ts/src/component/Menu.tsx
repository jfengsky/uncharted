import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { search_PageTypes } from '../action/page'
import { search_apiTypes } from '../action/api'
import { FETCH_PAGE_TYPE, ITPageType, FETCH_API_TYPE, ITApiType } from '../store/fetch'

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
  fetchPageType: (data: any[]) => any
  fetchApiType: (data: any[]) => any
}
interface ITState { }

// 简单样式，菜单都左浮动
const floatStyle = {
  float: 'left'
}

const MenuList = (props: ITMenuList): JSX.Element => (
  <ul style={floatStyle}>
    {
      props.data.map((item: ITMenuListItem, index: number): JSX.Element => (
        <li key={index}><Link to={item.link}>{item.title}</Link></li>
      ))
    }
  </ul>
)

class Menu extends React.Component<ITProps, ITState> {
  async componentDidMount() {
    // 异步获取页面类型信息
    let data: ITPageType = {
      type: 'search'
    }
    FETCH_PAGE_TYPE(data).then(data => {
      this.props.fetchPageType(data.data)
    })

    let apiParam: ITApiType = {
      type: 'search'
    }

    let apiData = await FETCH_API_TYPE(apiParam)
    this.props.fetchApiType(apiData.data)

  }

  public render(): JSX.Element {
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

const mapDispatchToProps = (dispatch: any) => ({
  fetchPageType: (data: any) => {
    dispatch(search_PageTypes(data))
  },
  fetchApiType: (data: any) => dispatch(search_apiTypes(data))
})

const mapStateToProps = (state: any) => ({
  ...state
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu)