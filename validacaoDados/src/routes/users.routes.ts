import { Router } from "express";
import { validarResultado } from "../middleware/validarResultado";
import { validarCriarUsuario } from "../middleware/validarCriacaoUsuario";
import { criarUsuario } from "../controller/users.controller";

const router = Router()

router.post(
    "/",
    validarCriarUsuario,
    validarResultado,
    criarUsuario
)

export default router
