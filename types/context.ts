import { Context } from '@nuxt/types'
import { AxiosLike } from '~/services/http-client'
import { Api } from '~/webservices/api'

interface Plugins {
    $api: Api
    $mhttp: AxiosLike
}
export type MContext = Plugins & Context
