import { body } from "express-validator";

export const validarCriarUsuario = [
    body("name")
        .notEmpty()
        .withMessage("Nome é obrigatório")
        .isString()
        .withMessage("Nome precisa ser string")
        .isLength({ min: 3 })
        .withMessage("Nome precisa ter pelo menos 3 caracteres"),

    body("email")
        .notEmpty()
        .withMessage("Email é obrigatório")
        .isString()
        .withMessage("Email precisa ser string")
        .isEmail()
        .withMessage("Email invalido"),

    body("password")
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

    body("role")
        .optional()
        .isIn(["admin", "user"])
        .withMessage("Role inexistente")
]