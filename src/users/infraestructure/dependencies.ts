import MongooseRepository from "./mongooseRepository";
import { NotificacionNewUser } from "./servicesEmailers/NotificationNewUser";
import { NotificacionNewUserUseCase } from "../application/services/NotificationNewUser";
import { CreateUserController } from "./controllers/createUserController";

import { CreateUserUseCase } from "../application/createUserUseCase";

import { EncryptService } from "./helpers/EncryptService";



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