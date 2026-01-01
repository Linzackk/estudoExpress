import express from "express";
import defaultRouter from "./routes/index";

const app = express();

app.use(express.json());

app.use("/", defaultRouter);

export default app;