// import jwt from 'jsonwebtoken'
import express from 'express'

import { createToken, checkToken } from '../utils/token-utils.js'

const router = new express.Router()

const USERNAME = 'marie.appolaire@edu.devinci.fr'

const user = {
  id: 1,
  username: USERNAME,
  password: '123456'
}

// to login
router.post('/token', (req, res) => {
  // const authorizedLogin = process.env.AUTHORIZED_LOGIN
  // const authorizedPasswd = process.env.AUTHORIZED_PASSWD

  const body = req.body || {}
  const { username, password } = body

  if (!username || !password) {
    res.status(401).json({
      success: false,
      message: 'Login and password are required'
    })
    return
  }

  const isValidCredentials = username === user.username && password === user.password
  if (!isValidCredentials) {
    res.status(401).json({
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

  res.status(201).json({
    success: true,
    user: {
      ...user,
      password: undefined
    },
    token
  })
})

// checkToken
router.get('/me', (req, res) => {
  const token = req.headers.authorization.replace('Bearer ', '')

  const response = res
    .header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
    .header('Expires', '-1')
    .header('Pragma', 'no-cache')

  try {
    const payload = checkToken(token)
    // const login = payload.login
    // Chercher et trouver l'utilisateur correspondant à ce login
    // TODO: à faire avec mongodb
    console.log({ payload })
    response.status(201).json({
      success: true,
      user: {
        ...user,
        password: undefined
      }
    })
  } catch (error) {
    response.status(401)
      .json({
        success: false,
        message: 'Token invalide'
      })
  }
})

export { router as authRoutes }
