import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as multer from 'multer'

import { layout, ITProps } from '../router/layout'

const app = express()
const port: number = 4000
const upload = multer()

app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('./dist'))
app.use(express.static('./public'))

app.get('*', (req, res) => {

  let prop: ITProps = {
    title: 'client',
    content: '',
    __INITSTATE__: {}
  }

  res.send(layout(prop))
  // res.sendStatus(200)
})

app.listen(port, () => console.log(`start client: http://localhost:${port}`))