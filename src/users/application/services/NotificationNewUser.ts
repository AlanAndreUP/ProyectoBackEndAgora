import { NotificacionNewUser } from "../../infraestructure/servicesEmailers/NotificationNewUser";
import { User } from "../../domain/user" ;
export class NotificacionNewUserUseCase{
    constructor(readonly notificationNewUser: NotificacionNewUser){}

    async run(user: User){
        await this.notificationNewUser.sendNotification(user);
    }
}