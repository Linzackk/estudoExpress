import { Router, Request } from "express";
import { testeAuth, login, refreshToken, logout } from "../controllers/auth.controller";
import { autenticarToken, autorizar } from "../middlewares/auth.middleware";

const router = Router();

router.get("/", testeAuth)

router.post("/login", login)

router.get("/admin", 
        autenticarToken, 
        autorizar(["admin"]),
        (req, res) => {
            res.json({
                mensagem: "Acesso liberado a area de admin",
                // @ts-ignore
                usuario: req.usuario
            });
        }
    );

router.post("/refresh", refreshToken)

router.post("/logout", logout)

export default router;