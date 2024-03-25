import MongooseRepository from "./mongooseRepository";
import { CreateBlogController } from "./controllers/createBlogController";
import { CreateBlogUseCase } from "../application/createBlogUseCase";
export const mongooseRepository = new MongooseRepository();




export const createBlogUseCase = new CreateBlogUseCase(
    mongooseRepository,

)


export const createBlogController = new CreateBlogController(
    createBlogUseCase
)