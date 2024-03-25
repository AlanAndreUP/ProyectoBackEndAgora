import { Request, Response } from "express";
import { Blog } from "../../domain/blog";
import { GetListOfBlogByLanguageUseCase } from "../../application/GetListOfBlogByLanguageUseCase";
import signale from "signale";

export class GetListOfUsersByLanguageController {
    constructor(readonly getListOfBlogByLanguageUseCase: GetListOfBlogByLanguageUseCase) { }

    async run(req: Request, res: Response) {
        try {
            const language = req.params.language; 
            signale.info("Obteniendo lista de usuarios por lenguaje");
            const blogs: Blog[] = await this.getListOfBlogByLanguageUseCase.run(language);
            return res.status(200).json({ message: "Lista de blog por lenguaje", Blogs: blogs });
        } catch (error) {
            signale.fatal(new Error("Error al obtener la lista de blogs por lenguaje")); 
            res.status(404).send({ message: "No se encontraron blogs con ese lenguaje" }); 
        }
    }
}
