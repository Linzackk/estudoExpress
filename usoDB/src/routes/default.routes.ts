import { Router } from "express";

const router = Router();

export default router

router.get("/", (req, res) => {
    res.status(404).json(
        "Rota não encontrada"
    )
})