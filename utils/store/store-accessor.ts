import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Vehicles from '~/store/vehicles'

let vehiclesStore: Vehicles

function initialiseStores(store: Store<any>): void {
    vehiclesStore = getModule(Vehicles, store)
}

export { initialiseStores, vehiclesStore }
