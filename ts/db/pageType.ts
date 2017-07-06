import { MongoClient, URL } from './dbConfig'

const colName:string = 'pageType'

export interface ITPageTypeSave {
  value: string
  id?: string
}

export const pageTypeDB = {
  save<T>(data: ITPageTypeSave) {
    let {
      value
    } = data
    return new Promise((resolve, reject) => {
      MongoClient.connect(URL, (err, db) => {
        const collection = db.collection(colName)
        collection.insert({ name: value, time: new Date().getTime() }, (inerr, docs) => {
          resolve(docs)
          db.close()
        })
      })
    })
  }
}