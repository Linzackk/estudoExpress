import { body, param } from "express-validator";

export const validarAtualizarProduto = [

];

export const validarDeletarProduto = [

];

export const validarCriarProduto = [
    body("name")
        .isEmpty()
        .withMessage("Campo obrigatorio")
        .isString()
        .withMessage("Campo precisa ser string"),

    body("price")
        .isEmpty()
        .withMessage("Campo obrigatorio")
        .isFloat()
        .withMessage("Campo precisa float"),

    body("category")
        .isEmpty()
        .withMessage("Campo obrigatorio")
        .isString()
        .withMessage("Campo precisa ser string"),
]

export const validarLerProduto = [
    param("id")
        .isEmpty()
        .withMessage("Campo obrigatorio")
        .isInt()
        .withMessage("Campo precisa ser int")
        .isInt({min: 1})
        .withMessage("Campo precisa ser maior que 1")
]

export const validarLerProdutosPorCategoria = [
    param("categoria")
        .isEmpty()
        .withMessage("Campo obrigatorio")
        .isString()
        .withMessage("Campo precisa ser string"),
]