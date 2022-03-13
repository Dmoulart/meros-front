import { Booking } from "~/bo/booking";
import { Data } from "~/bo/meros-object";
import { User } from "~/bo/user";
import { Repository } from "./repository";

export class UserRepository extends Repository<User>{
    /**
     * Fetch user bookings.
     * @param user
     * @returns user bookings
     */
    public async getBookings(user: User): Promise<Array<Data<Booking>>> {
        return await this.api.get(`${user.id}/bookings`) as Promise<Array<Data<Booking>>>
    }

    protected get Entity() {
        return User
    }
}