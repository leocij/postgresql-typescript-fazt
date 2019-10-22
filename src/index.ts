import express from 'express'
import routes from './routes'

const app = express()

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// routes
app.use(routes)

app.listen(4000, () => {
  console.log('Server on port', 4000)
})