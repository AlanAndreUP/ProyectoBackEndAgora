import { Request, Response } from "express";
import { CreateUserUseCase } from "../../application/createUserUseCase";
import signale from "signale";

export class CreateUserController {
    constructor(private readonly createUserUseCase: CreateUserUseCase) {}
    
    async run(req: Request, res: Response) {
        try {
            if (!process.env.SALT_ROUNDS_BCRYPT) {
                return res.status(500).json({ success: false, message: "Error, No Existe Variable de Incriptacion" });
            }
            
            const { nombre, apellido, correoElectronico, profesion, empresa, pais, role } = req.body;
            
            const user = await this.createUserUseCase.run(nombre, apellido, correoElectronico, profesion, empresa, pais, role);

            if (user) {
                return res.status(201).json({ success: true, data: user });                
            } else {
                return res.status(500).json({ success: false, message: "Error al crear el usuario" });
            }
        } catch (error) {
            signale.fatal(new Error("Error al crear el usuario"));
            console.log("Error en el controlador de crear usuario: " + error);
            return res.status(500).json({ success: false, message: "Error al crear el usuario" });
        }
    }
}
