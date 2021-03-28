export default {
    post (url, options) {
      return fetch(url, {
        headers: {
          'content-type': 'application/json',
          ...options.headers // all that is in headers
        },
        body: JSON.stringify(options.body),
        method: 'post'
      }).then(res => res.json())
    },

    get (url, options) {
      return fetch(url, {
        headers: {
          'content-type': 'application/json',
          ...options.headers
        },
        method: 'get'
      }).then(res => res.json())
    }
  }
