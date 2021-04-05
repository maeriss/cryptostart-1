import express from 'express'
const router = new express.Router()
import { createUser } from '../models/user-queries.js'


router.post('', (req, res) => {
  const firstname = req.body.firstname
  const lastname = req.body.lastname
  const username = req.body.username
  const email = req.body.email
  const password = req.body.password

  createUser({
    firstname,
    lastname,
    username,
    email,
    password
  }).then(user => {
    res.status(201).json({
      success: true,
      user
    })
  })
})
export { router as userRoutes }