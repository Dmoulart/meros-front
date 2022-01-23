import { Booking } from "./booking"

export type Roles = "ROLE_USER" | "ROLE_ADMIN"
export type UserData = {
    id?: number
    names?: string
    pseudo?: string
    email?: string
    share?: number
    currentMileage?: number
    estimatedMileage?: number
    roles?: Array<Roles>
    bookings?: Array<Booking>
}

export class User {
    private _id!: number
    private _names!: string
    private _pseudo!: string
    private _email!: string
    private _share!: number
    private _currentMileage!: number
    private _estimatedMileage!: number
    private _roles!: Array<Roles>
    private _bookings!: Array<Booking>


    public constructor(data: UserData) {
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

    public get id(): number {
        return this._id
    }
    public set id(value: number) {
        this._id = value
    }

    public get names(): string {
        return this._names
    }
    public set names(value: string) {
        this._names = value
    }

    public get pseudo(): string {
        return this._pseudo
    }
    public set pseudo(value: string) {
        this._pseudo = value
    }

    public get email(): string {
        return this._email
    }
    public set email(value: string) {
        this._email = value
    }

    public get share(): number {
        return this._share
    }
    public set share(value: number) {
        this._share = value
    }

    public get currentMileage(): number {
        return this._currentMileage
    }
    public set currentMileage(value: number) {
        this._currentMileage = value
    }

    public get estimatedMileage(): number {
        return this._estimatedMileage
    }
    public set estimatedMileage(value: number) {
        this._estimatedMileage = value
    }

    public get roles(): Array<Roles> {
        return this._roles
    }
    public set roles(value: Array<Roles>) {
        this._roles = value
    }

    public get bookings(): Array<Booking> {
        return this._bookings
    }
    public set bookings(value: Array<Booking>) {
        this._bookings = value
    }
}
