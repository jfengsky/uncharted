import { apiTypeDB, ITApiTypeSave} from '../db/apiType'

export default (req: any) => {
  let {
    type,
    desc,
    pageTypeId,
    path,
    restype,
    id
  } = req.body
  switch(type){
    case 'add':
      return apiTypeDB.save({desc, pageTypeId, path, restype})
    case 'search':
      return apiTypeDB.search({id})
    case 'delete':
      // return pageTypeDB.delete({id})
    case 'modify':
      // return pageTypeDB.updata({id, value})
  }
}