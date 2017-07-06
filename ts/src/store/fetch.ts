import { pageType } from './apis'

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}

export interface ITPageType {
  type: 'add' | 'delete' | 'modify' | 'search'
  value: string
}

export const FETCH_PAGE_TYPE = async (data: ITPageType) => {
  return await fetch(pageType, {
    method: 'post',
    headers,
    body: JSON.stringify(data)
  }).then(Response => Response.json())
}