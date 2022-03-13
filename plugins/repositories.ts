import { Context } from '@nuxt/types'
import { Booking } from '~/bo/booking'
import { User } from '~/bo/user'
import { Vehicle } from '~/bo/vehicle'
import { BookingRepository } from '~/repositories/bookings-repository'
import { createRepository } from '~/repositories/create-repository'
import { Repository } from '~/repositories/repository'
import { UserRepository } from '~/repositories/user-repository'
import { VehicleRepository } from '~/repositories/vehicle-repository'
import { Api } from '~/webservices/api'


export type Repositories = {
  users: UserRepository
  bookings: BookingRepository
  vehicles: VehicleRepository
}

export default function (context: Context, inject: Function) {
  // Partially apply the context to the repository factory.
  // Now we've got a factory function that can create repository instances without specifying context each time.
  const repository = createRepository(context)

  inject('repository', repository)
}
