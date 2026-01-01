import express from "express";
import defaultRouter from "./routes/index";
import { errorHandler } from "./middleware/errorHandler";

const app = express();

app.use(express.json());

app.use("/", defaultRouter);

app.use( errorHandler ); // Deve ser sempre após as Rotas.

export default app;