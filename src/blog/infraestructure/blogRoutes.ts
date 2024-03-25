import express, { Router } from "express";
import { createBlogController } from "./dependencies";



const blogRoutes: Router = express.Router();

blogRoutes.post("/en", createBlogController.run.bind(createBlogController));


export default blogRoutes;