import apiRoutes from './api-routes'
import jsonClient from './api-client'

export default {
  login (credentials) {
    return jsonClient.post(apiRoutes.login, { body: credentials })
  },

  checkToken (token) {
    return jsonClient.get(apiRoutes.me, { headers: { Authorization: 'Bearer ' + token } })
  },

  register (credentials) {
    return jsonClient.post(apiRoutes.register, { body: credentials })
  },

  modify (data) {
    return jsonClient.post(apiRoutes.update, { body: data })
  }

}
