import { validationResult } from "express-validator";
export function validarResultado(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const errosFormatados = errors.array().map(erro => {
            const fieldError = erro;
            return {
                field: fieldError.path,
                message: fieldError.msg
            };
        });
        return res.status(400).json({
            errors: errosFormatados
        });
    }
    next();
}
//# sourceMappingURL=validarResultado.js.map