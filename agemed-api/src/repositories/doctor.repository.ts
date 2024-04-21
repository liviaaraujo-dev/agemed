import prisma from "../core/prisma";
import { DoctorModel } from "../models/doctor.model";

export class DoctorRepository{
    async create(doctorModel: DoctorModel, userId: string){
        const result = await prisma.doctor.create({
            data: {
                name: doctorModel.name,
                crm: doctorModel.crm,
                specialties: doctorModel.specialties,
                userId: userId,
                phone: doctorModel.phone
            }
        }) 

        return result;
    }

    async getDoctors( userId: string){
        const result = await prisma.doctor.findMany({
            where: {
                userId: userId
            }
        }) 

        return result;
    }

    async update(doctorId: string, doctorModel: DoctorModel) {
        const result = await prisma.doctor.update({
            where: {
                id: doctorId
            },
            data: {
                name: doctorModel.name,
                crm: doctorModel.crm,
                specialties: doctorModel.specialties,
                phone: doctorModel.phone
            }
        });

        return result;
    }

    async delete(doctorId: string) {
        const result = await prisma.doctor.delete({
            where: {
                id: doctorId
            }
        });

        return result;
    }
}

