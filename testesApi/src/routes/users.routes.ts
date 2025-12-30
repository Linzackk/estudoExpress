import { Router } from "express";
import { criarUsuario, deletarUsuario, atualizarUsuario, lerUsuarios } from "../controllers/user.controllers";
import { validarAtualizarUsuario, validarCriarUsuario, validarDeletarUsuario } from "../middlewares/user.mddlewares";

const router = Router();

router.post("/", 
    validarCriarUsuario,
    criarUsuario);

router.get("/", lerUsuarios);

router.put("/:id", 
    validarAtualizarUsuario,
    atualizarUsuario);

router.delete("/:id",
    validarDeletarUsuario,
    deletarUsuario);

export default router
