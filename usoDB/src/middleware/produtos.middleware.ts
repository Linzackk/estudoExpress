import { body, param } from "express-validator";

export const validarAtualizarProduto = [

];

export const validarDeletarProduto = [

];

export const validarCriarProduto = [
    body("name")
        .isEmpty()
        .withMessage("name obrigatorio")
        .isString()
        .withMessage("name precisa ser string"),

    body("price")
        .isEmpty()
        .withMessage("price obrigatorio")
        .isFloat()
        .withMessage("price precisa float"),

    body("category")
        .isEmpty()
        .withMessage("category obrigatorio")
        .isString()
        .withMessage("category precisa ser string"),
]

export const validarLerProduto = [
    param("id")
        .isEmpty()
        .withMessage("id obrigatorio")
        .isInt()
        .withMessage("id precisa ser int")
        .isInt({min: 1})
        .withMessage("id precisa ser maior que 1")
]