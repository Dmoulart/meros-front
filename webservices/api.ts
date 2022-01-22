/* eslint-disable space-before-function-paren */
/* eslint-disable indent */
/* eslint-disable import/named */
import { Context } from '@nuxt/types'
import { TokenableScheme } from '@nuxtjs/auth-next'
import { AxiosResponse } from 'axios'
import { AxiosLike } from '~/services/http-client'
import { MContext } from '~/types/context'

export class Api {
    // There is a problem with Axios (Maximum call stack exceeded), nuxt try to parse the response with @nuxt/devalue
    // and goes in an infinite loop... So we'll use a custom client instead of axios for now. We'll use an interface to
    // quickly replace it when we'll fix the problem
    private client!: AxiosLike
    private context: MContext | Context

    constructor(context: MContext) {
        this.context = context
        const httpClient: AxiosLike = context.$mhttp
        this.client = httpClient.create({
            headers: {
                common: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${this.token}`
                }
            }
        })
    }

    /**
     * Get user token.
     * @returns {string|boolean}
     */
    get token(): string | boolean {
        return (this.context.$auth.strategy as TokenableScheme).token.get()
    }

    /**
     * Get all bookings.
     * @param {Number} page
     * @returns {Object} bookings
     */
    public async getBookings(page = 1): Promise<any> { // Promise<AxiosResponse<any>>
        return await this.client.get(`/bookings?page=${page}`)
    }

    /**
     * Get a booking by id.
     * @param {Number} id
     * @returns {Object} bookings
     */
    public async getBooking(id: number): Promise<AxiosResponse<any>> {
        return await this.client.get(`/bookings/${id}`)
    }
}
