import { Context } from "@nuxt/types";
import { Data, MerosObject } from "~/bo/meros-object";
import { MerosCtor, MerosObjectCtor } from "~/types/utils";
import { Api } from "~/webservices/api";
import { AbstractApi } from "~/webservices/api/abstract-api";
import { CreateRepositoryFn } from "./create-repository";

/**
 * The repository is used to fetch data from the server for a particular entity. It groups all the general methods 
 * used to fetch entity data as well as methods specific to particular entities.
 */
export abstract class Repository<T extends MerosObject>{
    /**
     * The api instance the repository will use.
     */
    protected api!: AbstractApi;

    /**
     * The Nuxt Context.
     */
    protected context!: Context

    /**
     * The entity the repository is for.
     */
    protected abstract get Entity(): MerosObjectCtor<T>

    constructor(context: Context) {
        this.context = context
        this.createApi()
    }

    /**
     * Find an entity by id.
     * @param id 
     * @returns entity
     */
    public async find(id: number): Promise<Data<T>> {
        return await this.api.get(`/${id}`)
    }

    /**
     * Query a list of entity by page.
     * @param page 
     * @returns entities
     */
    public async get(page = 1): Promise<Data<T>[]> {
        return await this.api.get(`?page=${page}`)
    }

    /**
     * Get repository for the given entity.
     * This function is setted from the plug ins.
     * @param merosObjectCtor 
     * @param context 
     * @returns 
     */
    public static of: <T extends MerosCtor>(merosObjectCtor: T) => CreateRepositoryFn<T>

    /**
     * Register the api with the appropriate endpoint for the given repository.
     */
    private createApi(): void {
        // Get the plural name of the entity class to create the api endpoint.
        const endpoint = `${this.Entity.NAME.toLowerCase()}s`
        console.log(this.Entity.NAME)
        // Create the api
        this.api = new Api({ context: this.context, endpoint })
    }
}