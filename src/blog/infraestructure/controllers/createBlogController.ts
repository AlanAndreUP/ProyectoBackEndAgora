import { Request, Response } from "express";
import { CreateBlogUseCase } from "../../application/createBlogUseCase";
import signale from "signale";

export class CreateBlogController {
    constructor(private readonly createBlogUseCase: CreateBlogUseCase) {}
    
    async run(req: Request, res: Response) {
        try {
            if (!process.env.SALT_ROUNDS_BCRYPT) {
                return res.status(500).json({ success: false, message: "Error, No Existe Variable de Incriptacion" });
            }
            
            const { title, previewContent, image, author, date, type, content,lenguaje } = req.body;
            
            const blog = await this.createBlogUseCase.run(title, previewContent, content, image, author, date,lenguaje, type);

            if (blog) {
                return res.status(201).json({ success: true, data: blog });
            } else {
                return res.status(500).json({ success: false, message: "Error al crear el blog" });
            }
        } catch (error) {
            signale.fatal(new Error("Error al crear el blog"));
            console.log("Error en el controlador de crear blog: " + error);
            return res.status(500).json({ success: false, message: "Error al crear el blog" });
        }
    }
}
