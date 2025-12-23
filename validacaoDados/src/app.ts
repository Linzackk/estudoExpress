import express from "express";
import userRoutes from "./routes/users.routes";
import loginRoutes from "./routes/login.routes";

const app = express()

app.use(express.json())

app.use("/users", userRoutes)

app.use("/login", loginRoutes)

export default app
