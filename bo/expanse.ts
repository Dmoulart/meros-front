import { Data, MerosObject } from "./meros-object"
import { User } from "./user"
import { Vehicle } from "./vehicle"

export class Expanse implements MerosObject {
    public static readonly NAME = "Expanse"

    public id!: number
    public details!: string
    public documents!: Array<any>
    public isSettled!: boolean
    public reason!: string
    public vehicle!: Vehicle

    public constructor(data: Data<Expanse>) {
        const { id, details, documents, isSettled, reason, vehicle } = data
        this.id = id
        this.details = details
        this.documents = documents
        this.isSettled = isSettled
        this.reason = reason
        this.vehicle = vehicle
    }

}
