import { Booking } from "./booking";

/**
 * An interface for Meros business objects.
 */
export interface MerosObject {
    id: number
}

/**
 * A type for Meros business objects data received from API.
 */
export type Data<T extends MerosObject> = { [K in keyof T]: T[K] };
