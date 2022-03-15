import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { Vehicle } from '~/bo/vehicle'
import { List } from 'immutable'
import { Service } from '~/services/service'
import Vue from 'vue'
import Vuex from 'vuex'

// We need to explicity set that we use Vuex 
Vue.use(Vuex)

// Declare empty store first
const store = new Vuex.Store<Vehicles>({})

@Module({
    name: 'vehicles',
    stateFactory: true,
    namespaced: true,
    dynamic: true,
    store
})
export default class Vehicles extends VuexModule {
    /**
     * The list of all vehicles
     */
    private _all: List<Vehicle> = List()

    /**
     * Set the total list of vehicles.
     * @param vehicles 
     */
    @Mutation
    setAll(vehicles: List<Vehicle>) {
        this._all = vehicles
    }

    /**
     * Fetch and store the a list of vehicles.
     * @param page 
     * @returns list of vehicles
     */
    @Action({ commit: 'setAll', rawError: true })
    async fetchAll(page = 1): Promise<List<Vehicle>> {
        return await Service.of(Vehicle).get(page)
    }

    /**
     * Get the list of all vehicles.
     * @returns list of vehicles
     */
    get all(): List<Vehicle> {
        return this._all
    }
}
