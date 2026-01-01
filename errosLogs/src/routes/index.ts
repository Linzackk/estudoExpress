import { Router } from "express";

const router = Router();

router.get("/test", (req, res) => {
    throw new Error("Erro qualquer");
//    res.status(200).json({message: "Rota Funcionando "});
})

export default router