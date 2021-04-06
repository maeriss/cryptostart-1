// import store from '@/store'

// export function checkTokenBeforeEnter (to, from, next) {
//   store.dispatch('checkToken')
//     .then(isValidToken => {
//       if (isValidToken) {
//         next()
//       } else {
//         next({
//           path: '/login',
//           query: { redirect: to.fullPath }
//         })
//       }
//       // next({ name: 'Login' }) // redirige vers login
//     })
// }
import store from '@/store'

export function checkTokenBeforeEnter (to, from, next) {
  store.dispatch('checkToken')
    .then(isValidToken => {
      if (isValidToken) {
        next(true)
        return
      }
      next({ name: 'Login' }) // redirige vers login
    })
}
