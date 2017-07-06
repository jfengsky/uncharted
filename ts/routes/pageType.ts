import { pageTypeDB, ITPageTypeSave } from '../db/pageType'

export default (req: any) => {
  let {
    type,
    value,
    id
  } = req.body
  switch(type){
    case 'add':
      return pageTypeDB.save({value, id})
  }
}