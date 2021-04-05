const API_HOST = process.env.VUE_APP_API_HOST || ''
// VUE_APP_API_HOST = "https://cryptostarteslivv.herokuapp.com" donner par netlify
export default {
  login: API_HOST + '/api/v1/auth/token',
  me: API_HOST + '/api/v1/auth/me'
}
