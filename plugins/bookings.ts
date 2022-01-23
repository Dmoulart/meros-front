import { Context } from '@nuxt/types';
import { Booking } from '~/bo/booking';
import { deleteNestedProps } from '~/utils/object-utils';
import { Api } from '~/webservices/api'
import { List } from 'immutable'

/**
 * The class responsible for getting the booking data from the API and transform it into a Booking object.
 */
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
    public async get(page: number = 1): Promise<List<Booking>> {
        const bookingsData = await this.api.getBookings(page)
        const bookings = bookingsData.map(bookingData => new Booking(bookingData))
        return List(bookings)
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
