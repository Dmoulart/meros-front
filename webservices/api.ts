import { NuxtHTTPInstance } from '@nuxt/http'
import { Context } from '@nuxt/types'
import { TokenableScheme } from '@nuxtjs/auth-next'
import { BookingData } from '~/bo/booking'

export class Api {
    public client!: NuxtHTTPInstance
    private context: Context

    constructor(context: Context) {
        this.context = context
        this.client = context.$http
        this.client.onRequest((config) => {
            config.headers.get('Authorization') || this.client.setToken(this.token, 'Bearer')
        })
    }

    /**
     * Get user token.
     * @returns {string|boolean}
     */
    get token(): string | false {
        return (this.context?.$auth.strategy as TokenableScheme).token.get() as string | false
    }

    /**
     * Get all bookings.
     * @param {Number} page
     * @returns {Object} bookings
     */
    public async getBookings(page: number = 1): Promise<Array<BookingData>> {
        return await this.client.$get(`/bookings?page=${page}`)
    }

    /**
     * Get a booking by id.
     * @param {Number} id
     * @returns {Object} bookings
     */
    public async getBooking(id: number): Promise<BookingData> {
        return await this.client.$get(`/bookings/${id}`)
    }
}