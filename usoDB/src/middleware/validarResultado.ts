import { Request, Response, NextFunction } from "express";
import { FieldValidationError, validationResult } from "express-validator";

export function validarResultado(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const erros = validationResult(req);

    if (erros) {
        const errosFormatados = erros.array().map(erro => {
            const fieldError = erro as FieldValidationError;
            return {
                field: fieldError.path,
                message: fieldError.msg
            }
        });
        return res.status(400).json({
            errors: errosFormatados
        });
    }

    next()
}