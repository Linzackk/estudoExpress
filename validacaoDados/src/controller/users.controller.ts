import { Request, Response } from "express";

interface User {
    name: string,
    email: string,
    password: string,
    role?: "user" | "admin"
}

export function criarUsuario(
    req: Request,
    res: Response,
) {
    const {name, email, password, role} = req.body;

    const usuario: User = {name, email, password, role};

    res.status(200).json({
        message: "Usuario criado com sucesso",
        "data": {
            user: usuario
        }
    })
}