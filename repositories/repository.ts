import { Context } from "@nuxt/types";
import { Booking } from "~/bo/booking";
import { Data, MerosObject } from "~/bo/meros-object";
import { User } from "~/bo/user";
import { Vehicle } from "~/bo/vehicle";
import { Ctor, MerosCtor, MerosObjectCtor } from "~/types/utils";
import { Api } from "~/webservices/api";
import { AbstractApi } from "~/webservices/api/abstract-api";
import { BookingRepository } from "./bookings-repository";
import { UserRepository } from "./user-repository";
import { VehicleRepository } from "./vehicle-repository";

export abstract class Repository<T extends MerosObject>{
    //protected static context: Context

    protected api!: AbstractApi;

    protected context!: Context

    protected abstract get Entity(): MerosObjectCtor<T>

    constructor(context: Context) {
        this.context = context
        this.createApi()
    }

    public async find(id: number): Promise<Data<T>> {
        return await this.api.get(`/${id}`)
    }

    public async get(page: number): Promise<Data<T>[]> {
        return await this.api.get(`?page=${page}`)
    }

    // /**
    //  * Get repository for the given entity.
    //  * @param merosObjectCtor 
    //  * @param context 
    //  * @returns 
    //  */
    // public static of<T extends MerosCtor>(merosObjectCtor: T, context: Context):
    //     T extends Ctor<User>
    //     ? UserRepository : T extends Ctor<Booking>
    //     ? BookingRepository : T extends Ctor<Vehicle>
    //     ? VehicleRepository : never {
    //     // Typing is broken here ! todo: find a way to make this not as ugly (infer maybe ?)
    //     switch (true) {
    //         case merosObjectCtor as any === User:
    //             return new UserRepository(context) as any
    //         case merosObjectCtor as any === Booking:
    //             return new BookingRepository(context) as any
    //         case merosObjectCtor as any === Vehicle:
    //             return new VehicleRepository(context) as any
    //         default:
    //             throw new Error(`Try to instantiate an unknown repository : ${merosObjectCtor?.constructor.name}`)
    //     }
    // }


    private createApi() {
        // Get the plural name of the entity class to create the api endpoint.
        const endpoint = `${this.Entity.constructor.name.toLowerCase()}s`
        // Create the api
        this.api = new Api({ context: this.context, endpoint })
    }


    // static initialize(context: Context) {
    //     Repository.context = context
    // }
}