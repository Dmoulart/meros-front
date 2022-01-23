import { Context } from '@nuxt/types'
import { BookingService } from '~/plugins/bookings'
import { Api } from '~/webservices/api'


/**
 * Let's declare our plugins here
 */
declare module '@nuxt/types' {
    interface Context {
        $api: Api
        $bookings: BookingService
    }
    interface NuxtAppOptions {
        $api: Api
        $bookings: BookingService
    }

}
declare module 'vue/types/vue' {
    interface Vue {
        $api: Api
        $bookings: BookingService
    }
}
