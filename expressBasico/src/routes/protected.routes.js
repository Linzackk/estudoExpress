import express from "express"
import { autenticarToken } from "../middlewares/autenticarToken.js"

const router = express.Router()

export default router

router.get("/", autenticarToken, (req, res ) => {
    res.json({
        mensagem: "Acesso autorizado",
        usuario: req.usuario
    })
})