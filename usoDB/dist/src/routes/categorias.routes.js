import { Router } from "express";
import { validarResultado } from "../middleware/validarResultado.js";
import { validarLerCategoriaId, validarLerCategoriaNome, validarCriarCategoria, validarAtualizarCategoria, validarDeletarCategoria } from "../middleware/categorias.middleware.js";
import { criarCategoria, lerCategoriaPorId, lerCategoriaPorNome, atualizarCategoria, deletarCategoria } from "../controller/categorias.controller.js";
const router = Router();
export default router;
router.get("/id/:id", validarLerCategoriaId, validarResultado, lerCategoriaPorId);
router.get("/nome/:nome", validarLerCategoriaNome, validarResultado, lerCategoriaPorNome);
router.post("/", validarCriarCategoria, validarResultado, criarCategoria);
router.put("/:id", validarAtualizarCategoria, validarResultado, atualizarCategoria);
router.delete("/:id", validarDeletarCategoria, validarResultado, deletarCategoria);
//# sourceMappingURL=categorias.routes.js.map