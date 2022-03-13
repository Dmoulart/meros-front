import { Context } from '@nuxt/types'
import { Booking } from '~/bo/booking'
import { User } from '~/bo/user'
import { Vehicle } from '~/bo/vehicle'
import { Api } from '~/webservices/api'
import { ApiBookings } from '~/webservices/api/api-booking'
import { ApiUser } from '~/webservices/api/api-user'
import { ApiVehicles } from '~/webservices/api/api-vehicle'


export type Repositories = {
  users: ApiUser
  bookings: ApiBookings
  vehicles: ApiVehicles
}
export default function (context: Context, inject: Function) {
  // Create a general api instance with a blank endpoint allowing us to fetch whatever we want.
  const api = new Api({ context })

  // Create custom api instances.
  const usersApi = Api.of(context, User)
  const bookingsApi = Api.of(context, Booking)

  // Regroup the meros object api instances
  const repositories: Repositories = {
    users: Api.of(context, User) as ApiUser,
    bookings: Api.of(context, Booking) as ApiBookings,
    vehicles: Api.of(context, Vehicle) as ApiVehicles,
  }

  // Inject to context as $api
  inject('api', api)

  // Inject to context as $repositories
  inject('repositories', repositories)
}
