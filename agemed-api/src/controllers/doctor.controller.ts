import { getToken } from "../core/token";
import { DoctorService } from "../services/doctor.service";
import { Request, Response } from "express"

export class DoctorController{
    async create(request: Request, response: Response) {
        const userId = getToken(request, response);

        const { body } = request;

        try {
            const doctorService = new DoctorService();
            const result = await doctorService.create(body, userId);
            return response.json(result);
        } catch (err: any) {
            return response.status(400).json({
                error: err.message,
            });
        }
    }

}
