import express, { Router } from "express";
import { createBlogController,getListOfUsersByLanguageController} from "./dependencies";
import { getBlogByTitleUseCase,getBlogByTitleController } from "./dependencies";



const blogRoutes: Router = express.Router();

blogRoutes.post("/", createBlogController.run.bind(createBlogController));
blogRoutes.get("/ListByLanguaje/:language",getListOfUsersByLanguageController.run.bind(getListOfUsersByLanguageController));
blogRoutes.get("/ByTitle/:title",getBlogByTitleController.run.bind(getBlogByTitleController));


export default blogRoutes;