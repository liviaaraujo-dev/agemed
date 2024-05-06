import { getToken } from "../core/token";
import { DoctorService } from "../services/doctor.service";
import { Request, Response } from "express"
import { SchedulingService } from "../services/scheduling.service";

export class SchedulingController{
    async create(request: Request, response: Response) {
        const userId = getToken(request, response);

        const { body } = request;

        try {
            const schedulingService = new SchedulingService();
            const result = await schedulingService.create(body, userId);
            return response.status(201).json(result);
        } catch (err: any) {
            return response.status(400).json({
                error: err.message,
            });
        }
    }

    async getScheduling(request: Request, response: Response){
        const userId = getToken(request, response);

        try {
            const schedulingService = new SchedulingService();
            const result = await schedulingService.getScheduling(userId);
            return response.status(200).json(result);
        } catch (err: any) {
            return response.status(400).json({
                error: err.message,
            });
        }
    }

    async update(request: Request, response: Response) {
        const { body } = request;

        const schedulingId = request.params.id;

        try {
            const schedulingService = new SchedulingService();
            const result = await schedulingService.update(schedulingId, body);
            return response.status(200).json(result);
        } catch (err: any) {
            return response.status(400).json({
                error: err.message,
            });
        }
    }

    async delete(request: Request, response: Response) {
        const schedulingId = request.params.id;

        try {
            const schedulingService = new SchedulingService();
            const result = await schedulingService.delete(schedulingId);
            return response.status(204).json({"msg": "Doctor deletado"});
        } catch (err: any) {
            return response.status(400).json({
                error: err.message,
            });
        }
    }
}
