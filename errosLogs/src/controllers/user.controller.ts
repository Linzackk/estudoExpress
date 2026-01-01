import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/AppError";

export function getUser(
    req: Request,
    res: Response,
    next: NextFunction
) {
    // Erro Controlado
    const user = null // simulando o usuario não encontrado

    if (!user) {
        return next(new AppError("Usuário não encontrado", 404));
    }

    return res.status(200).json(user);
}

export function getUserError(
    req: Request,
    res: Response,
    next: NextFunction
) {
    // Erro inesperado
    throw new Error("Falha ao acessar o banco")
}