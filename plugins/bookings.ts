import { Context } from '@nuxt/types';
import { Booking, BookingData } from '~/bo/booking';
import { Api } from '~/webservices/api'
import { List } from 'immutable'
import { User } from '~/bo/user';
/**
 * The class responsible for getting the booking data from the API and transform it into a Booking object.
 */
export class BookingService {
    private api: Api

    public constructor(private context: Context) {
        this.api = context.$api;
    }

    /**
     * Get an user bookings.
     * @param {Object} user 
     * @returns {Promise<Array<Booking>>}
     */
    public async getForUser(user: User): Promise<List<Booking>> {
        const bookingsData = await this.api.getUserBookings(user)
        return this.toInstances(bookingsData)
    }

    /**
     * Get a list of bookings by page.
     * @param {Number} page 
     * @returns {Promise<Array<Booking>>}
     */
    public async get(page: number = 1): Promise<List<Booking>> {
        const bookingsData = await this.api.getBookings(page)
        return this.toInstances(bookingsData)
    }

    /**
     * Get a booking by id.
     * @param id 
     * @returns {Promise<Booking>}
     */
    public async find(id: number = 1): Promise<Booking> {
        const bookingData = await this.api.getBooking(id)
        return this.toInstance(bookingData)
    }

    /**
     * Convert an array of booking data to an array of Booking objects.
     * @param bookingsData 
     * @returns {List<Booking>} Booking instances
     */
    private toInstances(bookingsData: Array<BookingData>): List<Booking> {
        const bookings = bookingsData.map(this.toInstance)
        return List(bookings)
    }

    /**
     * Convert a booking data to a Booking object.
     * @param bookingData 
     * @returns {Booking} Booking object 
     */
    private toInstance(bookingData: BookingData): Booking {
        const booking = new Booking(bookingData)
        return booking
    }
}
export default function (context: Context, inject: Function) {
    const bookings = new BookingService(context)
    // Inject to context as $bookings
    inject('bookings', bookings)
}
