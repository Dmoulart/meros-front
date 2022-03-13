import { Vehicle } from "~/bo/vehicle";
import { MerosObjectCtor } from "~/types/utils";
import { Service } from "./service";

export class VehicleService extends Service<Vehicle>{
    protected get Entity(): MerosObjectCtor<Vehicle> {
        return Vehicle
    }

}