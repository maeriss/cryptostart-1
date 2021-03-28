const fetch = require('isomorphic-fetch')
const express = require('express')

const currenciesRoutes = require('./currencies-routes.js')
const authRoutes = require('./auth-routes.js')

const verifyToken = require('../middlewares/verify-tokens.js')

const router = new express.Router()

router.use('/currencies', currenciesRoutes)
// router.use('/currencies', verifyToken, currenciesRoutes)
router.use('/auth', authRoutes)

module.exports = router
