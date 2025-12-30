import { Router } from "express";
import { criarUsuario, deletarUsuario, atualizarUsuario, lerUsuarios } from "../controllers/user.controllers";

const router = Router();

router.post("/", criarUsuario);

router.get("/", lerUsuarios);

router.put("/:id", atualizarUsuario);

router.delete("/:id", deletarUsuario);

export default router
