import prisma from "../core/prisma";
import { PatientModel } from "../models/patient.model";

export class PatientRepository{
    async create(patientModel: PatientModel, userId: string){
        const result = await prisma.patient.create({
            data: {
                name: patientModel.name,
                userId: userId,
                phone: patientModel.phone,
                cpf: patientModel.cpf,
                email: patientModel.email
            }
        }) 

        return result;
    }

    async getPatients( userId: string){
        const result = await prisma.patient.findMany({
            where: {
                userId: userId
            }
        }) 

        return result;
    }

    async update(patientId: string, patientModel: PatientModel) {
        const result = await prisma.patient.update({
            where: {
                id: patientId
            },
            data: {
                name: patientModel.name,
                phone: patientModel.phone,
                email: patientModel.email,
                cpf: patientModel.cpf,
            }
        });

        return result;
    }

    async delete(patientId: string) {
        const result = await prisma.patient.delete({
            where: {
                id: patientId
            }
        });

        return result;
    }


}

