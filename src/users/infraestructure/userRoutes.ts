import express, { Router } from "express";
import { createUserController,GetAllUserController,changeUserEmailController, changeUserEmailUseCase } from "./dependencies";



const router: Router = express.Router();

router.post("/Newsletter", createUserController.run.bind(createUserController));
router.get("/", GetAllUserController.run.bind(GetAllUserController));
router.post("/ChangeEmail",changeUserEmailController.run.bind(changeUserEmailController))

export default router;