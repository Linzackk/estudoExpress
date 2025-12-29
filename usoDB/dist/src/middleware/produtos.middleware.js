import { body, param } from "express-validator";
export const validarCriarProduto = [
    body("nome")
        .notEmpty()
        .withMessage("Campo obrigatorio")
        .isString()
        .withMessage("Campo precisa ser string"),
    body("preco")
        .notEmpty()
        .withMessage("Campo obrigatorio")
        .isFloat({ min: 0.01 })
        .withMessage("Campo precisa ser float minimo 0.01"),
    body("categoria")
        .notEmpty()
        .withMessage("Campo obrigatorio")
        .isString()
        .withMessage("Campo precisa ser string"),
];
export const validarLerProdutoPorId = [
    param("id")
        .notEmpty()
        .withMessage("Campo obrigatorio")
        .isInt({ min: 1 })
        .withMessage("Campo precisa ser int minimo 1")
];
export const validarLerProdutosPorCategoria = [
    param("categoria")
        .notEmpty()
        .withMessage("Campo obrigatorio")
        .isString()
        .withMessage("Campo precisa ser string"),
];
export const validarAtualizarProduto = [
    param("id")
        .notEmpty()
        .withMessage("Campo obrigatorio")
        .isInt({ min: 1 })
        .withMessage("Campo precisa ser int minimo 1"),
    body("nome")
        .optional()
        .isString()
        .withMessage("Campo precisa ser string"),
    body("preco")
        .optional()
        .isFloat({ min: 0.01 })
        .withMessage("Campo precisa ser float minimo 0.01"),
    body("idCategoria")
        .optional()
        .isInt({ min: 1 })
        .withMessage("Campo precisa ser int minimo 1")
];
export const validarDeletarProduto = [
    param("id")
        .notEmpty()
        .withMessage("Campo obrigatorio")
        .isInt({ min: 1 })
        .withMessage("Campo precisa ser int minimo 1")
];
//# sourceMappingURL=produtos.middleware.js.map