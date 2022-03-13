// import { Booking, BookingData } from "~/bo/booking";
// import { User } from "~/bo/user";
// import { AbstractApi } from "./abstract-api";

// /**
//  * The API used to fetch users.
//  */
// export class ApiUser extends AbstractApi<User> {

//     protected endpoint = '/users';

//     /**
//      * Fetch user bookings.
//      * @param user
//      * @returns user bookings
//      */
//     public async getUserBookings(user: User): Promise<Array<BookingData>> {
//         return await this.get(`${user.id}/bookings`) as Array<BookingData>
//     }
// }