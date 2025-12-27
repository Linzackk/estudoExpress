import express from "express";

import defaultRouter from "./routes/default.routes.js";
import produtosRouter from "./routes/produtos.routes.js";
import categoriasRouter from "./routes/categorias.routes.js";

const app = express();

export default app

app.use(express.json());

// Rotas
app.use("/produtos", produtosRouter);

app.use("/categorias", categoriasRouter);

// Padrão
app.use(defaultRouter);
