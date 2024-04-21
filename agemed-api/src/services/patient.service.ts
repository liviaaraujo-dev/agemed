import { PatientModel } from "../models/patient.model";
import { PatientRepository } from "../repositories/patient.repository";

export class PatientService{
    async create(data: PatientModel, userId: string){
        if (!data.cpf && !data.name && !data.email && !data.phone ){
            throw new Error("Campos inválidos");
        }

        const patientRepository = new PatientRepository();

        const result = patientRepository.create(data, userId)

        return result;
    }

    async getPatients(userId: string){
        const patientRepository = new PatientRepository();

        const result = patientRepository.getPatients(userId)

        return result;
    }

    async update( patientId: string, data: PatientModel){
        const patientRepository = new PatientRepository();

        const result = patientRepository.update(patientId, data);

        return result;
    }

    async delete( patientId: string){
        const patientRepository = new PatientRepository();

        const result = patientRepository.delete(patientId);

        return result;
    }
}
