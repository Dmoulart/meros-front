import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Vehicles from '~/store/vehicles'
import { Stores as StoresType } from './stores';


let vehiclesStore: Vehicles
let Stores: StoresType;

function initialiseStores(store: Store<any>): void {
    vehiclesStore = getModule(Vehicles, store)
    Stores = new StoresType(vehiclesStore);
}



export { initialiseStores, vehiclesStore, Stores }
