"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.refreshToken = void 0;
exports.testeAuth = testeAuth;
exports.login = login;
const usuarios_1 = require("../database/usuarios");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const refreshTokens = [];
function testeAuth(req, res) {
    res.json({ mensagem: "controller funcionando " });
}
function login(req, res) {
    const { email, senha } = req.body;
    const usuario = usuarios_1.usuarios.find(u => u.email === email);
    if (!usuario) {
        return res.status(401).json({ erro: "Usuario nao encontrado. " });
    }
    const senhaValida = bcrypt_1.default.compareSync(senha, usuario.senha);
    if (!senhaValida) {
        return res.status(401).json({ erro: "Usuario ou senha invalidos." });
    }
    // Access Token
    const accessToken = jsonwebtoken_1.default.sign({
        id: usuario.id,
        email: usuario.email,
        perfil: usuario.perfil
    }, process.env.JWT_SECRET, {
        expiresIn: "1h"
    });
    // Refresh Token
    const refreshToken = jsonwebtoken_1.default.sign({
        id: usuario.id,
        email: usuario.email,
        perfil: usuario.perfil
    }, process.env.JWT_REFRESH_SECRET, { expiresIn: "1d" });
    refreshTokens.push(refreshToken);
    return res.json({
        mensagem: "Login realizado com sucesso",
        accessToken,
        refreshToken
    });
}
const refreshToken = (req, res) => {
    const { refreshToken } = req.body;
    if (!refreshToken)
        return res.status(401).json({ erro: "Refresh token nao fornecido" });
    if (!refreshTokens.includes(refreshToken)) {
        return res.status(403).json({ erro: "Refresh Token Invalido" });
    }
    try {
        const payload = jsonwebtoken_1.default.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
        const accessToken = jsonwebtoken_1.default.sign({
            id: payload.id,
            email: payload.email,
            perfil: payload.perfil
        }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.json({ mensagem: "Token atualizado com sucesso",
            accessToken });
    }
    catch (erro) {
        return res.status(403).json({ erro: "refresh tokken invalido ou expirado" });
    }
};
exports.refreshToken = refreshToken;
const logout = (req, res) => {
    const { refreshToken } = req.body;
    if (!refreshToken)
        return res.status(401).json({ erro: "Refresh token nao fornecido" });
    if (!refreshTokens.includes(refreshToken)) {
        return res.status(403).json({ erro: "Refresh Token Invalido" });
    }
    const index = refreshTokens.findIndex(token => token === refreshToken);
    refreshTokens.slice(index, 1);
    res.json({ mensagem: "Logout realizado com sucesso" });
};
exports.logout = logout;
//# sourceMappingURL=auth.controller.js.map