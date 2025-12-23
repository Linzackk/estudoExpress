import { Router } from "express";
import { validarResultado } from "../middleware/validarResultado";
import { validarCriarUsuario } from "../middleware/validarCriacaoUsuario";
import { validarListagemUsuario } from "../middleware/validarListagemUsuario";
import { criarUsuario, listarUsuarios } from "../controller/users.controller";

const router = Router()

router.post(
    "/",
    validarCriarUsuario,
    validarResultado,
    criarUsuario
)

router.get(
    "/",
    validarListagemUsuario,
    validarResultado,
    listarUsuarios
)

export default router
