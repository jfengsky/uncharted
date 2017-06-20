import * as React from 'react'
import { render } from 'react-dom'

import { Layout } from '../antR/component'
import '../antR/component/style'

const { Header, Footer, Content, Sider} = Layout

interface IAppProps {}
interface IAppState {}

class Root extends React.Component<IAppProps, IAppState> {
  public render() {
    return (
      <Layout>
        layout
        <Sider>
          sider
        </Sider>
      </Layout>
    )
  }
}

render(<Root />, document.getElementById('root'))