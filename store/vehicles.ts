import { Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { Vehicle } from '~/bo/vehicle'
import { List } from 'immutable'

@Module({
    name: 'vehicles',
    stateFactory: true,
    namespaced: true
})
export class VehiclesStore extends VuexModule {
    /**
     * The list of all vehicles
     */
    private _list: Array<Vehicle> = []
    /**
     * Set the total list of vehicles.
     * @param vehicles 
     */
    @Mutation
    setList(vehicles: List<Vehicle>) {
        console.log('vehicles')
        this._list = vehicles.toArray()
    }

    /**
     * Get the list of all vehicles.
     * @returns list of vehicles
     */
    get list(): List<Vehicle> {
        return List(this._list)
    }
}
