import { Data, MerosObject } from "./meros-object"
import { User } from "./user"
import { Vehicle } from "./vehicle"

// export type BookingData = {
//     id?: number
//     informations?: string
//     isCompleted?: boolean
//     isOpen?: boolean
//     startDate?: Date
//     endDate?: Date
//     startMileage?: number | null
//     endMileage?: number | null
//     vehicle?: Vehicle
//     users?: Array<User>
// }

export class Booking implements MerosObject {
    public static readonly NAME = "Booking"

    public id!: number
    public informations!: string
    public isCompleted!: boolean
    public isOpen!: boolean
    public startDate!: Date
    public endDate!: Date
    public startMileage!: number | null
    public endMileage!: number | null
    public vehicle!: Vehicle
    public users!: Array<User>

    public constructor(data: Data<Booking>) {
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

        id && (this.id = id)
        informations && (this.informations = informations)
        startDate && (this.startDate = startDate)
        endDate && (this.endDate = endDate)
        startMileage && (this.startMileage = startMileage)
        endMileage && (this.endMileage = endMileage)
        vehicle && (this.vehicle = vehicle)
        users && (this.users = users)

        // Todo: find a better (simpler ?) way to init data... 
        this.isCompleted = isCompleted ?? false
        this.isOpen = isOpen ?? false
    }

    // public set users(value: Array<User> | Array<Data<User>>) {
    //     if (!value.length) return

    //     if (value[0] instanceof User) {
    //         this._users = value as Array<User>
    //     }
    //     else {
    //         this._users = value.map((data: Data<User>) => new User(data))
    //     }
    // }
}
