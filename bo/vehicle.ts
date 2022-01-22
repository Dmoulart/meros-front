import { Expanse } from "./expanse"

export type VehicleData = {
    id: number
    name: string
    model: string
    brand: string
    color: string
    fuelType: string
    seats: number
    mileage: number
    city: string
    street: string
    streetNumber: string
    expanses: Array<Expanse>
}

export class Vehicle {
    private _id!: number
    private _name!: string
    private _model!: string
    private _brand!: string
    private _color!: string
    private _fuelType!: string
    private _seats!: number
    private _mileage!: number
    private _city!: string
    private _street!: string
    private _streetNumber!: string
    private _expanses!: Array<Expanse>

    public constructor(data: VehicleData) {
        const { id, name, model, brand, color, fuelType, seats, mileage, city, street, streetNumber, expanses } = data
        this.id = id
        this.name = name
        this.model = model
        this.brand = brand
        this.color = color
        this.fuelType = fuelType
        this.seats = seats
        this.mileage = mileage
        this.city = city
        this.street = street
        this.streetNumber = streetNumber
        this.expanses = expanses
    }

    public get id(): number {
        return this._id
    }
    public set id(value: number) {
        this._id = value
    }

    public get name(): string {
        return this._name
    }
    public set name(value: string) {
        this._name = value
    }

    public get model(): string {
        return this._model
    }
    public set model(value: string) {
        this._model = value
    }

    public get brand(): string {
        return this._brand
    }
    public set brand(value: string) {
        this._brand = value
    }

    public get color(): string {
        return this._color
    }
    public set color(value: string) {
        this._color = value
    }

    public get fuelType(): string {
        return this._fuelType
    }
    public set fuelType(value: string) {
        this._fuelType = value
    }

    public get seats(): number {
        return this._seats
    }
    public set seats(value: number) {
        this._seats = value
    }

    public get mileage(): number {
        return this._mileage
    }
    public set mileage(value: number) {
        this._mileage = value
    }

    public get city(): string {
        return this._city
    }
    public set city(value: string) {
        this._city = value
    }

    public get street(): string {
        return this._street
    }
    public set street(value: string) {
        this._street = value
    }

    public get streetNumber(): string {
        return this._streetNumber
    }
    public set streetNumber(value: string) {
        this._streetNumber = value
    }

    public get expanses(): Array<Expanse> {
        return this._expanses
    }
    public set expanses(value: Array<Expanse>) {
        this._expanses = value
    }
}   
