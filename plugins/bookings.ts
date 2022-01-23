import { Context } from '@nuxt/types';
import { Booking } from '~/bo/booking';
import { Api } from '~/webservices/api'

export class BookingService {
    private api: Api

    public constructor(private context: Context) {
        this.api = context.$api;
    }

    /**
     * Get a list of bookings by page.
     * @param {Number} page 
     * @returns {Promise<Array<Booking>>}
     */
    public async get(page: number = 1): Promise<Array<Booking>> {
        const bookings = await this.api.getBookings(page)
        const bookingList = bookings.map(bookingData => new Booking(bookingData))
        return bookingList
    }

    /**
     * Get a booking by id.
     * @param id 
     * @returns {Promise<Booking>}
     */
    public async find(id: number = 1): Promise<Booking> {
        const bookingData = await this.api.getBooking(id)
        const booking = new Booking(bookingData)
        return booking
    }
}
export default function (context: Context, inject: Function) {
    const bookings = new BookingService(context)
    // Inject to context as $bookings
    inject('bookings', bookings)
}
