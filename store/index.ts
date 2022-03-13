import { Store } from 'vuex'
import { initialiseStores } from '~/utils/store/store-accessor'

const initializer = (store: Store<any>) => initialiseStores(store)

export const plugins = [initializer]

export * from '~/utils/store/store-accessor'