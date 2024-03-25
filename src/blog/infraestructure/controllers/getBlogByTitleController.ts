import { Request, Response } from "express";
import { Blog } from "../../domain/blog";
import { GetBlogByTitleUseCase } from "../../application/getBlogByTitleUseCase";
import signale from "signale";

export class GetBlogByTitleController {
    constructor(private readonly getBlogByTitleUseCase: GetBlogByTitleUseCase) { }

    async run(req: Request, res: Response) {
        try {
            const title = req.params.title;
            if (!title) {
                return res.status(400).json({ message: "Falta el parámetro 'title'" });
            }
            signale.info("Obteniendo blog por título:", title);
            const blog: Blog  = await this.getBlogByTitleUseCase.run(title);

            if (blog) {
                return res.status(200).json({ message: "Blog encontrado", data: blog });
            } else {
                return res.status(404).json({ message: "No se encontró ningún blog con ese título" });
            }
        } catch (error:any) {
            signale.error("Error al obtener el blog por título:", error.message);
            return res.status(500).json({ message: "Error interno del servidor", error: error.message });
        }
    }
}
