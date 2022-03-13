import { MerosObject } from "./meros-object"
import { User } from "./user"
import { Vehicle } from "./vehicle"

export type ExpanseData = {
    id: number
    details: string
    documents: Array<any>
    isSettled: boolean
    reason: string
    vehicle: Vehicle
}

export class Expanse implements MerosObject {
    private _id!: number
    private _details!: string
    private _documents!: Array<any>
    private _isSettled!: boolean
    private _reason!: string
    private _vehicle!: Vehicle

    public constructor(data: ExpanseData) {
        const { id, details, documents, isSettled, reason, vehicle } = data
        this.id = id
        this.details = details
        this.documents = documents
        this.isSettled = isSettled
        this.reason = reason
        this.vehicle = vehicle
    }

    public get id(): number {
        return this._id
    }
    public set id(value: number) {
        this._id = value
    }

    public get details(): string {
        return this._details
    }
    public set details(value: string) {
        this._details = value
    }

    public get documents(): Array<any> {
        return this._documents
    }
    public set documents(value: Array<any>) {
        this._documents = value
    }

    public get isSettled(): boolean {
        return this._isSettled
    }
    public set isSettled(value: boolean) {
        this._isSettled = value
    }

    public get reason(): string {
        return this._reason
    }
    public set reason(value: string) {
        this._reason = value
    }

    public get vehicle(): Vehicle {
        return this._vehicle
    }
    public set vehicle(value: Vehicle) {
        this._vehicle = value
    }
}
