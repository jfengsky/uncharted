import * as React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {Button} from 'antd'

class Menu extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Button />
      </div>
    )
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    menu: state.menu
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Menu)