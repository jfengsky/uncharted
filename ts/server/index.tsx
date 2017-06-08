import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import * as express from 'express'
import { StaticRouter } from 'react-router'
import { createStore, combineReducers} from 'redux'
import { Provider } from 'react-redux'

import { serverPort } from '../config'
import {layoutProps, layout } from '../config/view'

const app = express()
app.use('/static', express.static('./dist'))
app.use('/static', express.static('./node_modules'))
app.get('*', (req, res) => {
  let sendProp: layoutProps = {
    title: '',
    content: '',
    __INITSTATE__: ''
  }
  res.send(layout(sendProp))
})

app.listen(serverPort, ()=> console.log(`start server: http://localhost:${serverPort}`))