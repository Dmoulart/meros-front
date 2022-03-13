import { Context } from "@nuxt/types";
import { Booking } from "~/bo/booking";
import { MerosObject } from "~/bo/meros-object";
import { User } from "~/bo/user";
import { Vehicle } from "~/bo/vehicle";
import { Ctor, MerosObjectCtor } from "~/types/utils";
import { AbstractApi } from "./abstract-api";
import { ApiBookings } from "./api-booking";
import { ApiUser } from "./api-user";
import { ApiVehicles } from "./api-vehicle";

/**
 * A general Api without predefined endpoint.
 */
export class Api extends AbstractApi<MerosObject>{
    protected endpoint = ''

    static of<T extends User | Booking | Vehicle>(context: Context, merosObjectCtor?: Ctor<T>,) {
        switch (true) {
            case merosObjectCtor === User:
                return new ApiUser({ context }) as ApiUser
            case merosObjectCtor === Booking:
                return new ApiBookings({ context }) as ApiBookings
            case merosObjectCtor === Vehicle:
                return new ApiVehicles({ context }) as ApiVehicles
            default:
                return new Api({ context }) as Api
        }
    }
}