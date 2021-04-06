// import jwt from 'jsonwebtoken'
import express from 'express'

import { createToken} from '../utils/token-utils.js'
import {getUserByUsername } from '../models/user-queries.js'
import { compareHash } from '../utils/crypto-utils.js'

const router = new express.Router()

const USERNAME = 'marie'

// const user = {
//   id: 1,
//   username: USERNAME,
//   password: '123456'
// }

// to login
router.post('/token', (req, res) => {
  // const authorizedLogin = process.env.AUTHORIZED_LOGIN
  // const authorizedPasswd = process.env.AUTHORIZED_PASSWD
  const response = res
    .header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
    .header('Expires', '-1')
    .header('Pragma', 'no-cache')

  const body = req.body
  const { username, password } = body
  getUserByUsername(username)
  .then(user => {
    if (!username || !password) {
      response.status(401).json({
        success: false,
        message: 'Login and password are required'
      })
      return
    }
  
    // const isValidCredentials = username === user.username && password === user.password
    compareHash(password, user.password).then(isValidCredentials => {
      if (!isValidCredentials) {
        response.status(401).json({
          success: false,
          message: 'Invalid credentials'
        })
        return
      }
    
      const payload = {
        username
      }
      // const token = jwt.sign(payload, secret, options)
      const token = createToken(payload)
    
      response.status(201).json({
        success: true,
        token,
        message: username
      })
    })
  })
  
})

export { router as authRoutes }
