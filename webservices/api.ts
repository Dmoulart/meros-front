/* eslint-disable space-before-function-paren */
/* eslint-disable indent */
/* eslint-disable import/named */
import { Context } from '@nuxt/types'
import { TokenableScheme } from '@nuxtjs/auth-next'
import { MHttpClient } from '~/services/http-client'
import { MContext } from '~/types/context'
// function ApiRequest(target: any, _: string, descriptor: TypedPropertyDescriptor<any>) {
//     const method = descriptor.value!

//     descriptor.value = function () {
//         console.log(this)
//         if (!(this as any).client.headers.Authorization && (this as any).token) {
//             (this as any).client.headers.Authorization = `Bearer ${(this as any).token}`
//         }
//         if (!(this as any).client.headers.Authorization && !(this as any).token) {
//             throw new Error('No token found')
//         }
//         return method.apply(this, arguments)
//     }
// }
export class Api {
    // There is a problem with Axios (Maximum call stack exceeded), nuxt try to parse the response with @nuxt/devalue
    // and goes in an infinite loop... So we'll use a custom client instead of axios for now.
    public client!: MHttpClient
    private context: MContext | Context

    constructor(context: MContext) {
        this.context = context
        const httpClient: MHttpClient = context.$mhttp
        const Authorization = this.token ? `Bearer ${this.token}` : false
        this.client = httpClient.create({
            headers: {
                common: {
                    'Content-Type': 'application/json',
                    Authorization
                }
            }
        })
    }

    /**
     * Get user token.
     * @returns {string|boolean}
     */
    get token(): string | boolean {
        if (!this.context.$auth) { return false }
        return (this.context.$auth.strategy as TokenableScheme).token.get()
    }

    /**
     * Get all bookings.
     * @param {Number} page
     * @returns {Object} bookings
     */
    public async getBookings(page: number = 1): Promise<JSON> {
        this.setTokenIfNeeded()
        return await this.client.get(`/bookings?page=${page}`)
    }

    /**
     * Get a booking by id.
     * @param {Number} id
     * @returns {Object} bookings
     */
    public async getBooking(id: number): Promise<JSON> {
        this.setTokenIfNeeded()
        return await this.client.get(`/bookings/${id}`)
    }

    /**
     * Set token if none is setted.
     */
    private setTokenIfNeeded(): void {
        if (!this.client.headers.Authorization && this.token) {
            this.client.headers.Authorization = `Bearer ${this.token}`
        }
        if (!this.client.headers.Authorization && !this.token) {
            throw new Error('No token found')
        }
    }
}
