import prisma from "../core/prisma";
import { UserModel } from "../models/user.model";

export class UserRepository {

    async save(userModel: UserModel) {

        const result = await prisma.user.create({
            data: {
                email: userModel.email,
                password: userModel.password
            }

        })

        return {
            id: result.id,
            email: result.email
        };
    }
}
