"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarCriarUsuario = validarCriarUsuario;
exports.validarDeletarUsuario = validarDeletarUsuario;
exports.validarAtualizarUsuario = validarAtualizarUsuario;
function validarCriarUsuario(req, res, next) {
    const { email, name } = req.body;
    if (!email || !name) {
        res.status(400).json({
            message: "email e name são obrigatórios"
        });
        return;
    }
    next();
}
function validarDeletarUsuario(req, res, next) {
    const id = Number(req.params.id);
    if (!id) {
        res.status(400).json({
            message: "id precisa ser inteiro",
        });
        return;
    }
    next();
}
function validarAtualizarUsuario(req, res, next) {
    const id = Number(req.params.id);
    if (!id) {
        res.status(400).json({
            message: "id precisa ser inteiro",
        });
        return;
    }
    next();
}
