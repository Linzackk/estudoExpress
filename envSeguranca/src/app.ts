import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import "dotenv/config"

const app = express();

app.use(express.json()); // Middleware padrão
app.use( // CORS
    cors({
        origin: process.env.CORS_ORIGIN,
    })
);
app.use(helmet()); // Header de Segurança

export default app;