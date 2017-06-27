import * as React from 'react'
import { Layout } from '../../antR/component'

const { Content } = Layout

interface ITProps {}
interface ITState {}

export default class Contents extends React.Component<ITProps, ITState> {
  public render(){
    return (
      <Layout>
        <Content>
          <div style={{padding: 10, background: '#fff'}}>
            content
          </div>
        </Content>
      </Layout>
    )
  }
}