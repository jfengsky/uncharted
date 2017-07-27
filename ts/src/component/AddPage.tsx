import * as React from 'react'
import { connect } from 'react-redux'

interface ITProps {
  pageTypeList: any[]
}
interface ITState {
  name: string
  desc: string
  pageTypeId: string
  code: string
}

class AddPage extends React.Component<ITProps, ITState> {
  constructor(props: ITProps) {
    super(props)
    this.state = {
      name: '',
      desc: '',
      pageTypeId: '',
      code: ''
    }
  }
  componentDidMount () {
    console.log(location.href)
  }
  
  public render():JSX.Element{
    let {
      name,
      desc,
      pageTypeId,
      code
    } = this.state
    return (
      <div style={{clear: 'both'}}>
        <div>
          <label>
            页面标题：
            <input value={name} onChange={ev => { this.setState({ name: ev.target.value }) }} type="text" />
          </label>
        </div>
        <div>
        <label>
          页面类型：
          <select value={pageTypeId} onChange={ev => { this.setState({ pageTypeId: ev.target.value }) }}>
            {
              !!this.props.pageTypeList && this.props.pageTypeList.map((item, index) => (
                <option key={index} value={item._id}>{item.name}</option>
              ))
            }
          </select>
        </label>
        </div>
        <div>
        <label>
          页面描述：
          <input value={desc} onChange={ev => { this.setState({ desc: ev.target.value }) }} type="text" />
        </label>
        </div>
        <div>
        <label>
          页面源代码代码：
          <textarea value={code} onChange={ev => { this.setState({ code: ev.target.value }) }} />
        </label>
        </div>
        <button>保存</button>
      </div>
    )
  }
}

const mapStateToProps = (state: any): any => ({
  pageTypeList: state.pageTypeList
})

const mapDispatchToProps = (dispatch: any) =>({
  
})

export default connect(mapStateToProps,mapDispatchToProps)(AddPage)