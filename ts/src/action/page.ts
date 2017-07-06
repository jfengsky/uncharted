export const ADD_PAGETYPE: string = 'ADD_PAGETYPE'
export const SEARCH_PAGETYPE: string = 'SEARCH_PAGETYPE'
export const DELETE_PAGETYPE: string = 'DELETE_PAGETYPE'

export interface ITAction {
  type: string
  value?: any
}

export const add_PageTypes = (value: string):ITAction => ({
  type: ADD_PAGETYPE,
  value
})

export const search_PageTypes = (list: any[]): ITAction => ({
  type: SEARCH_PAGETYPE,
  value: list
})

export const delete_PageTypes = (value: string): ITAction => ({
  type: DELETE_PAGETYPE,
  value
})