import { Router } from "express";

import { validarResultado } from "../middleware/validarResultado.js";
import { validarLerCategoriaId, validarLerCategoriaNome } from "../middleware/categorias.middleware.js";

import { lerCategoriaPorId, lerCategoriaPorNome } from "../controller/categorias.controller.js";

const router = Router();

export default router;

router.get(
    "/id/:id",
    validarLerCategoriaId,
    validarResultado,
    lerCategoriaPorId
)

router.get(
    "/nome/:nome",
    validarLerCategoriaNome,
    validarResultado,
    lerCategoriaPorNome
)