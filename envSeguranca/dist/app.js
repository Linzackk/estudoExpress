"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
require("dotenv/config");
const app = (0, express_1.default)();
app.use(express_1.default.json()); // Middleware padrão
app.use(// CORS
(0, cors_1.default)({
    origin: process.env.CORS_ORIGIN,
}));
app.use((0, helmet_1.default)()); // Header de Segurança
exports.default = app;
