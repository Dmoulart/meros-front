import { User, UserData } from "./user"
import { Vehicle } from "./vehicle"

export type BookingData = {
    id: number
    informations: string
    isCompleted: boolean
    isOpen: boolean
    startDate: Date
    endDate: Date
    startMileage: number | null
    endMileage: number | null
    vehicle: Vehicle
    users: Array<User>
}

export class Booking {
    private _id!: number
    private _informations!: string
    private _isCompleted!: boolean
    private _isOpen!: boolean
    private _startDate!: Date
    private _endDate!: Date
    private _startMileage!: number | null
    private _endMileage!: number | null
    private _vehicle!: Vehicle
    private _users!: Array<User>

    public constructor(data: BookingData) {
        const {
            id,
            informations,
            isCompleted,
            isOpen,
            startDate,
            endDate,
            startMileage,
            endMileage,
            vehicle,
            users 
        } = data
        this.id = id
        this.informations = informations
        this.isCompleted = isCompleted
        this.isOpen = isOpen
        this.startDate = startDate
        this.endDate = endDate
        this.startMileage = startMileage
        this.endMileage = endMileage
        this.vehicle = vehicle
        this.users = users

    }

    public get id(): number {
        return this._id
    }
    public set id(value: number) {
        this._id = value
    }

    public get informations(): string {
        return this._informations
    }
    public set informations(value: string) {
        this._informations = value
    }

    public get isCompleted(): boolean {
        return this._isCompleted
    }
    public set isCompleted(value: boolean) {
        this._isCompleted = value
    }

    public get isOpen(): boolean {
        return this._isOpen
    }
    public set isOpen(value: boolean) {
        this._isOpen = value
    }

    public get startDate(): Date {
        return this._startDate
    }
    public set startDate(value: Date) {
        this._startDate = value
    }

    public get endDate(): Date {
        return this._endDate
    }
    public set endDate(value: Date) {
        this._endDate = value
    }

    public get startMileage(): number | null {
        return this._startMileage
    }
    public set startMileage(value: number | null) {
        this._startMileage = value
    }

    public get endMileage(): number | null {
        return this._endMileage
    }
    public set endMileage(value: number | null) {
        this._endMileage = value
    }

    public get vehicle(): Vehicle {
        return this._vehicle
    }
    public set vehicle(value: Vehicle) {
        this._vehicle = value
    }

    public get users(): Array<User> | Array<UserData> {
        return this._users
    }
    public set users(value: Array<User> | Array<UserData>) {
        if (!value.length) return

        if (value[0] instanceof User) {
            this._users = value as Array<User>
        }
        else {
            this._users = value.map((data: UserData) => new User(data))
        }
    }
}
