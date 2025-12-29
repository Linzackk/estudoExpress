import { Request, Response } from "express";

export const login = (req: Request, res: Response) => {
    const {email, password} = req.body;

    // Apenas simulação
    if (email !== "admin@email.com" || password !== "123456") {
        return res.status(401).json({ message: "Credenciais invalidas"});
    }

    return res.json({ message: "Login realizado com Sucesso"});
}