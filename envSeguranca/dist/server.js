"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const app_1 = __importDefault(require("./app"));
const routes_1 = __importDefault(require("./routes"));
// Validar variaveis
if (!process.env.PORT) {
    throw new Error("PORT não definida no .env");
}
app_1.default.use(routes_1.default);
app_1.default.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
});
