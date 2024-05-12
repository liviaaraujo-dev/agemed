import { getToken } from "../core/token";
import { Request, Response } from "express"
import { PatientService } from "../services/patient.service";

export class PatientController{
    async create(request: Request, response: Response) {
        const userId = getToken(request, response);

        const { body } = request;

        try {
            const patientService = new PatientService();
            const result = await patientService.create(body, userId);
            return response.status(201).json(result);
        } catch (err: any) {
            return response.status(400).json({
                error: err.message,
            });
        }
    }

    async getPatients(request: Request, response: Response){
        const userId = getToken(request, response);

        try {
            const patientService = new PatientService();
            const result = await patientService.getPatients(userId);
            return response.status(200).json(result);
        } catch (err: any) {
            return response.status(400).json({
                error: err.message,
            });
        }
    }


    async update(request: Request, response: Response) {
        const { body } = request;

        const patientId = request.params.id;

        try {
            const patientService = new PatientService();
            const result = await patientService.update(patientId, body);
            return response.status(200).json(result);
        } catch (err: any) {
            return response.status(400).json({
                error: err.message,
            });
        }
    }

    async delete(request: Request, response: Response) {
        const patientId = request.params.id;

        try {
            const patientService = new PatientService();
            const result = await patientService.delete(patientId);
            return response.status(204).json({"msg": "Doctor deletado"});
        } catch (err: any) {
            return response.status(400).json({
                error: err.message,
            });
        }
    }

}
