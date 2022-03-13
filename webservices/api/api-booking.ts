import { Booking, BookingData } from "~/bo/booking";
import { AbstractApi } from "./abstract-api";

/**
 * The API used to fetch bookings.
 */
export class ApiBookings extends AbstractApi<Booking> {

    protected endpoint = '/bookings';

    /**
     * Get all bookings.
     * @param page
     * @returns bookings
     */
    public async getBookings(page: number = 1) {
        return await this.get(`?page=${page}`) as Array<BookingData>
    }

    /**
     * Get a booking by id.
     * @param id
     * @returns bookings
     */
    public async getBooking(id: number) {
        return await this.get(`${id}`)
    }
}