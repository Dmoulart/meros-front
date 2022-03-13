import { Context } from "@nuxt/types"
import { Booking } from "~/bo/booking"
import { User } from "~/bo/user"
import { Vehicle } from "~/bo/vehicle"
import { BookingRepository } from "~/repositories/bookings-repository"
import { CreateRepositoryFn } from "~/repositories/create-repository"
import { UserRepository } from "~/repositories/user-repository"
import { VehicleRepository } from "~/repositories/vehicle-repository"
import { MerosCtor, Ctor } from "~/types/utils"
import { BookingService } from "./booking-service"
import { UserService } from "./user-service"
import { VehicleService } from "./vehicle-service"

/**
 * The create repository function signature
 */
export type CreateServiceFn<T extends MerosCtor> = T extends Ctor<User>
    ? UserService : T extends Ctor<Booking>
    ? BookingService : T extends Ctor<Vehicle>
    ? VehicleService : never

/**
 * Factory function to create a repository for a given entity.
 * @param context 
 * @returns createRepositoryFn
 */
const createService = (context: Context) => <T extends MerosCtor>(merosObjectCtor: T):
    CreateServiceFn<T> => {
    // Typing is broken here ! todo: find a way to make this not as ugly (infer maybe ?)
    switch (true) {
        case merosObjectCtor as any === User:
            return new UserService(context) as any
        case merosObjectCtor as any === Booking:
            return new BookingService(context) as any
        case merosObjectCtor as any === Vehicle:
            return new VehicleService(context) as any
        default:
            throw new Error(`Try to instantiate an unknown service : ${merosObjectCtor?.constructor.name}`)
    }
}

export { createService }