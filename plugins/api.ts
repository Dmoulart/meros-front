import { MContext } from '~/types/context'
import { Api } from '~/webservices/api'

export default function (context: MContext, inject: Function) {
  // Create a custom axios instance
  const api = new Api(context)
  // Inject to context as $api
  inject('api', api)
}
