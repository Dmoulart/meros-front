import { Data, MerosObject } from "~/bo/meros-object";
import { User } from "~/bo/user";


/**
 * A general constructor type signature.
 */
export type Ctor<T> = { new(...args: any[]): T };


/**
 * A general meros object constructor type signature
 */
export type MerosCtor = { new(...args: any[]): MerosObject };

/**
 * A particular meros object constructor type signature
 */
export type MerosObjectCtor<T extends MerosObject> = { new(data: Data<T>): T };
