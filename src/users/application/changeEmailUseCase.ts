import UserRepository from "../domain/userRepository";
import { IEncrypterService } from "./services/IEncrypterService";
import { User } from "../domain/user";

export class ChangeUserEmailUseCase {
   constructor(
      private readonly userRepository: UserRepository,
     
   ) {}

   async run(userId: string, newEmail: string): Promise<boolean> {
      try {
         await this.userRepository.changeEmail(userId, newEmail);
         return true;
      } catch (error) {
         console.error("Error changing email:", error);
         return false;
      }
   }
}
