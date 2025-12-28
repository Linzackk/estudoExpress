import {param} from "express-validator";

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
