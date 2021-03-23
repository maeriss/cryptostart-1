import { library, dom } from '@fortawesome/fontawesome-svg-core'
//import { faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
//library.add(faPowerOff)
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
library.add(faFacebook, faTwitter, faLinkedin)
dom.watch()
export {
  FontAwesomeIcon
}