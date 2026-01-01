import express from "express";
import defaultRouter from "./routes/index";
import userRouter from "./routes/user.routes";
import { errorHandler } from "./middleware/errorHandler";

const app = express();

app.use(express.json());

app.use("/", defaultRouter);

app.use("/user", userRouter);

app.use( errorHandler ); // Deve ser sempre após as Rotas.

export default app;