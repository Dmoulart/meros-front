import { Context } from "@nuxt/types";
import { Booking } from "~/bo/booking";
import { User } from "~/bo/user";
import { Vehicle } from "~/bo/vehicle";
import { MerosCtor, Ctor } from "~/types/utils";
import { BookingRepository } from "./bookings-repository";
import { UserRepository } from "./user-repository";
import { VehicleRepository } from "./vehicle-repository";

/**
 * Factory function to create a repository for a given entity.
 * @param context 
 * @param  merosObjectCtor
 * @returns repository
 */
const createRepository = <T extends MerosCtor>(context: Context) => (merosObjectCtor: T):
    T extends Ctor<User>
    ? UserRepository : T extends Ctor<Booking>
    ? BookingRepository : T extends Ctor<Vehicle>
    ? VehicleRepository : never => {
    // Typing is broken here ! todo: find a way to make this not as ugly (infer maybe ?)
    switch (true) {
        case merosObjectCtor as any === User:
            return new UserRepository(context) as any
        case merosObjectCtor as any === Booking:
            return new BookingRepository(context) as any
        case merosObjectCtor as any === Vehicle:
            return new VehicleRepository(context) as any
        default:
            throw new Error(`Try to instantiate an unknown repository : ${merosObjectCtor?.constructor.name}`)
    }
}

export { createRepository }