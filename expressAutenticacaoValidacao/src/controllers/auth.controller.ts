import { Request, Response } from "express";
import { usuarios } from "../database/usuarios";

import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";

const refreshTokens: string[] = [];

export function testeAuth(req: Request, res: Response) {
    res.json({ mensagem: "controller funcionando "});
}

export function login(req: Request, res: Response) {
    const {email, senha} = req.body;

    const usuario = usuarios.find(u => u.email === email);

    if (!usuario) {
        return res.status(401).json({ erro: "Usuario nao encontrado. "})
    }

    const senhaValida = bcrypt.compareSync(senha, usuario.senha)

    if (!senhaValida) {
        return res.status(401).json({ erro: "Usuario ou senha invalidos."})
    }

    // Access Token
    const accessToken = jwt.sign(
        {
            id: usuario.id,
            email: usuario.email, 
            perfil: usuario.perfil
        },
        process.env.JWT_SECRET as string,
        {
            expiresIn: "1h"
        }
    );

    // Refresh Token

    const refreshToken = jwt.sign(
        {
            id: usuario.id,
            email: usuario.email,
            perfil: usuario.perfil
        },
        process.env.JWT_REFRESH_SECRET as string,
        { expiresIn: "1d"}
    )

    refreshTokens.push(refreshToken)

    return res.json({
        mensagem: "Login realizado com sucesso",
        accessToken,
        refreshToken
    });
}

export const refreshToken = (req: Request, res: Response) => {
    const {refreshToken} = req.body;

    if (!refreshToken) return res.status(401).json({ erro: "Refresh token nao fornecido"})

    if (!refreshTokens.includes(refreshToken)) {
        return res.status(403).json({ erro: "Refresh Token Invalido"})
    }

    try {
        const payload = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET as string) as {
            id: number;
            email: string;
            perfil: "admin" | "user";
        };
        const accessToken = jwt.sign(
            { 
                id: payload.id, 
                email: payload.email, 
                perfil: payload.perfil
            },
            process.env.JWT_SECRET as string,
            { expiresIn: "1h"}
        );

        res.json({ mensagem: "Token atualizado com sucesso",
            accessToken });
    } catch (erro) {
        return res.status(403).json({ erro: "refresh tokken invalido ou expirado"})
    }
};

export const logout = (req: Request, res: Response) => {
    const {refreshToken} = req.body

    if (!refreshToken) return res.status(401).json({ erro: "Refresh token nao fornecido"})

    if (!refreshTokens.includes(refreshToken)) {
        return res.status(403).json({ erro: "Refresh Token Invalido"})
    }
    const index = refreshTokens.findIndex(token => token === refreshToken)
    refreshTokens.slice(index, 1)

    res.json({ mensagem: "Logout realizado com sucesso"})
}