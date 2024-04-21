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
            return response.status(201).json(result);
        } catch (err: any) {
            return response.status(400).json({
                error: err.message,
            });
        }
    }

    async getDoctors(request: Request, response: Response){
        const userId = getToken(request, response);

        try {
            const doctorService = new DoctorService();
            const result = await doctorService.getDoctors(userId);
            return response.status(200).json(result);
        } catch (err: any) {
            return response.status(400).json({
                error: err.message,
            });
        }
    }

    async update(request: Request, response: Response) {
        const { body } = request;

        const doctorId = request.params.id;

        try {
            const doctorService = new DoctorService();
            const result = await doctorService.update(doctorId, body);
            return response.status(200).json(result);
        } catch (err: any) {
            return response.status(400).json({
                error: err.message,
            });
        }
    }

    async delete(request: Request, response: Response) {
        const doctorId = request.params.id;

        try {
            const doctorService = new DoctorService();
            const result = await doctorService.delete(doctorId);
            return response.status(204).json({"msg": "Doctor deletado"});
        } catch (err: any) {
            return response.status(400).json({
                error: err.message,
            });
        }
    }
}
