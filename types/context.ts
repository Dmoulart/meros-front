import { Context } from '@nuxt/types'
import { Repositories } from '~/plugins/api'
import { BookingService } from '~/plugins/bookings'
import { Api } from '~/webservices/api'


/**
 * Let's declare our plugins here
 */
declare module '@nuxt/types' {
    interface Context {
        $api: Api
        $bookings: BookingService
        $repositories: Repositories
    }
    interface NuxtAppOptions {
        $api: Api
        $bookings: BookingService
        $repositories: Repositories
    }

}
declare module 'vue/types/vue' {
    interface Vue {
        $api: Api
        $bookings: BookingService
        $repositories: Repositories
    }
}
