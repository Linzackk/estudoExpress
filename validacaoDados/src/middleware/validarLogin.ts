import { body } from "express-validator";

export const validarLoginValidator = [
    body("email")
        .notEmpty()
        .withMessage("Email é Obrigatório")
        .isString()
        .withMessage("Email deve ser uma string")
        .isEmail()
        .withMessage("Email inválido"),

    body("senha")
        .notEmpty()
        .withMessage("Senha é obrigatória")
        .isString()
        .withMessage("Senha deve ser uma string")
        .isStrongPassword({
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1
        })
        .withMessage("Senha fraca. Use no mínimo 8 caracteres, com letra maiúscula, minúscula, número e símbolo")
];
