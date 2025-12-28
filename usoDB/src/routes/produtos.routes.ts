import { Router } from "express";
import { validarLerProdutoPorId, validarLerProdutosPorCategoria, validarAtualizarProduto, validarDeletarProduto, validarCriarProduto } from "../middleware/produtos.middleware.js";
import { validarResultado } from "../middleware/validarResultado.js";
import { atualizarProduto, criarProduto, lerProduto, lerProdutosPorCategoria } from "../controller/produtos.controller.js";
import { deletarProduto } from "../controller/produtos.controller.js";

const router = Router();

router.get(
    "/id/:id",
    validarLerProdutoPorId,
    validarResultado,
    lerProduto
)

router.get(
    "/categoria/:categoria",
    validarLerProdutosPorCategoria,
    validarResultado,
    lerProdutosPorCategoria
)

router.post(
    "/",
    validarCriarProduto,
    validarResultado,
    criarProduto
)

router.put(
    "/",
    validarAtualizarProduto,
    validarResultado,
    atualizarProduto
)

router.delete(
    "/",
    validarDeletarProduto,
    validarResultado,
    deletarProduto
)

export default router;

