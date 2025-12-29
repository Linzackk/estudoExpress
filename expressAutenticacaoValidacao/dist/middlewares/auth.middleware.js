"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.autenticarToken = autenticarToken;
exports.autorizar = autorizar;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function autenticarToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ erro: "Token não fornecido" });
    }
    const token = authHeader.split(" ")[1]; // Aqui é onde esta o Bearer Token
    if (!token) {
        return res.status(401).json({ erro: "Token mal formatado" });
    }
    try {
        const payload = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        // @ts-ignore
        req.usuario = payload;
        next();
    }
    catch (erro) {
        return res.status(401).json({ erro: "Token invalido ou expirado" });
    }
}
function autorizar(perfisPermitidos) {
    return (req, res, next) => {
        // @ts-ignore
        const usuario = req.usuario;
        if (!usuario) {
            return res.status(401).json({ erro: "Usuario nao autenticado" });
        }
        if (!perfisPermitidos.includes(usuario.perfil)) {
            return res.status(403).json({ erro: "Usuario nao autorizado" });
        }
        next();
    };
}
//# sourceMappingURL=auth.middleware.js.map