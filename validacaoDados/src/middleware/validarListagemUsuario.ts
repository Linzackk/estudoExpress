import { query } from "express-validator";

export const validarListagemUsuario = [
    query("page")
        .optional()
        .isInt({ min: 1})
        .withMessage("Numero da Página precisa ser Inteiro maior que 0"),
    
    query("limit")
        .optional()
        .isInt({ min: 1, max: 50})
        .withMessage("Numero de Usuários precisa ser maior que 0 e menor que 50"),

    query("role")
        .optional()
        .isString()
        .withMessage("Role precisa ser string")
        .isIn(["user", "admin"])
        .withMessage("Role precisa ser 'user' ou 'admin'")
]