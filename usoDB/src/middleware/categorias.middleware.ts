import {param, body} from "express-validator";

export const validarLerCategoriaId = [
    param("id")
        .notEmpty()
        .withMessage("Campo obrigatorio")
        .isInt({min : 1})
        .withMessage("Campo precisa ser int minimo que 1"),
    
]

export const validarLerCategoriaNome = [
    param("nome")
        .notEmpty()
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

export const validarAtualizarCategoria = [
    param("id")
        .notEmpty()
        .withMessage("Campo obrigatorio")
        .isInt({min: 1})
        .withMessage("Campo precisa ser int minimo 1"),

    body("nome")
        .optional()
        .isString()
        .withMessage("Campo precisa ser uma string"),
]
