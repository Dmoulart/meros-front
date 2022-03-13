import { Booking } from "~/bo/booking";
import { MerosObjectCtor } from "~/types/utils";
import { Repository } from "./repository";

export class BookingRepository extends Repository<Booking>{
    protected get Entity() {
        return Booking
    }
}