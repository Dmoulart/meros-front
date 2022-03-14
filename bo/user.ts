import { Booking } from "./booking"
import { Data, MerosObject } from "./meros-object"

export type Roles = "ROLE_USER" | "ROLE_ADMIN"

export class User implements MerosObject {
    public static readonly NAME = "User"

    public id!: number
    public names!: string
    public pseudo!: string
    public email!: string
    public share!: number
    public currentMileage!: number
    public estimatedMileage!: number
    public roles!: Array<Roles>
    public bookings!: Array<Booking>


    public constructor(data: Data<User>) {
        const { id, names, pseudo, email, share, currentMileage, estimatedMileage, roles, bookings } = data
        id && (this.id = id)
        names && (this.names = names)
        pseudo && (this.pseudo = pseudo)
        email && (this.email = email)
        share && (this.share = share)
        currentMileage && (this.currentMileage = currentMileage)
        estimatedMileage && (this.estimatedMileage = estimatedMileage)
        roles && (this.roles = roles)
        bookings && (this.bookings = bookings)
    }

}
