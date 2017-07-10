import * as React from 'react'
import { connect } from 'react-redux'

import { add_apiType, ITValue } from '../action/api'
import { FETCH_API_TYPE, ITApiType } from '../store/fetch'
import Radio from './Radio'

interface ITProps {
  id?: any
  pageTypeList: any[]
  addApiType: (data: ITValue) => void
}
interface ITState {
  path: string
  desc: string
  restype: string
  pageTypeId: string
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

class ApiType extends React.Component<ITProps, ITState> {
  constructor(props: ITProps) {
    super(props)
    this.state = {
      path: '',
      desc: '',
      restype: 'post',
      pageTypeId: ''
    }
  }

  componentWillReceiveProps(nextProps: any){
    if(!this.state.pageTypeId){
      this.setState({
        pageTypeId: nextProps.pageTypeList[0]._id
      })
    }
  }

  public render(): JSX.Element {
    let {
      path,
      desc,
      restype,
      pageTypeId
    } = this.state
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
        <button onClick={this.clickHandleAddApi}>新增接口类型</button>
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
      pageTypeId
    } = this.state
    if(!path || !desc){
      return false
    }
    let fetchParam: ITApiType = {
      type: 'add',
      path,
      desc,
      restype,
      pageTypeId
    }
    let fetchBack = await FETCH_API_TYPE(fetchParam)
    // FETCH_API_TYPE()
    // this.props.addApiType({
    //   ...this.state
    // })
  }
}

const mapStateToProps = (state: any) => ({
  pageTypeList: state.pageTypeList
})

const mapDispatchToProps = (dispatch: any) => ({
  addApiType: (value: ITValue): void => { dispatch(add_apiType(value)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(ApiType)