import { Context } from '@nuxt/types'
import { MHttpClient } from '~/services/http-client'
import { Api } from '~/webservices/api'

interface Plugins {
    $api: Api
    $mhttp: MHttpClient
}
export type MContext = Plugins & Context
