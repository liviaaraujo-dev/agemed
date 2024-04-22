import { Request, Response } from "express"
import { SignUpService } from "../services/sign.up.service";

export class SignUpController {
    async create(request: Request, response: Response) {

        const { body } = request;

        try {
            const signUpService = new SignUpService();
            const result = await signUpService.execute(body);
            return response.json(result);
        } catch (err: any) {
            return response.status(400).json({
                error: err.message,
            });
        }

    }
}
