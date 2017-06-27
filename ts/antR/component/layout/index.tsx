import * as React from 'react'

import './style/index.css'

import Sider from './Sider'

export interface ITBasicProps {
  className: string
  preClassName?: string[]
}

function generator(props: any) {
  return (Basic: any): any => {
    return class Adapter extends React.Component<any, any> {
      static Header: any
      static Footer: any
      static Content: any
      static Sider: any
      render(){
        const { className } = props
        return <Basic {...props} {...this.props} />
      }
    }
  }
}

class Basic extends React.Component<ITBasicProps, any> {
  render(){

    let {
      preClassName,
      className,
      ...prop
    } = this.props

    if(preClassName && preClassName.length){
      className += preClassName.join(' ')
    }

    return (
      <div className={className} {...prop}>{this.props.children}</div>
    )
  }
}

const Layout = generator({
  className: 'ant-layout '
})(Basic)

const Header = generator({
  className: 'ant-layout-header '
})(Basic)

const Footer = generator({
  className: 'ant-layout-footer '
})(Basic)

const Content = generator({
  className: 'ant-layout-content '
})(Basic)

Layout.Header = Header
Layout.Footer = Footer
Layout.Content = Content
Layout.Sider = Sider

export default Layout