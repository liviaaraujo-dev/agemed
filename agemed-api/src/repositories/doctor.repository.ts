import prisma from "../core/prisma";
import { DoctorModel } from "../models/doctor.model";

export class DoctorRepository{
    async create(doctorModel: DoctorModel){
        const result = await prisma.doctor.create({
            data: {
                name: doctorModel.name,
                crm: doctorModel.crm,
                specialties: doctorModel.specialties
            }
        }) 

        return result;
    }
}
