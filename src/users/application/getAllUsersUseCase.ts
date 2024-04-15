import UserRepository from "../domain/userRepository";
import { User } from "../domain/user";


export class GetAllUsersUseCase {
   constructor(
      readonly userRepository: UserRepository
   ){}

   async run(): Promise<User[]> {
      try{
         const users = await this.userRepository.getAllUsers();
         return users;
      } catch (error){
         console.error("Error getting all users:", error);
         return [];
      }
   }
}
