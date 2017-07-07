import * as React from 'react'
import { connect } from 'react-redux'

import { ADD_PAGETYPE, add_PageTypes, delete_PageTypes, modify_PageTypes} from '../action/page'
import { FETCH_PAGE_TYPE, ITPageType } from '../store/fetch'

interface ITProps {
  addPageType: (value: string) => void
  deletePageType: (value: string) => void
  modifyPageType: (id: string, value: string) => void
  pageTypeList: any[]
}
interface ITState {
  id: string
  name: string
}

class PageType extends React.Component<ITProps, ITState> {
  constructor(props: ITProps) {
    super(props)
    this.state = {
      id: '',
      name: ''
    }
  }
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
        <button onClick={this.clickHandleEdit}>编辑</button>
        <button onClick={this.clickHandleDelete}>删除</button>
        <br />
        <br />
        { 
          !!this.state.id && <div>
            <label>
              <input type='text' ref="ModifyPageType" onChange={(ev)=> this.setState({name: ev.target.value})} value={this.state.name} />
            </label>
            <button onClick={this.clickHandleModify}>修改</button>
          </div>
        }
      </div>
    )
  }
  clickHandleAdd = async (ev: React.MouseEvent<HTMLButtonElement>) => {
    let inputElement = (this.refs.pageType as HTMLInputElement)
    let value = inputElement.value.trim()
    if(value){

      // 去请求接口
      let fetchData: ITPageType = {
        type: 'add',
        value
      }
      let fetchBack = await FETCH_PAGE_TYPE(fetchData)
      this.props.addPageType(fetchBack.data)
      inputElement.value = ''
    }
  }
  clickHandleDelete = async (ev: React.MouseEvent<HTMLButtonElement>) => {
    let inputElement = (this.refs.selectPageType as HTMLInputElement)
    let value = inputElement.value.trim()
    let fetchData: ITPageType = {
      type: 'delete',
      id: value
    }
    await FETCH_PAGE_TYPE(fetchData)
    this.props.deletePageType(value)
  }
  clickHandleModify = async (ev: React.MouseEvent<HTMLButtonElement>) => {
    let {
      id
    } = this.state
    let inputElement = (this.refs.ModifyPageType as HTMLInputElement)
    let value = inputElement.value.trim()
    await FETCH_PAGE_TYPE({
      type: 'modify',
      id,
      value
    })
    this.props.modifyPageType(id, value)
    this.setState({
      id: '',
      name: ''
    })
  }
  clickHandleEdit = (ev: React.MouseEvent<HTMLButtonElement>): void => {
    let inputElement = (this.refs.selectPageType as HTMLInputElement)
    let id = inputElement.value.trim()
    let tempName = null
    this.props.pageTypeList.some( ({name, _id}) => {
      if(_id === id){
        tempName = name
        return true
      }
    })
    this.setState({
      id,
      name: tempName
    })
    
  }
}

const mapStateToProps = (state: any) => ({
  ...state
})

const mapDispatchToProps = (dispatch: any) =>({
  addPageType: (value: string): void => {dispatch(add_PageTypes(value))},
  deletePageType: (value: string): void => {dispatch(delete_PageTypes(value))},
  modifyPageType: (id: string, value: string): void => {dispatch(modify_PageTypes({id, value}))}
})

export default connect(mapStateToProps, mapDispatchToProps)(PageType)