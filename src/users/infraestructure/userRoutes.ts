import express, { Router } from "express";
import { createUserController } from "./dependencies";



const router: Router = express.Router();

router.post("/Newsletter", createUserController.run.bind(createUserController));


export default router;