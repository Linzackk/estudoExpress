import { Router } from "express";
import { validarLerProduto } from "../middleware/produtos.middleware.js";
import { validarResultado } from "../middleware/validarResultado.js";
import { lerProduto } from "../controller/produtos.controller.js";

const router = Router();

router.get(
    "/:id",
    validarLerProduto,
    validarResultado,
    lerProduto
)

export default router;

