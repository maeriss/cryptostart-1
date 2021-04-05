import { checkToken } from '../utils/token-utils.js'

export function verifyToken (req, res, next) {
  try {
    // split
    // const token = req.header('Authorization').split(' ')[1]
    // substring
    // const token = req.header('Authorization').substring(7)
    // replace
    const token = req.header('Authorization').replace('Bearer ', '')
    checkToken(token)
    next()
  } catch (error) {
    res.json({
      success: false,
      message: 'Invalid token'
    })
  }
}
