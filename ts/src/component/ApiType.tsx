import * as React from 'react'
import { connect } from 'react-redux'

import Radio from './Radio'
import { getQueryStringByName } from '../store/util'
import { add_apiType, ITValue } from '../action/api'
import { FETCH_API_TYPE, ITApiType } from '../store/fetch'

interface ITProps {
  id?: any
  pageTypeList: any[]
  apiTypeList: any[]
  addApiType: (data: ITValue) => void
}
interface ITState {
  path: string
  desc: string
  restype: string
  pageTypeId: string
  id: string
}

const radioData = {
  name: 'resType',
  list: [{
    title: 'post',
    value: 'post'
  }, {
    title: 'get',
    value: 'get'
  }]
}

const buttonTextList = ['新增', '编辑']

class ApiType extends React.Component<ITProps, ITState> {
  constructor(props: ITProps) {
    super(props)
    this.state = {
      path: '',
      desc: '',
      restype: 'post',
      pageTypeId: '',
      id: getQueryStringByName('id')
    }
  }

  componentWillReceiveProps(nextProps: any) {
    let {
      pageTypeList,
      apiTypeList
    } = nextProps
    let {
      id
    } = this.state
    if (!this.state.pageTypeId) {
      this.setState({
        pageTypeId: pageTypeList[0]._id
      })
    }

    if (id && apiTypeList) {
      let currentApiType: ITState
      apiTypeList.some((item: any) => {
        if(item._id === id){
          currentApiType = item
        }
      })
      this.setState({
        path: currentApiType.path,
        desc: currentApiType.desc,
        restype: currentApiType.restype,
        pageTypeId: currentApiType.pageTypeId
      })
    }

  }
  
  public render(): JSX.Element {
    let {
      path,
      desc,
      restype,
      pageTypeId,
      id
    } = this.state

    let buttonText = buttonTextList[0]
    if(id){
      buttonText = buttonTextList[1]
    }

    return (
      <div style={{ clear: 'both' }}>
        <label>
          接口路径:
          <input type="text" value={path} onChange={ev => { this.setState({ path: ev.target.value }) }} />
        </label>
        <br />
        <label>
          接口描述:
          <input type="text" value={desc} onChange={ev => { this.setState({ desc: ev.target.value }) }} />
        </label>
        <br />
        接口类型:
        <Radio data={radioData} value={restype} radioChange={this.radioChange} />
        <br />
        <label>
          所属页面:
          <select value={pageTypeId} onChange={ev => { this.setState({ pageTypeId: ev.target.value }) }}>
            {
              !!this.props.pageTypeList && this.props.pageTypeList.map((item, index) => (
                <option key={index} value={item._id}>{item.name}</option>
              ))
            }
          </select>
        </label>
        <br />
        <button onClick={this.clickHandleAddApi}>{buttonText}接口类型</button>
      </div>
    )
  }
  // clickHandleResType = (ev: React.MouseEvent<HTMLButtonElement>): void => {
  //   let target = ev.target as HTMLInputElement
  //   let value = target.value
  //   this.setState({
  //     restype: value
  //   })
  // }
  radioChange = (ev: React.MouseEvent<HTMLButtonElement>): void => {
    let target = ev.target as HTMLInputElement
    let value = target.value
    this.setState({
      restype: value
    })
  }
  clickHandleAddApi = async (ev: React.MouseEvent<HTMLButtonElement>): Promise<any> => {
    let {
      path,
      desc,
      restype,
      pageTypeId,
      id
    } = this.state
    if (!path || !desc) {
      return false
    }

    let editType: string = 'add'
    if(id){
      editType = 'modify'
    }

    let fetchParam: any = { // ITApiType
      type: editType,
      path,
      desc,
      restype,
      pageTypeId,
      id
    }
    let fetchBack = await FETCH_API_TYPE(fetchParam)
    window.location.reload()
  }
}

const mapStateToProps = (state: any): any => ({
  pageTypeList: state.pageTypeList,
  apiTypeList: state.apiTypeList
})

const mapDispatchToProps = (dispatch: any) => ({
  addApiType: (value: ITValue): void => { dispatch(add_apiType(value)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(ApiType)