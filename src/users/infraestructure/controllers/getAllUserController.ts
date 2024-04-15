import { Request, Response } from "express";
import { GetAllUsersUseCase } from "../../application/getAllUsersUseCase";
import signale from "signale";

export class GetAllUsersController {
    constructor(private readonly getAllUsersUseCase: GetAllUsersUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const users = await this.getAllUsersUseCase.run();
            res.status(200).json({ success: true, data: users });
        } catch (error) {
            signale.fatal(new Error("Error al obtener todos los usuarios"));
            console.log("Error en el controlador de obtener todos los usuarios: " + error);
            res.status(500).json({ success: false, message: "Error al obtener todos los usuarios" });
        }
    }
}
