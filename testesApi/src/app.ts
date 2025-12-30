import express from "express";

import usersRoutes from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use("/users", usersRoutes)

app.get("/status", (req, res) => {
    return res.status(200).json({ status: "ok" });
});

export default app;