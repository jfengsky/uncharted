import * as React from 'react'
import { connect } from 'react-redux'

interface ITProps {
  pageTypeList: any[]
}
interface ITState {
  id: string,
  name: string
  desc: string
  pageTypeId: string
  code: string
}

class AddPage extends React.Component<ITProps, ITState> {
  constructor(props: ITProps) {
    super(props)
    this.state = {
      id: null,
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
      id,
      name,
      desc,
      pageTypeId,
      code
    } = this.state

    let Text = ['保存', '修改']

    let buttonText = id ? Text[1] : Text[0]

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
          <textarea value={code} onChange={ev => { this.setState({ code: ev.target.value }) }} style={{width: '100%', height: '100%'}} />
        </label>
        </div>
        <button onClick={this.handleClickSubmit}>{buttonText}</button>
      </div>
    )
  }

  private handleClickSubmit = async (ev: React.MouseEvent<HTMLButtonElement>) => {
    let {
      name,
      code,
      desc,
      id,
      pageTypeId
    } = this.state
    debugger
  }
}

const mapStateToProps = (state: any): any => ({
  pageTypeList: state.pageTypeList
})

const mapDispatchToProps = (dispatch: any) =>({
  
})

export default connect(mapStateToProps,mapDispatchToProps)(AddPage)