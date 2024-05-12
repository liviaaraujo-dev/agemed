import { sign } from "jsonwebtoken";
import prisma from "../core/prisma";
import { UserModel } from "../models/user.model";
import { compare } from "bcryptjs";

export class SignInService {
    async execute(data: UserModel) {
        const user = await prisma.user.findUnique({ where: { email: data.email } });

        if (!user) {
            throw new Error("Usário inválido");
        }

        const isValuePassword = await compare(data.password, user.password);

        if (!isValuePassword) {
            throw new Error("Credenciais incorretas")
        }

        const token = sign({ id: user.id }, "secret", { expiresIn: "7d" });

        const { id, email } = user;

        return { id, email, token };
    }
}
