"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarios = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
exports.usuarios = [
    {
        id: 1,
        email: "teste@email.com",
        senha: bcrypt_1.default.hashSync("123456", 10),
        perfil: "admin"
    },
    {
        id: 2,
        email: "teste2@email.com",
        senha: bcrypt_1.default.hashSync("123456", 10),
        perfil: "user"
    },
];
//# sourceMappingURL=usuarios.js.map