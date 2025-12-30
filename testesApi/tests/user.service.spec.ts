import { createUser, listUsers, updateUser, deleteUser } from "../src/services/user.service";
import { resetUsers } from "../src/users/users";

describe("User Service - testes unitários", () => {
    beforeEach(() => {
        resetUsers();
    });

    describe("CRUD Válido", () => {
        it("deve criar um usuário", () => {
            const user = createUser("Isaac", "isaac@email.com");

            expect(user.id).toBe(1);
            expect(user.name).toBe("Isaac");
        });

        it("deve listar usuários", () => {
            createUser("A", "a@email.com");
            createUser("B", "b@email.com");

            const users = listUsers();

            expect(users.length).toBe(2);
        });

        it("deve atualizar um usuario", () => {
            const user = createUser("Isaac", "x@email.com");

            const updated = updateUser(user.id, "Novo Nome", "novo@email.com");

            expect(updated.name).toBe("Novo Nome");
        });

        it("deve deletar um usuario", () => {
            const user = createUser("Isaac", "x@email.com");

            deleteUser(user.id);

            expect(listUsers().length).toBe(0);
        });
    });

    describe("CRUD inválido", () => {
    it("não deve criar usuário com dados inválidos", () => {
      expect(() => {
        createUser("", "");
      }).toThrow("Dados inválidos");
    });

    it("não deve atualizar usuário inexistente", () => {
      expect(() => {
        updateUser(999, "X", "Y");
      }).toThrow("Usuário não encontrado");
    });

    it("não deve deletar usuário inexistente", () => {
      expect(() => {
        deleteUser(999);
      }).toThrow("Usuário não encontrado");
    });
  });

});