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
    case 'search':
      return pageTypeDB.search({id})
    case 'delete':
      return pageTypeDB.delete({id})
    case 'modify':
      return pageTypeDB.updata({id, value})
  }
}