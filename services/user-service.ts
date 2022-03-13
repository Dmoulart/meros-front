import { User } from "~/bo/user";
import { MerosObjectCtor } from "~/types/utils";
import { Service } from "./service";

export class UserService extends Service<User>{
    
    protected get Entity(): MerosObjectCtor<User> {
        return User
    }

}