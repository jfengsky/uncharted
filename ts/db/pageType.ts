import { MongoClient, URL, ObjectID } from './dbConfig'

const colName: string = 'pageType'

export interface ITPageTypeSave {
  value: string
  id?: string
}
export interface ITPageTypeModify {
  value: string
  id: string
}
export interface ITPageTypeSearch {
  id?: string
}
export interface ITPageTypeDelete {
  id: string
}

// interface ITPageTypeDB {
//   save: (data: ITPageTypeSave) => {}
// }

export const pageTypeDB = {
  save<T>(data: ITPageTypeSave) {
    let {
      value
    } = data
    return new Promise((resolve, reject) => {
      MongoClient.connect(URL, (err, db) => {
        const collection = db.collection(colName)
        collection.insert({ name: value, time: new Date().getTime() }, (inerr, docs) => {
          let {
            name,
            _id
          } = docs.ops[0]
          resolve({ data: { name, _id } })
          db.close()
        })
      })
    })
  },
  search(data: ITPageTypeSearch) {
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
            resolve({ data: result.map(({ name, _id }) => ({ name, _id })) })
          }
          db.close()
        })
      })
    })
  },
  updata(data: ITPageTypeModify) {
    let {
      id,
      value
    } = data
    return new Promise((resolve, reject) => {
      MongoClient.connect(URL, (err, db) => {
        const collection = db.collection(colName)
        let where = {
          _id: new ObjectID(id)
        }
        collection.update(where,{$set:{name: value}}, (inerr, docs) => {
          // console.log(docs)
          resolve({})
          db.close()
        })
      })
    })
  },
  delete(data: ITPageTypeDelete) {
    let {
      id
    } = data
    return new Promise((resolve, reject) => {
      MongoClient.connect(URL, (err, db) => {
        const collection = db.collection(colName)
        collection.remove({ _id: new ObjectID(id) }, (delErr, result) => {
          if (delErr) {
            reject(`delete pageType error`)
          } else {
            // console.log(result.result)
            resolve({})
          }
          db.close()
        })
      })
    })
  }
}