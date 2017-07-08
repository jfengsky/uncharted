import { pageType , apiType} from './apis'

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}

export interface ITPageType {
  type: 'add' | 'delete' | 'modify' | 'search'
  value?: string
  id?: string
}

export const FETCH_PAGE_TYPE = async (data: ITPageType) => {
  return await fetch(pageType, {
    method: 'post',
    headers,
    body: JSON.stringify(data)
  }).then(Response => Response.json())
}

export interface ITApiType {
  type: 'add' | 'delete' | 'modify' | 'search'
  path: string
  desc: string
  restype: string
  pageTypeId: string
}

export const FETCH_API_TYPE = async (data: ITApiType) => {
  return await fetch(apiType, {
    method: 'post',
    headers,
    body: JSON.stringify(data)
  }).then(Response => Response.json())
}