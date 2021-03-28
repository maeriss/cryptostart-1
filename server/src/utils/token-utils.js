const jwt = require('jsonwebtoken')

const options = {
  expiresIn: '1h'
}

module.exports = {
  createToken (payload) {
    const secret = process.env.JWT_KEY
    const token = jwt.sign(payload, secret, options)
    return token
  },
  checkToken (token) {
    const secret = process.env.JWT_KEY
    return jwt.verify(token, secret)
  }
}
