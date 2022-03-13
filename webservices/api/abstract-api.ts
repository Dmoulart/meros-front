import { NuxtHTTPInstance, RequestBody } from '@nuxt/http'
import { Context } from '@nuxt/types'
import { TokenableScheme } from '@nuxtjs/auth-next'
import { MerosObject } from '~/bo/meros-object'

export type ApiOptions = {
    context: Context
    endpoint?: string
}
export abstract class AbstractApi {

    /**
     * The http client instance. We use it to fetch the data from the API.
     */
    protected client!: NuxtHTTPInstance

    /**
     * The Nuxt context which contains all Nuxt plug-ins and utility.
     */
    protected context: Context

    /**
     * The endpoint will define the entities this API instance will fetch.
     */
    protected endpoint!: string

    constructor({ context, endpoint }: ApiOptions) {
        this.context = context
        this.client = context.$http
        this.client.onRequest((config) => {
            config.headers.get('Authorization') || this.client.setToken(this.token, 'Bearer')
        })
        this.endpoint = endpoint ?? ''
    }

    /**
     * Get user token.
     * @returns {string|boolean}
     */
    get token(): string | false {
        return (this.context?.$auth.strategy as TokenableScheme).token.get() as string | false
    }

    /**
     * Performs a GET request.
     * @param path 
     * @returns data
     */
    public async get(path: string = ''): Promise<any> {
        return await this.client.$get(this.url(path))
    }

    /**
     * Performs a POST request.
     * @param path 
     * @returns data
     */
    public async post(path: string, body: RequestBody): Promise<any> {
        return await this.client.$post(this.url(path), body)
    }

    /**
     * Performs a delete request.
     * @param path 
     * @returns data
     */
    public async delete(path: string): Promise<any> {
        return await this.client.$delete(this.url(path))
    }

    /**
     * Constructs current endpoint URL path.
     * @param path 
     * @returns url
     */
    private url(path: string): string {
        path = path.startsWith('/') ? path : `/${path}`
        return `${this.endpoint}${path}`
    }
}
