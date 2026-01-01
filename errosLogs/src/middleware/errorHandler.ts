import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/AppError";

export function errorHandler(
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) {
    const isAppError = err instanceof AppError; // Verifica se é um erro criado por mim
    
    const statusCode = isAppError ? err.statusCode : 500; // Se não for é erro interno.

    const message = isAppError
        ? err.message
        : "Erro interno do servidor";

    console.error({
        name: err.name,
        message: err.message,
        stack: err.stack,
    });

    return res.status(statusCode).json({
        error: message,
    });
}