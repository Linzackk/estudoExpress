import { Router } from "express";
import { validarLerProduto, validarLerProdutosPorCategoria } from "../middleware/produtos.middleware.js";
import { validarResultado } from "../middleware/validarResultado.js";
import { lerProduto, lerProdutosPorCategoria } from "../controller/produtos.controller.js";

const router = Router();

router.get(
    "/id/:id",
    validarLerProduto,
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
    "/" // Criar uma produto nova
)

router.put(
    "/" // Atualizar uma produto
)

router.delete(
    "/" // Deletar uma produto
)

export default router;

