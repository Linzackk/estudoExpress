import { Request, Response } from "express";
import { usuariosDB } from "../database/usuarios"

export interface User {
    name: string,
    email: string,
    password: string,
    role?: "user" | "admin"
}

export function criarUsuario(
    req: Request,
    res: Response,
) {
    const {name, email, password} = req.body;

    const { role } = req.body || "user";

    const usuario: User = {name, email, password, role};

    res.status(200).json({
        message: "Usuario criado com sucesso",
        "data": {
            user: usuario
        }
    });
}

export function listarUsuarios(
    req: Request,
    res: Response
) {
    const {page, limit, role} = req.query;

    const limitNumber: number = Number(limit);
    
    if (limit) {
        const usuarios: User[] = usuariosDB.slice(0, limitNumber);
        res.status(200).json({
            message: `Listando ${limitNumber} Usuarios`,
            data: {
                usuarios: usuarios
            }
        });
    }

    if (role) {
        const usuariosFiltrados: User[] = usuariosDB.filter(usuario => usuario.role === role);
        res.status(200).json({
            message: `Listando Usuarios ${role}`,
            data: {
                usuarios: usuariosFiltrados
            }
        });
    }

    res.status(200).json({
            message: "Listando todos usuarios",
            data: {
                "usuarios": usuariosDB
            }
        });
}

