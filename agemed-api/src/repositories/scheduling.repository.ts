import prisma from "../core/prisma";
import { SchedulingModel } from "../models/scheduling.model";

export class SchedulingRepository{
    async create(schedulingModel: SchedulingModel, userId: string){
        const result = await prisma.scheduling.create({
            data: {
                userId: userId,
                doctorId: schedulingModel.doctorId,
                patientId: schedulingModel.patientId,
                date: schedulingModel.date
            }
        }) 

        return result;
    }


    async getScheduling(userId: string){
        const result = await prisma.scheduling.findMany({
            where: {
                userId: userId
            }
        }) 

        return result;
    }

    async update(schedulingId: string, schedulingModel: SchedulingModel) {
        const result = await prisma.scheduling.update({
            where: {
                id: schedulingId
            },
            data: {
                userId: schedulingModel.userId,
                doctorId: schedulingModel.doctorId,
                patientId: schedulingModel.patientId,
                date: schedulingModel.date
            }
        });

        return result;
    }

    async delete(schedulingId: string) {
        const result = await prisma.scheduling.delete({
            where: {
                id: schedulingId
            }
        });

        return result;
    }
}
