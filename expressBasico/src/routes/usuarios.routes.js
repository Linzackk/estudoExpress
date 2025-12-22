// Exemplo que pode 
// router.put("/:id", atualizarUsuario)
import express from "express"
import { criarUsuario, verUsuarios, atualizarUsuario, deletarUsuario } from "../controllers/usuarios.controller.js"
import { validarCriacaoUsuario, validarAtualizacaoUsuario } from "../middlewares/validarUsuario.js"

const router = express.Router()

export default router

router.get("/", verUsuarios)

router.post("/", validarCriacaoUsuario, criarUsuario)

router.put("/:id", validarAtualizacaoUsuario, atualizarUsuario)

router.delete("/:id", deletarUsuario)