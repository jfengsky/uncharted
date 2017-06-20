
import * as React from 'react'

export interface IconProps {
  // onClick: any
  className?: string
  onClick?: React.MouseEventHandler<any>
  type?: string
  style?: React.CSSProperties
}

const Icon = (props: IconProps): JSX.Element  => {

  return <i {...props} />
}

export default Icon