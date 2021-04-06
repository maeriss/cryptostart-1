import express from 'express'
const router = new express.Router()
import { createUser,getUserByUsername,modifyUser } from '../models/user-queries.js'


router.post('/newuser', (req, res) => {
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

router.post('/touser', (req, res) => {
  const username = req.body.username
  getUserByUsername({
    username,
  }).then(user => {
    res.status(200).json({
      success: true,
      user
    })
  })
})

router.post('/updateduser', (req, res) => {
  const userdata= req.body.userdata
  getUserByUsername({
    username,
  }).then(user =>{
    modifyUser(userdata)
    res.status(200).json({
      succes:true,
      message: 'Updated'
      })
    })
})

export { router as userRoutes }