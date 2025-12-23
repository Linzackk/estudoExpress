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

    // Validacao de não Null
    if (!email || !senha) {
        return res.status(400).json({
            error: "Email e Senha obrigatorios"
        });
    }

    // Validacao de Tipos
    if (typeof email !== "string" || typeof senha !== "string") {
        return res.status(400).json({
            error: "Email e senha devem ser strings"
        });
    }

    // Validacao do Email
    if (!email.includes("@") || !email.includes(".")) {
        return res.status(400).json({
            error: "Formato de Email Invalido."
        })
    }

    // Validacao da Senha
    if (senha.length < 8) {
        return res.status(400).json({
            error: "A senha deve ter no minimo 8 caracteres"
        });
    }

    return res.json({
        message: "Campos obrigatorios OK"
    });
}