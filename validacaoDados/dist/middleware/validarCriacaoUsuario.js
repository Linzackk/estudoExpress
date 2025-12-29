"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarCriarUsuario = void 0;
const express_validator_1 = require("express-validator");
exports.validarCriarUsuario = [
    (0, express_validator_1.body)("name")
        .notEmpty()
        .withMessage("Nome é obrigatório")
        .isString()
        .withMessage("Nome precisa ser string")
        .isLength({ min: 3 })
        .withMessage("Nome precisa ter pelo menos 3 caracteres"),
    (0, express_validator_1.body)("email")
        .notEmpty()
        .withMessage("Email é obrigatório")
        .isString()
        .withMessage("Email precisa ser string")
        .isEmail()
        .withMessage("Email invalido"),
    (0, express_validator_1.body)("password")
        .notEmpty()
        .withMessage("Senha é obrigatória")
        .isString()
        .withMessage("Senha precisa ser string")
        .isStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1
    })
        .withMessage("Senha fraca. Use no mínimo 8 caracteres, com letra maiúscula, minúscula, número e símbolo"),
    (0, express_validator_1.body)("role")
        .optional()
        .isIn(["admin", "user"])
        .withMessage("Role inexistente")
];
