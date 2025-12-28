import { Router } from "express";

import { validarResultado } from "../middleware/validarResultado.js";
import { validarLerCategoriaId, validarLerCategoriaNome, validarCriarCategoria } from "../middleware/categorias.middleware.js";

import { criarCategoria, lerCategoriaPorId, lerCategoriaPorNome } from "../controller/categorias.controller.js";


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

router.post( // Colocar um categoria novo
    "/",
    validarCriarCategoria,
    validarResultado,
    criarCategoria
)

// router.put(
//     "/" // Atualiza um categoria
// )

// router.delete(
//     "/" // Deleta um categoria
// )
