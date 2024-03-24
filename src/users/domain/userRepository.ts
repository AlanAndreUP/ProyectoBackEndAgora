import { User } from "./user";

export default interface UserRepository {
    createUser(user: User): Promise<User>
   
}