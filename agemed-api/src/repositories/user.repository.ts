import prisma from "../core/prisma";
import { UserModel } from "../models/user.model";

export class UserRepository {

    async save(userModel: UserModel) {

        const result = await prisma.user.create({
            data: {
                email: userModel.email,
                password: userModel.password,
                city: userModel.city,
                name: userModel.name,
                neighborhood: userModel.neighborhood,
                phoneNumber: userModel.phoneNumber,
                postalCode: userModel.postalCode,
                street: userModel.street,
                numberAddress: userModel.numberAddress,
                uf: userModel.uf
            }

        })

        return {
            id: result.id,
            email: result.email
        };
    }
}
