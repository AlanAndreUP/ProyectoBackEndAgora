import { User } from "./user";

export default interface UserRepository {
    createUser(user: User): Promise<User>
    getAllUsers(): Promise<User[]>;
    changeEmail(userId: string, newEmail: string): Promise<boolean>;
}
