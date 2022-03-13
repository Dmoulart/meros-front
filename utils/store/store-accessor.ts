import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import { VehiclesStore } from '~/store/vehicles'

let vehiclesStore: VehiclesStore

function initialiseStores(store: Store<any>): void {
    vehiclesStore = getModule(VehiclesStore, store)
}

export { initialiseStores, vehiclesStore }
