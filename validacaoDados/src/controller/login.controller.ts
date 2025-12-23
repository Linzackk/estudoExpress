import { Request, Response } from "express";

interface LoginBody {
    email?: unknown;
    senha?: unknown;
}

export function loginController(
    req: Request<{}, {}, LoginBody>,
    res: Response
) {
    const { email, senha } = req.body;

    return res.json({
        message: "Campos obrigatorios OK",
        email,
        senha
    });
}