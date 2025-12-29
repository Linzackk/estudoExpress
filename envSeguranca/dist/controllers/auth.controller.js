"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const login = (req, res) => {
    const { email, password } = req.body;
    // Apenas simulação
    if (email !== "admin@email.com" || password !== "123456") {
        return res.status(401).json({ message: "Credenciais invalidas" });
    }
    return res.json({ message: "Login realizado com Sucesso" });
};
exports.login = login;
