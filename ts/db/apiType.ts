import { MongoClient, URL, ObjectID } from './dbConfig'

const colName: string = 'apiType'

export interface ITApiTypeSave {
  desc?: string
  pageTypeId?: string
  path?: string
  restype?: string
  id?: string
}

export const apiTypeDB = {
  save(data: ITApiTypeSave) {
    let {
      desc,
      pageTypeId,
      path,
      restype
    } = data
    return new Promise((resolve, reject) => {
      MongoClient.connect(URL, (err, db) => {
        const collection = db.collection(colName)
        collection.insert({ desc, pageTypeId, path, restype, time: new Date().getTime() }, (inerr, docs) => {
          let {
            desc,
            pageTypeId,
            path,
            restype,
            _id
          } = docs.ops[0]
          resolve({ data: { desc, pageTypeId, path, restype, _id } })
          db.close()
        })
      })
    })
  },
  search(data: ITApiTypeSave) {
    let {
      id
    } = data
    return new Promise((resolve, reject) => {
      MongoClient.connect(URL, (err, db) => {
        const collection = db.collection(colName)
        let where = {}
        if (id) {
          where = { id }
        }
        collection.find(where).toArray((searchErr, result) => {
          if (searchErr) {
            reject(`search error`)
          } else {
            resolve({ data: result.map(({ desc, _id, pageTypeId, path, restype }) => ({ desc, _id, pageTypeId, path, restype })) })
          }
          db.close()
        })
      })
    })
  }
}