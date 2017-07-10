import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as multer from 'multer'

import pageTypeRoute from '../routes/pageType'

import { pageType, apiList, apiType } from '../src/store/apis'
import { ITLayout, layout } from '../views/layout'

const clientPort: number = 4100
const app = express()
const upload = multer()
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('./dist'))
app.use(express.static('./public'))

app.get('*', (req, res) => {

  const clientProp: ITLayout = {
    title: 'client',
    content: '',
    __INITSTATE__: {}
  }

  res.send(layout(clientProp))
})

// 通用成功返回默认信息
const successData: any = { state: 0, data: null }

// 添加页面类型返回接口
interface ITAddReslut {
  result: {
    ok: number
    n: number
  }
  ops: any[]
  insertedCount: number
  insertedIds: string[]
}

app.post('*', async (req, res) => {
  let sendData: any = {}
  if (apiList.indexOf(req.path) >= 0) {
    switch (req.path) {
      case pageType:
         sendData = await pageTypeRoute(req)
        return res.send(Object.assign({},successData, sendData))
      case apiType:
        // TODO
        // sendData = await pageTypeRoute(req)
        // return res.send(Object.assign({},successData, sendData))
    }
  } else {
    res.sendStatus(404)
  }
})

app.listen(clientPort, () => console.log(`start client: http://localhost:${clientPort}`))