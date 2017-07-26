import * as React from 'react'
import { connect } from 'react-redux'

interface ITProps {
  pageTypeList: any[]
}
interface ITState {}

class AddPage extends React.Component<ITProps, ITState> {
  constructor(props: ITProps) {
    super(props)
  }
  public render():JSX.Element{
    return (
      <div style={{clear: 'both'}}>
        <div>
          <label>
            页面标题：
            <input type="text" />
          </label>
        </div>
        <div>
        <label>
          页面类型：
          <select></select>
        </label>
        </div>
        <div>
        <label>
          页面描述：
          <input type="text" />
        </label>
        </div>
        <div>
        <label>
          页面源代码代码：
          <textarea></textarea>
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