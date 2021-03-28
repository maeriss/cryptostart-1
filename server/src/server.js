const dotenv = require('dotenv')
const express = require('express')
// const cors = require('cors')
// const jwt = require('jsonwebtoken')
const router = require('./routes/index.js')

const app = express()
console.log(process.env.SECRET)
dotenv.config()
const port = 3000

app.use(express.json()) // permet de lire le corps de la requête
app.use('/api/v1/', router)
/**
app.use(cors())
app.post('/login', (req, res) => {
  const USERNAME = 'marie.appolaire@edu.devinci.fr'
  const PASSWORD = '123456'

  const { username, password } = req.body

  if (username === USERNAME && password === PASSWORD) {
    const user = {
      id: 1,
      name: USERNAME,
      username: USERNAME
    }
    const token = jwt.sign(user, process.env.JWT_KEY)
    res.json({
      token,
      user
    })
  } else {
    res
      .status(403)
      .json({
        success: false,
        message: 'invalid login information'
      })
  }
})
*/
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
