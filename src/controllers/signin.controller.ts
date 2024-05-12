import { Request, Response } from "express";
import { SignInService } from "../services/sign.in.service";

export class SignInController {

    async signIn(request: Request, response: Response) {
        const { body } = request;

        try {
            const signInControoler = new SignInService();
            const result = await signInControoler.execute(body);
            return response.status(200).json(result);
        } catch (err: any) {
            return response.status(400).json({
                error: err.message,
            });
        }
    }
}
