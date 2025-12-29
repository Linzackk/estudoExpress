"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = (0, express_1.Router)();
router.get("/", auth_controller_1.testeAuth);
router.post("/login", auth_controller_1.login);
router.get("/admin", auth_middleware_1.autenticarToken, (0, auth_middleware_1.autorizar)(["admin"]), (req, res) => {
    res.json({
        mensagem: "Acesso liberado a area de admin",
        // @ts-ignore
        usuario: req.usuario
    });
});
router.post("/refresh", auth_controller_1.refreshToken);
router.post("/logout", auth_controller_1.logout);
exports.default = router;
//# sourceMappingURL=auth.routes.js.map