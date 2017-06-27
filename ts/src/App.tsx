import * as React from 'react'
import { Layout } from '../antR/component'

import Menu from './component/Menu'
import Contents from './component/Content'

interface ITProps { }
interface ITState { }

export default class App extends React.Component<ITProps, ITState> {
  public render() {
    return (
      <Layout preClassName={['ant-layout-has-sider']}>
        <Menu />
        <Contents />
      </Layout>
    )
  }
}