import MongooseRepository from "./mongooseRepository";
import { CreateBlogController } from "./controllers/createBlogController";
import { CreateBlogUseCase } from "../application/createBlogUseCase";
import { GetListOfBlogByLanguageUseCase } from "../application/GetListOfBlogByLanguageUseCase";
import { GetListOfUsersByLanguageController } from "./controllers/GetListOfBlogByLanguageController";
import { GetBlogByTitleController } from "./controllers/getBlogByTitleController";
import { GetBlogByTitleUseCase } from "../application/getBlogByTitleUseCase";
export const mongooseRepository = new MongooseRepository();
export const createBlogUseCase = new CreateBlogUseCase(
    mongooseRepository
)
export const createBlogController = new CreateBlogController(
    createBlogUseCase
)
export const getListOfBlogByLanguageUseCase = new GetListOfBlogByLanguageUseCase(
    mongooseRepository
)
export const getListOfUsersByLanguageController = new GetListOfUsersByLanguageController(
    getListOfBlogByLanguageUseCase
)
export const getBlogByTitleUseCase = new GetBlogByTitleUseCase(
    mongooseRepository
)
export const getBlogByTitleController = new GetBlogByTitleController(
    getBlogByTitleUseCase
)