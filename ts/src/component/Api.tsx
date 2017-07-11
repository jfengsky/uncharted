import * as React from 'react'
import { connect } from 'react-redux'

import { getPageTypeName } from '../store/util'

interface ITProps {
  apiTypeList: any[]
  pageTypeList: any[]
}
interface ITState {}

class Api extends React.Component<ITProps, ITState> {
  public render(){
    let {
      apiTypeList,
      pageTypeList
    } = this.props
    
    return (
      <div style={{clear: 'both'}}>
        <table style={{width: '100%'}}>
          <tbody>
            <tr>
              <th>#</th>
              <td>路径</td>
              <td>所属页面</td>
              <td>接口描述</td>
              <td>接口类型</td>
              <td>编辑</td>
            </tr>
            {
              apiTypeList && apiTypeList.map( ({desc, _id, pageTypeId, path, restype}, index) =>(
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{path}</td>
                  <td>{getPageTypeName(pageTypeList,pageTypeId)}</td>
                  <td>{desc}</td>
                  <td>{restype}</td>
                  <td><a href={`/api/type?id=${_id}`}>编辑</a></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state: any): any => ({
  apiTypeList: state.apiTypeList,
  pageTypeList: state.pageTypeList
})

export default connect(mapStateToProps)(Api)