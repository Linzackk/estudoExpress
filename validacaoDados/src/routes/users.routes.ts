import { Router } from "express";
import { loginController } from "../controller/login.controller";
import { validarEmail, validarLogin, validarSenha, validarTipoEmailSenha } from "../middleware/login.middleware";

const router = Router()

router.post("/", 
    validarLogin,
    validarTipoEmailSenha,
    validarEmail,
    validarSenha,
    loginController
)

export default router
