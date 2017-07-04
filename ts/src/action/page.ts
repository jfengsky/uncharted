export const ADD_PAGETYPE: string = 'ADD_PAGETYPE'

export interface ITAction {
  type: string
  value?: any
}

export const add_pageType = (value: string):ITAction => ({
  type: ADD_PAGETYPE,
  value
})