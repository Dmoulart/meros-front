import { Context } from '@nuxt/types'
import { createService } from '~/services/create-service';
import { Service } from '~/services/service';

export default function (context: Context, inject: Function) {
  // Partially apply the context to the service factory.
  // Now we've got a factory function that can create service instances without specifying context each time.
  const service = createService(context)

  // Affect the Service.of function, to have a cool api
  Service.of = service;

  // Inject the service function into the context
  inject('service', service)
}
