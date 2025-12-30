"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = require("../src/services/user.service");
const users_1 = require("../src/users/users");
describe("User Service - testes unitários", () => {
    beforeEach(() => {
        (0, users_1.resetUsers)();
    });
    describe("CRUD Válido", () => {
        it("deve criar um usuário", () => {
            const user = (0, user_service_1.createUser)("Isaac", "isaac@email.com");
            expect(user.id).toBe(1);
            expect(user.name).toBe("Isaac");
        });
        it("deve listar usuários", () => {
            (0, user_service_1.createUser)("A", "a@email.com");
            (0, user_service_1.createUser)("B", "b@email.com");
            const users = (0, user_service_1.listUsers)();
            expect(users.length).toBe(2);
        });
        it("deve atualizar um usuario", () => {
            const user = (0, user_service_1.createUser)("Isaac", "x@email.com");
            const updated = (0, user_service_1.updateUser)(user.id, "Novo Nome", "novo@email.com");
            expect(updated.name).toBe("Novo Nome");
        });
        it("deve deletar um usuario", () => {
            const user = (0, user_service_1.createUser)("Isaac", "x@email.com");
            (0, user_service_1.deleteUser)(user.id);
            expect((0, user_service_1.listUsers)().length).toBe(0);
        });
    });
    describe("CRUD inválido", () => {
        it("não deve criar usuário com dados inválidos", () => {
            expect(() => {
                (0, user_service_1.createUser)("", "");
            }).toThrow("Dados inválidos");
        });
        it("não deve atualizar usuário inexistente", () => {
            expect(() => {
                (0, user_service_1.updateUser)(999, "X", "Y");
            }).toThrow("Usuário não encontrado");
        });
        it("não deve deletar usuário inexistente", () => {
            expect(() => {
                (0, user_service_1.deleteUser)(999);
            }).toThrow("Usuário não encontrado");
        });
    });
});
