import { Context } from '@nuxt/types'
import { createRepository } from '~/repositories/create-repository'
import { createService } from '~/services/create-service'
import { Api } from '~/webservices/api'


/**
 * Let's declare our plugins here
 */
declare module '@nuxt/types' {
    interface Context {
        $api: Api
        $repository: ReturnType<typeof createRepository>
        $service: ReturnType<typeof createService>
    }
    interface NuxtAppOptions {
        $api: Api
        $repository: ReturnType<typeof createRepository>
        $service: ReturnType<typeof createService>
    }

}
declare module 'vue/types/vue' {
    interface Vue {
        $api: Api
        $repository: ReturnType<typeof createRepository>
        $service: ReturnType<typeof createService>
    }
}
