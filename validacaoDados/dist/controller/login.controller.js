"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = loginController;
function loginController(req, res) {
    const { email, senha } = req.body;
    return res.json({
        message: "Campos obrigatorios OK",
        email,
        senha
    });
}
