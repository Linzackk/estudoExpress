import express from "express";

const app = express();

app.use(express.json());

app.get("/status", (req, res) => {
    return res.status(200).json({ status: "ok" });
});

export default app;