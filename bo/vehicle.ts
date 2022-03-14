import { Expanse } from "./expanse"
import { Data, MerosObject } from "./meros-object"

export class Vehicle implements MerosObject {
    public static readonly NAME = "Vehicle"

    public id!: number
    public name!: string
    public model!: string
    public brand!: string
    public color!: string
    public fuelType!: string
    public seats!: number
    public mileage!: number
    public city!: string
    public street!: string
    public streetNumber!: string
    public expanses!: Array<Expanse>

    public constructor(data: Data<Vehicle>) {
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
}   
