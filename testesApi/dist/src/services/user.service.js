"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listUsers = listUsers;
exports.createUser = createUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
const users_1 = require("../users/users");
function listUsers() {
    return users_1.users;
}
function createUser(name, email) {
    if (!email || !name) {
        throw new Error("Dados Inválidos");
    }
    const user = {
        id: users_1.nextId,
        name,
        email
    };
    (0, users_1.atualizarNextId)();
    users_1.users.push(user);
    return user;
}
function updateUser(id, name, email) {
    const user = users_1.users.find(u => u.id === id);
    if (!user) {
        throw new Error("Usuário não encontrado");
    }
    user.name = name ?? user.name;
    user.email = email ?? user.email;
    return user;
}
function deleteUser(id) {
    const index = users_1.users.findIndex(u => u.id === id);
    if (index === -1) {
        throw new Error("Usuário não encontrado");
    }
    users_1.users.splice(index, 1);
}
