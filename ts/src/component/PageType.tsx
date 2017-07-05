import * as React from 'react'
import { connect } from 'react-redux'

import { ADD_PAGETYPE, add_pageType } from '../action/page'
import { FETCH_PAGE_TYPE, ITPageType } from '../store/fetch'

interface ITProps {
  addPageType: (value: string) => void
}
interface ITState {}

class PageType extends React.Component<ITProps, ITState> {
  public render(): JSX.Element{
    return (
      <div style={{clear: 'both'}}>
        <label>
          <input type='text' ref="pageType" placeholder='请输入页面类型' />
        </label>
        <button onClick={this.clickHandleAdd}>添加</button>
        <br />
        <br />
        <select>
          <option value="">aaaa</option>
        </select>
        <button>删除</button>
      </div>
    )
  }
  clickHandleAdd = (ev: React.MouseEvent<HTMLButtonElement>): void => {
    let value = (this.refs.pageType as HTMLInputElement).value.trim()
    if(value){

      // 去请求接口
      let fetchData: ITPageType = {
        type: 'add',
        value
      }
      FETCH_PAGE_TYPE(fetchData).then(data => {
        this.props.addPageType(value)
      })
    }
  }
}

const mapStateToProps = (state: any) => ({
  ...state
})

const mapDispatchToProps = (state: any) =>({
  addPageType: (value: string): void => {add_pageType(value)}
})

export default connect(mapStateToProps, mapDispatchToProps)(PageType)