import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// import './plugins/font-awesome'
import { FontAwesomeIcon } from './plugins/font-awesome'

createApp(App)
    .use(store)
    .use(router)
    .component('fa-icon', FontAwesomeIcon)
    .mount('#app')
