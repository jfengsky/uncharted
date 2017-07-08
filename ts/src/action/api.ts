export const ADD_APITYPE: string = 'ADD_APITYPE'


interface ITAction {
  type: string
  value: any
}

export interface ITValue {
  path: string
  desc: string
  restype: string
  pageTypeId: string
}

export const add_apiType = (value: ITValue) => ({
  type: ADD_APITYPE,
  value
})