import { Request, Response } from "express";
import { ChangeUserEmailUseCase } from "../../application/changeEmailUseCase";
import signale from "signale";

export class ChangeUserEmailController {
    constructor(private readonly changeUserEmailUseCase: ChangeUserEmailUseCase) {}
    
    async run(req: Request, res: Response) {
        try {
            const { userId, newEmail } = req.body;
            
            if (!userId || !newEmail) {
                console.log(userId)
                console.log(newEmail)
                return res.status(400).json({ success: false, message: "Missing userId or newEmail in request body" });
            }

            const success = await this.changeUserEmailUseCase.run(userId, newEmail);

            if (success) {
                return res.status(200).json({ success: true, message: "Email changed successfully" });
            } else {
                return res.status(404).json({ success: false, message: "User not found or email not changed" });
            }
        } catch (error) {
            signale.fatal(new Error("Error changing email"));
            console.log("Error in ChangeUserEmailController: " + error);
            return res.status(500).json({ success: false, message: "Error changing email" });
        }
    }
}
