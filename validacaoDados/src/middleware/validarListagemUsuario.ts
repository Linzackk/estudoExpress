import { query } from "express-validator";

export const validarListagemUsuario = [
    query("page")
        .optional()
        .isInt({})
        .withMessage("Numero da Página precisa ser Inteiro")
        .isInt({min: 1})
        .withMessage("Numero da Pagina precisa ser maior que 0"),
    
    query("limit")
        .optional()
        .isInt()
        .withMessage("Numero de Usuários precisa ser Inteiro")
        .isInt({ min: 1, max: 50})
        .withMessage("Numero precisa estar entre 1 e 50"),

    query("role")
        .optional()
        .isString()
        .withMessage("Role precisa ser string")
        .isIn(["user", "admin"])
        .withMessage("Role precisa ser 'user' ou 'admin'")
]