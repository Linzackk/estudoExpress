import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function autenticarToken(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(401).json({ erro: "Token não fornecido" });
    }

    const token = authHeader.split(" ")[1]; // Aqui é onde esta o Bearer Token

    if (!token) {
        return res.status(401).json({ erro: "Token mal formatado" })
    }

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET as string) as {
            id: number;
            email: string;
            perfil: "admin" | "user";
            iat?: number;
            exp?: number;
        };

        // @ts-ignore
        req.usuario = payload;
        next();
    } catch (erro) {
        return res.status(401).json({ erro: "Token invalido ou expirado" });
    }
}

export function autorizar(perfisPermitidos: ("admin" | "user")[]) {
    return( req: Request, res: Response, next: NextFunction) => {
        // @ts-ignore
        const usuario = req.usuario;

        if (!usuario) {
            return res.status(401).json({ erro: "Usuario nao autenticado" });
        }

        if (!perfisPermitidos.includes(usuario.perfil)) {
            return res.status(403).json({ erro: "Usuario nao autorizado" });
        }

        next();
    };
}