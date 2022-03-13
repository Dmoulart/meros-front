
import { Vehicle } from "~/bo/vehicle";
import { MerosObjectCtor } from "~/types/utils";
import { Repository } from "./repository";

export class VehicleRepository extends Repository<Vehicle>{

    protected get Entity() {
        return Vehicle
    }
}