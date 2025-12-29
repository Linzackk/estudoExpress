"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.criarUsuario = criarUsuario;
exports.listarUsuarios = listarUsuarios;
const usuarios_1 = require("../database/usuarios");
function criarUsuario(req, res) {
    const { name, email, password } = req.body;
    const { role } = req.body || "user";
    const usuario = { name, email, password, role };
    res.status(200).json({
        message: "Usuario criado com sucesso",
        "data": {
            user: usuario
        }
    });
}
function listarUsuarios(req, res) {
    const { page, limit, role } = req.query;
    const limitNumber = Number(limit);
    if (limit && role) {
        const usuariosFiltrados = usuarios_1.usuariosDB.filter(usuario => usuario.role === role);
        return res.status(200).json({
            message: `Listando ${limitNumber} Usuarios ${role}`,
            data: {
                usuarios: limitarListagemUsuario(usuariosFiltrados, limitNumber)
            }
        });
    }
    if (limit) {
        return res.status(200).json({
            message: `Listando ${limitNumber} Usuarios`,
            data: {
                usuarios: limitarListagemUsuario(usuarios_1.usuariosDB, limitNumber)
            }
        });
    }
    if (role) {
        const usuariosFiltrados = usuarios_1.usuariosDB.filter(usuario => usuario.role === role);
        return res.status(200).json({
            message: `Listando Usuarios ${role}`,
            data: {
                usuarios: usuariosFiltrados
            }
        });
    }
    return res.status(200).json({
        message: "Listando todos usuarios",
        data: {
            "usuarios": usuarios_1.usuariosDB
        }
    });
}
function limitarListagemUsuario(arr, limitNumber) {
    return arr.slice(0, limitNumber);
}
