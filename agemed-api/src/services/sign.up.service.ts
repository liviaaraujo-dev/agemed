import prisma from "../core/prisma";
import { UserModel } from "../models/user.model";
import { hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { UserRepository } from "../repositories/user.repository";

export class SignUpService {

    async execute(data: UserModel) {
        if (!data.email && !data.password) {
            throw new Error("Campos invalidos");
        }

        const userRepository = new UserRepository()

        const userExists = await prisma.user.findUnique({ where: { email: data.email } });
        if (userExists) {
            throw new Error("Usuário já cadastrado!");
        }

        const has_password = await hash(data.password, 8);

        const user = await userRepository.save({ email: data.email, password: has_password });

        const token = sign({ id: user.id }, "secret", { expiresIn: "1d" });

        return { id: user.id, email: user.email, token };
    }
}
