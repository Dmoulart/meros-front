import { Context } from "@nuxt/types";
import { MerosObject } from "~/bo/meros-object";
import { createRepository } from "~/repositories/create-repository";
import { Repository } from "~/repositories/repository";
import { MerosCtor, MerosObjectCtor } from "~/types/utils";
import { CreateServiceFn } from "./create-service";
import { List } from 'immutable'
/**
 * Services handle business logic. They fetch data from repository, format it, make verifications and send it to the view.
 */
export abstract class Service<T extends MerosObject>{
    /**
     * The repository the service will use.
     */
    protected repository!: Repository<T>

    /**
     * The Nuxt Context.
     */
    protected context!: Context

    /**
     * The entity the service is for.
     */
    protected abstract get Entity(): MerosObjectCtor<T>

    constructor(context: Context) {
        this.context = context
        this.setRepository();
    }

    /**
     * Find an entity by id.
     * @param id 
     * @returns entity
     */
    public async find(id: number): Promise<T> {
        const data = await this.repository.find(id)
        return new this.Entity(data)
    }

    /**
     * Query a list of entity by page.
     * @param page 
     * @returns entities
     */
    public async get(page = 1): Promise<List<T>> {
        const data = await this.repository.get(page)
        const entities = data.map(data => new this.Entity(data))
        return List(entities)
    }

    /**
     * Create the repository for the given entity.
     */
    private setRepository(): void {
        // Type is kinda broken here too
        this.repository = createRepository(this.context)(this.Entity) as unknown as Repository<T>
    }

    /**
     * Get service for the given entity.
     * This function is setted from the plug ins.
     * @param merosObjectCtor 
     * @returns 
     */
    static of: <T extends MerosCtor>(merosObjectCtor: T) => CreateServiceFn<T>
}