import { DoctorModel } from "../models/doctor.model";
import { DoctorRepository } from "../repositories/doctor.repository";

export class DoctorService{
    async create(data: DoctorModel){
        if (!data.crm && !data.name && !data.specialties) {
            throw new Error("Campos invalidos");
        }

        const doctorRepository = new DoctorRepository();

        const result = doctorRepository.create(data)

        return result;
    }
}