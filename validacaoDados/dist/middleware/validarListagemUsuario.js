"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarListagemUsuario = void 0;
const express_validator_1 = require("express-validator");
exports.validarListagemUsuario = [
    (0, express_validator_1.query)("page")
        .optional()
        .isInt({})
        .withMessage("Numero da Página precisa ser Inteiro")
        .isInt({ min: 1 })
        .withMessage("Numero da Pagina precisa ser maior que 0"),
    (0, express_validator_1.query)("limit")
        .optional()
        .isInt()
        .withMessage("Numero de Usuários precisa ser Inteiro")
        .isInt({ min: 1, max: 50 })
        .withMessage("Numero precisa estar entre 1 e 50"),
    (0, express_validator_1.query)("role")
        .optional()
        .isString()
        .withMessage("Role precisa ser string")
        .isIn(["user", "admin"])
        .withMessage("Role precisa ser 'user' ou 'admin'")
];
