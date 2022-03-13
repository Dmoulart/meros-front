import { Booking } from "~/bo/booking";
import { MerosObjectCtor } from "~/types/utils";
import { Service } from "./service";

export class BookingService extends Service<Booking>{

    protected get Entity(): MerosObjectCtor<Booking> {
        return Booking
    }
}