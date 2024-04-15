import { User } from "../domain/user";
import UserRepository from "../domain/userRepository";
import { Users } from "./model/userModel";

export default class MongooseRepository implements UserRepository {
    async createUser(user: User): Promise<User> {
        const check = await Users.findOne({ email: user.email });
        if (check) {
            throw new Error("El usuario ya existe");
        }
        const result = await Users.create(user);
        return result;
    }

    async changeEmail(userId: string, newEmail: string): Promise<boolean> {
        try {
            const user = await Users.findById(userId);
            if (!user) {
                console.error("User not found.");
                return false;
            }
            await Users.findByIdAndUpdate(userId, { email: newEmail });
            return true;
        } catch (error) {
            console.error("Error changing email:", error);
            return false;
        }
    }

    async getAllUsers(): Promise<User[]> {
        try {
            const users = await Users.find();
            return users;
        } catch (error) {
            console.error("Error getting all users:", error);
            return [];
        }
    }
}
