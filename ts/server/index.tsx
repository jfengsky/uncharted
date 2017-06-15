import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as multer from 'multer'

import { layout, ITProps } from '../router/layout'
import { Root } from "../APP/Root"

const app = express()
const port: number = 4200
const upload = multer()

app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('./dist'))
app.use(express.static('./public'))

app.get('*', (req, res) => {

  const context = {}
  const html = ReactDOMServer.renderToString(<Root />)
  let prop: ITProps = {
    title: 'server',
    content: html,
    __INITSTATE__: {}
  }

  res.send(layout(prop))
  // res.sendStatus(200)
})

app.listen(port, () => console.log(`start client: http://localhost:${port}`))