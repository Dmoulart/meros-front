import { Context } from '@nuxt/types'
import { Api } from '~/webservices/api'

export default function (context: Context, inject: Function) {
  // Create a general api instance with a blank endpoint allowing us to fetch whatever we want.
  const api = new Api({ context })

  inject('api', api)
}
