import "dotenv/config"

import app from "./app";
import routes from "./routes";

// Validar variaveis
if (!process.env.PORT) {
    throw new Error("PORT não definida no .env");
}

app.use(routes);

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`)
})