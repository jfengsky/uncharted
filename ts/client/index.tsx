import * as express from 'express'

import { layout, ITProps } from '../router/layout'

const app = express()
const port: number = 4000

app.use(express.static('./dist'))

app.get('*', (req, res) => {

  let prop: ITProps = {
    title: 'client',
    content: '',
    __INITSTATE__: {}
  }

  res.send(layout(prop))
  res.sendStatus(200)
})

app.listen(port, () => console.log(`start client: http://localhost:${port}`))