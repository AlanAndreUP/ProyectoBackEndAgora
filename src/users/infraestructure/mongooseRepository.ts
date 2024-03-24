import { User } from "../domain/user";
import UserRepository  from "../domain/userRepository";
import { Users } from "./model/userModel";

export default class MongooseRepository implements UserRepository {
    async createUser(user: User): Promise<User> {
        const check = await Users.findOne({email: user.email});
        if(check) { throw new Error("El usuario ya existe") }
        const result = await Users.create(user);
        return result;
    }
    
}
