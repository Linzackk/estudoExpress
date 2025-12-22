import express from "express"
import "dotenv/config"

const app = express()

export default app

import usuariosRoutes from "./routes/usuarios.routes.js"
import authRoutes from "./routes/auth.routes.js"
import protectedRoutes from "./routes/protected.routes.js"

app.use(express.json())

app.use("/usuarios", usuariosRoutes)

app.use("/login", authRoutes)

app.use("/api", protectedRoutes)

app.use((req, res) => {
    res.status(404).json({
        erro: "Rota nao encontrada"
    })
})
