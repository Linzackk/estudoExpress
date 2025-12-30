"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.criarUsuario = criarUsuario;
exports.atualizarUsuario = atualizarUsuario;
exports.lerUsuarios = lerUsuarios;
exports.deletarUsuario = deletarUsuario;
const user_service_1 = require("../services/user.service");
function criarUsuario(req, res) {
    try {
        const { name, email } = req.body;
        const newUser = (0, user_service_1.createUser)(name, email);
        return res.status(201).json(newUser);
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
}
;
function atualizarUsuario(req, res) {
    try {
        const id = Number(req.params.id);
        const { name, email } = req.body;
        const user = (0, user_service_1.updateUser)(id, name, email);
        return res.status(200).json(user);
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
}
;
function lerUsuarios(req, res) {
    return (0, user_service_1.listUsers)();
}
function deletarUsuario(req, res) {
    try {
        const id = Number(req.params.id);
        (0, user_service_1.deleteUser)(id);
        return res.status(204).send();
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
}
;
