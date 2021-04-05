import fetch from 'isomorphic-fetch'
import express from 'express'

import { currenciesRoutes } from './currencies-routes.js'
import { authRoutes } from './auth-routes.js'
import {userRoutes } from './user-routes.js'

import { verifyToken } from '../middlewares/verify-tokens.js'

const router = new express.Router()

router.use('/currencies', currenciesRoutes)
// router.use('/currencies', verifyToken, currenciesRoutes)
router.use('/auth', authRoutes)
router.use('/user',userRoutes)
export { router }
