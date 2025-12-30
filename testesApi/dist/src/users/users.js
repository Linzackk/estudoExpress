"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextId = exports.users = void 0;
exports.resetUsers = resetUsers;
exports.atualizarNextId = atualizarNextId;
exports.users = [];
exports.nextId = 1;
function resetUsers() {
    exports.users = [];
    exports.nextId = 1;
}
function atualizarNextId() {
    exports.nextId++;
}
