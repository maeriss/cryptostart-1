import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors' // accec control check ,to allow any client
// import jwt from 'jsonwebtoken')
import { router } from './routes/index.js'
import { getConnection } from './connect.js'


const app = express()
console.log(process.env.SECRET)
dotenv.config()
const port = process.env.PORT||3000

app.use(express.json()) // permet de lire le corps de la requête
app.use(express.static('static'))
app.use(cors())
app.use('/api/v1/', router)

getConnection()
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`)
    })
  }).catch(error => {
    console.error(error)
  })
  /** 
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })*/