import Vehicles from '~/store/vehicles'
import { vehiclesStore } from './store-accessor'
/**
 * A container objects for all our stores
 */
export class Stores {
    /**
     * The vehicles store
     */
    readonly vehicles: Vehicles

    public constructor(vehiclesStore: Vehicles) {
        this.vehicles = vehiclesStore
    }
}