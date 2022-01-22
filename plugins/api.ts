import { Context } from '@nuxt/types'
import { Api } from '~/webservices/api'

export default function (context: Context, inject: Function) {
  // Create a custom axios instance
  // const api = new Api(context)
  const api = {}
  // Inject to context as $api
  inject('api', api)
}
