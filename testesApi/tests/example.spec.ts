import request from "supertest";
import app from "../src/app";

describe("Checando Status", () => {
    it("Deve retornar o Status 200 e { status: 'ok' }", async () => {
        const response = await request(app).get("/status");

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ status: "ok" });
    });
});
