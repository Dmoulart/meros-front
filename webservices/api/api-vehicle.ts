// import { Booking, BookingData } from "~/bo/booking";
// import { Vehicle } from "~/bo/vehicle";
// import { AbstractApi } from "./abstract-api";

// /**
//  * The API used to fetch bookings.
//  */
// export class ApiVehicles extends AbstractApi<Vehicle> {
//     protected endpoint = '/vehicles';

//     /**
//      * Get vehicles.
//      * @param page
//      * @returns vehicles
//      */
//     public async getVehicles(page: number = 1) {
//         return await this.get(`?page=${page}`) as Array<BookingData>
//     }
// }