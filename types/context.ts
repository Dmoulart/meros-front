import { Context } from '@nuxt/types'
import { createRepository } from '~/repositories/create-repository'
import { Api } from '~/webservices/api'


/**
 * Let's declare our plugins here
 */
declare module '@nuxt/types' {
    interface Context {
        $api: Api
        $repository: ReturnType<typeof createRepository>
    }
    interface NuxtAppOptions {
        $api: Api
        $repository: ReturnType<typeof createRepository>
    }

}
declare module 'vue/types/vue' {
    interface Vue {
        $api: Api
        $repository: ReturnType<typeof createRepository>
    }
}
