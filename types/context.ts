import { Context } from '@nuxt/types'
import { Api } from '~/webservices/api'

interface Plugins {
    $api: Api
}

export type MContext = Plugins & Context // & { $http: any }
