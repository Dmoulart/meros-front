/* eslint-disable space-before-function-paren */

// eslint-disable-next-line import/named
import { NuxtAxiosInstance } from '@nuxtjs/axios'

/* eslint-disable indent */
type RequestOptions = {
    baseURL?: string;
    headers?: {}
}

export interface MHttpClient {
    create(options?: RequestOptions): MHttpClient
    get: (endpoint: string) => Promise<any>;
    post: (endpoint: string, body?: string) => Promise<any>;
}

export type AxiosLike = NuxtAxiosInstance | MHttpClient

/**
 * Custom http client to replace axios. So we'll use a custom client instead of axios for now. We use an interface to
 * quickly replace it when we'll fix the  Maximum call stack problem
 */
export class HttpClient implements MHttpClient {
    baseUrl: string
    headers: { [key: string]: string }

    constructor(options?: RequestOptions) {
        this.baseUrl = options?.baseURL ?? 'http://localhost:8000'
        this.headers = options?.headers ?? { 'Content-Type': 'application/json' }
        if (this.headers.common) {
            this.headers = this.headers.common as unknown as { [key: string]: string }
        }
    }

    async get(endpoint: string): Promise<JSON> {
        const response = await fetch(`${this.baseUrl}${endpoint}`, { method: 'GET', headers: this.headers })
        const data = await response.text()
        const formattedData = JSON.parse(data)
        return formattedData
    }

    async post(endpoint: string, body?: string): Promise<JSON> {
        const response = await fetch(`${this.baseUrl}${endpoint}`, { method: 'POST', headers: this.headers, body })
        const data = await response.text()
        const formattedData = JSON.parse(data)
        return formattedData
    }

    create(options?: RequestOptions): MHttpClient {
        return new HttpClient(options)
    }
}
