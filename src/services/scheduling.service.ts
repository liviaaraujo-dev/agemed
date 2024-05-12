import { SchedulingModel } from "../models/scheduling.model";
import { SchedulingRepository } from "../repositories/scheduling.repository";

export class SchedulingService{
    async create(data: SchedulingModel, userId: string){
        if (!data.doctorId && !data.patientId ){
            throw new Error("Campos inválidos");
        }

        const schedulingRepository = new SchedulingRepository();

        const result = schedulingRepository.create(data, userId)

        return result;
    }

    async getScheduling(userId: string){
        const schedulingRepository = new SchedulingRepository();

        const result = schedulingRepository.getScheduling(userId)

        return result;
    }

    async update( schedulingId: string, data: SchedulingModel){
        const schedulingRepository = new SchedulingRepository();

        const result = schedulingRepository.update(schedulingId, data);

        return result;
    }

    async delete( schedulingId: string){
        const schedulingchedulingRepository = new SchedulingRepository();

        const result = schedulingchedulingRepository.delete(schedulingId);

        return result;
    }
}
