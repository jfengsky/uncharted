import * as React from 'react'
import { connect } from 'react-redux'

import { ADD_PAGETYPE, add_PageTypes, delete_PageTypes } from '../action/page'
import { FETCH_PAGE_TYPE, ITPageType } from '../store/fetch'

interface ITProps {
  addPageType: (value: string) => void
  deletePageType: (value: string) => void
  pageTypeList: any[]
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
        <select ref="selectPageType">
          {
            this.props.pageTypeList && this.props.pageTypeList.map( ({name, _id}) => (<option key={_id} value={_id}>{name}</option>) )
          }
        </select>
        <button onClick={this.clickHandleDelete}>删除</button>
      </div>
    )
  }
  clickHandleAdd = (ev: React.MouseEvent<HTMLButtonElement>): void => {
    let inputElement = (this.refs.pageType as HTMLInputElement)
    let value = inputElement.value.trim()
    if(value){

      // 去请求接口
      let fetchData: ITPageType = {
        type: 'add',
        value
      }
      FETCH_PAGE_TYPE(fetchData).then(data => {
        this.props.addPageType(data.data)
        inputElement.value = ''
      })
    }
  }
  clickHandleDelete = (ev: React.MouseEvent<HTMLButtonElement>): void => {
    let inputElement = (this.refs.selectPageType as HTMLInputElement)
    let value = inputElement.value.trim()
    let fetchData: ITPageType = {
      type: 'delete',
      id: value
    }
    FETCH_PAGE_TYPE(fetchData).then(data => {
      this.props.deletePageType(value)
    })
  }
}

const mapStateToProps = (state: any) => ({
  ...state
})

const mapDispatchToProps = (dispatch: any) =>({
  addPageType: (value: string): void => {dispatch(add_PageTypes(value))},
  deletePageType: (value: string): void => {dispatch(delete_PageTypes(value))}
})

export default connect(mapStateToProps, mapDispatchToProps)(PageType)