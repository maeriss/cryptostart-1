import { checkToken } from '../utils/token-utils.js'

export function verifyToken (req, res, next) {
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
    next()
  } catch (error) {
    response.status(401)
      .json({
        success: false,
        message: 'Token invalide'
      })
  }
}
