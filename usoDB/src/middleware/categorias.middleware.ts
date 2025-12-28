import {param, body} from "express-validator";

export const validarLerCategoriaId = [
    param("id")
        .isEmpty()
        .withMessage("Campo obrigatorio")
        .isInt({min : 1})
        .withMessage("Campo precisa ser int maior que 1"),
    
]

export const validarLerCategoriaNome = [
    param("nome")
        .isEmpty()
        .withMessage("Campo obrigatorio")
        .isString()
        .withMessage("Campo precisa ser string")
]

export const validarCriarCategoria = [
    body("nome")
        .isEmpty()
        .withMessage("Campo obrigatorio")
        .isString()
        .withMessage("Campo precisa ser uma string")
]
