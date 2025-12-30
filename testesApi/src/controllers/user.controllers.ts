import { Request, Response } from "express";

import { createUser, listUsers, updateUser, deleteUser } from "../services/user.service";
import { resetUsers } from "../users/users";

export function criarUsuario(req: Request, res: Response) {
    try {
        const {name, email } = req.body;
        const newUser = createUser(name, email);
    
        return res.status(201).json(newUser);
    } catch (error: any) {
        return res.status(404).json({ message: error.message })
    }
};

export function atualizarUsuario(req: Request, res: Response) {    
    try {
        const id = Number(req.params.id);
        const {name, email} = req.body;

        const user = updateUser(id, name, email)

        return res.status(200).json(user);
    } catch (error: any) {
        return res.status(404).json({ message: error.message })
    }
};

export function lerUsuarios(req: Request, res: Response) {
    return listUsers();
}

export function deletarUsuario(req: Request, res: Response) {
    try {
        const id = Number(req.params.id);

        deleteUser(id);
        return res.status(204).send();
    } catch (error: any) {
        return res.status(404).json({ message: error.message })
    }
};
