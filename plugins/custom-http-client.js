
import { HttpClient } from '~/services/http-client'
export default (_, inject) => {
  inject('mhttp', new HttpClient())
}
