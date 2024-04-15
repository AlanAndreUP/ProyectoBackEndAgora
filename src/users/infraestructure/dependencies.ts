import MongooseRepository from "./mongooseRepository";
import { NotificacionNewUser } from "./servicesEmailers/NotificationNewUser";
import { NotificacionNewUserUseCase } from "../application/services/NotificationNewUser";
import { CreateUserController } from "./controllers/createUserController";
import { ChangeUserEmailUseCase } from "../application/changeEmailUseCase";
import { ChangeUserEmailController } from "./controllers/changeEmailController";
import { CreateUserUseCase } from "../application/createUserUseCase";
import { EncryptService } from "./helpers/EncryptService";
import { GetAllUsersUseCase } from "../application/getAllUsersUseCase";
import { GetAllUsersController } from "./controllers/getAllUserController";
export const mongooseRepository = new MongooseRepository();
export const notificationNewUser = new NotificacionNewUser();

export const notificationNewUserUseCase = new NotificacionNewUserUseCase(
    notificationNewUser
)

export const createUserUseCase = new CreateUserUseCase(
    mongooseRepository,
    new EncryptService,
    notificationNewUserUseCase
)
export const createUserController = new CreateUserController(
    createUserUseCase
)
export const changeUserEmailUseCase = new ChangeUserEmailUseCase(
    mongooseRepository
)
export const changeUserEmailController = new ChangeUserEmailController(
    changeUserEmailUseCase
)
export const GetAllUsersUseCases = new GetAllUsersUseCase(
    mongooseRepository
)
export const GetAllUserController = new GetAllUsersController(
    GetAllUsersUseCases
)