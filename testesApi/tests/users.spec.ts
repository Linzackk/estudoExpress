import request from "supertest";
import app from "../src/app";
import { users } from "../src/users/users";

describe("CRUD válidos de Usuários", () => {

    beforeEach(() => { // Executa uma ação antes de cada caso
        users.length = 0; // 'Limpa' o banco
    })

    it("Deve criar um usuário", async () => {
        const response = await request(app)
            .post("/users")
            .send({
                name: "Isaac",
                email: "teste@teste.com",
            });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("id");
        expect(response.body.name).toBe("Isaac");
        expect(users.length).toBe(1);
    });

    it("Deve listar os usuários", async () => {
        users.push({
            id: 1,
            name: "Isaac",
            email: "teste@teste.com",
        });

        const response = await request(app).get("/users");

        expect(response.status).toBe(200);
        expect(response.body.length).toBe(1);
        expect(response.body[0].name).toBe("Isaac");
    });

    it("Deve atualizar um usuário", async () => {
        users.push({
            id: 1,
            name: "Isaac",
            email: "teste@teste.com",
        });

        const response = await request(app)
            .put("/users/1")
            .send({
                email: "novo@email.com",
            });
        
        expect(response.status).toBe(200);
        expect(response.body.email).toBe("novo@email.com");
    });

    it("Deve deletar um usuário", async () => {
        users.push({
            id: 1,
            name: "Isaac",
            email: "teste@teste.com",
        });

        const response = await request(app).delete("/users/1");

        expect(response.status).toBe(204);
        expect(users.length).toBe(0);
    });
});

describe("CRUD inválido de Usuarios", () => {
    beforeEach(() => {
        users.length = 0;
    })

    it("Deve retornar status 400 se faltar alguma informacao", async () => {
        const response = await request(app)
            .post("/users")
            .send({
                name: "João",
            });

        expect(response.status).toBe(400);
        expect(response.body.message).toBe("email e name são obrigatórios");
    });

    it("Deve retornar status 400 se o ID nao for inteiro", async () => {
        const response = await request(app)
            .put("/users/aaa");

        expect(response.status).toBe(400);
        expect(response.body.message).toBe("id precisa ser inteiro");
    });

    it("Deve retornar status 404 se o usuario nao existir", async () => {
        const response = await request(app)
            .put("/users/1")
            .send({
                "name": "Jonathan",
                "email": "JohnJohn@athan.com",
            });

        expect(response.status).toBe(404);
    });

    it("Deve retornar status 400 se o ID nao for inteiro", async () => {
        const response = await request(app)
            .delete("/users/aaa");

        expect(response.status).toBe(400);
        expect(response.body.message).toBe("id precisa ser inteiro");
    });

    it("Deve retornar status 404 se o usuario nao existir", async () => {
        const response = await request(app)
            .delete("/users/1");

        expect(response.status).toBe(404);
    });

});