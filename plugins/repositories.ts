import { Context } from '@nuxt/types'
import { createRepository } from '~/repositories/create-repository'
import { Repository } from '~/repositories/repository'

export default function (context: Context, inject: Function) {
  // Partially apply the context to the repository factory.
  // Now we've got a factory function that can create repository instances without specifying context each time.
  const repository = createRepository(context)

  // Affect the Repository.of function, to have a cool api
  Repository.of = repository;

  // Inject the repository function into the context
  inject('repository', repository)
}
