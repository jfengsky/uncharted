import * as express from 'express'

const app = express()


app.use(express.static('./public'))

app.get('*', (req, res) => {
  res.sendStatus(200)
})

app.listen('4000', () => console.log(`start client: http://localhost:${'4000'}`))