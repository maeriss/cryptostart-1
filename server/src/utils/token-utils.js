import jwt from 'jsonwebtoken'

const options = {
  expiresIn: '1h'
}

export function createToken (payload) {
  const secret = process.env.JWT_KEY
  const token = jwt.sign(payload, secret, options)
  return token
}
export function checkToken (token) {
  const secret = process.env.JWT_KEY
  return jwt.verify(token, secret)
}
