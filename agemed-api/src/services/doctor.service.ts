import { DoctorModel } from "../models/doctor.model";
import { DoctorRepository } from "../repositories/doctor.repository";

export class DoctorService{
    async create(data: DoctorModel, userId: string){
        if (!data.crm && !data.name && !data.specialties && !data.phone ){
            throw new Error("Campos inválidos");
        }

        const doctorRepository = new DoctorRepository();

        const result = doctorRepository.create(data, userId)

        return result;
    }

    async getDoctors( userId: string){
        const doctorRepository = new DoctorRepository();

        const result = doctorRepository.getDoctors(userId)

        return result;
    }

    async update( doctorId: string, data: DoctorModel){
        const doctorRepository = new DoctorRepository();

        const result = doctorRepository.update(doctorId, data);

        return result;
    }

    async delete( doctorId: string){
        const doctorRepository = new DoctorRepository();

        const result = doctorRepository.delete(doctorId);

        return result;
    }
}
