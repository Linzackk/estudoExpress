import { Request, Response, NextFunction } from "express";

export function validarLogin(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(400).json({
            message: "Email e senha sao obrigatorios",
            field: "email, senha"
        });
    }

    next()
}

export function validarTipoEmailSenha(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const { email, senha } = req.body;

    if (typeof email !== "string" || typeof senha !== "string") {
        return res.status(400).json({
            message: "Email e senha devem ser strings",
            field: "email, senha"
        });
    }
    next()
}

export function validarEmail(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const { email } = req.body

    if (!email.includes("@") || !email.includes(".")) {
        return res.status(400).json({
            message: "Formato de Email Invalido.",
            field: "email"
        });
    }
    next()
}

export function validarSenha(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const { senha } = req.body

    if (senha.length < 8) {
        return res.status(400).json({
            message: "A senha deve ter no minimo 8 caracteres",
            field: "senha"
        });
    }
    next()
}

