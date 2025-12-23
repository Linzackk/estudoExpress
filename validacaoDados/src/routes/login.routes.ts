import { Router } from "express";
import { loginController } from "../controller/login.controller";
import { validarLoginValidator } from "../middleware/validarLogin";
import { validarResultado } from "../middleware/validarResultado";

const router = Router()

router.post(
    "/", 
    validarLoginValidator,
    validarResultado,
    loginController
)

export default router