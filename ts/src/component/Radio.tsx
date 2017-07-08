import * as React from 'react'

interface ITProps {
  data: any
  value: string
  radioChange: (ev: any) => void
}
interface ITState {}

export default class Radio extends React.Component<ITProps, ITState> {
  public render(): JSX.Element{
    let {
      data,
      value: defaultVal,
      radioChange
    } = this.props
    let {
      name,
      list
    } = data
    return (
      <div>
        {
          list.map( ({value, title}: any,index: number): JSX.Element => {
            return (
              <label key={index}>
                <input type="radio" checked={value === defaultVal} name={name} value={value} onChange={radioChange} />{title}
              </label>
            )
          })
        }
      </div>
    )
  }
}